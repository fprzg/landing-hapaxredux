"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CardHoverOverlay } from "@/components/card-hover-overlay";
import NavigationBar from "@/components/navigation-bar";
import { ContactInfo, ContactFormShort } from "@/components/contact";
import { services } from "@/lib/data";

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
          { label: "Services", href: "#services" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        /**
         * cta={{ label: "Get Started", href: "#contact" }}
         */
        />
      </section >

      {/* Hero Section */}
      <section className="section flex flex-col lg:flex-row items-center" >
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="h1 mb-6">
            Transforme su presencia digital
          </h1>
          <p className="p text-gray-600 mb-8">
            Ofrecemos soluciones tecnologicas de vanguardia que impulsan el crecimiento y la innovación de las empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"/services"}>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8"
              >
                Nuestros servicios
              </Button>
            </Link>
            <Link href="/form-detailed">
              <Button variant="outline" className="text-lg py-6 px-8">
                Trabaja con nosotros
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:inline relative">
            <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row gap-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={service.href}>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                    Mostrar más →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

      </section >

      {/* Portfolio Section */}
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

      {/* CTA Section */}
      < section className="section bg-blue-600 text-white" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl mb-8">
            Trabajemos juntos para crear soluciones tecnológicas que impulsan tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/form-detailed">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                Agendar una consulta.
              </Button>
            </Link>
            <Link href="/services">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                Ver nuestros servicios.
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
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full"></div>
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