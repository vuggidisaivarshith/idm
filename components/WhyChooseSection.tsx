'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
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
  operationalDetails: string[];
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
      'You collaborate directly with our lead campaign strategists and technical developers — never through layers of junior account executives or slow support tickets.',
    operationalDetails: [
      'Zero message relay delays or communication distortion',
      'Direct strategy syncs with experienced operators',
      'Agile same-day creative revisions and campaign adjustments',
      'Full accountability across creative, ad spend, and technical deliverables',
    ],
    gradient: 'from-primarypurple via-royalblue to-brandcyan',
    iconBg: 'bg-primarypurple/10 text-primarypurple border-primarypurple/25',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    operationalDetails: [
      'Pre-agreed monthly deliverable schedules and milestones',
      '100% client ownership of all ad accounts, domains, and assets',
      'Itemized bi-weekly activity logs and transparent ad spend tracking',
      'Flexible month-to-month contracts with no penalty lock-ins',
    ],
    gradient: 'from-royalblue via-brandcyan to-brandmint',
    iconBg: 'bg-royalblue/10 text-royalblue border-royalblue/25',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'unified-creative-media',
    number: '03',
    badge: 'Full-Funnel',
    title: 'Unified Creative & Paid Acquisition',
    summary:
      'We eliminate the disconnect between content creation and media buying. High-hook video producers and ad specialists collaborate under one unified workflow.',
    operationalDetails: [
      'Real-time creative iteration based on live cost-per-inquiry feedback',
      'Native 9:16 vertical short-form reels engineered specifically for ad hooks',
      'Synchronized landing page copy matching ad visual styles',
      'Single accountable team for creative engagement and lead volume',
    ],
    gradient: 'from-brandcyan via-brandmint to-royalblue',
    iconBg: 'bg-brandcyan/10 text-brandcyan border-brandcyan/25',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'production-engineering',
    number: '04',
    badge: 'Modern Tech',
    title: 'Production-Grade Modern Engineering',
    summary:
      'We build high-speed Next.js 14, React, and TypeScript applications instead of sluggish, security-vulnerable WordPress or generic template builders.',
    operationalDetails: [
      'Sub-second page loads optimizing ad Quality Scores and bounce rates',
      'Clean, modular codebases with custom WhatsApp and CRM webhooks',
      'Server-rendered metadata for superior local SEO indexing',
      'Future-proof architectures ready for custom automation and tools',
    ],
    gradient: 'from-softpink via-primarypurple to-royalblue',
    iconBg: 'bg-softpink/10 text-softpink border-softpink/25',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
            We operate as an agile, high-standard digital growth unit. Direct founder attention, transparent fixed retainers, unified creative production, and production-grade engineering.
          </p>
        </ScrollReveal>

        {/* 4 Cards: 2x2 on Desktop / Tablet, 1 col on Mobile */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            {advantageCards.map((card, idx) => {
              const isHovered = activeCard === idx;
              return (
                <motion.div key={card.id} variants={fadeUpVariants} className="h-full">
                  <div
                    onMouseEnter={() => setActiveCard(idx)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                    className={`rounded-3xl bg-white/95 backdrop-blur-md border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-pointer overflow-hidden card-3d-tilt ${
                      isHovered
                        ? 'border-primarypurple/50 shadow-[0_20px_40px_-10px_rgba(105,87,245,0.15),inset_0_1px_1px_rgba(255,255,255,1)] -translate-y-1.5 ring-1 ring-primarypurple/20'
                        : 'border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_30px_-5px_rgba(16,28,50,0.06)] ring-1 ring-bordercolor/70 hover:border-primarypurple/30'
                    }`}
                  >
                    {/* Top reflective gradient bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div>
                      {/* Step Number & Emblem */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                          {card.number}
                        </span>

                        <div
                          className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center transition-all duration-300 ${
                            isHovered ? 'scale-110 rotate-2 shadow-xs' : 'shadow-2xs'
                          }`}
                        >
                          {card.icon}
                        </div>
                      </div>

                      {/* Badge */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/15 inline-block mb-2">
                        {card.badge}
                      </span>

                      {/* Heading 1st (Always visible) */}
                      <h3
                        className={`text-xl font-heading font-bold transition-colors duration-200 mb-2 leading-snug ${
                          isHovered ? 'text-primarypurple' : 'text-textprimary'
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Details and Description (Revealed on hover / tap) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isHovered
                            ? 'max-h-80 opacity-100 mt-3 pt-3 border-t border-bordercolor/80'
                            : 'max-h-0 opacity-0 mt-0 pt-0'
                        }`}
                      >
                        <p className="text-xs text-textsecondary leading-relaxed mb-3">
                          {card.summary}
                        </p>

                        <p className="text-[11px] font-bold uppercase tracking-wider text-textprimary mb-2">
                          Operational Advantages:
                        </p>
                        <div className="space-y-2">
                          {card.operationalDetails.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start space-x-2 text-xs text-textsecondary">
                              <span className="w-3.5 h-3.5 rounded-full bg-brandmint/20 text-brandmint flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5" aria-hidden="true">
                                ✓
                              </span>
                              <span className="leading-tight">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Idle Hint */}
                      <div
                        className={`transition-opacity duration-200 mt-3 ${
                          isHovered ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-70'
                        }`}
                      >
                        <span className="text-[10px] text-textsecondary/80 font-medium flex items-center gap-1">
                          <span>Hover to reveal operational details</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-5 border-t border-bordercolor/80 flex items-center justify-between text-xs font-semibold text-textsecondary">
                      <span>Agency Advantage</span>
                      <span
                        className={`font-bold transition-transform duration-200 flex items-center gap-1 ${
                          isHovered ? 'text-primarypurple translate-x-1' : 'text-textsecondary'
                        }`}
                      >
                        <span>{card.title}</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Strategic Partnership Callout Box */}
        <ScrollReveal variant="scaleIn" className="mt-16">
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_16px_40px_-10px_rgba(105,87,245,0.08),0_1px_4px_rgba(0,0,0,0.03)] ring-1 ring-bordercolor/70 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan rounded-full" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sectionsoft text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 border border-primarypurple/20 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brandmint animate-pulse" />
              <span>Dedicated Strategic Growth</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-textprimary tracking-tight leading-tight">
              Ready to Upgrade Your Brand&apos;s Trajectory?
            </h3>

            <p className="text-sm sm:text-base text-textsecondary max-w-xl mx-auto mt-3 leading-relaxed">
              Experience the clarity of direct founder communication, creative execution, and production-grade technology built for measurable business growth.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <MagneticButton maxDistance={6}>
                <a
                  href={whatsappConsultationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-aurora-primary py-3.5 px-8 text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  💬 Chat With Our Strategists
                </a>
              </MagneticButton>

              <MagneticButton maxDistance={6}>
                <Link
                  href="/services"
                  className="btn-aurora-secondary py-3.5 px-8 text-xs font-heading font-bold uppercase tracking-wider"
                >
                  Explore Capabilities &rarr;
                </Link>
              </MagneticButton>
            </div>

            <p className="text-[11px] text-textsecondary mt-5">
              Direct line to our strategic team in {COMPANY_INFO.city}:{' '}
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="font-semibold text-primarypurple hover:underline"
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
