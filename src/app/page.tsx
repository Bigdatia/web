"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { InstagramFeed } from "@/components/ui/InstagramFeed";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Variable global para detectar si es la primera vez que se carga el módulo (reset tras F5 real)
let globalVideoPlayedThisSession = false;

export default function Home() {
  const { t } = useLanguage();
  
  // Si la variable global es falsa, significa que es la primera vez (F5).
  // Si es verdadera, significa que vino navegando desde otra pestaña mediante React Router.
  const [isFirstLoad] = useState(!globalVideoPlayedThisSession);
  
  // En móvil, solo se muestra (e intenta reproducir) en el first load
  const [showMobileVideo, setShowMobileVideo] = useState(isFirstLoad);

  useEffect(() => {
    // Al montar el componente por primera vez en esta sesión de carga, marcamos que ya lo vimos.
    if (isFirstLoad) {
      globalVideoPlayedThisSession = true;
    }
  }, [isFirstLoad]);

  useEffect(() => {
    if (showMobileVideo && window.innerWidth < 768) {
      document.body.classList.add("video-playing");
    } else {
      document.body.classList.remove("video-playing");
    }
    return () => {
      document.body.classList.remove("video-playing");
    };
  }, [showMobileVideo]);

  const handleVideoEnded = () => {
    if (window.innerWidth < 768) {
      setShowMobileVideo(false);
    } else {
      document.getElementById("social-proof")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkip = () => {
    setShowMobileVideo(false);
  };

  return (
    <>
      <Navbar />
      <main className={`w-full max-w-[100vw] overflow-x-hidden transition-all duration-700 pb-24 md:pb-0 ${showMobileVideo ? 'pt-0 md:pt-32' : 'pt-24 md:pt-32'}`}>
        {/* Hero Section */}
        <section className={`max-w-[1440px] mx-auto min-h-[calc(100dvh-8rem)] flex items-center justify-center transition-all duration-700 ${showMobileVideo ? 'px-0 md:px-8' : 'px-4 md:px-8'}`}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Columna izquierda (abajo en móvil): textos */}
            <div className={`space-y-8 mt-4 md:mt-0 transition-all duration-1000 px-4 md:px-0 ${showMobileVideo ? 'opacity-0 translate-y-8 md:opacity-100 md:translate-y-0' : 'opacity-100 translate-y-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline leading-[1.1] md:leading-[0.9] tracking-tighter text-brand-cream text-center md:text-left uppercase">
                {t.home.hero.title} <span className="text-brand-lemon">{t.home.hero.titleAccent}</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/573164856744?text=Hola%2C%20quiero%20iniciar%20una%20estrategia%20con%20BigdatIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-lemon text-on-primary rounded-full px-8 py-4 font-bold text-lg hover:scale-95 active:scale-90 transition-transform w-full sm:w-auto text-center"
                >
                  {t.home.hero.cta1}
                </a>
                <Link
                  href="/portafolio"
                  className="border-2 border-brand-purple rounded-full text-brand-purple px-8 py-4 font-bold text-lg hover:bg-brand-purple/10 transition-colors w-full sm:w-auto text-center"
                >
                  {t.home.hero.cta2}
                </Link>
              </div>
            </div>
            
            {/* Columna derecha (arriba en móvil): video centrado */}
            <div 
              className={`flex items-center justify-center w-full transition-all duration-1000 ease-in-out origin-top md:max-h-none md:opacity-100 md:overflow-visible md:mb-0
              ${!showMobileVideo ? 'max-h-0 opacity-0 mb-0 overflow-hidden' : 'max-h-[100dvh] opacity-100 mb-4'}`}
            >
              <div className="relative group w-full md:max-w-none mx-auto flex justify-center">
                {/* Botón Omitir en móvil */}
                {showMobileVideo && (
                  <button 
                    onClick={handleSkip}
                    className="md:hidden absolute top-6 right-6 z-50 text-white/80 hover:text-white text-[10px] font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors"
                  >
                    Omitir
                  </button>
                )}
                <div className="purple-aura relative z-10 w-[100vw] max-w-[100vw] md:w-auto md:max-w-none h-[100dvh] md:h-[72vh] md:max-h-[680px] md:aspect-[9/16] rounded-none md:rounded-xl overflow-hidden bg-black md:border border-outline-variant/15">
                  <HeroVideo
                    src="/video-vertical-hero.webm"
                    fallbackFormats={["webm"]}
                    onEnded={handleVideoEnded}
                    autoPlay={isFirstLoad}
                    isPaused={!showMobileVideo}
                  />
                </div>
                <div className="absolute -inset-4 bg-brand-purple/20 blur-[100px] -z-10 rounded-full hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Data Block */}
        <section id="social-proof" className="w-full bg-surface-container-low py-16 mb-32">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black font-headline text-brand-cream tracking-tighter uppercase mb-4">
                {t.home.social.title}<br/>
                <span className="text-brand-lemon">{t.home.social.titleAccent}</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center gap-12">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">{t.home.social.stat1}</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">{t.home.social.stat1Label}</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">{t.home.social.stat1Source}</div>
              </div>
              <div className="h-px md:h-24 w-24 md:w-px bg-outline-variant/20"></div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">{t.home.social.stat2}</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">{t.home.social.stat2Label}</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">{t.home.social.stat2Source}</div>
              </div>
              <div className="h-px md:h-24 w-24 md:w-px bg-outline-variant/20"></div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">{t.home.social.stat3}</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">{t.home.social.stat3Label}</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">{t.home.social.stat3Source}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services (Bento Box Grid) */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
          <h2 className="text-3xl md:text-5xl font-black font-headline mb-16 uppercase tracking-tighter text-center md:text-left">{t.home.services.title} <span className="text-brand-purple">{t.home.services.titleAccent}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
            <div className="aspect-video md:aspect-auto md:col-span-2 md:row-span-2 bg-surface-container-highest p-12 relative overflow-hidden flex flex-col justify-end group border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-brand-lemon font-space-grotesk text-sm uppercase tracking-widest">{t.home.services.consulting.label}</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/estrategia-portada.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black font-headline mb-6 text-brand-cream leading-none whitespace-pre-line">{t.home.services.consulting.title}</h3>
                <a href="/estrategia" className="inline-flex items-center gap-2 text-brand-lemon font-bold tracking-widest uppercase hover:gap-4 transition-all">
                  {t.home.services.consulting.cta} <Icon name="arrow_forward" className="w-5 h-5" />
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full group-hover:bg-brand-purple/40 transition-colors"></div>
            </div>
            <div className="bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/10">
              <div className="flex justify-between items-start">
                <Icon name="ads_click" className="w-10 h-10 text-brand-lemon" />
                <span className="text-brand-cream/40 font-space-grotesk text-xs tracking-widest">{t.home.services.marketing.label}</span>
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline mb-4 text-brand-cream">{t.home.services.marketing.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{t.home.services.marketing.desc}</p>
                <a href="/marketing" className="inline-flex items-center gap-2 text-brand-lemon font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all">
                  {t.home.services.marketing.cta} <Icon name="arrow_forward" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/10">
              <div className="flex justify-between items-start">
                <Icon name="bolt" className="w-10 h-10 text-brand-lemon" />
                <span className="text-brand-cream/40 font-space-grotesk text-xs tracking-widest">{t.home.services.activations.label}</span>
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline mb-4 text-brand-cream">{t.home.services.activations.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{t.home.services.activations.desc}</p>
                <a href="/activaciones" className="inline-flex items-center gap-2 text-brand-lemon font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all">
                  {t.home.services.activations.cta} <Icon name="arrow_forward" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section (Brands Marquee) */}
        <section className="relative w-full max-w-[100vw] marquee-container py-8 bg-surface-container-lowest border-y border-outline-variant/5 mb-40">
          <div className="max-w-[1440px] mx-auto px-8 mb-6">
            <span className="text-brand-purple font-space-grotesk text-sm uppercase tracking-widest">Ecosistema</span>
          </div>
          <div className="flex w-max animate-marquee will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 md:gap-32 px-4 md:px-16">
                {[
                  { src: "/sponsors/gatorade.svg", alt: "Gatorade", cls: "h-24 md:h-40" },
                  { src: "/sponsors/don-jacobo.svg", alt: "Don Jacobo", cls: "h-24 md:h-40" },
                  { src: "/sponsors/mr-jersey.svg", alt: "Mr. Jersey", cls: "h-24 md:h-40" },
                  { src: "/sponsors/sebastian.svg", alt: "Sebastian", cls: "h-24 md:h-40" },
                  { src: "/sponsors/tu-licorera.svg", alt: "Tu Licorera", cls: "h-24 md:h-40" },
                  { src: "/sponsors/wm.svg", alt: "WM", cls: "h-24 md:h-40" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={320}
                      height={320}
                      className={`object-contain w-auto ${logo.cls}`}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contenido Social (Instagram Feed Integration) */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-brand-purple font-space-grotesk text-sm uppercase tracking-widest mb-4 block">{t.home.content.label}</span>
              <h2 className="text-3xl md:text-5xl font-black font-headline mb-4 uppercase tracking-tighter">{t.home.content.title}</h2>
              <p className="text-xl text-on-surface-variant max-w-lg">{t.home.content.subtitle}</p>
            </div>
            <a className="text-brand-cream/60 hover:text-brand-lemon transition-colors font-space-grotesk text-sm uppercase tracking-widest border-b border-brand-cream/20 pb-2 inline-flex items-center gap-2" href="https://www.instagram.com/bigdatia" target="_blank" rel="noopener noreferrer">
              {t.home.content.cta} <Icon name="open_in_new" className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InstagramFeed />
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
