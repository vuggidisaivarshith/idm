import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import GrowthPackages from '@/components/GrowthPackages';
import GMBPricingSection from '@/components/GMBPricingSection';
import CTASection from '@/components/ui/CTASection';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Pricing & Growth Packages | IDM Smart Tech Hyderabad',
  description:
    'Transparent monthly growth packages starting from ₹4,999/month for businesses in Hyderabad. Plus individual Google Business Profile (GMB) creation and reinstatement services.',
  keywords: [
    'Digital Marketing Packages Hyderabad',
    'SMMA Pricing India',
    'GMB Reinstatement Price',
    'Starter Growth Package',
    'Monthly Marketing Retainer',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/pricing',
  },
  openGraph: {
    title: 'Pricing & Growth Packages | IDM Smart Tech',
    description:
      'Transparent, predictable monthly marketing retainers and individual Google Business Profile services.',
    url: 'https://idm-inky.vercel.app/pricing',
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Pricing & Packages' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Transparent Pricing</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Predictable Retainers for <br />
              <span className="font-extrabold text-gradient-aurora">
                Sustainable Brand Growth.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              No hidden fees, no complicated contracts. Select the monthly growth package engineered for your current business stage or engage our specialized Google Business Profile solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <GrowthPackages />

      {/* Individual GMB Services */}
      <GMBPricingSection />

      {/* Retainer Guarantees & Transparency Notice */}
      <section className="py-16 bg-white border-t border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            badge="Pricing Transparency"
            title="Our Commitment to"
            highlightText="Straightforward Collaboration."
            description="How our retainers and billing work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <span className="text-2xl mb-2 block">📅</span>
              <h3 className="text-base font-heading font-bold text-textprimary mb-1">Monthly Billing</h3>
              <p className="text-xs text-textsecondary leading-relaxed">Retainers are billed monthly with transparent scope. Scale or adjust packages as your business needs evolve.</p>
            </Card>

            <Card className="p-6">
              <span className="text-2xl mb-2 block">💬</span>
              <h3 className="text-base font-heading font-bold text-textprimary mb-1">Dedicated Coordination</h3>
              <p className="text-xs text-textsecondary leading-relaxed">Direct WhatsApp group communication with your dedicated account strategist and creative production team.</p>
            </Card>

            <Card className="p-6">
              <span className="text-2xl mb-2 block">📊</span>
              <h3 className="text-base font-heading font-bold text-textprimary mb-1">Transparent Inclusions</h3>
              <p className="text-xs text-textsecondary leading-relaxed">Inclusions are tailored directly to your specific business requirements during introductory consultation.</p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
