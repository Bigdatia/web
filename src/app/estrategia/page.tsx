"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';
import { Icon } from "@/components/ui/Icon";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

export default function Estrategia() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100dvh-8rem)] flex items-center px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-secondary-container/30 to-transparent"></div>
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent blur-[120px]"></div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-highest border-l-2 border-primary-container mx-auto lg:mx-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">{t.estrategia.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline leading-[1.1] md:leading-[0.9] tracking-tighter text-on-surface text-center lg:text-left uppercase">
                {t.estrategia.hero.title} <span className="text-primary-container">{t.estrategia.hero.titleAccent}</span> {t.estrategia.hero.titleEnd}
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                {t.estrategia.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-primary-container text-on-primary-container rounded-full px-10 py-5 font-bold text-lg hover:shadow-[0_0_20px_rgba(213,252,107,0.4)] transition-all w-full sm:w-auto">
                  {t.estrategia.hero.cta1}
                </button>
                <button className="border-2 border-secondary text-secondary rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary/10 transition-all w-full sm:w-auto">
                  {t.estrategia.hero.cta2}
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative aspect-square surface-container-highest overflow-hidden border border-outline-variant/15">
                <Image
                  alt="Data visualization interface"
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  src="/bg.webp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-l-4 border-primary-container">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-60">{t.estrategia.hero.statLabel}</span>
                    <Icon name="trending_up" className="w-5 h-5 text-primary-container" />
                  </div>
                  <div className="text-3xl font-black mt-2 font-headline text-on-surface">{t.estrategia.hero.stat}</div>
                  <div className="text-sm opacity-60">{t.estrategia.hero.statDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Methodology */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black font-headline mb-4 uppercase tracking-tighter">{t.estrategia.methodology.title} <span className="text-primary-container">{t.estrategia.methodology.titleAccent}</span></h2>
            <div className="h-1 w-24 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Step 1 */}
            <div className="p-12 border border-outline-variant/15 group hover:bg-surface-container-high transition-all duration-500">
              <div className="mb-8">
                <span className="text-5xl font-black opacity-10 font-headline group-hover:opacity-30 transition-opacity">01</span>
                <div className="mt-[-2rem] flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary-container flex items-center justify-center purple-glow">
                    <Icon name="search_insights" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">{t.estrategia.methodology.step1.title}</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">{t.estrategia.methodology.step1.desc}</p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step1.tag1}
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step1.tag2}
                </li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="p-12 border border-outline-variant/15 bg-surface-container-high group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
              <div className="mb-8">
                <span className="text-5xl font-black opacity-10 font-headline group-hover:opacity-30 transition-opacity">02</span>
                <div className="mt-[-2rem] flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-container flex items-center justify-center lemon-glow">
                    <Icon name="architecture" className="w-8 h-8 text-on-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">{t.estrategia.methodology.step2.title}</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">{t.estrategia.methodology.step2.desc}</p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-secondary-fixed-dim uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step2.tag1}
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-secondary-fixed-dim uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step2.tag2}
                </li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="p-12 border border-outline-variant/15 group hover:bg-surface-container-high transition-all duration-500">
              <div className="mb-8">
                <span className="text-5xl font-black opacity-10 font-headline group-hover:opacity-30 transition-opacity">03</span>
                <div className="mt-[-2rem] flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary-container flex items-center justify-center purple-glow">
                    <Icon name="rocket_launch" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">{t.estrategia.methodology.step3.title}</h3>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">{t.estrategia.methodology.step3.desc}</p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step3.tag1}
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                  <Icon name="check_circle" className="w-5 h-5" /> {t.estrategia.methodology.step3.tag2}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bento Grid */}
      <section className="py-24 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 bg-surface-container-highest p-8 flex flex-col justify-between border-l-8 border-primary-container">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-container">{t.estrategia.metrics.roi.label}</span>
                  <Icon name="payments" className="w-6 h-6 text-primary-container" />
                </div>
                <h3 className="text-2xl font-bold font-headline mt-4">{t.estrategia.metrics.roi.title}</h3>
              </div>
              <div className="mt-8">
                <div className="text-5xl font-black font-headline text-primary-container">{t.estrategia.metrics.roi.value}</div>
                <div className="text-sm text-tertiary-fixed-dim mt-2 uppercase tracking-widest">{t.estrategia.metrics.roi.desc}</div>
              </div>
            </div>
            <div className="bg-secondary-container p-8 flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <Icon name="bolt" className="w-8 h-8" />
                <h3 className="text-xl font-bold font-headline mt-4 leading-tight">{t.estrategia.metrics.speed.title}</h3>
              </div>
              <div className="relative z-10 mt-8">
                <div className="text-4xl font-black font-headline">{t.estrategia.metrics.speed.value}</div>
                <div className="text-xs opacity-70 uppercase mt-1 tracking-widest">{t.estrategia.metrics.speed.desc}</div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-0 relative overflow-hidden group">
              <Image 
                alt="Server room lighting" 
                className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgEyrZJX-tHuV2_gKmgQcOa3qIa9ksJ7sdyQGryl0ih5WHqoCrb-xlOyy8f9YPOzjyxdd6_O2mjQSS4WNhf7u4L2TZOIUlwQeQdNVWoojkY9ldp5BHHEd-tU2ml5JHDGz8Xi3DCdec0PZ5ZCMCfb20jPMEfHMiVWHmjxg_H7hm2ij0SDrT-da9T322NPKmVht-ugpv1j-okpnjIdL1OpKJ4c5Vxfp9LdeTLvGwzfW46kjAoKLY3RuOjPi5nej-X4nvzqQwpqZ61fhM"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="text-xs font-bold uppercase tracking-widest">{t.estrategia.metrics.infra}</div>
              </div>
            </div>
            <div className="bg-surface-container p-8 flex flex-col justify-between border border-outline-variant/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{t.estrategia.metrics.quality.label}</span>
              </div>
              <div>
                <div className="text-4xl font-black font-headline text-on-surface">{t.estrategia.metrics.quality.value}</div>
                <div className="text-xs text-on-surface-variant mt-2">{t.estrategia.metrics.quality.desc}</div>
              </div>
            </div>
            <div className="md:col-span-3 bg-surface-container-high p-8 flex items-center justify-between group overflow-hidden">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold font-headline mb-4">{t.estrategia.metrics.ecosystem.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t.estrategia.metrics.ecosystem.desc}</p>
                <Link href="/web">
                  <button className="mt-6 flex items-center gap-2 text-primary-container font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                    {t.estrategia.metrics.ecosystem.cta} <Icon name="arrow_forward" className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <div className="hidden md:block relative w-48 h-48">
                <div className="absolute inset-0 border-2 border-primary-container/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border-2 border-secondary/20 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="hub" className="w-12 h-12 text-primary-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-24 px-8 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase">{t.estrategia.roadmap.title} <span className="text-secondary">{t.estrategia.roadmap.titleAccent}</span></h2>
            <p className="text-on-surface-variant mt-4 max-w-xl">{t.estrategia.roadmap.subtitle}</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-8 md:left-1/2 w-0.5 h-full bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-24">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-[45%] order-2 md:order-1">
                  <div className="glass-card p-8 border-l-4 border-primary-container hover:bg-surface-container-highest transition-colors">
                    <span className="text-primary-container font-bold text-xs uppercase tracking-widest">{t.estrategia.roadmap.phase1.time}</span>
                    <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">{t.estrategia.roadmap.phase1.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{t.estrategia.roadmap.phase1.desc}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-surface-container-highest border-4 border-primary-container -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-container"></div>
                </div>
                <div className="w-full md:w-[45%] order-1 md:order-2 mb-8 md:mb-0">
                  <div className="text-5xl md:text-7xl font-black font-headline opacity-5 text-right">01</div>
                </div>
              </div>
              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <div className="text-5xl md:text-7xl font-black font-headline opacity-5">02</div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-surface-container-highest border-4 border-secondary -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-secondary"></div>
                </div>
                <div className="w-full md:w-[45%]">
                  <div className="glass-card p-8 border-r-4 border-secondary hover:bg-surface-container-highest transition-colors text-right md:text-left">
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest">{t.estrategia.roadmap.phase2.time}</span>
                    <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">{t.estrategia.roadmap.phase2.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{t.estrategia.roadmap.phase2.desc}</p>
                  </div>
                </div>
              </div>
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-[45%] order-2 md:order-1">
                  <div className="glass-card p-8 border-l-4 border-primary-container hover:bg-surface-container-highest transition-colors">
                    <span className="text-primary-container font-bold text-xs uppercase tracking-widest">{t.estrategia.roadmap.phase3.time}</span>
                    <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">{t.estrategia.roadmap.phase3.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{t.estrategia.roadmap.phase3.desc}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-surface-container-highest border-4 border-primary-container -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-container"></div>
                </div>
                <div className="w-full md:w-[45%] order-1 md:order-2 mb-8 md:mb-0">
                  <div className="text-5xl md:text-7xl font-black font-headline opacity-5 text-right">03</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-container opacity-5"></div>
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-headline mb-8 uppercase tracking-tighter leading-none text-center">
            {t.estrategia.cta.title} <br/> <span className="text-primary-container">{t.estrategia.cta.titleAccent}</span>?
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            {t.estrategia.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <button className="bg-primary-container text-on-primary-container rounded-full px-12 py-6 font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(213,252,107,0.2)]">
              {t.estrategia.cta.button}
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
