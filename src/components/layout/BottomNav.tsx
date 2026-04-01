"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';

export function BottomNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: 'grid_view' },
    { href: '/estrategia', label: 'Strategy', icon: 'insights' },
    { href: '/marketing', label: 'Marketing', icon: 'campaign' },
    { href: '/activaciones', label: 'Actives', icon: 'bolt' },
    { href: '/ecosistema', label: 'System', icon: 'hub' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-2xl flex justify-around items-center py-4 px-2 z-50 rounded-t-2xl border-t border-outline-variant/10 shadow-[0_-10px_40px_rgba(117,51,255,0.2)]">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center font-space-grotesk text-[10px] uppercase tracking-[0.1em] transition-all duration-300 active:scale-90 ${
              isActive ? 'text-brand-lemon font-bold' : 'text-brand-cream/50 hover:text-brand-lemon'
            }`}
          >
            <Icon 
              name={link.icon} 
              className="w-6 h-6 mb-1"
              filled={isActive}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
