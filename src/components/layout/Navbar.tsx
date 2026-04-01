"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import { useLanguage } from '@/i18n/LanguageContext';

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/estrategia', label: t.nav.strategy },
    { href: '/marketing', label: t.nav.marketing },
    { href: '/activaciones', label: t.nav.activations },
    { href: '/web', label: t.nav.web },
    { href: '/portafolio', label: t.nav.portfolio },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-4 z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-brand-cream uppercase font-brand">
          BigdatIA
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                className={
                  isActive
                    ? "text-brand-lemon font-bold border-b-2 border-brand-lemon pb-1 font-space-grotesk tracking-tight text-sm uppercase"
                    : "text-brand-cream/70 hover:text-brand-cream transition-colors font-space-grotesk tracking-tight text-sm uppercase"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <button className="hidden sm:block bg-brand-lemon text-on-primary px-6 py-2 rounded-full font-bold hover:scale-95 active:scale-90 transition-transform text-sm">
            {t.nav.getStarted}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-brand-lemon flex items-center justify-center"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         {/* Close Button in Overlay */}
         <button 
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-brand-lemon flex items-center justify-center p-2"
          >
            <Icon name="close" className="w-10 h-10" />
          </button>

          <div className="flex flex-col items-center gap-8">
            <span className="font-brand font-black text-brand-cream text-3xl tracking-tighter uppercase mb-8">BigdatIA</span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-bold font-space-grotesk tracking-tighter uppercase transition-colors ${
                    isActive ? 'text-brand-lemon' : 'text-brand-cream/70'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4">
              <LanguageSwitch />
            </div>
            <button className="mt-4 bg-brand-lemon text-on-primary px-10 py-4 rounded-full font-bold text-xl active:scale-95 transition-transform">
              {t.nav.getStarted}
            </button>
          </div>

          <div className="absolute bottom-12 text-brand-cream/30 font-space-grotesk text-[10px] tracking-[0.3em] uppercase">
            {t.footer.copyright} © {new Date().getFullYear()}
          </div>
      </div>
    </>
  );
}
