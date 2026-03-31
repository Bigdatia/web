import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Ecosistema() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-8rem)] flex items-center px-8 md:px-24 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary blur-[60px] opacity-15 rounded-full"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-lemon blur-[40px] opacity-10 rounded-full"></div>
          <div className="relative z-10 max-w-4xl">
            <span className="font-label text-primary-fixed uppercase tracking-[0.2em] text-[10px] font-bold mb-6 block text-center md:text-left">Alianzas Estratégicas</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-on-surface leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 text-center md:text-left">
                Un Ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed via-secondary-fixed to-tertiary">Innovación</span>
            </h1>
            <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
                Nuestra red de partners tecnológicos y estratégicos para potenciar tu crecimiento a través de la inteligencia colectiva y datos integrados.
            </p>
          </div>
        </section>

        {/* Node Visualization Section */}
        <section className="px-8 md:px-24 mb-40">
          <div className="grid grid-cols-12 gap-6 h-[400px]">
            <div className="col-span-12 md:col-span-8 relative bg-surface-container-low overflow-hidden rounded-sm group">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                alt="Ecosystem Network" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhgwET38coZksX5zlgfitbEWdKYNF6cua3BBRgDvSfGxpa42d7Vd9tK9nZBAQL3BRiOJgFotYeACBpF7QJeZzcLq8y4mTDor1FN6F6BH1bZIT6D5ccTrw4cpXIwHxHqgpO4vRb8kMWnOJCGhO9jGEmmlN_iuC_eLDIy_RNNUPre_ZiUNMIVw2Q-LfxEAhnL5VSY1S5oH-ECUxav44s7G3vvlVfA_HFyAdQwHfe9TQLox5pjTXE2VXNvxjMJmUHWVBumD288R4aNlr" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="font-headline text-3xl font-bold mb-2">Interconexión Total</h3>
                <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Latencia Cero · Sincronización Global</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-surface-container-highest p-10 flex flex-col justify-end relative border-l border-outline-variant border-opacity-20">
              <div className="absolute top-10 right-10">
                <span className="material-symbols-outlined text-primary-fixed text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              </div>
              <h4 className="text-primary-fixed font-headline text-4xl font-extrabold mb-4">99.9%</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Eficiencia operativa garantizada mediante nuestra arquitectura de integración distribuida con partners certificados.</p>
            </div>
          </div>
        </section>

        {/* Partner Grid */}
        <section className="px-8 md:px-24 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-outline-variant border-opacity-10 pb-8">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-2 tracking-tight">Ecosistema de Partners</h2>
              <p className="text-on-surface-variant">Líderes tecnológicos impulsando la próxima frontera de datos.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-xs font-label text-outline uppercase tracking-widest">Filtrar por Especialidad / 04 Aliados</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-outline-variant bg-opacity-20">
            {/* Partner 1 */}
            <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors duration-500">
              <div className="h-12 w-full mb-12 flex items-center">
                <span className="font-headline font-black text-3xl tracking-tighter text-on-surface group-hover:text-primary-fixed transition-colors">Darrum</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-20">
                Especialistas en infraestructura cloud de alta resiliencia y orquestación de contenedores para Big Data.
              </p>
              <div className="flex items-center text-primary-fixed font-label text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Ver Alianza <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
            {/* Partner 2 */}
            <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors duration-500">
              <div className="h-12 w-full mb-12 flex items-center">
                <span className="font-headline font-black text-3xl tracking-tighter text-on-surface group-hover:text-primary-fixed transition-colors">Nueve99</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-20">
                Consultora líder en transformación digital y diseño de experiencias centradas en el análisis predictivo.
              </p>
              <div className="flex items-center text-primary-fixed font-label text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Ver Alianza <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
            {/* Partner 3 */}
            <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors duration-500">
              <div className="h-12 w-full mb-12 flex items-center">
                <span className="font-headline font-black text-3xl tracking-tighter text-on-surface group-hover:text-primary-fixed transition-colors">Four44</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-20">
                Expertos en ciberseguridad avanzada y protocolos de protección de datos para entornos corporativos críticos.
              </p>
              <div className="flex items-center text-primary-fixed font-label text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Ver Alianza <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
            {/* Partner 4 */}
            <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors duration-500">
              <div className="h-12 w-full mb-12 flex items-center">
                <span className="font-headline font-black text-3xl tracking-tighter text-on-surface group-hover:text-primary-fixed transition-colors">ApexNode</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 h-20">
                Plataforma de IA generativa aplicada al procesamiento de lenguaje natural y automatización de procesos.
              </p>
              <div className="flex items-center text-primary-fixed font-label text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Ver Alianza <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="px-8 md:px-24 mb-40 bg-surface-container-lowest py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #444937 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 p-1 bg-gradient-to-br from-primary-fixed/20 to-secondary-container/20 rounded-sm">
                <img 
                  alt="Global Integration" 
                  className="w-full h-[500px] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcjcMscoHhuDFAY3I2x6b-ob1KftRrSw_Rt-yS-zWR5Hjh8prcVXBR-LnDPGzEypbT3aPgIlg-toDG8KTEGRp2tDq7QGwcEbQi-p59ajlErL2MKCv9FTGqcvCJxebFwKPMIGwP0JpHgMNHMXa49POYINVrPu8hfM1aiw7K6po78ABAx-V02kf7JAFgzodA9KYrMDDaTXynmsNlShd480O_dpVSjy_ym0SnG3IJY-8V8H6rELhopngX9cCTqltD_O9_fdpc2pc3B-pl" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-fixed/10 blur-3xl"></div>
            </div>
            <div>
              <h2 className="font-headline text-4xl font-bold mb-10 leading-tight">Integración Sin Fisuras</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center border border-outline-variant border-opacity-20">
                    <span className="material-symbols-outlined text-primary-fixed">api</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">API-First Design</h4>
                    <p className="text-on-surface-variant leading-relaxed">Nuestra arquitectura permite una conexión bidireccional instantánea con Darrum y ApexNode, asegurando que el flujo de datos sea constante y seguro.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center border border-outline-variant border-opacity-20">
                    <span className="material-symbols-outlined text-primary-fixed">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Sinergia Operativa</h4>
                    <p className="text-on-surface-variant leading-relaxed">Colaboramos con Nueve99 para integrar sus insights estratégicos directamente en nuestro motor de visualización, transformando datos brutos en decisiones tácticas.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center border border-outline-variant border-opacity-20">
                    <span className="material-symbols-outlined text-primary-fixed">shield</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Seguridad Unificada</h4>
                    <p className="text-on-surface-variant leading-relaxed">Mediante los protocolos de Four44, cada integración en nuestro ecosistema cumple con los más altos estándares de encriptación y cumplimiento normativo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 md:px-24 mb-40">
          <div className="bg-gradient-to-r from-surface-container-high to-surface-container-low p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-secondary blur-[60px] opacity-10 scale-150"></div>
            <h3 className="font-headline text-4xl md:text-5xl font-black mb-8 tracking-tighter">¿Listo para unirte al <span className="text-primary-fixed">Ecosistema</span>?</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg relative z-10">
              Buscamos aliados que compartan nuestra visión de un futuro impulsado por la precisión y la luminescencia de los datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="bg-brand-lemon text-on-primary rounded-full px-10 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_#D5FC6B] transition-all duration-300">
                Ser Partner
              </button>
              <button className="border-2 border-brand-purple rounded-full text-brand-lemon px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-purple hover:bg-opacity-10 transition-all duration-300">
                Explorar Docs
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
