"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

/**
 * Lightweight YouTube facade that loads a thumbnail initially,
 * then swaps to the full iframe when the user clicks play.
 * Saves ~500KB on initial page load.
 */
export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full absolute inset-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      className="w-full h-full absolute inset-0 cursor-pointer group/yt"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-black/30 group-hover/yt:bg-black/10 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-brand-lemon/90 flex items-center justify-center group-hover/yt:scale-110 transition-transform shadow-[0_0_30px_rgba(213,252,107,0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-on-primary ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
