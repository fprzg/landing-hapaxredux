import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info as InfoIcon } from "lucide-react";

const HoverInfo = ({ title }: { title: string }) => {
    return (
        <span title={title} ><InfoIcon className="inline w-4 h-4 text-blue-500" /></span>
    );
}


export default function InmobiliariaCotizacion() {
    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-center">Propuesta Web para Grupo Inmobiliario</h1>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">1. Costos Necesarios</h2>
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
                            <tr><td className="p-2 border">CMS (Strapi)</td><td className="p-2 border">Configuración, conexión y autenticación con Kinde Auth</td><td className="p-2 border">$1,700</td></tr>
                            <tr><td className="p-2 border">Cloudflare + Hosting</td><td className="p-2 border">Configuración completa</td><td className="p-2 border">$400</td></tr>
                            <tr>
                                <td className="p-2 border">Guía de uso + documentación técnica <HoverInfo title="Incluye instructivo para el uso del CMS y documentación interna para futuras integraciones o mantenimiento técnico." /></td>
                                <td className="p-2 border">Manual para cliente y arquitectura interna</td>
                                <td className="p-2 border">$600</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 font-medium">Total estimado: <strong>$4,4700 MXN</strong></p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">2. Costos Condicionales</h2>
                    <p className="text-sm text-gray-600">Los siguientes servicios requieren confirmación por parte del cliente antes de ser incluidos en el desarrollo.</p>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Servicio</th>
                                <th className="p-2 border">Descripción</th>
                                <th className="p-2 border">Costo (MXN)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border">Correo corporativo</td><td className="p-2 border">Integración + plantillas†</td><td className="p-2 border">$600 - $1,200</td></tr>
                            <tr><td className="p-2 border">CDN de medios (S3)</td><td className="p-2 border">Almacenamiento para imágenes/vídeos†</td><td className="p-2 border">$400</td></tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">3. Costos Operativos</h2>
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
                            <tr><td className="p-2 border">Hosting (Fly.io/DigitalOcean/AWS)</td><td className="p-2 border">Tier básico</td><td className="p-2 border">$1,500 - $2,100</td></tr>
                            <tr><td className="p-2 border">CDN (Cloudflare)</td><td className="p-2 border">Plan gratuito</td><td className="p-2 border">$0</td></tr>
                            <tr><td className="p-2 border">SSL</td><td className="p-2 border">Incluido</td><td className="p-2 border">$0</td></tr>
                            <tr><td className="p-2 border">Almacenamiento (S3)†</td><td className="p-2 border">5 GB/mes</td><td className="p-2 border">$600 - $1,800</td></tr>
                            <tr><td className="p-2 border">Correo (Mailgun/SES)†</td><td className="p-2 border">Correo corporativo</td><td className="p-2 border">$0 - $1,200</td></tr>
                            <tr><td className="p-2 border">Mantenimiento anual</td><td className="p-2 border">Backups, actualizaciones</td><td className="p-2 border">$1,200</td></tr>
                        </tbody>
                    </table>
                    <p className="mt-2 text-sm text-gray-500">† Requiere confirmación por parte del cliente antes de integrarse al proyecto.</p>
                    <p className="mt-4 font-medium">Total estimado: <strong>$3,600 - $6,750 MXN anuales</strong></p>
                </CardContent>
            </Card>

            {/*
            <Card>
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">Paquetes</h2>
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
                                <li>Guía de uso + documentación técnica</li>
                                <li>Correo corporativo con plantillas†</li>
                                <li>Mantenimiento por 1 año</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">† Sujeto a confirmación por parte del cliente.</p>
                </CardContent>
            </Card>

            <div className="text-center">
                <Button className="mt-4 text-lg px-6 py-3">Solicitar Reunión</Button>
            </div>
*/}

        </div>
    );
}