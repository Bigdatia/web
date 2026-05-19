"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Activaciones() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100dvh-8rem)] flex flex-col items-center justify-center px-8 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary-container opacity-20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-fixed opacity-10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 max-w-6xl w-full text-center">
            <span className="inline-block px-4 py-1 mb-6 border border-outline-variant border-opacity-30 font-label text-xs uppercase tracking-[0.2em] text-secondary">
              {t.activaciones.hero.badge} {new Date().getFullYear()}
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-on-surface leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 uppercase">
              {t.activaciones.hero.title} <span className="text-primary-fixed">{t.activaciones.hero.titleAccent}</span> {t.activaciones.hero.titleEnd}
            </h1>
            <p className="max-w-2xl mx-auto font-body text-xl md:text-2xl text-on-surface opacity-80 mb-12">
              {t.activaciones.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/573164856744?text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20de%20activaci%C3%B3n%20de%20marca%20con%20BigdatIA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-container text-on-primary px-10 py-5 font-headline font-bold text-lg uppercase tracking-wider rounded-full transition-all hover:scale-105 purple-glow w-full sm:w-auto text-center"
              >
                {t.activaciones.hero.cta1}
              </a>
              <Link 
                href="/portafolio"
                className="border-2 border-secondary text-secondary px-10 py-5 font-headline font-bold text-lg uppercase tracking-wider rounded-full hover:bg-secondary hover:bg-opacity-10 transition-all w-full sm:w-auto text-center"
              >
                {t.activaciones.hero.cta2}
              </Link>
            </div>
          </div>

          <div className="mt-24 w-full max-w-5xl relative group">
            <div className="absolute -inset-1 bg-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-surface-container-highest aspect-video w-full overflow-hidden border border-outline-variant border-opacity-15 shadow-2xl">
              <YouTubeFacade 
                videoId="YHFZvvepnbM"
                title="BigdatIA Activaciones"
              />
            </div>
          </div>
        </section>

        {/* Bento Portfolio Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tighter uppercase">{t.activaciones.portfolio.title}</h2>
              <p className="text-secondary-fixed opacity-60 font-label tracking-widest uppercase mt-4">{t.activaciones.portfolio.subtitle}</p>
            </div>
            <div className="hidden md:block">
              <span className="text-outline-variant font-label text-sm tracking-widest">{t.activaciones.portfolio.scroll}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            <a
              href="https://www.instagram.com/reel/DPC6OHOiXYo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15 block"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/1.MP4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-10 pointer-events-none">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2 block">{t.activaciones.portfolio.card1.label}</span>
                <h3 className="font-headline text-2xl md:text-4xl font-black text-on-surface uppercase mb-4 tracking-tighter">{t.activaciones.portfolio.card1.title}</h3>
                <p className="text-on-surface-variant max-w-md">{t.activaciones.portfolio.card1.desc}</p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Icon name="open_in_new" className="w-5 h-5 text-white" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/reel/DRf2v2FifV5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15 block"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
              >
                <source src="/2.MP4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
              <div className="absolute top-6 right-6 font-label text-xs text-secondary-fixed pointer-events-none">{t.activaciones.portfolio.card2.label}</div>
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <h3 className="font-headline text-xl font-bold text-on-surface uppercase">{t.activaciones.portfolio.card2.title}</h3>
              </div>
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Icon name="open_in_new" className="w-5 h-5 text-white" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/reel/DSKxq8Uj9Qq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15 block"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
              >
                <source src="/3.MP4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <h3 className="font-headline text-xl font-bold text-on-surface uppercase">{t.activaciones.portfolio.card3.title}</h3>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Icon name="open_in_new" className="w-5 h-5 text-white" />
              </div>
            </a>

            <div className="md:col-span-12 md:row-span-1 bg-surface-container-highest border border-outline-variant border-opacity-15 p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -right-20 top-0 w-64 h-64 bg-secondary opacity-10 blur-3xl"></div>
              <div className="flex items-center gap-12">
                <div>
                  <div className="font-display text-4xl font-black text-primary-fixed">{t.activaciones.portfolio.stat1}</div>
                  <div className="font-label text-xs text-on-surface-variant tracking-widest mt-1">{t.activaciones.portfolio.stat1Label}</div>
                </div>
                <div className="h-16 w-px bg-outline-variant opacity-30 hidden md:block"></div>
                <div>
                  <div className="font-display text-4xl font-black text-secondary">{t.activaciones.portfolio.stat2}</div>
                  <div className="font-label text-xs text-on-surface-variant tracking-widest mt-1">{t.activaciones.portfolio.stat2Label}</div>
                </div>
              </div>
              <p className="max-w-md text-on-surface-variant text-sm md:text-right italic">
                {t.activaciones.portfolio.quote}
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-24 text-center">
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">{t.activaciones.process.title}</h2>
              <p className="mt-4 text-on-surface-variant font-body text-lg">{t.activaciones.process.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">01</div>
                <h3 className="font-headline text-2xl md:text-3xl font-black text-primary-fixed uppercase mb-4 tracking-tight">{t.activaciones.process.step1.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t.activaciones.process.step1.desc}</p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step1.tag1}</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step1.tag2}</span>
                </div>
              </div>
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">02</div>
                <h3 className="font-headline text-2xl font-black text-secondary uppercase mb-4 tracking-tight">{t.activaciones.process.step2.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t.activaciones.process.step2.desc}</p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step2.tag1}</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step2.tag2}</span>
                </div>
              </div>
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">03</div>
                <h3 className="font-headline text-2xl font-black text-primary-fixed uppercase mb-4 tracking-tight">{t.activaciones.process.step3.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t.activaciones.process.step3.desc}</p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step3.tag1}</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">{t.activaciones.process.step3.tag2}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
