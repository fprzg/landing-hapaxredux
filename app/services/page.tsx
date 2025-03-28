import NavigationBar from "@/components/navigation-bar";
import BulletList from "@/components/bullet-list";
import React from "react";
import { webDesignPricing, hostingPricing, seoPricing } from "@/lib/data";
import RedirectButton from "@/components/redirect-button";
import { VerticallyCentered } from "@/components/div-center";

export default function Page() {
  const servicesSection = "space-y-8 md:w-[80%] lg:w-[60%] mx-auto";

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
        <VerticallyCentered className={servicesSection}>
          <div className="grid gap-4 text-center">
            <h2 className="h2">📐 Diseño Web: Aumenta tu presencia en línea</h2>
            <p className="p">Convierta visitantes en clientes con una página web optimizada para dispositivos móviles y SEO. Calificación 97+ en <a className="a" href="https://pagespeed.web.dev/">PageSpeed Insights</a>. A partir de $2,100 MXN. Incluye: </p>
          </div>
          <BulletList items={webDesignPricing.included} className="mx-5" />
          <VerticallyCentered>
            <p className="p">
              ¿Buscar un plan personalizado para tu página web?
            </p>
            <RedirectButton className="mx-auto" href="/services/webdesign">Más información</RedirectButton>
          </VerticallyCentered>
        </VerticallyCentered>
      </section >

      {/* Web Hosting Section */}
      < section id="webhosting" className="section" >
        <VerticallyCentered className={servicesSection}>
          <div className="grid gap-4 text-center">
            <h2 className="h2">🌐 Hosting Web: Garantía de 99.9% de uptime</h2>
            <p className="p">Hostea tu página web con nosotros. Planes a partir de $2,100 MXN (depende del tráfico y espacio). Incluye:</p>
          </div>
          <BulletList items={hostingPricing.included} />
          <VerticallyCentered>
            <p className="p">
              ¿Buscas un plan personalizado para hostear tu página web?
            </p>
            <RedirectButton href="/services/webhosting">Más información</RedirectButton>
          </VerticallyCentered>
        </VerticallyCentered>
      </section >

      {/* SEO and Ads Section */}
      < section id="seoads" className="section" >
        <VerticallyCentered className={servicesSection}>
          <div className="grid gap-4 text-center">
            <h2 className="h2"> 📢 SEO: Asegura que te Encuentren en Google </h2>
            <p className="p">Optimización para aparecer en los primeros resultados de búsqueda y atraer clientes organicamente. A partir de $1,200 / mes. Incluye:</p>
          </div>
          <BulletList items={seoPricing.included} />
          <VerticallyCentered>
            <p className="p">¿Buscar un plan personalizado de SEO y Ads?</p>
            <RedirectButton href="/services/seoads">Más información</RedirectButton>
          </VerticallyCentered>
        </VerticallyCentered>
      </section >
    </>
  );
};