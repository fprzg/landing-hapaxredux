"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CardHoverOverlay } from "@/components/card-hover-overlay";
import NavigationBar from "@/components/navigation-bar";
import { ContactInfo, ContactFormShort } from "@/components/contact";
import RedirectButton from "@/components/redirect-button";
import { CheckCircle2 } from 'lucide-react';

export default function Page() {
  const portfolio = [
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

  return (
    <>
      {/* Nav Section */}
      < section >
        <NavigationBar sections={[
          { label: "Servicios", href: "#services" },
          //{ label: "Portafolio", href: "#portfolio" },
          { label: "Sobre Nosotros", href: "#about" },
          { label: "Contacto", href: "#contact" },
        ]}
        /**
         cta={{ label: "Get Started", href: "#contact" }}
         */
        />
      </section >

      {/* Hero Section */}
      <section className="section flex flex-col gap-8 lg:flex-row items-center" >
        <div className="lg:w-1/2">
          <h1 className="h1 mb-6">
            Transforme su presencia digital
          </h1>
          <p className="p text-gray-600 mb-8">
            Somos una agencia especializada en desarrollo web, hosting administrado y estrategias de posicionamiento digital.
          </p>
          <p className="p text-gray-600 mb-8">
            Creamos nuestros sistemas optimizando cada detalle para garantizar velocidad, estabilidad y visibilidad.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {/**
            <Link href={"/services"} className="">
              <Button className="button bg-blue-600 hover:bg-blue-700">Nuestros servicios</Button>
            </Link>
            <Link href="/form-detailed" className="">
              <Button variant="outline" className="button">Trabaja con nosotros</Button>
            </Link>
             */}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:inline relative">
            <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl"></div>
            {/**
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full"></div>
             */}
          </div>
        </div>
      </section >

      {/* Services Section */}
      <section id="services" className="section bg-gray-50" >
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">
            Nuestros Servicios
          </h2>
          <p className="p text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales adaptadas a las necesidades de tu negocio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 md:gap-8 my-4">
              <div className="text-4xl">💻</div>
              <CardTitle className="text-2xl">Diseño Web</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-2 flex flex-col gap-4 text-gray-800">
                <p className="text-justify">
                  Un sitio web lento impacta negativamente la
                  <span className="font-bold"> experiencia de usuario, la conversión y posicionamiento </span>
                  en buscadores.
                </p>
                <p className="text-justify">
                  Optimizamos nuestros productos para garantizar
                  <span className="font-bold"> tiempos de carga mínimos </span>
                  y ayudamos a su negocio a destacar frente a la competencia con un
                  <span className="font-bold"> diseño atractivo, intuitivo y adaptado </span>
                  a todos los dispositivos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Puntuación 97+ garantizada en
                      <span className="font-bold"> PageSpeed Insights</span>
                      .
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Interfaces modernas, responsivas y accesibles.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Desarrollo a medida según las necesidades del ciente.
                    </span>
                  </li>
                </ul>
              </div>

            </CardContent>
            <CardFooter>
              <RedirectButton href={""} >Mostrar más</RedirectButton>
            </CardFooter>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 md:gap-8 my-4">
              <div className="text-4xl">🌐</div>
              <CardTitle className="text-2xl">Hosting Administrado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-2 flex flex-col gap-4 text-gray-800">
                <p className="text-justify">
                  Olvídese de las preocupacioens técnicas; nuestro hosting administrado garanzita estabilidad y seguridad con un
                  <span className="font-bold"> 99.9% de uptime</span>
                  , backups automáticos, certificado ssl y protección avanzada con
                  <span className="font-bold"> Cloudflare CDN Cache</span>
                  .
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Garantizamos
                      <span className="font-bold"> 99.9% de uptime </span>
                      para máxima estabilidad.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Integración con
                      <span className="font-bold"> Cloudflare CDN Cache </span>
                      para tiempos de carga mínimos.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Actualizaciones continuas de
                      <span className="font-bold"> seguridad y contenido</span>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <RedirectButton href={""} className="" >Mostrar más</RedirectButton>
            </CardFooter>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 md:gap-8 my-4">
              <div className="text-4xl">📢</div>
              <CardTitle className="text-2xl">SEO y Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-2 flex flex-col gap-4 text-gray-800">
                <p className="text-justify">
                  Aparecer en los primeros resultados de búsqueda es clave para atraer clientes. Con nuestra auditoría SEO inicial, detectamos
                  <span className="font-bold"> oportunidades de mejora </span>
                  y<span className="font-bold"> optimizamos </span>
                  su sitio para que los motores de búsqueda lo indexen mejor.
                </p>
                <p className="text-justify tracking-tight">
                  Gestionamos su presencia en
                  <span className="font-bold"> Google Search Console </span>
                  y
                  <span className="font-bold"> Google My Business</span>
                  , asegurando que su negocio sea visible en búsquedas locales y que sus anuncios lleguen a la audiencia correcta.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      <span className="font-bold">Auditoria initial </span>
                      para identificar áreas de mejora.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      <span className="font-bold">Optimización on-page </span>
                      para mejorar el posicionamiento en buscadores.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">
                      Configuración y gestión de
                      <span className="font-bold"> Google Search Console </span>
                      y
                      <span className="font-bold"> Google My Business</span>
                      .
                    </span>
                  </li>
                </ul>
              </div>

            </CardContent>
            <CardFooter>
              <RedirectButton href="" >Mostrar más</RedirectButton>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      {/*
      < section id="portfolio" className="section" >
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="p text-gray-600 max-w-3xl mx-auto">
            Explore nuestros proyectos recientes y vea cómo hemos ayudado a las empresas a triunfar.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Móvil</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <CardHoverOverlay key={index} {...item} />
            ))}
          </TabsContent>

          <TabsContent value="web" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.filter((item) => item.categories.includes("web")).map((item, index) => (
              <CardHoverOverlay key={index} {...item} category="Web Development" />
            ))}
          </TabsContent>

          <TabsContent value="mobile" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.filter((item) => item.categories.includes("mobile")).map((item, index) => (
              <CardHoverOverlay key={index} {...item} category="iOS and Andoid" />
            ))}
          </TabsContent>
        </Tabs>
      </section >
       */}

      {/* CTA Section */}
      < section className="section bg-blue-600 text-white" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl mb-8">
            Trabajemos juntos para crear soluciones tecnológicas para impulsar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/form-detailed">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                Agendar una consulta.
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="section" >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="hidden lg:block relative">
              <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
              {/**
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full"></div>
               */}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="h2 mb-6">
              Acerca de  HapaxRedux
            </h2>
            <p className="p text-gray-600 mb-6">
              Somos un equipo de expertos en tecnología dedicados a ayudar a las empresas a triunfar en la era digital.
            </p>
            <p className="text-gray-600 mb-6">
              Fundada en 2024, HapaxRedux busca convertirse en un socio tecnológico integral para empresas de todos los tamaños. Nuestro equipo combina la experiencia técnica con el pensamiento estratégico para ofrecer soluciones que impulsen resultados empresariales reales.
            </p>
            <p className="text-gray-600 mb-8">
              Creemos en las asociaciones a largo plazo y trabajamos estrechamente con nuestros clientes para comprender sus desafíos y oportunidades.
            </p>
            {/*
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
            */}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="section bg-gray-50" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">
              Ponte En Contacto
            </h2>
            <p className="p text-gray-600 max-w-3xl mx-auto">
              ¿Tienes alguna duda? Contactanos hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactFormShort />
          </div>
        </div>
      </section >
    </>
  );
};