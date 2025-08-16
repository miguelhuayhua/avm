import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Package, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="relative py-16 overflow-hidden  ">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <Badge variant="outline" className="mb-4 bg-white">
                                    🏠 Especialistas en Aluminio, Ventanas y Melamina
                                </Badge>
                                <h1
                                    className={`text-3xl md:text-5xl text-primary font-bold mb-4 transition-all duration-1500 leading-tight $`}
                                >
                                    <span className="text-blue-700">
                                        AVM
                                    </span> - Aluminio Vidrio Melamina
                                </h1>
                                <p
                                    className={`text-base md:text-lg mb-6 transition-all duration-1000 delay-300 leading-relaxed`}
                                >
                                    Especialistas en elaboración de ventanas de aluminio, muebles de melamina y venta de vidrios.
                                    Calidad, diseño y servicio confiable para tu hogar y empresa.
                                </p>
                                <div
                                    className={`flex flex-col sm:flex-row gap-3 mb-6 transition-all duration-1000 delay-500 `}
                                >
                                    <Link href="/catalogo?categoria=todos">
                                        <Button className="group text-sm font-medium">
                                            Ver Catálogo
                                            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        className="hover:scale-105 transition-all duration-300 text-sm font-medium bg-transparent"
                                    >
                                        Diseño Personalizado
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-6 text-xs">
                                    <div className="flex items-center space-x-1">
                                        <Package className="w-3 h-3 text-green-600" />
                                        <span className="font-medium">Instalación Incluida</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Shield className="w-3 h-3 text-blue-600" />
                                        <span className="font-medium">Garantía de por vida</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Award className="w-3 h-3 text-amber-600" />
                                        <span className="font-medium">Calidad Confiable</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative w-full h-80 rounded-xl overflow-hidden group shadow-xl">
                                    <Image
                                        src="/portada.jpg"
                                        alt="AVM - Trabajos Realizados"
                                        width={480}
                                        height={320}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <Badge className="text-xs font-medium">✨ Trabajos Realizados</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}