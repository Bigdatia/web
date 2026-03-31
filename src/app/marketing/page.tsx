import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Marketing() {
  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <header className="relative min-h-[calc(100vh-8rem)] flex items-center px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-secondary-container blur-[120px] rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-primary-container blur-[150px] rounded-full opacity-10"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-8xl font-headline font-extrabold tracking-[-0.03em] leading-[1.1] md:leading-none mb-8 text-center lg:text-left">
                Marketing con <br className="hidden md:block" /> <span className="text-primary-container">Inteligencia Algorítmica</span>
              </h1>
              <p className="text-lg md:text-2xl text-on-surface/70 font-light max-w-xl leading-relaxed mb-12 text-center lg:text-left mx-auto lg:mx-0">
                Despliégue campañas de performance basadas en atribución algorítmica de precisión cuántica. El fin del desperdicio publicitario.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-primary-container text-on-primary rounded-full px-10 py-4 font-headline font-black uppercase text-sm tracking-widest hover:shadow-[0_0_20px_rgba(213,252,107,0.4)] transition-all w-full sm:w-auto">
                  INICIAR AUDITORÍA
                </button>
                <button className="border-2 border-secondary text-secondary rounded-full px-10 py-4 font-headline font-black uppercase text-sm tracking-widest hover:bg-secondary/10 transition-all w-full sm:w-auto">
                  VER ECOSISTEMA
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary-container opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-surface-container-highest aspect-video overflow-hidden border border-outline-variant/20 shadow-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Futuristic data visualization of high-frequency trading neural networks" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0upJvKd0b_WFqQVomGX5L2XpWAbYUPT45ws6uGYUwzs7Cyn6bdu9yg3WuiYi229GtkYPbwHflxsQQSHNOeHqDSlw0pgag9tsY7isUjp5JMMDyUfLXzeOenoz489WbpAIo_e3l34LEQcn0Pves7Ze2sA8Rry3NcyBa2lhmC6IV9BU5NKsRYdZCpyn1rmgdW9ZbkK4hQeBFvHLxZbWSNPHchjGXsR2W9fUaCi-qY0c5UzNELZl-ZzbBOwZUyrPgDBkzCEab7Tu9AMf4" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid Features */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 tracking-tighter uppercase">Engineered for Dominance</h2>
                <p className="text-on-surface/50 font-label uppercase tracking-widest text-sm">Proprietary Algorithmic Layers</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
              {/* Card 1 */}
              <div className="md:col-span-8 bg-surface-container-highest p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 z-20">
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/40">Status: Predictive_On</span>
                </div>
                <div className="h-full flex flex-col justify-end relative z-10">
                  <span className="material-symbols-outlined text-primary-container mb-4 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                  <h3 className="text-3xl font-headline font-extrabold mb-2 uppercase italic tracking-tighter">Predictive Audiences</h3>
                  <p className="text-on-surface/60 max-w-md">Modelado de comportamiento futuro basado en grafos de probabilidad profunda. Anticipamos la intención de compra antes que el usuario.</p>
                </div>
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  alt="Abstract 3D data architecture" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxG9LpOhofCKAAZQ3OnLopFkDmCalahD9TpMBlnbNi28ti8iXLwfBIK2Y4px9eLCpWB1PX3RuF3aUQBOOkS8vdc6kXgMjjQBtHlk1oCawQy55-E57DF-0b5ZWl4t3Ek03e04H73SHP_KMynqQE2prVRI7nLDzajzAtAKg4KKp1slN1zFrKSHty78JzQRgRRMzJ6u5RYsE6iYxha_CHw6BZj1ULC0WP5g3lvRk8pnMiH15Lbac0AtDvgt_2IFrL2X1EbJxiQk085KVy" 
                />
              </div>
              {/* Card 2 */}
              <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between border-l-4 border-secondary purple-glow-underlay">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-6">timer</span>
                  <h3 className="text-2xl font-headline font-bold mb-4 leading-tight uppercase tracking-tight">Optimización Real-time</h3>
                  <p className="text-on-surface/60 text-sm">Ajustes de puja cada 60 segundos mediante redes neuronales recurrentes para maximizar inventario premium.</p>
                </div>
                <div className="mt-8">
                  <div className="text-4xl font-headline font-black text-primary-container italic">60s</div>
                  <div className="text-[10px] uppercase tracking-widest text-on-surface/40 mt-1">Bidding Frequency</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="md:col-span-4 bg-surface-container p-8 flex flex-col justify-between border border-outline-variant/10">
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tight">ROI Attribution</h3>
                  <p className="text-on-surface/60 text-sm">Desfragmentación de rutas de conversión para una precisión del ROI del 99.8%. Cero duplicidad.</p>
                </div>
                <div className="bg-surface-container-lowest p-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-on-surface/50 font-label uppercase">Precision accuracy</span>
                    <span className="text-primary-container font-headline font-bold italic">99.8%</span>
                  </div>
                  <div className="w-full bg-on-surface/10 h-1">
                    <div className="bg-primary-container h-full w-[99.8%] shadow-[0_0_8px_#caf161]"></div>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="md:col-span-8 bg-[#1C1C1A] p-8 flex flex-col lg:flex-row gap-8 items-center border border-outline-variant/10 relative group overflow-hidden">
                <div className="lg:w-1/2 z-10">
                  <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tight">Visualización Cuántica</h3>
                  <p className="text-on-surface/60 text-sm mb-6">Dashboards inmersivos capaces de renderizar miles de millones de puntos de datos en milisegundos.</p>
                  <button className="text-primary-container font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Open Console <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="lg:w-1/2 relative">
                  <img 
                    className="rounded shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity" 
                    alt="High tech server room with glowing fiber optic cables" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4IRheU1Zq5kFBpYlyzlnmnWJgLMIn8hIU8l9PfvSb2Co0D9gY7BdXQ9YzwYZmjerepdmIEYH6Wv6zZnh_my8gXPpT2xMxHPaWkN_kdcIdSRJhpQ-2yHD_5FKlWIlGwh0YFg7sS-vrKugifPU8S3XA7kSgRh1fvMn9dWb9pJvhb1QPEDXrE51OS51BTtOg35ptL3FdBH_sI0UOobqEIsAgdPlmf9V5zEUqyQ89iSA_RXErrL_lEVKc7krlb0NLLufyG4D6GYotfgW" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-secondary p-4 text-on-secondary font-headline font-bold text-xs uppercase tracking-tighter">
                    Billion Data Points / sec
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-32 px-8 overflow-hidden bg-surface relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 border border-secondary/20 rounded-none transform -rotate-1"></div>
                <div className="relative bg-surface-container-highest p-2">
                  <img 
                    className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700 cursor-crosshair" 
                    alt="Conceptual fintech interface" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQKwYIq-xhV0BOXGBrqbdKKdyCGPofnmXE4ub84pS3ajeOAFH3jcb__dXhPae-_-VBXAd8Vmalvmh4l2Q-6-LTH-69FVAjUU4cdb4Fx39Si_SzjIVgyDzIQgcK422IZdvV3dLRPEpgCOvk3mgxsxRARS4UstCgfJrINsiGwaj91lMV4MVTKX_qNCib6IqUs_4Y1MYGGGTMBQiCP_WrK6gRg66IA-YQ6AnLCO_KancDKjOoxTia41j2XPSIlFKlyigP6vtfvlheSnJ" 
                  />
                  <div className="absolute top-8 left-8 bg-surface-container-lowest/90 backdrop-blur px-6 py-4 border border-outline-variant/20">
                    <p className="text-[10px] text-on-surface/40 uppercase mb-1 font-label">Result Metric</p>
                    <p className="text-3xl font-headline font-black text-primary-container italic leading-none">+240%</p>
                    <p className="text-[10px] text-on-surface/70 uppercase font-bold tracking-widest">Conversion Lift</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-[10px] uppercase font-bold tracking-[0.3em] mb-8">
                  Case Study 021
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 tracking-tighter uppercase leading-tight">
                  Escalando el futuro de las <span className="text-secondary italic">Fintech</span>
                </h2>
                <p className="text-xl text-on-surface/70 mb-10 leading-relaxed italic border-l-2 border-primary-container pl-6">
                  "El despliegue de BigdatIA redefinió nuestra estructura de adquisición, reduciendo el CAC en un 45% en menos de un trimestre fiscal."
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm font-label uppercase tracking-widest text-on-surface/50">
                    <span className="w-8 h-px bg-outline-variant"></span>
                    Client: NeoBank Global
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low border border-outline-variant/10">
                      <p className="text-[10px] text-primary-container font-bold mb-2 uppercase">Core Algorithm</p>
                      <p className="font-headline font-bold text-sm">Hyper-Targeting V4</p>
                    </div>
                    <div className="p-4 bg-surface-container-low border border-outline-variant/10">
                      <p className="text-[10px] text-secondary font-bold mb-2 uppercase">Data Architecture</p>
                      <p className="font-headline font-bold text-sm">Quantum-Stream X</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="py-32 px-8 bg-primary-container text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-on-primary/5 -skew-x-12 translate-x-32"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-headline font-black mb-8 uppercase tracking-tighter leading-none">
                ¿Listo para la precisión absoluta?
            </h2>
            <p className="text-lg md:text-xl font-medium mb-12 opacity-80 max-w-2xl mx-auto uppercase tracking-wide">
                Solicita una Demo del Algoritmo y experimenta el poder de la data sin fricción.
            </p>
            <form className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto group">
              <input 
                className="flex-grow rounded-t-full md:rounded-l-full md:rounded-tr-none bg-on-primary/10 border-2 border-on-primary/30 px-6 py-5 text-on-primary placeholder:text-on-primary/40 font-headline font-bold uppercase tracking-widest focus:ring-0 focus:border-on-primary outline-none transition-all" 
                placeholder="TU@EMAIL.COM" 
                type="email"
              />
              <button 
                className="bg-on-primary rounded-b-full md:rounded-r-full md:rounded-bl-none text-primary-container px-10 py-5 font-headline font-black uppercase tracking-tighter text-lg hover:bg-on-primary/90 transition-all active:scale-95" 
                type="submit"
              >
                EMPEZAR AHORA
              </button>
            </form>
            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] font-black opacity-40">
                Lumina Intelligence © Protocolo {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
