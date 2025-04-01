export const services = [
    //{
    //title: "Web Design",
    //description: "Beautiful, responsive websites that engage your audience and drive conversions.",
    //icon: "💻",
    //href: "/articles/web_design",
    //},
    {
        title: "Diseño Web",
        //description: "Reliable and secure hosting solutions with 99.9% uptime guarantee.",
        //description: "Beautiful, responsive websites that engage your audience and drive conversions.",
        description: "Diseñamos su página web para convertir visitantes en clientes. Optimizada para SEO y dispositivos móviles.",
        icon: "🌐",
        href: "/services/webdesign",
    },
    {
        title: "Hosting Web",
        //description: "Reliable and secure hosting solutions with 99.9% uptime guarantee.",
        description: "Hosting confiable y seguro. 99.9% de uptime garantizado.",
        icon: "🌐",
        href: "/services/webhosting",
    },
    {
        title: "SEO y Ads",
        description: "Le ayudamos a posicionar su negocio en buscadores usando herramientas de Google.",
        icon: "📢",
        href: "/services/seoads",
    },
    /*
    {
        title: "Email Services",
        description: "Professional email solutions for your business with advanced security features.",
        icon: "📧",
        href: "/articles/email",
    },
    {
        title: "Desarrollo Móvil",
        //description: "Native and cross-platform mobile applications for iOS and Android.",
        description: "Desarrollamos aplicaciones multiplataforma y nativas para iOS y Android.",
        icon: "📱",
        href: "/services/mobiledev",
    },
    */
];

export const webDesignPricing = {
    included: [
        "Hero: Sección de entrada con imagen o ilustración destacada, headline y subtítulo.",
        "CTA (Call to Action): llamado claro a acción (botón de contacto, cotización, etc.).",
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
        { service: "Sesión fotográfica profesional (local, hasta 25 fotos editadas)", price: "$800 única vez" },
    ],
};

export const hostingPricing = {
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

export const seoPricing = {
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