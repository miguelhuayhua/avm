"use client"

import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Heart,
  Eye,
  Package,
  Truck,
  Shield,
  Award,
  Handshake,
  Home,
  Building,
  Wrench,
  Sofa,
  Square,
  LoaderCircle,
  Facebook,
  FacebookIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import { Publicacion } from "@/types/main"
import Producto from "./components/producto"
import ContactSection from "./components/contact-section"
import TestimonialSection from "./components/testimonials-section"
import StatSection from "./components/stats-section"
import AboutSection from "./components/about-section"
import ServiceSection from "./components/services-section"
import FeatureSection from "./components/features-section"
import Footer from "./components/footer"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [categorias, setCategorias] = useState<{ nombre: string, id?: string }[]>([{ nombre: "todos" }]);
  {/* Hero Section */ }
  const [productos, setProductos] = useState<Publicacion[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Publicacion[]>([])

  useEffect(() => {
    fetch('https://uayua.com/uayua/api/publicaciones/getall?fields=titulo,id,url,imagenes,caracteristicas,estado,variantes,colecciones,categorias:categoria', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_UAYUATOKEN}`
      }
    }).then(res => res.json()).then(data => {
      setProductos(data);
      setProductosFiltrados(data);
    })
  }, [])
  useEffect(() => {
    fetch('https://uayua.com/uayua/api/categorias/getall?fields=nombre,id', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_UAYUATOKEN}`
      }
    }).then(res => res.json()).then(data => [...data, { nombre: "todos", id: "" }]).then(data => {
      setCategorias(data);
      setIsVisible(true);
    })
  }, [])
  return (
    <div className="text-slate-900 relative font-inter">

      <div className="relative z-20">
        {/* Hero Section */}
        <Hero />

        {/* Products Section */}
        <section id="productos" className="py-16  backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up">Nuestros Productos</h2>
              <p className="text-base animate-fade-in-up animation-delay-200 font-medium">
                Ventanas de aluminio, muebles de melamina y vidrios de calidad
              </p>
            </div>

            {/* Category Filter */}
            <Tabs value={categoriaSeleccionada} onValueChange={(value) => {
              setCategoriaSeleccionada(value);
              if (value == 'todos') {
                setProductosFiltrados(productos);
              }
              else
                setProductosFiltrados(productos.filter(producto => producto.categorias.some(cat => cat.categoria?.nombre == value)))

            }} className="mb-10">
              <TabsList className="flex px-1  mx-auto gap-x-2 gap-y-1  h-fit flex-wrap">
                {isVisible ? categorias.map((categoria) => (
                  <TabsTrigger
                    key={categoria.nombre}
                    value={categoria.nombre}
                    className="capitalize p-2"
                  >
                    {categoria.nombre}
                  </TabsTrigger>
                )) : <LoaderCircle className="size-4 animate-spin" />}
              </TabsList>
            </Tabs>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {productosFiltrados.map((producto, i) => (
                <Producto key={i} producto={producto} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeatureSection />

        {/* Services Section */}

        <ServiceSection />
        {/* Testimonials */}

        <TestimonialSection />

        {/* Stats Section */}
        <StatSection />

        {/* About Us Section (Nosotros) */}

        <AboutSection />
        <ContactSection />
      </div>
    </div>
  )
}
