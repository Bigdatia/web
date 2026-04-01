import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 md:pb-0 max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-black font-headline tracking-tighter mb-8">Términos y Condiciones</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-on-surface-variant">
          <p className="text-sm uppercase tracking-widest text-brand-lemon font-space-grotesk">Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</p>
          
          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar el sitio web de BigdatIA, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestro sitio.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">2. Servicios</h2>
          <p>BigdatIA ofrece servicios de consultoría estratégica, marketing digital y activaciones de marca. Los detalles específicos de cada servicio se acuerdan individualmente con cada cliente.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">3. Propiedad Intelectual</h2>
          <p>Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, íconos y software, es propiedad de BigdatIA y está protegido por las leyes de propiedad intelectual colombianas e internacionales.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">4. Limitación de Responsabilidad</h2>
          <p>BigdatIA no será responsable de daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de nuestros servicios o sitio web.</p>

          <h2 className="text-2xl font-bold font-headline text-on-surface mt-12">5. Contacto</h2>
          <p>Para preguntas sobre estos términos, contáctenos a través de WhatsApp al +57 316 415 1731 o visite nuestras oficinas en Bucaramanga, Colombia.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
