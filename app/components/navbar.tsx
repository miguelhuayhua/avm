import { Button } from "@/components/ui/button"
import { Heart, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
  return (
    <>
      <header
        className={`border-b border-slate-200 backdrop-blur-sm bg-white/90 sticky top-0 z-50 transition-all duration-1000 $`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Link href={"/"} >
                  <Image
                    src="/logo.png"
                    alt="AVM Logo"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {["Productos", "Servicios", "Nosotros", "Contacto"].map((item, i) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className={`text-sm hover:scale-105 animate-fade-in-up font-medium transition-all duration-300`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/favoritos">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                  <span className="ml-1 ">Favoritos</span>
                </Button>
              </Link>
              <Link
                href="https://wa.me/59169848691?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="font-medium" variant="secondary">
                  <Phone className="w-3 h-3 mr-1" />
                  Contactarnos
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}