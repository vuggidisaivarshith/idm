import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | IDM Smart Tech',
  description: 'Privacy Policy and data protection terms for IDM Smart Tech agency website visitors and clients.',
  alternates: {
    canonical: 'https://idm-inky.vercel.app/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-textprimary tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-bordercolor shadow-sm space-y-6 text-xs sm:text-sm text-textsecondary leading-relaxed">
            <p><strong>Last Updated:</strong> November 2024</p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">1. Information We Collect</h2>
            <p>
              When you submit an inquiry form or message us via WhatsApp, we collect information you voluntarily provide, including your name, business name, telephone number, email address, and service preferences.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to formulate your requested marketing proposal, contact you regarding your inquiry, and deliver agreed-upon digital agency services. We do not sell, rent, or trade your personal or business data to third-party brokers.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">3. Data Security & Analytics</h2>
            <p>
              We implement industry-standard security practices to protect client information. Our website utilizes standard aggregated analytics to understand site performance and visitor journeys without collecting personally identifiable financial data.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">4. Third-Party Services</h2>
            <p>
              Our website links directly to WhatsApp and external social platforms. Interaction on external platforms is governed by their respective privacy policies.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">5. Contact Information</h2>
            <p>
              For privacy-related inquiries, contact us at: <br />
              <strong>{COMPANY_INFO.name}</strong> <br />
              {COMPANY_INFO.address} <br />
              Email: {COMPANY_INFO.email} | Phone: {COMPANY_INFO.phone}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
