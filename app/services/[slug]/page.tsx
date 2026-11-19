import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import { SERVICES_LIST, ServiceDetail } from '@/data/services';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES_LIST.map((svc) => ({
    slug: svc.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found | IDM Smart Tech' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.targetKeyword, 'IDM Smart Tech', 'Digital Marketing Hyderabad', service.title],
    alternates: {
      canonical: `https://idm-inky.vercel.app/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://idm-inky.vercel.app/services/${service.slug}`,
      siteName: 'IDM Smart Tech',
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess',
        addressLocality: 'Shamshabad',
        addressRegion: 'Telangana',
        postalCode: '501218',
        addressCountry: 'IN',
      },
      url: COMPANY_INFO.website,
    },
    description: service.metaDescription,
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
    },
  };

  return (
    <main className="min-h-screen bg-pagebg text-textprimary selection:bg-primarypurple/20 selection:text-primarypurple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.shortTitle },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primarypurple/20 text-xs font-bold text-primarypurple uppercase tracking-wider shadow-2xs">
                <span>{service.icon}</span>
                <span>{service.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-light tracking-tight text-textprimary leading-tight">
                {service.title}
              </h1>

              <p className="text-textsecondary text-lg leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="btn-aurora-primary"
                >
                  Consult on This Service
                </a>
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult about ${service.title} for my business.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-aurora-secondary"
                >
                  WhatsApp Discussion &rarr;
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="p-8 space-y-4 bg-white/95 shadow-card-hover border-bordercolor">
                <div className="flex items-center justify-between border-b border-bordercolor pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-textsecondary">
                    Service Scope
                  </span>
                  <span className="text-xs font-bold text-primarypurple bg-sectionsoft px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-textprimary">
                  Why {service.shortTitle} Matters
                </h3>
                <p className="text-xs text-textsecondary leading-relaxed">
                  {service.whyItMatters}
                </p>
                <div className="pt-3 border-t border-bordercolor">
                  <span className="text-[11px] font-semibold text-textprimary block mb-2">
                    Direct Coordination:
                  </span>
                  <p className="text-xs text-textsecondary">
                    Managed directly by our dedicated strategists in Shamshabad, Hyderabad.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Strategic Value */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            badge="Strategic Overview"
            title="A Disciplined Methodology for"
            highlightText={`${service.title}.`}
            description={service.overview}
          />

          {/* Core Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.coreDeliverables.map((item, index) => (
              <Card key={index} className="p-6 sm:p-7">
                <div className="flex items-start space-x-3">
                  <span className="w-8 h-8 rounded-xl bg-sectionsoft text-primarypurple font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-primarypurple/20">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-heading font-bold text-textprimary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-textsecondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Step-by-Step Implementation Process */}
          <div className="pt-10 border-t border-bordercolor">
            <h3 className="text-2xl font-heading font-bold text-textprimary mb-8 text-center">
              Our 4-Stage Execution Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <div key={i} className="aurora-card p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-gradient-aurora block mb-3">
                      {p.step}
                    </span>
                    <h4 className="text-base font-heading font-bold text-textprimary mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-textsecondary leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 bg-sectionsoft/40 border-t border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Questions About"
            highlightText={service.title}
            description="Clear answers regarding turnaround, scope, and expected outcomes."
            align="center"
          />

          <FAQAccordion
            items={service.faqs.map((f) => ({
              category: 'Services',
              question: f.q,
              answer: f.a,
            }))}
          />
        </div>
      </section>

      <CTASection
        title={`Accelerate Your Growth with`}
        highlightText={service.title}
        description="Connect directly with our strategy team in Shamshabad, Hyderabad to get started."
        whatsappMessage={`Hello IDM Smart Tech, I would like to consult about ${service.title}.`}
      />

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
