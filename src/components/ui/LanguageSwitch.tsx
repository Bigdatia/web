"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 bg-surface-container-highest/60 rounded-full p-0.5 border border-outline-variant/15">
      <button
        onClick={() => setLocale("es")}
        className={`px-3 py-1.5 rounded-full font-space-grotesk text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
          locale === "es"
            ? "bg-brand-lemon text-on-primary shadow-sm"
            : "text-brand-cream/50 hover:text-brand-cream/80"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-full font-space-grotesk text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
          locale === "en"
            ? "bg-brand-lemon text-on-primary shadow-sm"
            : "text-brand-cream/50 hover:text-brand-cream/80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
