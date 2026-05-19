"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  fallbackFormats?: ("mp4" | "webm")[];
  onEnded?: () => void;
  autoPlay?: boolean;
  isPaused?: boolean;
}

// src sin extensión, el componente añade las extensiones indicadas en fallbackFormats
export function HeroVideo({ src, fallbackFormats = ["mp4", "webm"], onEnded, autoPlay = true, isPaused = false }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Iniciar siempre silenciado (Opción 2 literal)
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);

  // Efecto para pausar el video manualmente cuando se solicite
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPaused) {
      video.pause();
      setShowUnmuteButton(false); // Ocultar el botón si está forzado a pausar
    }
  }, [isPaused]);

  // Autoplay fallback y seguridad (especialmente útil en móviles con ahorro de batería)
  useEffect(() => {
    if (!autoPlay) return;

    const video = videoRef.current;
    if (!video) return;

    let isPlaying = false;

    const tryPlay = async () => {
      try {
        // Opción 2: Reproducir SIEMPRE en silencio primero para asegurar el autoplay
        video.muted = true;
        setIsMuted(true);
        await video.play();
        isPlaying = true;
        setShowUnmuteButton(true); // Mostrar siempre el botón de "Tocar para escuchar"
      } catch (err) {
        console.log("Autoplay sin sonido falló:", err);
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

  const handleUnmuteAndRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = 0; // Reiniciar al segundo 0
    video.muted = false;   // Quitar mute en el DOM
    setIsMuted(false);     // Actualizar estado de React
    video.play();          // Asegurar reproducción
    setShowUnmuteButton(false); // Ocultar el botón
  };

  const srcBase = src.replace(/\.(webm|mp4|mov)$/i, "");

  return (
    <>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={isMuted}
        playsInline
        onEnded={onEnded}
        onError={onEnded}
        className="w-full h-full absolute inset-0 object-cover"
      >
        {fallbackFormats.map((format) => (
          <source key={format} src={`${srcBase}.${format}`} type={`video/${format}`} />
        ))}
      </video>

      {/* Botón flotante para activar sonido si el autoplay fue bloqueado */}
      {showUnmuteButton && (
        <button
          onClick={handleUnmuteAndRestart}
          className="absolute inset-0 m-auto w-[240px] h-14 bg-brand-lemon/90 hover:bg-brand-lemon text-on-primary rounded-full backdrop-blur-md font-bold uppercase tracking-widest text-xs transition-all animate-pulse flex items-center justify-center gap-3 z-[50] shadow-[0_0_30px_rgba(213,252,107,0.4)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          Tocar para escuchar
        </button>
      )}
    </>
  );
}
