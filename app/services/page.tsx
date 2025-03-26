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
      { service: "Testimonios", price: "$350 MXN" },
      { service: "Blog / Noticias", price: "$700 MXN" },
      { service: "Precios / Cotizador simple", price: "$600 MXN" },
      { service: "Mapa interactivo", price: "$400 MXN" },
      { service: "Timeline / Historia", price: "$350 MXN" },
      { service: "Sistema de citas / reservas online con sincronización Google Calendar", price: "$1,800 MXN" },
      { service: "Landing page para compañas (incluye SEO y un formulario específico)", price: "$1,200 MXN / landing" },
      { service: "Asesoría de marca y tono (Branding express. Entrega en PDF con voz, tono y personalidad recomendada).", price: "$1,000 MXN" }
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
      { service: "Mail marketing (hasta 2,000 contactos)", price: "$800 MXN / mes", },
      { service: "Mantenimiento web", price: "$700 MXN / mes (actualización de contenidos y seguridad)", },
      { service: "Copywriting", price: "$150 / sección", },
      { service: "Diseño de Ads (Facebook/Instagram/Google)", price: "$250 MXN / ad", },
      { service: "SEO Avanzado (auditoría + accioens)", price: "$1,200 MXN / mes", },
      { service: "Telemetría avanzada (eventos personalizados, heatmaps)", price: "$700 / mes" },
      { service: "Sesión fotográfica profesional (local, hasta 25 fotos editadas)", price: "$2,500 (única vez)" },
      { service: "Bots Whatsapp + Telegram", price: "$1,200 MXN / configuración inicial + $200 MXN / mes" },
      { service: "Acceso CMS (editor visual, sin código)", price: "$1,500 / año" },
      { service: "Formularios extra (a partir del 4° formulario)", price: "$150 / formulario adicional" },
      { service: "Traducción adicional (5 idiomas)", price: "$1,500 MXN / web" },
      { service: "Integración de pasarela de pago (Stripe, MercadoPago)", price: "$1,200 MXN / integración" },
    ],
  };


  const seoPricing = {
    table: [],
    included: [
      "Auditoría SEO inicial (análisis de tu sitio web y competidores).",
      "Optimización on-page (títulos, metadescripciones, imágenes, estructura).",
      "SEO técnico (velocidad, indexación, estructura de URLs).",
      "Estrategia de palabras clave (selección de términos con alto potencial).",
      "Indexación en Google Search Console.",
      "Configuración y optimización de Google My Business (si aplica).",
      "Informe mensual con resultados y recomendaciones.",
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
            <h2 className="h2">📐 Diseño Web</h2>
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
            <p>Optimización para aparecer en los primeros resultados de búsqueda y atraer clientes organicamente. Incluye:</p>
          </div>

          <BulletList items={seoPricing.included} />

        </div>

      </section>
    </>
  );
};