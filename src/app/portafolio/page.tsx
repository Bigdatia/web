"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { useLanguage } from '@/i18n/LanguageContext';

const FilterButton = ({ active, onClick, children, icon }: { active: boolean, onClick: () => void, children: React.ReactNode, icon?: string }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-2 rounded-none transition-all duration-300 border-2 uppercase font-bold tracking-wider text-sm whitespace-nowrap
      ${active
        ? 'bg-brand-lemon border-brand-lemon text-on-primary shadow-[0_0_15px_rgba(213,252,107,0.3)]'
        : 'bg-transparent border-outline-variant text-on-surface-variant hover:border-brand-lemon hover:text-brand-lemon'}
    `}
  >
    {icon && <Icon name={icon} className="w-4 h-4" />}
    {children}
  </button>
);

const ProjectCard = ({ item, onClick }: { item: any, onClick: (item: any) => void }) => {
  const getIcon = () => {
    switch (item.category) {
      case 'video': return 'videocam';
      case 'social': return 'smartphone';
      case 'web': return 'desktop_windows';
      case 'branding': return 'edit';
      default: return 'layers';
    }
  };

  return (
    <div
      className="group relative bg-surface-container-low rounded-sm overflow-hidden border border-outline-variant/30 hover:border-brand-lemon transition-all duration-300 cursor-pointer"
      onClick={() => onClick(item)}
    >
      {/* Imagen Thumbnail */}
      <div className="relative h-64 w-full overflow-hidden bg-surface-container">
        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-500 z-10" />
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 text-brand-lemon border border-brand-lemon/30 z-20">
          <Icon name={getIcon()} className="w-5 h-5" />
        </div>
      </div>

      {/* Contenido Card */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-widest text-brand-lemon uppercase">
            {item.category}
          </span>
        </div>
        <h3 className="text-xl font-black uppercase text-on-surface mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-on-surface-variant text-sm line-clamp-2 font-medium">
          {item.description}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag: string, idx: number) => (
              <span key={idx} className="text-[10px] font-bold uppercase px-2 py-1 bg-surface-container text-on-surface-variant border border-outline-variant/50">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose, t }: { project: any, onClose: () => void, t: any }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 bg-background/95 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-outline-variant/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative rounded-sm">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-surface-container-lowest hover:bg-brand-lemon hover:text-on-primary border border-outline-variant/50 text-on-surface transition-colors z-50 rounded-full"
        >
          <Icon name="close" className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Media Section */}
          <div className="bg-surface-container-low min-h-[300px] md:h-full flex items-center justify-center relative border-r border-outline-variant/30">
            {project.category === 'social' ? (
                <div className="w-full h-full max-h-[80vh] flex items-center justify-center bg-background p-4">
                  <video
                    controls
                    autoPlay
                    className="max-w-full max-h-full object-contain"
                    src={project.videoUrl}
                  />
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
          </div>

          {/* Info Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-surface-container-lowest h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 border border-brand-lemon text-brand-lemon text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6 uppercase leading-none font-headline">{project.title}</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed text-lg font-space-grotesk">
              {project.description}
            </p>

            <div className="mb-10">
              <h4 className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-widest mb-4">{t.portfolio.modal.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-surface-container border border-outline-variant/30 text-sm text-on-surface uppercase font-bold text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              {project.category === 'web' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-brand-lemon hover:bg-brand-lemon/90 text-on-primary px-8 py-4 font-black uppercase tracking-wider transition-colors w-full justify-center text-sm"
                >
                  <Icon name={project.title.includes('proceso') || project.title.includes('Construction') ? 'code' : 'open_in_new'} className="w-5 h-5" />
                  {project.title.includes('proceso') || project.title.includes('Construction') ? t.portfolio.modal.viewGitHub : t.portfolio.modal.visitSite}
                </a>
              )}
              {project.category === 'branding' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-on-surface hover:bg-on-surface/90 text-background px-8 py-4 font-black uppercase tracking-wider transition-colors w-full justify-center text-sm"
                >
                  <Icon name="download" className="w-5 h-5" /> {t.portfolio.modal.viewPDF}
                </a>
              )}
              {project.category === 'video' && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-brand-lemon hover:bg-brand-lemon/90 text-on-primary px-8 py-4 font-black uppercase tracking-wider transition-colors w-full justify-center text-sm"
                >
                  <Icon name="play_arrow" className="w-5 h-5" /> {t.portfolio.modal.viewVideo}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const { t } = useLanguage();
  const portfolioData = t.portfolio.projects;
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        const socialVideos = portfolioData.filter((item: any) => item.category === 'social');
        socialVideos.forEach((video: any) => {
          const videoElement = document.createElement('video');
          videoElement.src = video.videoUrl;
          videoElement.preload = 'auto';
          videoElement.muted = true;
        });
      }
    }, 1000);

    return () => clearTimeout(preloadTimer);
  }, []);

  const filteredProjects = filter === 'all'
    ? portfolioData
    : portfolioData.filter((item: any) => item.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0 min-h-[calc(100dvh-8rem)] bg-background">
        
        {/* --- PORTFOLIO DIRECTO --- */}
        <section id="portfolio" className="py-12 md:py-24 px-6 md:px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8 relative z-10 w-full">
            <div className="flex flex-col items-start text-left max-w-xl">
              <h2 className="text-sm font-bold tracking-widest text-brand-lemon uppercase mb-4">
                {t.portfolio.hero.label}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline uppercase leading-[1.1] md:leading-[0.9] tracking-tighter text-brand-cream">
                {t.portfolio.hero.title}
                <br />
                {t.portfolio.hero.titleAccent}
              </h1>
            </div>

            {/* Filters — dropdown en mobile, botones en desktop */}
            <div className="w-full xl:w-auto pt-4 xl:pt-0">

              {/* Mobile: dropdown */}
              <div className="relative md:hidden">
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex items-center justify-between w-full gap-3 px-5 py-3 border-2 border-outline-variant bg-transparent text-on-surface font-bold uppercase tracking-wider text-sm transition-colors hover:border-brand-lemon"
                >
                  <span className="flex items-center gap-2">
                    <Icon
                      name={
                        filter === 'all' ? 'grid_view'
                        : filter === 'video' ? 'videocam'
                        : filter === 'social' ? 'smartphone'
                        : filter === 'branding' ? 'edit'
                        : 'desktop_windows'
                      }
                      className="w-4 h-4 text-brand-lemon"
                    />
                    {filter === 'all' ? t.portfolio.filters.all
                      : filter === 'video' ? t.portfolio.filters.video
                      : filter === 'social' ? t.portfolio.filters.social
                      : filter === 'branding' ? t.portfolio.filters.branding
                      : t.portfolio.filters.web}
                  </span>
                  <Icon
                    name={dropdownOpen ? 'expand_less' : 'expand_more'}
                    className="w-5 h-5 text-brand-lemon"
                  />
                </button>

                {dropdownOpen && (
                  <>
                    {/* Backdrop para cerrar al tocar fuera */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute left-0 right-0 top-full mt-1 z-20 border-2 border-outline-variant bg-surface-container-lowest shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
                      {[
                        { key: 'all', icon: 'grid_view', label: t.portfolio.filters.all },
                        { key: 'video', icon: 'videocam', label: t.portfolio.filters.video },
                        { key: 'social', icon: 'smartphone', label: t.portfolio.filters.social },
                        { key: 'branding', icon: 'edit', label: t.portfolio.filters.branding },
                        { key: 'web', icon: 'desktop_windows', label: t.portfolio.filters.web },
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => { setFilter(opt.key); setDropdownOpen(false); }}
                          className={`flex items-center gap-3 w-full px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-b border-outline-variant/20 last:border-0
                            ${filter === opt.key
                              ? 'bg-brand-lemon text-on-primary'
                              : 'text-on-surface-variant hover:bg-surface-container hover:text-brand-lemon'
                            }`}
                        >
                          <Icon name={opt.icon} className="w-4 h-4" />
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Desktop: botones horizontales */}
              <div className="hidden md:flex flex-wrap gap-2">
                <FilterButton icon="grid_view" active={filter === 'all'} onClick={() => setFilter('all')}>
                  {t.portfolio.filters.all}
                </FilterButton>
                <FilterButton icon="videocam" active={filter === 'video'} onClick={() => setFilter('video')}>
                  {t.portfolio.filters.video}
                </FilterButton>
                <FilterButton icon="smartphone" active={filter === 'social'} onClick={() => setFilter('social')}>
                  {t.portfolio.filters.social}
                </FilterButton>
                <FilterButton icon="edit" active={filter === 'branding'} onClick={() => setFilter('branding')}>
                  {t.portfolio.filters.branding}
                </FilterButton>
                <FilterButton icon="desktop_windows" active={filter === 'web'} onClick={() => setFilter('web')}>
                  {t.portfolio.filters.web}
                </FilterButton>
              </div>

            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full relative z-10">
            {filteredProjects.map((project: any) => (
              <ProjectCard
                key={project.id}
                item={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          {/* Decorative background blur */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lemon opacity-5 blur-[150px] rounded-full pointer-events-none z-0"></div>
          
        </section>

        {/* MODAL OVERLAY */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </main>
    </>
  );
}
