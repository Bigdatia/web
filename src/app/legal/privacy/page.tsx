"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Privacy() {
  const { t, locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 md:pb-0 max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-black font-headline tracking-tighter mb-8">{t.legal.privacy.title}</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-on-surface-variant">
          <p className="text-sm uppercase tracking-widest text-brand-lemon font-space-grotesk">
            {t.legal.privacy.lastUpdate} {new Date().toLocaleDateString(locale === "es" ? "es-CO" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          
          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">{t.legal.privacy.s1title}</h2>
          <p>{t.legal.privacy.s1text}</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">{t.legal.privacy.s2title}</h2>
          <p>{t.legal.privacy.s2text}</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">{t.legal.privacy.s3title}</h2>
          <p>{t.legal.privacy.s3text}</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">{t.legal.privacy.s4title}</h2>
          <p>{t.legal.privacy.s4text}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
