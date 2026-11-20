'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

interface PartnershipBenefit {
  id: string;
  step: string;
  title: string;
  badge: string;
  overview: string;
  measurableOutcomes: string[];
  icon: React.ReactNode;
}

const partnershipBenefits: PartnershipBenefit[] = [
  {
    id: 'brand',
    step: '01',
    title: 'Brand Building & Identity',
    badge: 'Brand Equity',
    overview:
      'Create a memorable, cohesive brand identity with professional creative direction, consistent brand messaging, and aesthetic multi-platform assets.',
    measurableOutcomes: [
      'Higher profile visit-to-follow conversion rates',
      'Unified visual aesthetic across Instagram, Meta, and website',
      'Consistent brand guidelines and design asset libraries',
      'Stronger customer recall and recognition in target markets',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5l1.5 2.5m4.5-2.5l-1.5 2.5" />
      </svg>
    ),
  },
  {
    id: 'audience',
    step: '02',
    title: 'Audience Reach & Visibility',
    badge: 'Market Penetration',
    overview:
      'Expand your reach to active prospective customers through targeted Meta & Google Ad campaigns and strategic local search engine presence.',
    measurableOutcomes: [
      'Increased impression share in targeted regional & local areas',
      'Higher local discoverability via Google Business Profile & Maps 3-Pack',
      'Granular demographic, interest, and keyword audience segmentation',
      'Structured re-engagement of past profile visitors and website traffic',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m-9-9h3m12 0h3" />
      </svg>
    ),
  },
  {
    id: 'leads',
    step: '03',
    title: 'Lead Generation & Conversions',
    badge: 'Commercial Growth',
    overview:
      'Turn digital attention into genuine customer conversations with conversion-focused funnels, persuasive copywriting, and direct WhatsApp response channels.',
    measurableOutcomes: [
      'Lower average cost per qualified commercial inquiry',
      'Reduced friction from social ad click to WhatsApp conversation',
      'Continuous ad creative testing to identify top-performing hooks',
      'Structured lead qualification tracking and follow-up data',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'infrastructure',
    step: '04',
    title: 'Digital Infrastructure & Development',
    badge: 'Technology Backbone',
    overview:
      'Power your brand with fast, modern websites, custom mobile applications, and intelligent CRM integrations built for operational reliability.',
    measurableOutcomes: [
      'Sub-second page load times and mobile-first responsive architecture',
      'Clean lead capture funnels connected directly to your sales workflow',
      'Secure, scalable codebases with enterprise hosting and SSL',
      'Custom CRM pipelines for automated customer record management',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'advantage',
    step: '05',
    title: 'Long-Term Strategic Partnership',
    badge: 'Competitive Edge',
    overview:
      'Stay ahead with continuous strategy optimization, data-backed monthly reporting, and rapid adoption of emerging AI and automation tools.',
    measurableOutcomes: [
      'Transparent monthly performance reports with commercial metrics',
      'Proactive campaign updates based on real market performance data',
      'Priority access to new marketing channels and AI automation flows',
      'Dedicated senior strategist communication with quick turnaround times',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function PartnershipSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const whatsappConsultationUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to partner with your team to grow my business.'
  );

  return (
    <section
      id="partnership"
      className="py-24 bg-gradient-to-b from-[#FAFAF9] via-[#F8FAFC] to-[#FAFAF9] text-ink-900 relative border-t-2 border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" />
            <div className="inline-flex items-center gap-2 border border-slate-300 bg-white/95 px-3 py-1 shadow-xs">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                PARTNERSHIP VALUE · MEASURABLE IMPACT
              </span>
            </div>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            What Happens When You Partner With <span className="italic text-[#365679] font-medium">IDM Smart Tech</span>?
          </h2>

          <p className="text-[15px] sm:text-[16.5px] text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto font-medium">
            More than a service provider. Your growth partner, creative team, performance strategist and technology team — working together to move your business forward.
          </p>
        </ScrollReveal>

        {/* 5 Premium Cards: 3 on Top Row, 2 Centered on Bottom Row */}
        <StaggerContainer staggerDelay={0.1} className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {partnershipBenefits.slice(0, 3).map((card, idx) => {
              const isHovered = activeCard === idx;
              return (
                <motion.div key={card.id} variants={fadeUpVariants} className="h-full">
                  <div
                    onMouseEnter={() => setActiveCard(idx)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                    className={`bg-white border-2 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative cursor-pointer shadow-xs ${
                      isHovered
                        ? 'border-[#0F172A] shadow-md -translate-y-1'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xl font-bold text-[#0F172A]">
                          {card.step}
                        </span>

                        <div className="w-10 h-10 border border-slate-300 bg-slate-50 flex items-center justify-center text-[#0F172A] shadow-2xs">
                          {card.icon}
                        </div>
                      </div>

                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 inline-block mb-3">
                        {card.badge}
                      </span>

                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {card.overview}
                      </p>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isHovered
                            ? 'max-h-64 opacity-100 mt-4 pt-4 border-t border-slate-200'
                            : 'max-h-0 opacity-0 mt-0 pt-0'
                        }`}
                      >
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">
                          Measurable Outcomes:
                        </p>
                        <div className="space-y-2">
                          {card.measurableOutcomes.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                              <span className="text-emerald-600 font-bold text-xs shrink-0 mt-0.5" aria-hidden="true">
                                ✓
                              </span>
                              <span className="leading-tight">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`transition-opacity duration-200 mt-2 ${
                          isHovered ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-70'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <span>Hover to inspect outcomes</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-between font-mono text-[10px] uppercase font-bold text-slate-500">
                      <span>Commercial Impact</span>
                      <span className={isHovered ? 'text-[#0F172A]' : 'text-slate-400'}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6 items-start">
            {partnershipBenefits.slice(3, 5).map((card, idx) => {
              const actualIdx = idx + 3;
              const isHovered = activeCard === actualIdx;
              return (
                <motion.div key={card.id} variants={fadeUpVariants} className="h-full">
                  <div
                    onMouseEnter={() => setActiveCard(actualIdx)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(activeCard === actualIdx ? null : actualIdx)}
                    className={`bg-white border-2 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative cursor-pointer shadow-xs ${
                      isHovered
                        ? 'border-[#0F172A] shadow-md -translate-y-1'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xl font-bold text-[#0F172A]">
                          {card.step}
                        </span>

                        <div className="w-10 h-10 border border-slate-300 bg-slate-50 flex items-center justify-center text-[#0F172A] shadow-2xs">
                          {card.icon}
                        </div>
                      </div>

                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 inline-block mb-3">
                        {card.badge}
                      </span>

                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {card.overview}
                      </p>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isHovered
                            ? 'max-h-64 opacity-100 mt-4 pt-4 border-t border-slate-200'
                            : 'max-h-0 opacity-0 mt-0 pt-0'
                        }`}
                      >
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2.5">
                          Measurable Outcomes:
                        </p>
                        <div className="space-y-2">
                          {card.measurableOutcomes.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                              <span className="text-emerald-600 font-bold text-xs shrink-0 mt-0.5" aria-hidden="true">
                                ✓
                              </span>
                              <span className="leading-tight">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`transition-opacity duration-200 mt-2 ${
                          isHovered ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-70'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <span>Hover to inspect outcomes</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-between font-mono text-[10px] uppercase font-bold text-slate-500">
                      <span>Commercial Impact</span>
                      <span className={isHovered ? 'text-[#0F172A]' : 'text-slate-400'}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Reference High-End Conversion Box */}
        <ScrollReveal variant="fade-up" className="mt-16">
          <div className="border-2 border-slate-300 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <div className="inline-flex items-center gap-2 border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-[10px] uppercase font-bold text-[#0F172A] tracking-[0.16em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dedicated Strategic Growth Retainers</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Ready to Build Your Next <span className="italic text-[#365679] font-medium">Growth Story</span>?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed font-medium">
              Let&apos;s combine creative marketing, intelligent technology and strategic execution to take your business further.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-cta"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                WHATSAPP STRATEGY CALL
              </a>

              <Link
                href="/services"
                className="btn-primary-ink"
              >
                EXPLORE CAPABILITIES →
              </Link>
            </div>

            <p className="font-mono text-[11px] text-slate-500 mt-5">
              Direct line to our strategic team in {COMPANY_INFO.city}:{' '}
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="font-bold text-[#0F172A] hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
