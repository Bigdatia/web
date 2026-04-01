# Integración de Textos Corporativos en BigdatIA

El objetivo de este plan es reestructurar los contenidos de la página principal (`src/app/page.tsx`) y el pie de página (`src/components/layout/Footer.tsx`) para incorporar con precisión los nuevos copys entregados por el equipo directivo. Esto requerirá no solo reemplazar textos, sino agregar nuevas secciones manteniendo el diseño estético de alto impacto (oscuro, neones, grillas tipo bento).

## Cambios Propuestos

### Componente: `src/app/page.tsx`
Se realizarán las siguientes modificaciones y adiciones en la estructura de la landing page:

1. **[MODIFY] Hero Section**
   - Actualización del título a: *"Tomamos decisiones empresariales con datos, estrategia y ejecución real."*
   - Reemplazo del párrafo descriptivo inferior.
   - Cambio de los textos de los botones a: *"Hablemos de tu empresa"* y *"Agenda una consultoría"*.
   - El video actual de YouTube se mantendrá intacto.

2. **[MODIFY] Bloque de Credibilidad / Datos**
   - Se agregará un encabezado introductorio: *"No hablamos desde la teoría. Hablamos desde la experiencia."*
   - Se adaptarán las métricas para mostrar:
     - *+50* Empresas acompañadas
     - *+100* Proyectos estratégicos ejecutados
     - *100%* Equipos multidisciplinarios (ajustando para conservar el grid de 3 columnas numéricas).
   - Se agregarán subtextos que hablen de experiencia con pymes y marcas consolidadas.

3. **[MODIFY] Servicios Principales (Bento Box)**
   - Se cambiarán los textos base de las tres tarjetas actuales:
     - Tarjeta 1: *Consultoría Empresarial & Estratégica*
     - Tarjeta 2: *Marketing Integral & Estrategia Digital*
     - Tarjeta 3: *Activaciones de Marca & Producción Audiovisual*
   - A cada tarjeta se le agregará su respectivo enlace/CTA integrado ("👉 Hablar con un consultor", etc.).

4. **[NEW] Sección: Marcas que han confiado**
   - Se creará una banda/marquee tipográfica para mostrar las marcas: *Jugalista, Tu licorera, Gatorade, Adams realty*. Similar a cómo se presentaba el antiguo bloque de Ecosistema pero con estética de "Trusted By".

5. **[MODIFY] Nuestro Ecosistema**
   - Se actualizará la sección existente de nombres de partners (Darrum, Nueve99, Four44). 
   - Se agregarán los párrafos de apoyo: *"Trabajamos con aliados que fortalecen cada proyecto..."* y *"Creemos en la inteligencia colectiva..."*.

6. **[NEW] Servicios Específicos**
   - Una nueva sección en formato de grilla minimalista (o bloques de lista) con todos los servicios listados (Branding, Streaming, Google My Business, Podcast, etc.).
   - Terminará con el texto explicativo y el botón: *"👉 Cotizar un servicio"*.

7. **[NEW] Bloque de Conversión**
   - Banner llamativo (probablemente utilizando los tonos de *brand-purple* o *brand-lemon*) enfocado en la duda del cliente: *"¿No sabes exactamente qué necesitas?"*.
   - Botón CTA principal: *"Agenda tu consultoría"*.

8. **[MODIFY] Contenido Social (Instagram Feed)**
   - Cambio de títulos del bloque ("Así se ve BigdatIA en acción" / "Procesos reales, proyectos en curso..."). La grilla de imágenes se mantendrá porque ilustra la acción.

9. **[NEW] Frase de Cierre / Manifiesto**
   - Justo antes del final, un gran bloque tipográfico de impacto centrado con el manifiesto: *"Las empresas que crecen no son las que hacen más ruido, son las que toman mejores decisiones..."*.

---

### Componente: `src/components/layout/Footer.tsx`

1. **[MODIFY] Estructura de Contacto**
   - Limpieza del footer actual.
   - Adición de la tarjeta de contacto oficial: 
     - 📍 Bucaramanga, Colombia
     - 📞 WhatsApp
   - Conservaremos enlaces básicos ("Síguenos en redes | Políticas | Términos y condiciones").

## User Review Required

> [!IMPORTANT]
> - ¿Te parece bien que la sección de **"Marcas que han confiado"** sea un listado horizontal elegante solo en tipografía? (Dado que no poseo logotipos para cargar).
> - Respecto al bloque de **Credibilidad**, actualmente tengo 3 números grandes (ej. +50, +100, 12M). Planeo poner (+50 empresas, +100 proyectos, y el tercer bloque podría ser "3 Áreas Multidisciplinarias" para conservar el diseño estético de 3 columnas numéricas). ¿Estás de acuerdo con este balance?
> - ¿Tienes un número telefónico/enlace de WhatsApp real para reemplazar los 'XXX XXX XXXX', o lo puedo dejar con ese placeholder temporalmente?

## Verification Plan
1. Inyectaremos todos los contenidos verificando que la jerarquía HTML y semántica sea correcta.
2. Comprobaremos estéticamente que las nuevas secciones (`Servicios Específicos`, `Manifiesto`, `Conversión`) combinen armónicamente con la landing actual para que todo el scroll fluya como una experiencia continua de alta calidad.
