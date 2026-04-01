"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { es as esDict, en as enDict, type Translations } from "@/i18n/translations";
import { detectLanguageFromIP, type Locale } from "@/i18n/detectLanguage";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const dictionaries: Record<Locale, Translations> = { es: esDict, en: enDict };

const STORAGE_KEY = "bigdatia-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored);
      setReady(true);
    } else {
      detectLanguageFromIP().then((detected) => {
        setLocaleState(detected);
        localStorage.setItem(STORAGE_KEY, detected);
        setReady(true);
      });
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "es" ? "en" : "es");
  }, [locale, setLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value: LanguageContextType = {
    locale,
    t: dictionaries[locale],
    setLocale,
    toggleLocale,
  };

  // Render immediately with default (es), then update once detection completes.
  // This avoids a flash of empty content.
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
