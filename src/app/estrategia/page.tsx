import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

export default function Estrategia() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-8rem)] flex items-center px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-secondary-container/30 to-transparent"></div>
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent blur-[120px]"></div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-highest border-l-2 border-primary-container mx-auto lg:mx-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Intelligence Strategy 2024</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black font-headline leading-[1.1] md:leading-[0.9] tracking-tighter text-on-surface text-center lg:text-left">
                Consultoría Estratégica que <span className="text-primary-container">Escala</span> Negocios
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Diseñamos el roadmap tecnológico que alinea tus objetivos de negocio con la realidad del mercado actual.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-primary-container text-on-primary-container rounded-full px-10 py-5 font-bold text-lg hover:shadow-[0_0_20px_rgba(213,252,107,0.4)] transition-all w-full sm:w-auto">
                  Solicitar Auditoría
                </button>
                <button className="border-2 border-secondary text-secondary rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary/10 transition-all w-full sm:w-auto">
                  Ver Metodología
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative aspect-square surface-container-highest overflow-hidden border border-outline-variant/15">
                <Image 
                  alt="Data visualization interface" 
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKMMd0XxoWLWbIX-fhEj64SCN-zg9o0gkbMaMvX0vWgkdReSwz5kWMEtKtqAIQ0Zw1WKCszB1ORLoIzDQ4fwkhkCDCzAYTKAS5OMKxtUgkl8695uc0lk7-swYuF7ByBWJICiMWu2zp8bF0B8Obhg3VwgpcfB6RGy_wjKBIoWHIGOsr8IrxsVT29REr8LSrKUAuaBkris1tYiDUV_F6oQ5LZg9gmsopUjqpw99I80KhyuDZSsMqFZ3MJv2_3eveN_8IL4oi5RsxICOt"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-l-4 border-primary-container">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-60">Real-time Analysis</span>
                    <Icon name="trending_up" className="w-5 h-5 text-primary-container" />
                  </div>
                  <div className="text-3xl font-black mt-2 font-headline text-on-surface">94.8%</div>
                  <div className="text-sm opacity-60">Accuracy in predictive modeling</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black font-headline mb-4 uppercase tracking-tighter">Metodología de <span className="text-primary-container">Impacto</span></h2>
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
                    <h3 className="text-2xl font-bold font-headline">Exploration</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Auditamos profundamente tus sistemas actuales para identificar silos de información y oportunidades de optimización latentes.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> Data Mining
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> Market Gap Analysis
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
                    <h3 className="text-2xl font-bold font-headline">Architecture</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Diseñamos la infraestructura de datos y el modelo de gobernanza que servirá como base para el crecimiento exponencial.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-secondary-fixed-dim uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> System Design
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-secondary-fixed-dim uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> Tech Stack Alignment
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
                    <h3 className="text-2xl font-bold font-headline">Execution</h3>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Implementación ágil con monitoreo constante para asegurar que cada acción se traduzca en valor de negocio medible.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> Agile Deployment
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-primary-container/80 uppercase tracking-tighter">
                    <Icon name="check_circle" className="w-5 h-5" /> KPI Monitoring
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
              {/* Metric 1 */}
              <div className="md:col-span-2 bg-surface-container-highest p-8 flex flex-col justify-between border-l-8 border-primary-container">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest uppercase text-primary-container">Optimization</span>
                    <Icon name="payments" className="w-6 h-6 text-primary-container" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mt-4">ROI Optimization</h3>
                </div>
                <div className="mt-8">
                  <div className="text-5xl font-black font-headline text-primary-container">+45%</div>
                  <div className="text-sm text-tertiary-fixed-dim mt-2 uppercase tracking-widest">Historical Average Growth</div>
                </div>
              </div>
              {/* Metric 2 */}
              <div className="bg-secondary-container p-8 flex flex-col justify-between text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <Icon name="bolt" className="w-8 h-8" />
                  <h3 className="text-xl font-bold font-headline mt-4 leading-tight">Decision Speed</h3>
                </div>
                <div className="relative z-10 mt-8">
                  <div className="text-4xl font-black font-headline">3x</div>
                  <div className="text-xs opacity-70 uppercase mt-1 tracking-widest">Faster Time-to-Market</div>
                </div>
              </div>
              {/* Visual */}
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
                  <div className="text-xs font-bold uppercase tracking-widest">Infra Efficiency</div>
                </div>
              </div>
              {/* Metric 3 */}
              <div className="bg-surface-container p-8 flex flex-col justify-between border border-outline-variant/15">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Data Quality</span>
                </div>
                <div>
                  <div className="text-4xl font-black font-headline text-on-surface">99.9%</div>
                  <div className="text-xs text-on-surface-variant mt-2">Information Reliability</div>
                </div>
              </div>
              {/* Strategy Map */}
              <div className="md:col-span-3 bg-surface-container-high p-8 flex items-center justify-between group overflow-hidden">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold font-headline mb-4">Integración Ecosistémica</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Conectamos todos los puntos de contacto de tu negocio mediante inteligencia artificial para una visión 360 real.</p>
                  <button className="mt-6 flex items-center gap-2 text-primary-container font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                    Explorar Ecosistema <Icon name="arrow_forward" className="w-5 h-5" />
                  </button>
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
              <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase">Roadmap <span className="text-secondary">Estratégico</span></h2>
              <p className="text-on-surface-variant mt-4 max-w-xl">Fases críticas para la transformación integral de su infraestructura digital.</p>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-8 md:left-1/2 w-0.5 h-full bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-24">
                {/* Phase 1 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                  <div className="w-full md:w-[45%] order-2 md:order-1">
                    <div className="glass-card p-8 border-l-4 border-primary-container hover:bg-surface-container-highest transition-colors">
                      <span className="text-primary-container font-bold text-xs uppercase tracking-widest">Semana 1-4</span>
                      <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">Data Audit &amp; Blueprint</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Análisis exhaustivo de la arquitectura actual y definición de los KPIs de éxito estratégico.</p>
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
                      <span className="text-secondary font-bold text-xs uppercase tracking-widest">Semana 5-12</span>
                      <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">Core Transformation</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Migración a sistemas descentralizados e integración de capas de inteligencia artificial personalizada.</p>
                    </div>
                  </div>
                </div>
                {/* Phase 3 */}
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                  <div className="w-full md:w-[45%] order-2 md:order-1">
                    <div className="glass-card p-8 border-l-4 border-primary-container hover:bg-surface-container-highest transition-colors">
                      <span className="text-primary-container font-bold text-xs uppercase tracking-widest">Semana 13+</span>
                      <h4 className="text-2xl font-bold font-headline mt-2 mb-4 text-on-surface">Continuous Optimization</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Escalamiento de operaciones y ajuste de modelos predictivos basados en feedback de mercado real.</p>
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
            <h2 className="text-4xl md:text-6xl font-black font-headline mb-8 uppercase tracking-tighter leading-none">
              ¿Listo para redefinir tu <br/> <span className="text-primary-container">Futuro Digital</span>?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Nuestras auditorías han ayudado a empresas Fortune 500 a identificar más de $500M en oportunidades de eficiencia operativa.
            </p>
            <div className="flex justify-center">
              <button className="bg-primary-container text-on-primary-container rounded-full px-12 py-6 font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(213,252,107,0.2)]">
                SOLICITAR AUDITORÍA ESTRATÉGICA
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
