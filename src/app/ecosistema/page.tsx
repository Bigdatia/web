"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { WebDemoModal } from "@/components/ui/WebDemoModal";
import { useLanguage } from "@/i18n/LanguageContext";

const webTypesMeta = [
  { id: "landing", number: "01", icon: "rocket_launch", accentColor: "#D5FC6B", demoUrl: "/websites-bigdatia/landing/index.html", key: "landing" as const },
  { id: "corporate", number: "02", icon: "apartment", accentColor: "#7533FF", demoUrl: "/websites-bigdatia/corporate/index.html", key: "corporate" as const },
  { id: "ecommerce", number: "03", icon: "shopping_bag", accentColor: "#cfbdff", demoUrl: "/websites-bigdatia/ecommerce/index.html", key: "ecommerce" as const },
];

export default function Ecosistema() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const { t } = useLanguage();

  const comparisonRowKeys = ["pages", "objective", "complexity", "seo", "idealFor", "delivery"] as const;

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-8 md:px-24 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple blur-[80px] opacity-15 rounded-full" />
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-lemon blur-[60px] opacity-10 rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 blur-[100px] rounded-full" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="font-label text-brand-lemon uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">
              {t.web.hero.label}
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-brand-cream leading-[1.1] md:leading-[0.95] tracking-tighter mb-8">
              {t.web.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lemon via-brand-purple to-secondary">
                {t.web.hero.titleAccent}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light mb-8">
              {t.web.hero.subtitle}
            </p>
            <div className="flex items-center justify-center gap-8 text-brand-cream/30 font-space-grotesk text-[10px] uppercase tracking-[0.3em]">
              <span>{t.web.hero.tag1}</span>
              <span className="w-1 h-1 rounded-full bg-brand-lemon" />
              <span>{t.web.hero.tag2}</span>
              <span className="w-1 h-1 rounded-full bg-brand-purple" />
              <span>{t.web.hero.tag3}</span>
            </div>
          </div>
        </section>

        {/* Showcase Cards */}
        <section className="px-4 md:px-24 mb-32 mt-16 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1440px] mx-auto">
            {webTypesMeta.map((meta, idx) => {
              const typeT = t.web.types[meta.key];
              return (
                <div
                  key={meta.id}
                  className="group relative bg-surface-container-low border border-outline-variant/10 p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-outline-variant/30 hover:bg-surface-container-high overflow-hidden"
                >
                  <div
                    className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ backgroundColor: meta.accentColor }}
                  />
                  <span className="font-space-grotesk text-brand-cream/15 text-7xl font-black absolute top-4 right-6 select-none group-hover:text-brand-cream/10 transition-colors">
                    {meta.number}
                  </span>
                  <div className="flex items-start gap-4 mb-8 relative z-10">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center border border-outline-variant/20 transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${meta.accentColor}15` }}
                    >
                      <Icon name={meta.icon} className="w-7 h-7" style={{ color: meta.accentColor }} />
                    </div>
                    <div>
                      <h3 className="font-headline text-2xl font-black text-brand-cream tracking-tight">{typeT.title}</h3>
                      <span className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">{typeT.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 relative z-10 flex-1">{typeT.desc}</p>
                  <div className="space-y-3 mb-8 relative z-10">
                    {typeT.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <Icon name="check_circle" className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: meta.accentColor }} filled />
                        <span className="text-brand-cream/80 text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-8 relative z-10">
                    <span className="font-space-grotesk text-[9px] uppercase tracking-[0.2em] text-on-surface-variant block mb-1">{t.web.idealForLabel}</span>
                    <span className="font-space-grotesk text-xs font-bold uppercase tracking-wider" style={{ color: meta.accentColor }}>{typeT.idealFor}</span>
                  </div>
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className="relative z-10 w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn border-2 hover:scale-[0.98] active:scale-95"
                    style={{ borderColor: meta.accentColor, color: meta.accentColor }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = meta.accentColor; e.currentTarget.style.color = "#131312"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = meta.accentColor; }}
                  >
                    {t.web.viewDemo}
                    <Icon name="arrow_forward" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-4 md:px-24 mb-32 max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-space-grotesk text-brand-purple text-sm uppercase tracking-widest mb-4 block">{t.web.comparison.label}</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-brand-cream tracking-tighter mb-4">
              {t.web.comparison.title} <span className="text-brand-lemon">{t.web.comparison.titleAccent}</span>?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">{t.web.comparison.subtitle}</p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden border border-outline-variant/15">
            <div className="grid grid-cols-4 bg-surface-container-highest">
              <div className="p-6 border-r border-outline-variant/10">
                <span className="font-space-grotesk text-xs uppercase tracking-widest text-brand-cream/40">{t.web.comparison.headerLabel}</span>
              </div>
              <div className="p-6 border-r border-outline-variant/10 text-center">
                <span className="font-headline font-bold text-brand-lemon">{t.web.types.landing.title}</span>
              </div>
              <div className="p-6 border-r border-outline-variant/10 text-center">
                <span className="font-headline font-bold text-brand-purple">{t.web.types.corporate.title}</span>
              </div>
              <div className="p-6 text-center">
                <span className="font-headline font-bold text-secondary">{t.web.types.ecommerce.title}</span>
              </div>
            </div>
            {comparisonRowKeys.map((key, i) => {
              const row = t.web.comparison.rows[key];
              return (
                <div key={key} className={`grid grid-cols-4 ${i % 2 === 0 ? "bg-surface-container-low" : "bg-surface-container"} border-t border-outline-variant/10 hover:bg-surface-container-high transition-colors`}>
                  <div className="p-5 border-r border-outline-variant/10">
                    <span className="font-space-grotesk text-sm font-bold text-brand-cream/70 uppercase tracking-wider">{row.label}</span>
                  </div>
                  <div className="p-5 border-r border-outline-variant/10 text-center"><span className="text-on-surface-variant text-sm">{row.landing}</span></div>
                  <div className="p-5 border-r border-outline-variant/10 text-center"><span className="text-on-surface-variant text-sm">{row.corporate}</span></div>
                  <div className="p-5 text-center"><span className="text-on-surface-variant text-sm">{row.ecommerce}</span></div>
                </div>
              );
            })}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonRowKeys.map((key) => {
              const row = t.web.comparison.rows[key];
              return (
                <div key={key} className="bg-surface-container-low border border-outline-variant/10 p-5">
                  <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-brand-cream/40 block mb-3">{row.label}</span>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <span className="block text-[9px] font-bold text-brand-lemon uppercase tracking-wider mb-1">Landing</span>
                      <span className="text-brand-cream/80 text-xs">{row.landing}</span>
                    </div>
                    <div className="text-center border-x border-outline-variant/10 px-2">
                      <span className="block text-[9px] font-bold text-brand-purple uppercase tracking-wider mb-1">{t.web.types.corporate.title}</span>
                      <span className="text-brand-cream/80 text-xs">{row.corporate}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[9px] font-bold text-secondary uppercase tracking-wider mb-1">E-Commerce</span>
                      <span className="text-brand-cream/80 text-xs">{row.ecommerce}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 md:px-24 mb-32 max-w-[1440px] mx-auto">
          <div className="bg-surface-container-lowest py-20 md:py-28 px-8 md:px-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #D5FC6B 1px, transparent 0)", backgroundSize: "48px 48px" }} />
            </div>
            <div className="relative z-10 text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-black text-brand-cream tracking-tighter mb-4">{t.web.process.title}</h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">{t.web.process.subtitle}</p>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {t.web.process.steps.map((item, i) => (
                <div key={item.step} className="relative group text-center md:text-left">
                  {i < 3 && <div className="hidden md:block absolute top-7 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-outline-variant/30 to-transparent" />}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/20 mb-4 group-hover:border-brand-lemon/40 transition-colors">
                    <Icon name={["chat", "palette", "code", "rocket_launch"][i]} className="w-6 h-6 text-brand-lemon" />
                  </div>
                  <div className="font-space-grotesk text-[10px] text-brand-cream/30 uppercase tracking-[0.3em] mb-2">Paso {item.step}</div>
                  <h4 className="font-headline text-lg font-bold text-brand-cream mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-24 mb-32 max-w-[1440px] mx-auto">
          <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-brand-purple blur-[80px] opacity-10 scale-150" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lemon blur-[100px] opacity-5 rounded-full" />
            <div className="relative z-10">
              <h3 className="font-headline text-3xl md:text-5xl font-black mb-6 tracking-tighter text-brand-cream">
                {t.web.cta.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lemon to-brand-purple">{t.web.cta.titleAccent}</span>?
              </h3>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">{t.web.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/573164151731?text=Hola%2C%20me%20interesa%20cotizar%20un%20sitio%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-lemon text-on-primary rounded-full px-10 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_#D5FC6B] transition-all duration-300 hover:scale-[0.98] active:scale-95"
                >
                  {t.web.cta.cta1}
                </a>
                <button
                  onClick={() => setActiveIdx(0)}
                  className="border-2 border-brand-purple rounded-full text-brand-purple px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-purple/10 transition-all duration-300"
                >
                  {t.web.cta.cta2}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <WebDemoModal
        isOpen={activeIdx !== null}
        onClose={() => setActiveIdx(null)}
        demoUrl={activeIdx !== null ? webTypesMeta[activeIdx].demoUrl : ""}
        demoLabel={activeIdx !== null ? t.web.types[webTypesMeta[activeIdx].key].demoLabel : ""}
        accentColor={activeIdx !== null ? webTypesMeta[activeIdx].accentColor : "#D5FC6B"}
      />
    </>
  );
}
