import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Creative Work & Portfolio | IDM Smart Tech Hyderabad',
  description:
    'Explore IDM Smart Tech creative portfolio: social media post designs, viral Reels concepts, high-intent Meta and Google ad creatives, and conversion web platforms.',
  keywords: [
    'Digital Marketing Portfolio',
    'Reels Samples Hyderabad',
    'Social Media Designs India',
    'Ad Creatives Showcase',
    'Website Portfolio',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/portfolio',
  },
  openGraph: {
    title: 'Creative Work & Portfolio | IDM Smart Tech',
    description:
      'Explore our creative portfolio across social media campaigns, high-hook reels, paid ads, branding, and modern digital platforms.',
    url: 'https://idm-inky.vercel.app/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Creative Portfolio' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Visual Centerpiece</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Crafted to Capture Attention & <br />
              <span className="font-extrabold text-gradient-aurora">
                Build Genuine Brand Demand.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              Browse our creative deliverables across multi-slide carousels, vertical video hooks, high-intent paid ad banners, and lightning-fast web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Component */}
      <PortfolioSection />

      <CTASection
        title="Want to See Industry-Specific"
        highlightText="Campaign Samples for Your Brand?"
        description="We share live client handles, active accounts, and detailed campaign recordings during one-on-one confidential consultations."
      />

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
