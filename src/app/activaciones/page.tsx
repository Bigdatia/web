import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

export default function Activaciones() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-8 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary-container opacity-20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-fixed opacity-10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 max-w-6xl w-full text-center">
            <span className="inline-block px-4 py-1 mb-6 border border-outline-variant border-opacity-30 font-label text-xs uppercase tracking-[0.2em] text-secondary">
              Activaciones de Marca {new Date().getFullYear()}
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-black text-on-surface leading-[1.1] md:leading-[0.9] tracking-tighter mb-8">
              Experiencias <span className="text-primary-fixed">Inmersivas</span> que Conectan
            </h1>
            <p className="max-w-2xl mx-auto font-body text-xl md:text-2xl text-on-surface opacity-80 mb-12">
              Fusionamos lo físico y lo digital para generar impacto mediático y conversión real.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-primary-container text-on-primary px-10 py-5 font-headline font-bold text-lg uppercase tracking-wider rounded-full transition-all hover:scale-105 purple-glow w-full sm:w-auto">
                Iniciar Proyecto
              </button>
              <button className="border-2 border-secondary text-secondary px-10 py-5 font-headline font-bold text-lg uppercase tracking-wider rounded-full hover:bg-secondary hover:bg-opacity-10 transition-all w-full sm:w-auto">
                Ver Portafolio
              </button>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mt-24 w-full max-w-5xl relative group">
            <div className="absolute -inset-1 bg-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-surface-container-highest aspect-video w-full overflow-hidden border border-outline-variant border-opacity-15 shadow-2xl">
              <Image 
                alt="Immersive digital installation" 
                className="object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZAFqm9Hkfodlp0XtfQ3Q9Tt7oVNTlDrRc1r8IE7wDM03F7Pqg78hPH_B48AI6JmpfaBliUxzihFXRKNNBYxa75b1UlBd9IP1V62TFAIZxCpPEYe6MRtGijRWRjxWzydFSF3LGVqQrQIzs1jL3AJr3NfkCmig-QWhqvVb7no7DKqGTDAjXLzD0yhk9OrEi5Br1eocPWQxHeI0Ix-C78op_5MOOn9XfBZp-hVNwaEcUha-0TS715qD-N7kZhMQrQdlVs6EKncUMr4A8"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-on-primary cursor-pointer hover:scale-110 transition-transform">
                  <Icon name="play_arrow" className="w-10 h-10" filled />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-surface-variant bg-opacity-60 backdrop-blur-2xl flex items-center px-8">
                <div className="flex-1 h-1 bg-on-surface-variant bg-opacity-30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary-fixed"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Portfolio Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface tracking-tighter uppercase">Instalaciones</h2>
              <p className="text-secondary-fixed opacity-60 font-label tracking-widest uppercase mt-4">Precision &amp; Impact</p>
            </div>
            <div className="hidden md:block">
              <span className="text-outline-variant font-label text-sm tracking-widest">SCROLL TO DISCOVER</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Card 1 */}
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15">
              <Image 
                alt="Big Event" 
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHyOX4K9-dtDY8Sc1F6HHXzN_Fa-6qFddOYTFohDzVse1KYsgJg6NinsqkZiMIL3IqtGRtOtM7K1wFmjH19hHt8pJf_SDo3g6M6_EIaxXgm6-DTeTtt4i1VHlVmPXr5j1bFdfT6Uyd4hEpqtGN8_zieQCC2ssj4Z0_NxVK2Nnw7LKRc0qa5Xbm2nuj39BtZRZbxUOXcC82tLyTrxCHMWZbMUfGJZJPMcFkzOmrdutokkhB34m5tt8Ua2AsCdBeW2kS8garondSbcAC"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2 block">Campaña Global</span>
                <h3 className="font-headline text-4xl font-black text-on-surface uppercase mb-4">Cyber-Punk Activation</h3>
                <p className="text-on-surface-variant max-w-md">Transformación de espacios urbanos en entornos digitales interactivos para el lanzamiento de flagship stores.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15">
              <Image 
                alt="VR Experience" 
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbuLaKVPf7rq7TaiP5KCpv9DMZUSE60vbvDwv4bgVQG_HNBwnveZxIkGx-8I1UNrDQZs9KOAn1pL5QUYVbyaTQ43WfZ3fCRgXrh-lmefsRDVuzCkHVQmvcuI-_Lk3LP4aMRuhadD868KBb7GL-MSog-i8MTbkHS9uH9SkcLRDnDDCt4ZO9G-_Ub5ltOpbpeqxsuJbV8VXRawtWcbUutzcYGk0l0C4XX27Uc5eaxU_VJvvdM9mfp3pKmV3Qdi9_NvNHLdw9aXZqlA5A"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-6 right-6 font-label text-xs text-secondary-fixed">2024 / TECH</div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-xl font-bold text-on-surface uppercase">VR Eco-Systems</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-container-highest border border-outline-variant border-opacity-15">
              <Image 
                alt="Neon Installation" 
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5qvPq_mPyG6aWc35etvURPoCxTlFtnzVlMtJ3nMM5QnQBs4QBbEq_nDT4nCM_EiJDtNtSZktmxtGYawDbSdd6dwGxVQ9nsbUGR7dV9VPD9LuOPpzfC0CSlQCrTXMZFeMk6uNdJBIq-O0qIqglHWnOnywlTF8um7mAnijgPcz4Fk0szRkpkr1gfdIhAS_gY4ulV4pG0XdC1D1Jfu62tQc7BHhYL94g8ILpZs9K0D9H5wPpN6Za9zT9-8RZq9ETkJHFS4_1w5kbg9Ua"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-xl font-bold text-on-surface uppercase">Phygital Pop-ups</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-12 md:row-span-1 bg-surface-container-highest border border-outline-variant border-opacity-15 p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -right-20 top-0 w-64 h-64 bg-secondary opacity-10 blur-3xl"></div>
              <div className="flex items-center gap-12">
                <div>
                  <div className="font-display text-4xl font-black text-primary-fixed">98%</div>
                  <div className="font-label text-xs text-on-surface-variant tracking-widest mt-1">BRAND RECALL</div>
                </div>
                <div className="h-16 w-px bg-outline-variant opacity-30 hidden md:block"></div>
                <div>
                  <div className="font-display text-4xl font-black text-secondary">4.2M</div>
                  <div className="font-label text-xs text-on-surface-variant tracking-widest mt-1">SOCIAL REACH</div>
                </div>
              </div>
              <p className="max-w-md text-on-surface-variant text-sm md:text-right italic">
                &quot;BigdatIA ha redefinido lo que significa interactuar con nuestra marca. El impacto en redes sociales superó todas las proyecciones.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface uppercase tracking-tighter">Nuestro Proceso</h2>
              <p className="mt-4 text-on-surface-variant font-body text-lg">De la neurona a la activación física.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">01</div>
                <h3 className="font-headline text-2xl font-black text-primary-fixed uppercase mb-4 tracking-tight">Strategy</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Analizamos el ADN de la marca y el comportamiento de la audiencia para definir el concepto y KPIs.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">Data Analysis</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">Persona Mapping</span>
                </div>
              </div>
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">02</div>
                <h3 className="font-headline text-2xl font-black text-secondary uppercase mb-4 tracking-tight">Creation</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Diseñamos el ecosistema inmersivo: hardware, software, arte digital y escenografía integrada con tecnología.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">3D Rendering</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">UX Design</span>
                </div>
              </div>
              <div className="relative group">
                <div className="mb-8 font-display text-6xl font-black text-outline-variant opacity-10 group-hover:opacity-30 transition-opacity">03</div>
                <h3 className="font-headline text-2xl font-black text-primary-fixed uppercase mb-4 tracking-tight">Execution</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Producción técnica de alto nivel, despliegue en campo y monitoreo de datos en tiempo real.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">Real-time Analytics</span>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant border-opacity-20 text-[10px] uppercase font-label">Live Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
