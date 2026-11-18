import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntegratedModel from '@/components/IntegratedModel';
import Portfolio from '@/components/Portfolio';
import FloorPlanExplorer from '@/components/FloorPlanExplorer';
import RegionalPresence from '@/components/RegionalPresence';
import CultureSection from '@/components/CultureSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white selection:bg-copper selection:text-black">
      <Navbar />
      <Hero />
      <IntegratedModel />
      <Portfolio />
      <FloorPlanExplorer />
      <RegionalPresence />
      <CultureSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
