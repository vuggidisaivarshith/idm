import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import { FAQ_LIST } from '@/data/faq';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | IDM Smart Tech Hyderabad',
  description:
    'Got questions about IDM Smart Tech packages, Google Business Profile reinstatement, retainer billing, or marketing deliverables? Read our complete agency FAQ.',
  keywords: [
    'IDM Smart Tech FAQ',
    'GMB Reinstatement Questions',
    'Digital Marketing Retainer FAQ',
    'Agency Questions Hyderabad',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | IDM Smart Tech',
    description:
      'Clear, honest answers about our monthly packages, GMB fixes, service deliverables, and agency communication.',
    url: 'https://idm-inky.vercel.app/faq',
  },
};

export default function FAQDirectoryPage() {
  const generalFaqs = FAQ_LIST.filter((f) => f.category === 'General');
  const pricingFaqs = FAQ_LIST.filter((f) => f.category === 'Pricing & Retainers');
  const gmbFaqs = FAQ_LIST.filter((f) => f.category === 'Google Business Profile');
  const serviceFaqs = FAQ_LIST.filter((f) => f.category === 'Services');

  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'FAQ' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Direct Answers</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Frequently Asked <br />
              <span className="font-extrabold text-gradient-aurora">
                Questions & Policies.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              Find transparent answers about our company-approved packages, individual GMB services, turnaround times, and communication workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-16">
          {/* General & Location */}
          <div>
            <div className="mb-6 border-b border-bordercolor pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primarypurple block mb-1">01 / Overview</span>
              <h2 className="text-2xl font-heading font-bold text-textprimary">General & Operations</h2>
            </div>
            <FAQAccordion items={generalFaqs} includeSchema={true} />
          </div>

          {/* Pricing & Retainers */}
          <div>
            <div className="mb-6 border-b border-bordercolor pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-royalblue block mb-1">02 / Retainers</span>
              <h2 className="text-2xl font-heading font-bold text-textprimary">Pricing & Inclusions</h2>
            </div>
            <FAQAccordion items={pricingFaqs} includeSchema={false} />
          </div>

          {/* Google Business Profile */}
          <div>
            <div className="mb-6 border-b border-bordercolor pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brandcyan block mb-1">03 / Maps & GMB</span>
              <h2 className="text-2xl font-heading font-bold text-textprimary">Google Business Profile Fixes</h2>
            </div>
            <FAQAccordion items={gmbFaqs} includeSchema={false} />
          </div>

          {/* Services & Technology */}
          <div>
            <div className="mb-6 border-b border-bordercolor pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-softpink block mb-1">04 / Capabilities</span>
              <h2 className="text-2xl font-heading font-bold text-textprimary">Services & Execution</h2>
            </div>
            <FAQAccordion items={serviceFaqs} includeSchema={false} />
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        highlightText="Talk Directly with Our Strategists."
        description="We are available on WhatsApp and phone to discuss your business requirements."
      />

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
