"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  fallbackFormats?: ("mp4" | "webm")[];
  onEnded?: () => void;
  autoPlay?: boolean;
}

// src sin extensión, el componente añade las extensiones indicadas en fallbackFormats
export function HeroVideo({ src, fallbackFormats = ["mp4", "webm"], onEnded, autoPlay = true }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay fallback y seguridad (especialmente útil en móviles con ahorro de batería)
  useEffect(() => {
    if (!autoPlay) return;

    const video = videoRef.current;
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
    // forzamos el final para no dejar al usuario atascado viendo un recuadro vacío.
    const checkPlaybackTimeout = setTimeout(() => {
      // Solo forzamos si el video no pudo arrancar
      if (video.currentTime === 0 || !isPlaying) {
        if (onEnded) onEnded();
      }
    }, 4000);

    return () => clearTimeout(checkPlaybackTimeout);
  }, [onEnded, autoPlay]);

  const srcBase = src.replace(/\.(webm|mp4|mov)$/i, "");

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      muted
      playsInline
      onEnded={onEnded}
      onError={onEnded}
      className="w-full h-full absolute inset-0 object-cover"
    >
      {fallbackFormats.map((format) => (
        <source key={format} src={`${srcBase}.${format}`} type={`video/${format}`} />
      ))}
    </video>
  );
}
