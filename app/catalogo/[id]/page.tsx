import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Client from './client'

const getProducto = async (id: string) => {
  return await fetch(`https://uayua.com/uayua/api/publicaciones/get?url=${id}&fields=id,titulo,imagenes,subtitulo,colecciones,caracteristicas,estado,variantes:valores,opciones,opciones:valores,opciones:id,opciones:nombre,variantes:id,variantes:titulo,variantes:estado,variantes:precio,descripcion,variantes:imagen,categorias:categoria`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_UAYUATOKEN}`,
      'Origin': 'https://avm-bo.vercel.app'
    }
  }).then(res => res.json())
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params

  const response = await getProducto(id)
  const producto = response;
  if (producto) {
    const titulo = producto.titulo
    const descripcion = producto.descripcion || producto.subtitulo || `Descubre ${titulo} en nuestra tienda online.`
    const imagenPrincipal = producto.imagenes?.[0].url
    const precio = producto.variantes?.[0]?.precio || null
    return {
      title: `${titulo} | Neobo`,
      description: descripcion,
      keywords: [
        titulo,
        ...(producto.categorias?.map((cat: any) => cat.categoria) || []),
        ...(producto.colecciones || []),
        'tienda online',
        'comprar',
      ].join(', '),

      // Open Graph
      openGraph: {
        title: titulo,
        description: descripcion,
        type: 'article',
        url: `https://neobo.vercel.app/catalogo/${id}`,
        images:
        {
          url: imagenPrincipal,
          width: 800,
          height: 600,
          alt: titulo,
          protocol: "https",
          href: imagenPrincipal
        }
        ,
        siteName: 'Neobo',
        locale: 'es_ES',
      },

      // Twitter Card
      twitter: {
        card: 'summary_large_image',
        title: titulo,
        description: descripcion,
        images: imagenPrincipal ? [imagenPrincipal] : [],
        creator: '@neobo',
        site: '@neobo',
      },

      // Metadatos para productos/ecommerce
      other: {
        'product:price:amount': precio?.toString() || '',
        'product:price:currency': 'USD', // Ajusta según tu moneda
        'product:availability': producto.estado ? 'in stock' : 'out of stock',
        'product:brand': 'Neobo', // Ajusta según corresponda
        'product:category': producto.categorias.at(0)?.categoria?.nombre || '',
      },

      // Canonical URL
      alternates: {
        canonical: `https://neobo.vercel.app/producto/${id}`,
      },

      // Robots
      robots: {
        index: producto.estado,
        follow: true,
        googleBot: {
          index: producto.estado,
          follow: true,
        },
      },

      // Metadatos adicionales
      category: 'product',
      classification: 'ecommerce',
    }
  }
  else
    return notFound()
}





export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const producto = await getProducto(id);
  if (producto)
    return <Client producto={producto as any} />
  else return notFound();
}