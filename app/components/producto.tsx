import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Publicacion } from "@/types/main"
import Image from "next/image"
import { Eye, Heart, Phone, Check } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useDispatch, useSelector } from "react-redux"
import { some } from "lodash"
import { RootState } from "@/store"
import { toggleFavProduct } from "@/store/reducers/user"

interface Props {
  producto: Publicacion
}

export default function Producto({ producto }: Props) {
  // Obtener el precio más bajo de las variantes
  const precioMinimo = producto.variantes.length > 0 ? Math.min(...producto.variantes.map((v) => v.precio)) : 0
  const { favProducts } = useSelector((state: RootState) => state.user)
  const isFavorite = some(favProducts, (productId) => productId === producto.id)
  const dispatch = useDispatch();
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toggleFavProduct({ id: producto.id }))
  }

  return (
    <Card
      key={producto.id}
      className="bg-white/90 backdrop-blur-sm transition-all duration-300 p-0 hover:scale-105 group cursor-pointer relative overflow-hidden hover:shadow-lg"
    >
      {/* Wishlist Button */}
      <Button
        onClick={handleToggleFavorite}
        variant="ghost"
        size="icon"
        className={`absolute rounded-full top-2 right-2 z-10  duration-300 p-1 ${isFavorite && ('text-primary ')}`}
      >
        <Heart className={`${isFavorite && ("fill-current")}`} />
      </Button>

      <CardHeader className="p-0">
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={
              producto.imagenes.find((img) => img.orden === 0)?.url || producto.imagenes[0]?.url || "/placeholder.svg"
            }
            alt={producto.titulo}
            width={300}
            height={200}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-1">
            {producto.categorias.slice(0, 2).map((cat, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {cat.categoria?.nombre}
              </Badge>
            ))}
          </div>
        </div>

        <Link href={`/catalogo/${producto.id}`}>
          <CardTitle className="text-sm mb-2 transition-colors duration-300 leading-tight">{producto.titulo}</CardTitle>
        </Link>

        {producto.subtitulo && <p className="text-xs mb-2 font-medium text-slate-600">{producto.subtitulo}</p>}

        <p className="text-xs mb-3 line-clamp-2">{producto.descripcion}</p>

        <div className="flex items-center space-x-2 mb-3">
          {producto.variantes.length > 0 ? (
            <>
              <span className="text-lg font-bold text-secondary">
                {
                  precioMinimo ?
                    `BOB ${precioMinimo}` : "Cotizable"
                }
              </span>
              {(producto.variantes.length > 1 && precioMinimo > 0) && <span className="text-xs text-slate-500">hasta  los {producto.variantes.sort((a, b) => -a.precio + b.precio).at(0)?.precio} BOB</span>}

            </>
          ) : (
            <span className="text-lg font-bold">Consultar precio</span>
          )}
        </div>

        <div className="space-y-1 mb-3">
          {producto.caracteristicas.slice(0, 2).map((caracteristica, j) => (
            <div key={j} className="flex items-center text-xs">
              <Check className="w-3 h-3 text-green-600 mr-1 flex-shrink-0" />
              <span>
                {caracteristica.nombre}: {caracteristica.valor}
              </span>
            </div>
          ))}
        </div>

        <Separator className="my-2" />
        <span className="text-xs text-secondary">
          <span className="font-bold text-primary">{producto.variantes.length}</span> {producto.variantes.length > 1 ? "variantes disponibles" : "variante disponible"}
        </span>
        <div className="flex items-center justify-center">

          <Link href={`/catalogo/${producto.id}`} className="flex-1 mt-3">
            <Button size="sm" className="w-full text-xs">
              <Eye />
              Ver más
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
