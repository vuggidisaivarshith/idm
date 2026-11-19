import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnershipSection from '@/components/PartnershipSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PortfolioSection from '@/components/PortfolioSection';
import GrowthProcess from '@/components/GrowthProcess';
import IndustriesSection from '@/components/IndustriesSection';
import GrowthPackages from '@/components/GrowthPackages';
import GMBPricingSection from '@/components/GMBPricingSection';
import TechStackSection from '@/components/TechStackSection';
import SocialProofSection from '@/components/SocialProofSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/ui/CTASection';
import ContactLocationSection from '@/components/ContactLocationSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple relative">
      <ScrollProgress />
      {/* 1. Premium Navigation */}
      <Navbar />

      {/* 2. Cinematic 3D Hero */}
      <Hero />

      {/* 3. Five Agency Partnership Benefit Cards (Directly Below Hero) */}
      <PartnershipSection />

      {/* 4. Core Service Categories */}
      <ServicesSection />

      {/* 5. Why Choose IDM Smart Tech — Four Operational Agency Advantage Cards */}
      <WhyChooseSection />

      {/* 6. Demonstration Portfolio */}
      <PortfolioSection />

      {/* 7. Structured 5-Stage Client Journey Timeline */}
      <GrowthProcess />

      {/* 7. Industries Served */}
      <IndustriesSection />

      {/* 8. Growth Packages & GMB Fixes */}
      <GrowthPackages />
      <GMBPricingSection />

      {/* 9. Technology & Automation */}
      <TechStackSection />

      {/* 10. Verified Testimonials & Client Partnership */}
      <SocialProofSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final High-Converting CTA */}
      <CTASection
        title="Ready to Build Your Brand &"
        highlightText="Create Real Market Demand?"
        description="Whether you need consistent high-hook social Reels, qualified Meta & Google Ads, local Google Maps dominance, or business automation, we have you covered."
      />

      {/* 13. Contact & Location Coordinates */}
      <ContactLocationSection />

      {/* Floating Direct Conversion Action */}
      <FloatingWhatsApp />

      {/* 14. Premium Footer */}
      <Footer />
    </main>
  );
}
