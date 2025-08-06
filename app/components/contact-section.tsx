"use client"
import {
    Mail,
    MapPin,
    Phone,

} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
    return (
        < section id="contacto" className="py-16 bg-slate-50/80 backdrop-blur-sm" >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up">Ponte en Contacto</h2>
                        <p className="text-base animate-fade-in-up animation-delay-200 font-medium">
                            ¿Necesitas un presupuesto o tienes preguntas? ¡Estamos aquí para ayudarte!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="animate-slide-in-left">
                            <h3 className="text-lg font-bold mb-4">Información de Contacto</h3>
                            <div className="space-y-3">
                                {[
                                    { icon: Phone, texto: "+591 78771760 - 69848691", etiqueta: "Llámanos" },
                                    
                                    { icon: MapPin, texto: "El Alto, Bolivia, Z. Nueva Marca, Av. Quillacollo", etiqueta: "Visítanos" },
                                ].map((item, i) => (
                                    <Card
                                        key={i}
                                        className={`bg-white/90 backdrop-blur-sm p-3 transition-all duration-300 animate-fade-in-left hover:shadow-md`}
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                        <div className="flex items-center">
                                            <item.icon className="w-4 h-4 mr-2" />
                                            <div>
                                                <p className="text-xs font-medium">{item.etiqueta}</p>
                                                <p className="text-sm font-semibold">{item.texto}</p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className="animate-slide-in-right">
                            <Card className="bg-white/90 backdrop-blur-sm p-4 shadow-lg">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-lg font-bold">Solicita tu presupuesto</CardTitle>
                                    <CardDescription className="text-sm font-medium">
                                        Te responderemos en menos de 24 horas
                                    </CardDescription>
                                </CardHeader>
                                <form className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Input placeholder="Nombre" className="text-sm font-medium" />
                                        <Input placeholder="Apellidos" className="text-sm font-medium" />
                                    </div>
                                    <Input type="email" placeholder="Correo Electrónico" className="text-sm font-medium" />
                                    <Input placeholder="Teléfono" className="text-sm font-medium" />
                                    <Textarea placeholder="Describe tu proyecto" rows={3} className="text-sm font-medium" />
                                    <Button className="w-full text-sm font-medium">Solicitar Presupuesto</Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}