"use client";

import { useState, useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  nextSectionId?: string;
}

// src sin extensión, el componente añade .mp4 y .webm como fuentes
export function HeroVideo({ src, nextSectionId }: HeroVideoProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fading, setFading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);
    if (desktop) setShowOverlay(false);
  }, []);

  // Bloquear scroll mientras overlay mobile está activo
  useEffect(() => {
    if (showOverlay && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay, isDesktop]);

  const dismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setFading(true);
    setTimeout(() => {
      setShowOverlay(false);
      setFading(false);
    }, 500);
  };

  // Intentar play manual en mobile (iOS requiere llamada explícita)
  useEffect(() => {
    if (isDesktop || !showOverlay) return;
    const video = mobileVideoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Si no puede reproducir, descartar overlay inmediatamente
        dismiss();
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    // Fallback: si en 8s no terminó (error silencioso), descartar
    const timeout = setTimeout(dismiss, 8000);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, showOverlay]);

  const handleDesktopEnded = () => {
    if (nextSectionId) {
      document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Extensión base sin extension para proveer mp4 + webm
  const srcBase = src.replace(/\.(webm|mp4|mov)$/i, "");

  return (
    <>
      {/* Mobile: overlay fullscreen — md:hidden oculta en desktop via CSS sin esperar JS */}
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[100] bg-black md:hidden transition-opacity duration-500 ${
            fading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={mobileVideoRef}
            muted
            playsInline
            onEnded={dismiss}
            onError={dismiss}
            className="w-full h-full object-cover"
          >
            {/* MP4 primero — requerido por iOS Safari/Chrome */}
            <source src={`${srcBase}.mp4`} type="video/mp4" />
            <source src={`${srcBase}.webm`} type="video/webm" />
          </video>
        </div>
      )}

      {/* Desktop: video inline */}
      {isDesktop && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleDesktopEnded}
          className="w-full h-full absolute inset-0 object-cover"
        >
          <source src={`${srcBase}.mp4`} type="video/mp4" />
          <source src={`${srcBase}.webm`} type="video/webm" />
        </video>
      )}
    </>
  );
}
