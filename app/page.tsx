import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import GMBPricingSection from '@/components/GMBPricingSection';
import GrowthPackages from '@/components/GrowthPackages';
import TechStackSection from '@/components/TechStackSection';
import ContactLocationSection from '@/components/ContactLocationSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-white selection:bg-purple/40 selection:text-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GMBPricingSection />
      <GrowthPackages />
      <TechStackSection />
      <ContactLocationSection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
