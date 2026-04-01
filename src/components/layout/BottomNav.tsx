"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { useLanguage } from '@/i18n/LanguageContext';

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.bottomNav.home, icon: 'grid_view' },
    { href: '/estrategia', label: t.bottomNav.strategy, icon: 'insights' },
    { href: '/marketing', label: t.bottomNav.marketing, icon: 'campaign' },
    { href: '/activaciones', label: t.bottomNav.activations, icon: 'bolt' },
    { href: '/ecosistema', label: t.bottomNav.web, icon: 'devices' },
    { href: '/portafolio', label: t.bottomNav.portfolio, icon: 'folder_open' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/15">
      <div className="flex justify-around items-center pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] px-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-colors ${
                isActive ? 'text-brand-lemon' : 'text-brand-cream/40'
              }`}
            >
              <Icon name={link.icon} className="w-5 h-5" filled={isActive} />
              <span className="text-[9px] font-bold uppercase tracking-wider font-space-grotesk">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
