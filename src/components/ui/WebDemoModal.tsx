"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";

interface WebDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoUrl: string;
  demoLabel: string;
  accentColor: string;
}

export function WebDemoModal({ isOpen, onClose, demoUrl, demoLabel, accentColor }: WebDemoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/15">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-space-grotesk text-sm font-bold uppercase tracking-widest text-brand-cream">
            {demoLabel}
          </span>
          <span className="hidden sm:inline text-brand-cream/30 font-space-grotesk text-[10px] uppercase tracking-widest ml-2">
            Demo Interactivo · BigdatIA
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-brand-cream/60 hover:text-brand-lemon transition-colors group"
        >
          <span className="hidden sm:inline font-space-grotesk text-xs uppercase tracking-widest">
            Cerrar
          </span>
          <Icon
            name="close"
            className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Iframe Container */}
      <div className="relative z-10 flex-1 m-2 sm:m-4 rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl">
        <iframe
          ref={iframeRef}
          src={demoUrl}
          className="w-full h-full bg-white"
          title={demoLabel}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}
