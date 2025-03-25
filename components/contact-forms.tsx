"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useState } from "react";

const ContactFormShort = () => {
    return (
        <form className="form space-y-4">
            <div className="form-section">
                <div className="form-header">
                    <h3 className="form-h3">Mandanos un mensaje</h3>
                    <p className="form-p">Te respondemos en menos de 24 horas.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Input id="name" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                </div>
            </div>
            <div>
                <label htmlFor="subject">Asunto</label>
                <Input id="subject" placeholder="¿Como podemos ayudarte?" />
            </div>
            <div>
                <label htmlFor="message">Mensaje</label>
                <Textarea id="message" placeholder="Escribe tu mensaje..." rows={5} />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar
            </Button>
        </form >
    );
};

const ContactFormDetailed = () => {
    const [wantsCall, setWantsCall] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data = {
            name: formData.get("contact-name"),
            email: formData.get("contact-email"),
            phone: formData.get("contact-phone"),
            city: formData.get("contact-city"),

            products: formData.get("products"),

            clients_trade: formData.get("clients-trade"),
            clients_age: formData.get("clients-age"),
            clients_channels: formData.get("clients-channels"),

            date_date: formData.get(""),
            date_hour: formData.get(""),
        };

        console.log(data);
    }
    return (
        <form className="form bg-white rounded-2xl shadow-md" onSubmit={handleSubmit}>
            <div className="form-section">
                <div className="form-header">
                    <h3 className="form-h">Información personal</h3>
                    <p className="form-p">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                </div>
                <div className="form-content space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="contact-name">Nombre</label>
                        <Input id="contact-name" name="contact-name" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label htmlFor="contact-email">Email</label>
                        <Input id="contact-email" name="contact-email" type="email" placeholder="Tu email" />
                    </div>
                    <div>
                        <label htmlFor="contact-phone">Número de teléfono</label>
                        <Input id="contact-phone" name="contact-phone" type="text" placeholder="+52 (951) 111 22 33" />
                    </div>
                    <div>
                        <label htmlFor="contact-city">Ciudad</label>
                        <Input id="contact-city" name="contact-city" type="text" placeholder="Tu ciudad" />
                    </div>
                </div>
            </div >

            <div className="form-section">
                <div className="form-header">
                    <h3 className="form-h">Información sobre tu negocio</h3>
                    <p className="form-p">Para poder evaluar como podemos ayudarte y generar un plan de acción personalizado</p>
                </div>
                <div className="form-content space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="products">Productos o servicios</label>
                        <Input id="products" name="products" placeholder="¿Qué productos o servicios ofreces?" />
                    </div>
                    <div>
                        <label htmlFor="clients-trade">¿A qué se dedican tus clientes?</label>
                        <Input id="clients-trade" name="clients-trade" type="text" placeholder="Carpintería, Transporte, etc."></Input>
                    </div>
                    <div>
                        <label htmlFor="clients-age">¿Cual es el rango de edad de tus clientes?</label>
                        <select name="clients-age" id="clients-age" className="border-2 rounded-md p-1 w-[100%]" defaultValue="20-to-35">
                            <option value="<20">Menores de 20 años</option>
                            <option value="20-to-35">20 a 35 años</option>
                            <option value="35-to-50">35 a 50 años</option>
                            <option value="50+">Más de 50 años</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="clients-channels">¿Por qué medios sueles conseguir clientes?</label>
                        <Input id="clients-channels" name="clients-channels" type="text" placeholder="Facebook, Google ads, etc."></Input>
                    </div>
                </div>
            </div>

            <div className="form-section">
                <div className="form-header">
                    <h3 className="form-h">Agenda una cita</h3>
                    <p className="form-p">Agenda una cita gratuita para ayudarte.</p>
                </div>
                {/**
                <div className="form-content space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     */}
                <div className="form-content">
                    <div className="flex justify-center">
                        <label
                            onClick={() => setWantsCall(wantsCall)}
                            className="cursor-pointer"
                        >
                            <input name="appointment-checkbox" type="checkbox"
                                checked={wantsCall} onChange={(e) => setWantsCall(e.target.checked)}
                                className="cursor-pointer"
                                readOnly />
                            <span className="px-2">
                                Quiero agendar una llamada
                            </span>
                        </label>
                    </div>
                    {/**
                     * 
                    <div className="justify-center bg-pink-300 space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
                        {wantsCall && (
                            <div className="grid justify-center">
                                <label htmlFor="" className="my-auto">Fecha:</label>
                                <input type="date" id="" name="" className="" />
                            </div>
                        )}
                        {wantsCall && (
                            <div className="grid justify-center">
                                <label htmlFor="">Hora:</label>
                                <input type="time" id="" name="" className="" />
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit">
                Enviar
            </Button>

        </form >
    );
};

export {
    ContactFormShort,
    ContactFormDetailed,
};