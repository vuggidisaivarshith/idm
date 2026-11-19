import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import CTASection from '@/components/ui/CTASection';
import { SERVICES_LIST } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Hyderabad | IDM Smart Tech Capabilities',
  description:
    'Explore IDM Smart Tech comprehensive agency services: Social Media Marketing, Reels Production, Meta Ads, Google Ads, SEO, Local SEO, GMB Optimization, Website & Mobile App Development, and AI Automation.',
  keywords: [
    'Digital Marketing Services Hyderabad',
    'SMMA Services Hyderabad',
    'SEO Services Hyderabad',
    'Google Ads Hyderabad',
    'Meta Ads Agency Hyderabad',
    'Website Development Hyderabad',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/services',
  },
  openGraph: {
    title: 'Digital Marketing Services in Hyderabad | IDM Smart Tech',
    description:
      'We Build Brands. Create Demand. Drive Growth. Explore our 10 core agency capabilities for businesses in Hyderabad and beyond.',
    url: 'https://idm-inky.vercel.app/services',
  },
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-pagebg via-sectionsoft/30 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Services' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Integrated Capabilities</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Marketing, Creative & Tech <br />
              <span className="font-extrabold text-gradient-aurora">
                Under One Cohesive Roof.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              From creative social media campaigns to high-intent Google Search ads, local Google Maps ranking, and sub-second Next.js web applications, we provide end-to-end digital growth solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            badge="10 Specialized Capabilities"
            title="Every Digital Capability Your Business Needs to"
            highlightText="Outpace Competition."
            description="Select a service below to view our strategic methodology, specific deliverables, and implementation process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((svc) => (
              <Card
                key={svc.slug}
                className="p-7 flex flex-col justify-between group hover:border-primarypurple/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2 rounded-xl bg-sectionsoft border border-bordercolor/60 inline-block">
                      {svc.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/20">
                      {svc.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                    {svc.title}
                  </h2>

                  <p className="text-xs text-textsecondary leading-relaxed mb-6">
                    {svc.overview}
                  </p>

                  {/* Core Deliverables Preview */}
                  <div className="space-y-2 pt-4 border-t border-bordercolor">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-textsecondary">
                      Key Deliverables:
                    </p>
                    {svc.coreDeliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-textsecondary">
                        <span className="text-primarypurple font-bold" aria-hidden="true">✓</span>
                        <span className="text-textprimary/90">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-bordercolor flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="btn-aurora-primary py-2 px-4 text-xs font-heading font-semibold"
                  >
                    View Details &rarr;
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult with your team regarding: ${svc.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-textsecondary hover:text-brandmint font-medium"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
