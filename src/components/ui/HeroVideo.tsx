"use client";

import { useState, useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  nextSectionId?: string;
  variant?: "mobile" | "desktop" | "both";
}

// src sin extensión, el componente añade .mp4 y .webm como fuentes
export function HeroVideo({ src, nextSectionId, variant = "both" }: HeroVideoProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [fading, setFading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);

  useEffect(() => {
    // Al inicializar en el cliente comprobamos si ya se vio en esta sesión
    const hasSeenVideo = sessionStorage.getItem("hasSeenHeroVideo");
    
    // Mostramos el overlay si no lo ha visto
    if (!hasSeenVideo) {
      setShowOverlay(true);
    }
    setIsInitialized(true);
  }, []);

  // Bloquear scroll mientras overlay mobile está activo
  useEffect(() => {
    if (showOverlay && isInitialized && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay, isInitialized]);

  const dismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setFading(true);
    // Guardamos en sesión para que no se vuelva a mostrar si navega y vuelve,
    // a menos que recargue la página en una nueva sesión o actualice fuerte (dependiendo del navegador).
    sessionStorage.setItem("hasSeenHeroVideo", "true");
    setTimeout(() => {
      setShowOverlay(false);
      setFading(false);
      document.body.style.overflow = "";
    }, 500);
  };

  // Autoplay fallback y seguridad para el video mobile
  useEffect(() => {
    if (!showOverlay || !isInitialized || variant === "desktop") return;
    
    const video = mobileVideoRef.current;
    if (!video) return;

    let isPlaying = false;

    const tryPlay = async () => {
      try {
        await video.play();
        isPlaying = true;
      } catch (err) {
        console.log("Autoplay prevented or failed:", err);
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    // Seguridad: si a los 4 segundos el video sigue en 0 y no está reproduciendo, 
    // descartar para no trabar la página (ej. en conexiones muy lentas o bloqueo estricto)
    const checkPlaybackTimeout = setTimeout(() => {
      if (video.currentTime === 0 || !isPlaying) {
        dismiss();
      }
    }, 4000);

    return () => clearTimeout(checkPlaybackTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOverlay, isInitialized, variant]);

  const handleDesktopEnded = () => {
    if (nextSectionId) {
      document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Extensión base sin extension para proveer mp4 + webm
  const srcBase = src.replace(/\.(webm|mp4|mov)$/i, "");

  return (
    <>
      {/* Mobile: overlay fullscreen */}
      {(variant === "mobile" || variant === "both") && isInitialized && showOverlay && (
        <div
          className={`fixed inset-0 z-[100] bg-black md:hidden transition-opacity duration-500 ${
            fading ? "opacity-0 pointer-events-none" : "opacity-100"
          } flex items-center justify-center`}
        >
          {/* Botón de omitir */}
          <button 
            onClick={dismiss} 
            className="absolute top-6 right-6 z-[101] text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors"
          >
            Omitir
          </button>
          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            playsInline
            onEnded={dismiss}
            onError={dismiss}
            className="w-full h-full object-cover"
          >
            <source src={`${srcBase}.mp4`} type="video/mp4" />
            <source src={`${srcBase}.webm`} type="video/webm" />
          </video>
        </div>
      )}

      {/* Desktop: video inline */}
      {(variant === "desktop" || variant === "both") && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleDesktopEnded}
          className={`${variant === 'both' ? 'hidden md:block ' : ''}w-full h-full absolute inset-0 object-cover`}
        >
          <source src={`${srcBase}.mp4`} type="video/mp4" />
          <source src={`${srcBase}.webm`} type="video/webm" />
        </video>
      )}
    </>
  );
}
