import NavigationBar from "@/components/navigation-bar";
import PricingTable from "@/components/pricing-table";
import BulletList from "@/components/bullet-list";
import React from "react";


export default function Page() {
  const webDesignPricing = {
    included: [
      "Hero: Sección de entrada con imagen o ilustración destacada, headline y subtítulo.",
      "CTA (Call to Action): llamado claro a acción (botón de contacto, cotización, jetc.).",
      "Portfolio / Galería.",
      "Sección de servicios detallados.",
      "FAQ (Frequenct Asked Questions): Preguntas frecuentes.",
      "Footer: Información de contacto, redes y avisos legales.",
      "SEO básico: Optimización para buscadores (etiquetas, títulos, metadescripciones).",
      "Traducción inglés/español incluída.",
    ],
    table: [
      { service: "Copywriting", price: "$100 / sección", },
      { service: "Formularios extra (a partir del 4° formulario)", price: "$100 / formulario adicional" },
      { service: "Testimonios", price: "$100 MXN" },
      { service: "Precios / Cotizador simple", price: "$250 MXN" },
      { service: "Telemetría avanzada (eventos personalizados, heatmaps)", price: "$250 configuración inicial + $100 / mes" },
      { service: "Sistema de citas / reservas online con sincronización Google Calendar", price: "$400 MXN" },
      { service: "Traducción adicional (5 idiomas)", price: "$400 MXN / web" },
      { service: "Landing page para compañas (incluye SEO y un formulario específico)", price: "$700 MXN / landing" },
      { service: "Integración de pasarela de pago (Stripe, MercadoPago)", price: "$700 MXN / integración" },
      { service: "Sesión fotográfica profesional (local, hasta 25 fotos editadas)", price: "$800 (única vez)" },
    ],
  };

  const hostingPricing = {
    included: [
      "Telemetría básica (visitas, rebote, geografía) + reportes mensuales automáticos",
      "Hasta 3 formularios con notificaciones a correo.",
      "Seguridad SSL incluída.",
      "Copias de seguridad mensuales.",
    ],
    table: [
      //{ service: "SEO Avanzado (auditoría + acciones)", price: "$1,200 MXN / mes", },
      //{ service: "Bots Whatsapp + Telegram", price: "$800 MXN / configuración inicial + $200 MXN / mes" },
      { service: "Mantenimiento web", price: "$300 MXN / mes (actualización de contenidos y seguridad)", },
      { service: "Acceso CMS (editor visual, sin código)", price: "$500 / año" },
    ],
  };


  const seoPricing = {
    included: [
      "Auditoría SEO inicial (análisis de tu sitio web y competidores).",
      "Optimización on-page (títulos, metadescripciones, imágenes, estructura).",
      "SEO técnico (velocidad, indexación, estructura de URLs).",
      "Estrategia de palabras clave (selección de términos con alto potencial).",
      "Indexación en Google Search Console.",
      "Configuración y optimización de Google My Business (si aplica).",
      "Informe mensual con resultados y recomendaciones.",
    ],
    table: [
      { service: "Diseño de Ads (Facebook/Instagram/Google)", price: "$250 MXN / ad", },
      { service: "Mail marketing (hasta 2,000 contactos)", price: "$300 MXN / mes", },
      { service: "Branding express. Asesoría de marca y tono (Entrega en PDF con voz, tono y personalidad recomendada).", price: "$1,000 MXN" },
    ],
  };

  return (
    <>
      {/* Nav Section */}
      <section>
        <NavigationBar sections={[
          { label: "Diseño web", href: "#webdesign" },
          { label: "Hosting web", href: "#webhosting" },
          { label: "SEO y Ads", href: "#seoads" },
        ]} />
      </section>

      {/* Web Services Section*/}
      <section id="webdesign" className="section">
        <div className="space-y-8">
          <div className="grid gap-4 text-center">
            <h2 className="h2">📐 Diseño Web: Aumente su presencia en línea</h2>
            <p className="p">Desde $2,100 MXN. Incluye: </p>
          </div>

          <BulletList items={webDesignPricing.included} />
          <PricingTable services={webDesignPricing.table} />

        </div>
      </section>

      {/* Web Hosting Section */}
      <section id="webhosting" className="section">
        <div className="space-y-8">
          <div className="grid gap-4 text-center">
            <h2 className="h2">🌐 Hosting Web: Garantía de 99.9% de uptime</h2>
            <p>Precio anual: $2,100 - $5,000 MXN (depende del tráfico y espacio). Incluye:</p>
          </div>

          <BulletList items={hostingPricing.included} />
          <PricingTable services={hostingPricing.table} />

        </div>
      </section>

      {/* SEO and Ads Section */}
      <section id="seoads" className="section">
        <div className="space-y-8">
          <div className="grid gap-4 text-center">
            <h2 className="h2"> 📢 SEO: Asegura que te Encuentren en Google </h2>
            <p>Optimización para aparecer en los primeros resultados de búsqueda y atraer clientes organicamente. Apartir de $1,200 / mes. Incluye:</p>
          </div>

          <BulletList items={seoPricing.included} />
          <PricingTable services={seoPricing.table} />

        </div>

      </section>
    </>
  );
};