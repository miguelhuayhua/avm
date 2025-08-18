import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Providers } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Vidriería AVM",
  description: "Especialistas en vidriería y carpintería de aluminio. Fabricamos e instalamos ventanas, puertas, canceles y soluciones a medida en vidrio y aluminio para hogares y negocios.",
  openGraph: {
    title: "Vidriería AVM",
    description: "Especialistas en vidriería y carpintería de aluminio. Fabricamos e instalamos ventanas, puertas, canceles y soluciones a medida en vidrio y aluminio para hogares y negocios.",
    url: "https://avm-bo.vercel.app", // Cambia esto por tu URL real
    siteName: "Vidriería AVM - Tienda Boliviana",
    images: [
      {
        url: "https://avm-bo.vercel.app/og-normal.png",
        width: 1200,
        height: 630,
        alt: "Vidriería AVM - Soluciones en vidrio y aluminio",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidriería AVM",
    description: "Especialistas en vidriería y carpintería de aluminio. Fabricamos e instalamos ventanas, puertas, canceles y soluciones a medida en vidrio y aluminio para hogares y negocios.",
    images: ["https://avm-bo.vercel.app/portada.jpg"], // Cambia esto por tu imagen real
    site: "@vidrieriaavm", // Cambia esto por tu usuario real de Twitter si tienes
    creator: "@vidrieriaavm", // Cambia esto por tu usuario real de Twitter si tienes
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers >
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <div className="fixed h-screen w-screen -z-1">
          <div className="dashed-grid-pattern h-screen">
          </div>
        </div>
      </body>
    </html>
  );
}
