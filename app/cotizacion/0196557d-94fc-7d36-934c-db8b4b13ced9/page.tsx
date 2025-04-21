import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InmobiliariaCotizacion() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-center">Propuesta de Sistema Web</h1>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">📊1. Costos Operativos</h2>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Servicio</th>
                                <th className="p-2 border">Detalle</th>
                                <th className="p-2 border">Costo Anual (MXN)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border">Dominio .com</td><td className="p-2 border">Renovación o transferencia</td><td className="p-2 border">$300 - $450</td></tr>
                            <tr><td className="p-2 border">Hosting (Fly.io / DigitalOcean)</td><td className="p-2 border">Tier básico</td><td className="p-2 border">$1,700</td></tr>
                            <tr><td className="p-2 border">CDN (Cloudflare)</td><td className="p-2 border">Plan gratuito</td><td className="p-2 border">$0</td></tr>
                            <tr><td className="p-2 border">Almacenamiento (S3)</td><td className="p-2 border">1 TB/mes</td><td className="p-2 border">$1,800</td></tr>
                            <tr><td className="p-2 border">Correo (Mailgun/SES)</td><td className="p-2 border">Correo corporativo</td><td className="p-2 border">$0 - $1,200</td></tr>
                            <tr><td className="p-2 border">SSL</td><td className="p-2 border">Incluido</td><td className="p-2 border">$0</td></tr>
                        </tbody>
                    </table>
                    <p className="mt-4 font-medium">🔢Total estimado: <strong>$3,800 - $5,000 MXN anuales</strong></p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">🧾2. Servicios Profesionales</h2>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Servicio</th>
                                <th className="p-2 border">Descripción</th>
                                <th className="p-2 border">Costo (MXN)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border">Rediseño landing</td><td className="p-2 border">TanStack + Hono + Bun</td><td className="p-2 border">$2,000</td></tr>
                            <tr><td className="p-2 border">CMS (Strapi)</td><td className="p-2 border">Configuración y conexión + autenticación con Kinde Auth</td><td className="p-2 border">$1,500</td></tr>
                            <tr><td className="p-2 border">Cloudflare + Hosting</td><td className="p-2 border">Configuración completa</td><td className="p-2 border">$500</td></tr>
                            <tr><td className="p-2 border">Correo corporativo</td><td className="p-2 border">Integración + plantillas</td><td className="p-2 border">$800 - $1,500</td></tr>
                            <tr><td className="p-2 border">Documentación</td><td className="p-2 border">Manual para uso de CMS</td><td className="p-2 border">$0</td></tr>
                            <tr><td className="p-2 border">Mantenimiento anual</td><td className="p-2 border">Backups, actualizaciones</td><td className="p-2 border">$2,000</td></tr>
                        </tbody>
                    </table>
                    <p className="mt-4 font-medium">💵Total estimado: <strong>$6,800 - $7,500 MXN</strong></p>
                </CardContent>
            </Card>

            {/*
            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">📦Paquetes</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-xl p-4 shadow-sm">
                            <h3 className="text-xl font-bold mb-2">Paquete Esencial - $12,000</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Landing rediseñada</li>
                                <li>CMS funcional</li>
                                <li>Hosting configurado</li>
                                <li>Dominio conectado</li>
                            </ul>
                        </div>
                        <div className="border rounded-xl p-4 shadow-sm">
                            <h3 className="text-xl font-bold mb-2">Paquete Profesional - $18,000</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Todo lo del paquete esencial</li>
                                <li>Autenticación segura</li>
                                <li>Correo corporativo con plantillas</li>
                                <li>Documentación técnica</li>
                                <li>Mantenimiento por 1 año</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
*/}
            {/* 

            <div className="text-center">
                <Button className="mt-4 text-lg px-6 py-3">Solicitar Reunión</Button>
            </div>
            */}
        </div>
    );
}
