import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofSection from '@/components/SocialProofSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import GrowthProcess from '@/components/GrowthProcess';
import GrowthPackages from '@/components/GrowthPackages';
import GMBPricingSection from '@/components/GMBPricingSection';
import TechStackSection from '@/components/TechStackSection';
import ContactLocationSection from '@/components/ContactLocationSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />
      <Hero />
      <SocialProofSection />
      <ServicesSection />
      <PortfolioSection />
      <GrowthProcess />
      <GrowthPackages />
      <GMBPricingSection />
      <TechStackSection />
      <ContactLocationSection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
