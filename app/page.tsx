"use client"
import Hero from "./components/hero"
import ContactSection from "./components/contact-section"
import TestimonialSection from "./components/testimonials-section"
import StatSection from "./components/stats-section"
import AboutSection from "./components/about-section"
import ServiceSection from "./components/services-section"
import FeatureSection from "./components/features-section"
import ProductListSection from "./components/productlist-section"

export default function HomePage() {


  return (
    <div className="relative">

      <div className="relative z-20">
        {/* Hero Section */}
        <Hero />

        {/* Products Section */}

        <ProductListSection />
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
