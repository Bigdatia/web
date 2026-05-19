"use client";

import { useState, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  nextSectionId?: string;
}

export function HeroVideo({ src, nextSectionId }: HeroVideoProps) {
  // Overlay visible por defecto — md:hidden en CSS lo oculta en desktop antes de que corra JS
  const [showOverlay, setShowOverlay] = useState(true);
  const [fading, setFading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);
    if (desktop) setShowOverlay(false);
  }, []);

  // Bloquear scroll mientras el overlay mobile está activo
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
    setFading(true);
    setTimeout(() => {
      setShowOverlay(false);
      setFading(false);
    }, 500);
  };

  const handleDesktopEnded = () => {
    if (nextSectionId) {
      document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile: overlay fullscreen
          md:hidden oculta via CSS en desktop desde el primer render, sin flash */}
      {showOverlay && (
        <div
          className={`fixed inset-0 z-[100] bg-black md:hidden transition-opacity duration-500 ${
            fading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={dismiss}
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/webm" />
          </video>
        </div>
      )}

      {/* Desktop: video inline en la columna hero */}
      {isDesktop && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleDesktopEnded}
          className="w-full h-full absolute inset-0 object-cover"
        >
          <source src={src} type="video/webm" />
        </video>
      )}
    </>
  );
}
