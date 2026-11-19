import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactLocationSection from '@/components/ContactLocationSection';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact IDM Smart Tech | Marketing Agency in Shamshabad, Hyderabad',
  description:
    'Get in touch with IDM Smart Tech in Shamshabad, Hyderabad. Call or WhatsApp +91 85198 37818 to book your marketing consultation, GMB fix, or custom digital growth plan.',
  keywords: [
    'Contact IDM Smart Tech',
    'Digital Marketing Agency Shamshabad',
    'Marketing Agency Phone Number',
    'Hyderabad Agency WhatsApp',
    'IDM Address',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact IDM Smart Tech | Shamshabad, Hyderabad',
    description:
      'Connect with our team to formulate your custom marketing strategy or resolve your Google Business Profile issues.',
    url: 'https://idm-inky.vercel.app/contact',
  },
};

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    image: 'https://idm-inky.vercel.app/favicon.ico',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess',
      addressLocality: 'Shamshabad',
      addressRegion: 'Telangana',
      postalCode: '501218',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.2514',
      longitude: '78.4312',
    },
    url: COMPANY_INFO.website,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:00',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Direct Connection</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Let&apos;s Build Something <br />
              <span className="font-extrabold text-gradient-aurora">
                Remarkable Together.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              Reach out directly to our agency headquarters in Shamshabad, Hyderabad. We provide fast response via phone, WhatsApp, or structured form submission.
            </p>
          </div>
        </div>
      </section>

      {/* Full Contact Form & Office Coordinates Component */}
      <ContactLocationSection />

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
