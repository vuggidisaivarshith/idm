'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import MagneticButton from '@/components/animations/MagneticButton';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

interface AdvantageCard {
  id: string;
  number: string;
  badge: string;
  title: string;
  summary: string;
  keyPoints: string[];
  gradient: string;
  iconBg: string;
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
    gradient: 'from-primarypurple via-royalblue to-brandcyan',
    iconBg: 'bg-primarypurple/10 text-primarypurple border-primarypurple/25',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    gradient: 'from-royalblue via-brandcyan to-brandmint',
    iconBg: 'bg-royalblue/10 text-royalblue border-royalblue/25',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'unified-creative-media',
    number: '03',
    badge: 'Full-Funnel',
    title: 'Unified Creative & Paid Advertising',
    summary:
      'Content production and media buying executed by one synchronized team. High-hook video producers and ad specialists collaborate in real time.',
    keyPoints: [
      'Rapid creative iteration based on cost-per-inquiry ad telemetry',
      'Native 9:16 vertical reels engineered specifically for ad hooks',
      'Landing page copywriting aligned with campaign visual styles',
    ],
    gradient: 'from-brandcyan via-brandmint to-royalblue',
    iconBg: 'bg-brandcyan/10 text-brandcyan border-brandcyan/25',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'production-engineering',
    number: '04',
    badge: 'Modern Tech',
    title: 'Modern Technology Capabilities',
    summary:
      'High-performance Next.js 14, React, and TypeScript engineering. Custom webhooks, automated WhatsApp flows, and scalable digital infrastructure.',
    keyPoints: [
      'High-performance page speed optimizing ad Quality Scores',
      'Clean modular architectures with automated lead integrations',
      'Server-rendered metadata for local SEO discovery',
    ],
    gradient: 'from-softpink via-primarypurple to-royalblue',
    iconBg: 'bg-softpink/10 text-softpink border-softpink/25',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      className="py-24 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg text-textprimary relative border-t border-bordercolor overflow-hidden"
    >
      {/* Ambient Glossy Glows */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-primarypurple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-brandcyan/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-primarypurple/20 text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(105,87,245,0.06)]">
            <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse" />
            <span>Operational Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-[1.15]">
            Why Businesses Choose <br />
            <span className="font-extrabold text-gradient-aurora">
              IDM SMART TECH
            </span>
          </h2>

          <p className="text-textsecondary text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto font-normal">
            We operate as an agile, accountable growth unit. Direct communication, transparent retainers, and integrated execution designed to move your business forward.
          </p>
        </ScrollReveal>

        {/* Compact, Premium 4-Column Advantages Strip */}
        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch max-w-7xl mx-auto">
            {advantageCards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUpVariants}
                className="group relative rounded-3xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_24px_-4px_rgba(16,28,50,0.06)] ring-1 ring-bordercolor/70 p-6 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primarypurple/40 transition-all duration-300"
              >
                {/* Top gradient reflective accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient}`} />

                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                      {card.number}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-0.5 rounded-full border border-primarypurple/15 inline-block mb-3">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors duration-200 mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-textsecondary leading-relaxed mb-5 font-normal">
                    {card.summary}
                  </p>

                  {/* Key Operational Points */}
                  <div className="space-y-2 pt-3 border-t border-bordercolor/70">
                    {card.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-textprimary leading-relaxed">
                        <span className="text-brandmint font-bold mt-0.5 shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-bordercolor/60 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-textsecondary uppercase tracking-wider">
                    Core Standard
                  </span>
                  <span className="text-xs font-bold text-primarypurple group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Verified <span>&rarr;</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Bottom CTA Banner */}
        <ScrollReveal variant="fadeUp" delay={0.3} className="mt-16 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white via-sectionsoft/50 to-white border border-white/90 shadow-card max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan`} />

            <div className="text-left">
              <h4 className="text-xl sm:text-2xl font-heading font-bold text-textprimary">
                Ready for straightforward growth marketing?
              </h4>
              <p className="text-sm text-textsecondary mt-1">
                Direct strategy discussions, clear deliverables, and no long-term lock-ins.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <MagneticButton maxDistance={6}>
                <Link
                  href="/contact"
                  className="btn-aurora-primary text-xs px-5 py-2.5"
                >
                  Book Strategy Call
                </Link>
              </MagneticButton>
              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-aurora-secondary text-xs px-4 py-2.5 inline-flex items-center gap-1.5"
              >
                <span>💬 WhatsApp Us</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
