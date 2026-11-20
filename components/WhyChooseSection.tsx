'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

interface AdvantageCard {
  id: string;
  number: string;
  badge: string;
  title: string;
  summary: string;
  keyPoints: string[];
  icon: React.ReactNode;
}

const advantageCards: AdvantageCard[] = [
  {
    id: 'direct-founder',
    number: '01',
    badge: 'Direct Access',
    title: 'Direct Founder Communication',
    summary:
      'Collaborate directly with lead campaign strategists and senior engineers. No junior account managers, relay delays, or diluted creative briefs.',
    keyPoints: [
      'Zero message relay delays or communication distortion',
      'Direct strategy syncs with experienced agency operators',
      'Agile same-day creative revisions and campaign adjustments',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'transparent-pricing',
    number: '02',
    badge: 'Clear Retainers',
    title: 'Transparent Fixed Retainers',
    summary:
      'Predictable, flat monthly pricing with itemized deliverables. Zero hidden agency markups, unexpected billables, or restrictive lock-in contracts.',
    keyPoints: [
      'Pre-agreed monthly deliverable schedules and milestones',
      '100% client ownership of all ad accounts, domains, and assets',
      'Itemized activity logs with direct ad account billing transparency',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'unified-creative-media',
    number: '03',
    badge: 'Full-Funnel',
    title: 'Unified Creative & Paid Ads',
    summary:
      'Content production and media buying executed by one synchronized team. High-hook video producers and ad specialists collaborate in real time.',
    keyPoints: [
      'Rapid creative iteration based on cost-per-inquiry ad telemetry',
      'Native 9:16 vertical reels engineered specifically for ad hooks',
      'Landing page copywriting aligned with campaign visual styles',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'production-engineering',
    number: '04',
    badge: 'Modern Tech',
    title: 'Modern Technology Stack',
    summary:
      'High-performance Next.js 14, React, and TypeScript engineering. Custom webhooks, automated WhatsApp flows, and scalable digital infrastructure.',
    keyPoints: [
      'High-performance page speed optimizing ad Quality Scores',
      'Clean modular architectures with automated lead integrations',
      'Server-rendered metadata for local SEO discovery',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  const whatsappConsultationUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to learn more about your operational approach and grow my business.'
  );

  return (
    <section
      id="why-choose"
      className="py-24 bg-gradient-to-b from-[#FAFAF9] via-[#F8FAFC] to-[#FAFAF9] text-ink-900 relative border-t-2 border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Reference Styling */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" />
            <div className="inline-flex items-center gap-2 border border-slate-300 bg-white/95 px-3 py-1 shadow-xs">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                THE IDM ADVANTAGE · ZERO FLUFF
              </span>
            </div>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            Why Ambitious Brands Switch to <span className="italic text-[#365679] font-medium">IDM Smart Tech</span>
          </h2>

          <p className="text-[15px] sm:text-[16.5px] text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto font-medium">
            We eliminated the inefficiencies, bloated retainers, and junior handoffs. Direct founder communication, transparent retainers, and integrated execution designed to move your business forward.
          </p>
        </ScrollReveal>

        {/* Compact, Premium 4-Column Advantages Strip */}
        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch max-w-[1240px] mx-auto">
            {advantageCards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUpVariants}
                className="glossy-card glossy-card-hover border-2 border-slate-200/90 hover:border-[#0F172A] p-6 flex flex-col justify-between transition-all bg-white group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-[#0F172A]">
                      {card.number}
                    </span>

                    <div className="w-10 h-10 border border-slate-200 bg-slate-50 flex items-center justify-center text-[#0F172A] shadow-2xs">
                      {card.icon}
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 inline-block mb-3">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                    {card.summary}
                  </p>

                  {/* Key Operational Points */}
                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    {card.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-relaxed">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-3.5 border-t border-slate-200 flex items-center justify-between font-mono text-[9.5px] uppercase font-bold text-slate-500">
                  <span>Standard</span>
                  <span className="text-[#0F172A]">
                    Verified →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Bottom CTA Banner */}
        <ScrollReveal variant="fade-up" delay={0.2} className="mt-16 text-center">
          <div className="p-8 sm:p-10 border-2 border-slate-300 bg-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative shadow-xs">
            <div className="text-left">
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#0F172A]">
                Ready for straightforward growth marketing?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Direct strategy discussions, clear deliverables, and zero lock-in contracts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="btn-primary-ink text-[10.5px] py-3 px-5"
              >
                START A PROJECT
              </Link>
              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-cta text-[10.5px] py-3 px-4"
              >
                WHATSAPP US
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
