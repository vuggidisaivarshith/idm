import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import CTASection from '@/components/ui/CTASection';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | IDM Smart Tech — Digital Growth Agency in Hyderabad',
  description:
    'Learn about IDM Smart Tech, a premier creative marketing, performance advertising, and technology agency based in Shamshabad, Hyderabad. Discover our mission, values, and leadership approach.',
  keywords: [
    'About IDM Smart Tech',
    'Digital Marketing Agency Shamshabad',
    'Marketing Agency Hyderabad',
    'Creative Agency Telangana',
    'IDM Team',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | IDM Smart Tech — Creative Marketing & Tech Agency',
    description:
      'We Build Brands. Create Demand. Drive Growth. Discover the story and mission behind IDM Smart Tech in Hyderabad.',
    url: 'https://idm-inky.vercel.app/about',
  },
};

export default function AboutPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.website,
    logo: 'https://idm-inky.vercel.app/favicon.ico',
    description: COMPANY_INFO.supportingMessage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess',
      addressLocality: 'Shamshabad',
      addressRegion: 'Telangana',
      postalCode: '501218',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'te', 'hi'],
    },
    sameAs: [COMPANY_INFO.instagram],
  };

  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-pagebg via-sectionsoft/30 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Our Company Story</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              We Help Ambitious Brands <br />
              <span className="font-extrabold text-gradient-aurora">
                Build Demand & Grow Faster.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              IDM Smart Tech was founded in Shamshabad, Hyderabad to bridge the divide between creative social media storytelling and rigorous performance engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primarypurple">
                Integrated Digital Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-textprimary">
                Why Traditional Marketing Agencies Fall Short.
              </h2>
              <p className="text-sm text-textsecondary leading-relaxed">
                Most businesses hire one freelancer for Instagram graphics, another agency for Google Ads, a third developer for their website, and struggle to coordinate them. The result is disjointed messaging, slow turnaround times, and wasted ad spend.
              </p>
              <p className="text-sm text-textsecondary leading-relaxed">
                At IDM Smart Tech, we unite creative production, paid acquisition, local search visibility, and custom automation workflows under one roof. Our clients benefit from unified strategy and accountable execution.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="btn-aurora-primary"
                >
                  Explore Our Capabilities
                </a>
                <a
                  href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to learn more about your agency.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-aurora-secondary"
                >
                  Speak With Our Team
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6">
                  <span className="text-2xl mb-2 block">🎯</span>
                  <h3 className="text-base font-heading font-bold text-textprimary mb-1">Performance Driven</h3>
                  <p className="text-xs text-textsecondary leading-relaxed">Every ad rupee and creative asset is structured to generate measurable customer inquiries.</p>
                </Card>
                <Card className="p-6">
                  <span className="text-2xl mb-2 block">⚡</span>
                  <h3 className="text-base font-heading font-bold text-textprimary mb-1">Sub-Second Speed</h3>
                  <p className="text-xs text-textsecondary leading-relaxed">We build with modern frameworks like Next.js 14 to ensure websites load in under one second.</p>
                </Card>
                <Card className="p-6">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="text-base font-heading font-bold text-textprimary mb-1">Local Mastery</h3>
                  <p className="text-xs text-textsecondary leading-relaxed">Deep local insight into Hyderabad, Secunderabad, and Telangana regional commercial dynamics.</p>
                </Card>
                <Card className="p-6">
                  <span className="text-2xl mb-2 block">💬</span>
                  <h3 className="text-base font-heading font-bold text-textprimary mb-1">Direct WhatsApp</h3>
                  <p className="text-xs text-textsecondary leading-relaxed">Fast, direct agency communication without bureaucratic ticketing delays.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Operations Coordinates */}
      <section className="py-20 bg-sectionsoft/40 border-t border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            badge="Headquarters"
            title="Rooted in Hyderabad,"
            highlightText="Serving Ambitious Businesses Across India."
            description="Visit our office in Shamshabad or connect with our team remotely for seamless campaign execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <span className="text-xs uppercase font-bold text-primarypurple block mb-1">Office Location</span>
              <p className="text-sm font-bold text-textprimary mb-2">Shamshabad, Hyderabad</p>
              <p className="text-xs text-textsecondary leading-relaxed">{COMPANY_INFO.address}</p>
            </Card>

            <Card className="p-6">
              <span className="text-xs uppercase font-bold text-royalblue block mb-1">Direct Lines</span>
              <p className="text-sm font-bold text-textprimary mb-2">WhatsApp & Phone</p>
              <p className="text-xs text-textsecondary leading-relaxed">
                Call or WhatsApp: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-primarypurple font-semibold hover:underline">{COMPANY_INFO.phone}</a>
              </p>
            </Card>

            <Card className="p-6">
              <span className="text-xs uppercase font-bold text-brandmint block mb-1">Electronic Mail</span>
              <p className="text-sm font-bold text-textprimary mb-2">Official Inquiries</p>
              <p className="text-xs text-textsecondary leading-relaxed">
                Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primarypurple font-semibold hover:underline">{COMPANY_INFO.email}</a>
              </p>
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
