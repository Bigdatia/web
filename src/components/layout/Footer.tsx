import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function Footer() {
  return (
    <footer id="contacto" className="w-full py-16 px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 max-w-[1440px] mx-auto border-t border-outline-variant/15 bg-background">
      <div className="space-y-4">
        <div className="text-3xl font-black text-brand-cream tracking-tighter">BigdatIA</div>
        <div className="font-space-grotesk text-sm uppercase tracking-widest text-brand-cream/70 flex items-center gap-2">
           <Icon name="location_on" className="w-5 h-5 text-brand-lemon" filled />
           Bucaramanga, Colombia
        </div>
        <div className="font-space-grotesk text-sm uppercase tracking-widest text-brand-cream/70 flex items-center gap-2">
           <Icon name="call" className="w-5 h-5 text-brand-lemon" filled />
           <a href="https://wa.me/573164151731" target="_blank" rel="noopener noreferrer" className="hover:text-brand-lemon transition-colors">WhatsApp: +57 316 415 1731</a>
        </div>
      </div>
      
      <div className="flex flex-col items-start md:items-end gap-6">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a className="font-space-grotesk text-xs uppercase tracking-widest text-brand-cream/50 hover:text-brand-lemon transition-colors" href="https://instagram.com/bigdatia_agency" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="font-space-grotesk text-xs uppercase tracking-widest text-brand-cream/50 hover:text-brand-lemon transition-colors" href="https://linkedin.com/company/bigdatia" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <Link className="font-space-grotesk text-xs uppercase tracking-widest text-brand-cream/50 hover:text-brand-lemon transition-colors" href="/legal/privacy">
            Políticas
          </Link>
          <Link className="font-space-grotesk text-xs uppercase tracking-widest text-brand-cream/50 hover:text-brand-lemon transition-colors" href="/legal/terms">
            Términos y Condiciones
          </Link>
        </div>
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-brand-cream/30">
          © {new Date().getFullYear()} BigdatIA. Precision Luminescence.
        </p>
      </div>
    </footer>
  );
}
