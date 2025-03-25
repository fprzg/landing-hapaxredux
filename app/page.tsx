"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CardHoverOverlay } from "@/components/card-hover-overlay";
import { portfolioProjects as portfolio, services } from "@/utils/asd";
import NavigationBar from "@/components/navigation-bar";
import { ContactFormDetailed, ContactFormShort } from "@/components/contact-forms";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="h1 mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="p text-gray-600 mb-8">
            We deliver cutting-edge technology solutions that drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"/services"}>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8"
              >
                Explore Services
              </Button>
            </Link>
            <Link href="/form-detailed">
              <Button variant="outline" className="text-lg py-6 px-8">
                Contact Us
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Our Services</h2>
          <p className="p text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
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
                    Learn more →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Our Portfolio</h2>
          <p className="p text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses succeed
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
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

      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Let's work together to create technology solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/form-detailed">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="hidden lg:block relative">
              <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="h2 mb-6">About HapaxRedux</h2>
            <p className="p text-gray-600 mb-6">
              We're a team of passionate technology experts dedicated to helping businesses succeed in the digital era.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2024, HapaxRedux has grown from a small web design agency into a comprehensive technology partner for businesses of all sizes. Our team combines technical expertise with strategic thinking to deliver solutions that drive real business results.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in long-term partnerships and work closely with our clients to understand their unique challenges and opportunities.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Get In Touch</h2>
            <p className="p text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to start your next project? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">📍</div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">📞</div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">✉️</div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@hapaxredux.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">🕒</div>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ContactFormShort />

          </div>
        </div>
      </section>
    </div >
  );
};