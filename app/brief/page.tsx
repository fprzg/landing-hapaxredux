"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CardHoverOverlay } from "@/components/card-hover-overlay";
import { portfolioProjects as portfolio, services } from "@/utils/asd";
import NavigationBar from "@/components/navigation-bar";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar sections={[
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ]}
      //cta={{ label: "Get Started", href: "#contact" }}
      >
      </NavigationBar>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Let's work together to create technology solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About HapaxRedux</h2>
            <p className="text-xl text-gray-600 mb-6">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div >
  );
};