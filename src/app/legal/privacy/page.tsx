import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 md:pb-0 max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-black font-headline tracking-tighter mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-on-surface-variant">
          <p className="text-sm uppercase tracking-widest text-brand-lemon font-space-grotesk">Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</p>
          
          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">1. Información que Recopilamos</h2>
          <p>En BigdatIA, recopilamos información personal que usted nos proporciona directamente, como su nombre, correo electrónico y número de contacto, cuando utiliza nuestros formularios de contacto o solicita nuestros servicios.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">2. Uso de la Información</h2>
          <p>Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios de consultoría estratégica, marketing y activaciones de marca. Nunca vendemos su información personal a terceros.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">3. Protección de Datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">4. Contacto</h2>
          <p>Para cualquier consulta relacionada con esta política de privacidad, contáctenos a través de WhatsApp al +57 316 415 1731 o visite nuestras oficinas en Bucaramanga, Colombia.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
