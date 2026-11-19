import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import CTASection from '@/components/ui/CTASection';
import { INDUSTRIES_LIST } from '@/data/industries';
import { getWhatsAppUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industry Digital Marketing Solutions | IDM Smart Tech Hyderabad',
  description:
    'Tailored digital marketing and lead generation solutions for Restaurants, Healthcare Clinics, Salons & Spas, Education, Retail, and Professional Services in Hyderabad.',
  keywords: [
    'Restaurant Marketing Hyderabad',
    'Clinic Digital Marketing',
    'Salon and Spa Marketing Hyderabad',
    'Education Marketing Agency',
    'Retail Local SEO Hyderabad',
  ],
  alternates: {
    canonical: 'https://idm-inky.vercel.app/industries',
  },
  openGraph: {
    title: 'Industry Digital Marketing Solutions | IDM Smart Tech',
    description:
      'Explore our customized marketing frameworks for Hyderabad restaurants, clinics, salons, spas, education, and retail businesses.',
    url: 'https://idm-inky.vercel.app/industries',
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb items={[{ label: 'Industries' }]} />

          <div className="max-w-3xl">
            <span className="badge-aurora mb-4">Sector-Specific Strategy</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
              Tailored Marketing Frameworks for <br />
              <span className="font-extrabold text-gradient-aurora">
                High-Growth Industries.
              </span>
            </h1>
            <p className="text-textsecondary text-lg mt-5 leading-relaxed">
              Every industry has distinct customer acquisition cycles, trust hurdles, and regulatory boundaries. Discover how we structure campaigns specifically for your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20">
          {INDUSTRIES_LIST.map((ind, index) => (
            <div
              key={ind.slug}
              id={ind.slug}
              className={`p-8 sm:p-12 rounded-3xl border border-bordercolor scroll-mt-28 transition-all ${
                index % 2 === 0 ? 'bg-white' : 'bg-sectionsoft/40'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-bordercolor">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl p-3 rounded-2xl bg-white border border-bordercolor shadow-xs">
                    {ind.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textprimary">
                      {ind.title}
                    </h2>
                    <p className="text-sm font-semibold text-primarypurple mt-0.5">
                      {ind.tagline}
                    </p>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult about marketing for my ${ind.title} business.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-aurora-primary py-2.5 px-5 text-xs whitespace-nowrap self-start lg:self-auto"
                >
                  Consult on {ind.title} &rarr;
                </a>
              </div>

              <p className="text-sm sm:text-base text-textsecondary leading-relaxed mb-8 max-w-4xl">
                {ind.overview}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-textsecondary">
                    Common Sector Hurdles:
                  </h3>
                  <div className="space-y-2">
                    {ind.commonChallenges.map((ch, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-pagebg border border-bordercolor text-xs text-textsecondary">
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Services */}
                <div className="space-y-3">
                  <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-textsecondary">
                    Recommended IDM Services:
                  </h3>
                  <div className="space-y-2">
                    {ind.relevantServices.map((svc, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-bordercolor text-xs text-textprimary font-medium flex items-start gap-2">
                        <span className="text-brandmint font-bold">✓</span>
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approach */}
                <div className="space-y-3">
                  <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-textsecondary">
                    Strategic Rollout Framework:
                  </h3>
                  <div className="space-y-2">
                    {ind.suggestedApproach.map((appr, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-primarypurple/20 text-xs">
                        <span className="font-bold text-primarypurple block mb-0.5">
                          {appr.phase}:
                        </span>
                        <span className="text-textsecondary">{appr.strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
