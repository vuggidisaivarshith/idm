import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions | IDM Smart Tech',
  description: 'Terms and conditions governing agency service engagements and website usage with IDM Smart Tech.',
  alternates: {
    canonical: 'https://idm-inky.vercel.app/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-textprimary tracking-tight mb-8">
            Terms & Conditions
          </h1>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-bordercolor shadow-sm space-y-6 text-xs sm:text-sm text-textsecondary leading-relaxed">
            <p><strong>Effective Date:</strong> November 2024</p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">1. Scope of Engagement</h2>
            <p>
              IDM Smart Tech provides digital marketing, social media management, creative production, paid advertising management, local SEO, website development, and business automation services according to company-approved packages or customized statements of work.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">2. Retainer Terms & Payments</h2>
            <p>
              Monthly growth packages are billed on a recurring monthly cycle. Inclusions are agreed upon prior to commencement. Third-party advertising spend (paid directly to Meta or Google) is separate from agency management retainers.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">3. Platform Compliance & Third-Party Dependencies</h2>
            <p>
              While IDM Smart Tech adheres to merchant guidelines, external advertising and mapping platforms (Google, Meta, WhatsApp) maintain independent algorithmic policies. IDM Smart Tech does not guarantee specific ranking positions, follower gains, or review turnaround times beyond verified effort and compliance guidance.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">4. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, client-approved creative visual assets, branding materials, and bespoke website code belong to the client, while underlying proprietary tools and agency frameworks remain IDM Smart Tech intellectual property.
            </p>

            <h2 className="text-lg font-heading font-bold text-textprimary pt-4">5. Jurisdiction</h2>
            <p>
              These terms are governed by the applicable laws of Telangana, India. Any disputes are subject to the exclusive jurisdiction of the competent courts in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
