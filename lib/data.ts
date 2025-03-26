import { CardHoverOverlayProps } from "@/components/card-hover-overlay";

export const portfolioProjects: CardHoverOverlayProps[] = [
    {
        title: "Uno",
        categories: ["web"],
        href: "/portfolio",
        img: "/assets/simpleemoji.png"
    },
    {
        title: "Dos",
        categories: ["web", "mobile"],
        href: "/portfolio",
        img: "/assets/mesolog.png"
    },
    {
        title: "Tres",
        categories: ["web"],
        href: "/portfolio",
    },
    {
        title: "Cuatro",
        categories: ["web", "mobile"],
        href: "/portfolio",
    },
    {
        title: "Cinco",
        categories: ["web", "mobile"],
        href: "/portfolio",
        img: "/assets/mesolog.png"
    },
];

export const services = [
    //{
    //title: "Web Design",
    //description: "Beautiful, responsive websites that engage your audience and drive conversions.",
    //icon: "💻",
    //href: "/articles/web_design",
    //},
    {
        title: "Email y Hosting Web",
        //description: "Reliable and secure hosting solutions with 99.9% uptime guarantee.",
        //description: "Beautiful, responsive websites that engage your audience and drive conversions.",
        description: "Diseñamos su página web, ofrecemos hosting con garantía del 99.9% de uptime. Ofrecemos servicio de manejo de email para profesionalizar su marca.",
        icon: "🌐",
        href: "/articles/web_hosting",
    },
    {
        title: "SEO y Ads",
        description: "Le ayudamos a posicionar su negocio en buscadores usando herramientas de Google.",
        icon: "📢",
        href: "/articles/seo",
    },
    /*
    {
        title: "Email Services",
        description: "Professional email solutions for your business with advanced security features.",
        icon: "📧",
        href: "/articles/email",
    },
    */
    {
        title: "Desarrollo Móvil",
        //description: "Native and cross-platform mobile applications for iOS and Android.",
        description: "Desarrollamos aplicaciones multiplataforma y nativas para iOS y Android.",
        icon: "📱",
        href: "/articles/mobile_dev",
    },
];
