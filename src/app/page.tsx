import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-8 min-h-[calc(100vh-8rem)] flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-black font-headline leading-[1.1] md:leading-[0.9] tracking-tighter text-brand-cream text-center md:text-left">
              Tomamos decisiones empresariales con <span className="text-brand-lemon">datos...</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
              Transformamos la complejidad técnica en ejecución de mercado. Estrategia, tecnología y marketing impulsados por inteligencia real.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button className="bg-brand-lemon text-on-primary rounded-full px-8 py-4 font-bold text-lg hover:scale-95 active:scale-90 transition-transform w-full sm:w-auto">
                Iniciar Estrategia
              </button>
              <button className="border-2 border-brand-purple rounded-full text-brand-purple px-8 py-4 font-bold text-lg hover:bg-brand-purple/10 transition-colors w-full sm:w-auto">
                Ver Portafolio
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="purple-aura relative z-10 aspect-video rounded-xl overflow-hidden bg-surface-container-highest border border-outline-variant/15">
              <YouTubeFacade 
                videoId="RQDA5DHNk4M"
                title="BigdatIA Video Principal"
              />
            </div>
            <div className="absolute -inset-4 bg-brand-purple/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
          </div>
        </section>

        {/* Social Proof / Data Block */}
        <section className="w-full bg-surface-container-low py-16 mb-32">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black font-headline text-brand-cream tracking-tighter">
                No hablamos desde la teoría.<br/>
                <span className="text-brand-lemon">Hablamos desde la experiencia.</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center gap-12">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">+50</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">Proyectos Activos</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">Data Source: Internal CRM</div>
              </div>
              <div className="h-px md:h-24 w-24 md:w-px bg-outline-variant/20"></div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">+100</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">Marcas Optimizadas</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">Data Source: Global Audit</div>
              </div>
              <div className="h-px md:h-24 w-24 md:w-px bg-outline-variant/20"></div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black font-headline text-brand-lemon mb-2">12M</div>
                <div className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-on-surface-variant">Puntos de Data</div>
                <div className="mt-2 text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">Real-time processing unit</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services (Bento Box Grid) */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
          <h2 className="text-3xl font-black font-headline mb-16 uppercase tracking-tighter text-center md:text-left">Nuestras <span className="text-brand-purple">Capacidades</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-12 relative overflow-hidden flex flex-col justify-end group border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-brand-lemon font-space-grotesk text-sm uppercase tracking-widest">01 / Consultoría</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                <Image 
                  className="object-cover" 
                  alt="Abstract blue and white digital network connections visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7C15oy6xNDO2r4wNA0OwIrbxKB_ZqpX6F_lCacondMHQoSA0yv0tnKDzNKXaM8olfNkZYN6kmDUKUIyVdTkwpznCCbfMZAcrE3UJfDBY1Wv_fZhDhxDnQQsf-Z9N9n6cnFq2Jv2TymgXjc8sIQ-QxujXgSg1H-Kxmz4bFYWuHLT1fuhTPCM4bvNgdU0T1lVlrPXsg-ShCKXgzFKLOnjlgs6dLjB3foPDVt0JcRZdgTHGUrAFtlkvM8Ghq1Q0ZEORl0blfa2GnUzC"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black font-headline mb-6 text-brand-cream leading-none">Consultoría<br/>Estratégica</h3>
                <p className="text-lg text-on-surface-variant max-w-md mb-8">Diseñamos el roadmap tecnológico que alinea tus objetivos de negocio con la realidad del mercado actual.</p>
                <a href="/estrategia" className="inline-flex items-center gap-2 text-brand-lemon font-bold tracking-widest uppercase hover:gap-4 transition-all">
                  Conocer más <Icon name="arrow_forward" className="w-5 h-5" />
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full group-hover:bg-brand-purple/40 transition-colors"></div>
            </div>
            <div className="bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/10">
              <div className="flex justify-between items-start">
                <Icon name="ads_click" className="w-10 h-10 text-brand-lemon" />
                <span className="text-brand-cream/40 font-space-grotesk text-xs tracking-widest">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline mb-4 text-brand-cream">Marketing Integral</h3>
                <p className="text-sm text-on-surface-variant mb-6">Campañas de performance basadas en atribución algorítmica y segmentación avanzada.</p>
                <a href="/marketing" className="inline-flex items-center gap-2 text-brand-lemon font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all">
                  Conocer más <Icon name="arrow_forward" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-surface-container-highest p-8 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/10">
              <div className="flex justify-between items-start">
                <Icon name="bolt" className="w-10 h-10 text-brand-lemon" />
                <span className="text-brand-cream/40 font-space-grotesk text-xs tracking-widest">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-black font-headline mb-4 text-brand-cream">Activaciones de Marca</h3>
                <p className="text-sm text-on-surface-variant mb-6">Experiencias físicas y digitales que generan impacto mediático y conversión real.</p>
                <a href="/activaciones" className="inline-flex items-center gap-2 text-brand-lemon font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all">
                  Conocer más <Icon name="arrow_forward" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido Social (Instagram Feed Integration) */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-brand-purple font-space-grotesk text-sm uppercase tracking-widest mb-4 block">Contenido Social</span>
              <h2 className="text-4xl md:text-5xl font-black font-headline mb-4">Así se ve BigdatIA en acción</h2>
              <p className="text-xl text-on-surface-variant max-w-lg">Procesos reales, proyectos en curso, activaciones y reflexiones estratégicas.</p>
            </div>
            <a className="text-brand-cream/60 hover:text-brand-lemon transition-colors font-space-grotesk text-sm uppercase tracking-widest border-b border-brand-cream/20 pb-2 inline-flex items-center gap-2" href="https://instagram.com/bigdatia_agency" target="_blank" rel="noopener noreferrer">
              Ver Feed Completo <Icon name="open_in_new" className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square relative group overflow-hidden border border-outline-variant/20">
              <Image 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Modern high-tech workspace" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_52gs_KQErliO9o9y1J567IKKoPE5vyfFcqk3Qk_H-FEthqZe7V2YDTZhdGISrvdHR6Z_MOjFVr0PynkFfwY6HbQQ3ZlW45YEMZnY5tpIg4dfR0hvrMgx0Ew58okNreVex68CnDGjjeFLSdSnzmSsbrbcquUSRKo6YqUCDb0KnxbVB3QHlzBWI3o4uMWIWArmOzl_6cQ4TinRQW3f1BzYDnTrIj_m3c605JZc7xGdz5OuCrwmI0hsNxCzBveLCs3GIlrjMdThs4X"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <Icon name="favorite" className="w-8 h-8 text-brand-cream mb-4" filled />
                <p className="text-brand-cream font-bold text-xl">Innovation Workshop</p>
              </div>
            </div>
            <div className="aspect-square relative group overflow-hidden border border-outline-variant/20">
              <Image 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Sleek laptop on a dark desk displaying complex data" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB65SLIrycrP6i_xrehsddUbt4QTuIPMyW9oT3dtq7wYZ5mjFN-ObFOvu8CWrfyBn_SAFTZRSX8C9SOveiVg_r0LGERPDzwQod8nvpgE5csl_mvoymN8qCik-bojPKZPIKIaIwrDQXW3fHPuxN_KoJV0QYlJegSbrlXTRcbT61BnUmUrtfguEoljUpiYhddHhWXOyUT43kvIJOHbUV5GbjQ1Hk2zjYhp9FvtnVKfaAR2CgJI8F1K-5rUx6M_RdoKypoCmETTSknzwoH"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <Icon name="favorite" className="w-8 h-8 text-brand-cream mb-4" filled />
                <p className="text-brand-cream font-bold text-xl">Data Strategy Deployment</p>
              </div>
            </div>
            <div className="aspect-square relative group overflow-hidden border border-outline-variant/20">
              <Image 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Interior of a cutting-edge server room" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp80rro4MC5Da2rApvt05GVklOAlxi8VIOfL4c1cU4QbATpDou0NodDnOVaYk32_-3yhChFpp1hC9XX9R7qq3IFlxdqLLmT-oocTK7FqSvrWO30n8YRbfkVOfzy3pU2pH90zfKxKbJscMUDGyC-dxI26zN5TCTum2NKU_yzZyuuGA8KCqYXGotBsiSN5neZGxyGT12YBfC8iR-i-XImMatYYOQqJF_GL_8Jkjy20yr7UZugCPFWwVJ2q9iSseNoT3nQays8CeQEXyz"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <Icon name="favorite" className="w-8 h-8 text-brand-cream mb-4" filled />
                <p className="text-brand-cream font-bold text-xl">Infrastructure Scalability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40 text-center flex flex-col items-center">
          <span className="text-brand-cream/30 font-space-grotesk text-xs uppercase tracking-[0.5em] mb-12 block">Partners &amp; Ecosystem</span>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-3xl font-black font-headline tracking-tighter text-brand-cream">Darrum</div>
            <div className="text-3xl font-black font-headline tracking-tighter text-brand-cream">Nueve99</div>
            <div className="text-3xl font-black font-headline tracking-tighter text-brand-cream">Four44</div>
          </div>
          <div className="mt-20 relative h-32 w-full max-w-4xl mx-auto flex items-center justify-center pointer-events-none">
            <div className="absolute w-px h-full bg-gradient-to-b from-brand-lemon/40 to-transparent"></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent"></div>
            <div className="w-4 h-4 rounded-full bg-brand-lemon blur-sm"></div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
