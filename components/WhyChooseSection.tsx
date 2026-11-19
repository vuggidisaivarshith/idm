'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import MagneticButton from '@/components/animations/MagneticButton';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

interface BenefitCard {
  id: string;
  step: string;
  title: string;
  badge: string;
  overview: string;
  measurableOutcomes: string[];
  gradient: string;
  iconBg: string;
  iconGlow: string;
  icon: React.ReactNode;
}

const benefitCards: BenefitCard[] = [
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
      'Consistent brand guidelines and ready design libraries',
      'Stronger customer recall and recognition in target markets',
    ],
    gradient: 'from-primarypurple via-royalblue to-brandcyan',
    iconBg: 'bg-primarypurple/10 text-primarypurple border-primarypurple/25',
    iconGlow: 'from-primarypurple/20 to-transparent',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    gradient: 'from-royalblue via-brandcyan to-brandmint',
    iconBg: 'bg-royalblue/10 text-royalblue border-royalblue/25',
    iconGlow: 'from-royalblue/20 to-transparent',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    gradient: 'from-brandcyan via-brandmint to-royalblue',
    iconBg: 'bg-brandcyan/10 text-brandcyan border-brandcyan/25',
    iconGlow: 'from-brandcyan/20 to-transparent',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'infrastructure',
    step: '04',
    title: 'Digital Infrastructure & Development',
    badge: 'Modern Engineering',
    overview:
      'Strengthen your business foundation with high-speed Next.js web applications, mobile platforms, and customized management tools.',
    measurableOutcomes: [
      'Sub-second page load times that prevent prospective customer bounce',
      '100% mobile-responsive layout for seamless smartphone usage',
      'Clean, secure code architectures with zero bloated templates',
      'Centralized lead capture endpoints and CRM webhook integrations',
    ],
    gradient: 'from-primarypurple via-softpink to-royalblue',
    iconBg: 'bg-deepviolet/10 text-primarypurple border-primarypurple/25',
    iconGlow: 'from-deepviolet/20 to-transparent',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l3 3-3 3m5 0h4" />
      </svg>
    ),
  },
  {
    id: 'ai',
    step: '05',
    title: 'AI Automation & Business Efficiency',
    badge: 'Intelligent Systems',
    overview:
      'Streamline day-to-day operations and accelerate customer response times with automated workflows and intelligent business solutions.',
    measurableOutcomes: [
      'Instant automated responses to common customer inquiries 24/7',
      'Zero lost customer inquiries during off-hours or peak ad traffic',
      'Automated lead routing directly to your sales or WhatsApp team',
      'Significant reduction in repetitive manual administrative tasks',
    ],
    gradient: 'from-softpink via-primarypurple to-brandcyan',
    iconBg: 'bg-softpink/10 text-softpink border-softpink/25',
    iconGlow: 'from-softpink/20 to-transparent',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const whatsappConsultationUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to partner with your team to grow my business.'
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
            <span>Why IDM Smart Tech</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-[1.15]">
            What Happens When You <br />
            <span className="font-extrabold text-gradient-aurora">
              Partner With IDM Smart Tech?
            </span>
          </h2>

          <p className="text-textsecondary text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto font-normal">
            More than a service provider. Your growth partner, creative team, marketing strategist and technology partner — working together to move your business forward.
          </p>
        </ScrollReveal>

        {/* 5 Premium Cards: 3 on Top Row, 2 Centered on Bottom Row */}
        <StaggerContainer staggerDelay={0.1} className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {benefitCards.slice(0, 3).map((card, idx) => {
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
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div>
                      {/* Step Number & Emblem */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                          {card.step}
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

                      <p className="text-xs text-textsecondary leading-relaxed mb-1">
                        {card.overview}
                      </p>

                      {/* Measurable Outcomes (Revealed on mouse hover / tap) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isHovered
                            ? 'max-h-64 opacity-100 mt-4 pt-4 border-t border-bordercolor/80'
                            : 'max-h-0 opacity-0 mt-0 pt-0'
                        }`}
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-textprimary mb-2">
                          Measurable Outcomes:
                        </p>
                        <div className="space-y-2">
                          {card.measurableOutcomes.map((point, pIdx) => (
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
                          <span>Hover to view measurable outcomes</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-5 border-t border-bordercolor/80 flex items-center justify-between text-xs font-semibold text-textsecondary">
                      <span>Outcome-Focused</span>
                      <span
                        className={`font-bold transition-transform duration-200 flex items-center gap-1 ${
                          isHovered ? 'text-primarypurple translate-x-1' : 'text-textsecondary'
                        }`}
                      >
                        <span>Details</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6 items-start">
            {benefitCards.slice(3, 5).map((card, idx) => {
              const actualIdx = idx + 3;
              const isHovered = activeCard === actualIdx;
              return (
                <motion.div key={card.id} variants={fadeUpVariants} className="h-full">
                  <div
                    onMouseEnter={() => setActiveCard(actualIdx)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(activeCard === actualIdx ? null : actualIdx)}
                    className={`rounded-3xl bg-white/95 backdrop-blur-md border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-pointer overflow-hidden card-3d-tilt ${
                      isHovered
                        ? 'border-primarypurple/50 shadow-[0_20px_40px_-10px_rgba(105,87,245,0.15),inset_0_1px_1px_rgba(255,255,255,1)] -translate-y-1.5 ring-1 ring-primarypurple/20'
                        : 'border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_30px_-5px_rgba(16,28,50,0.06)] ring-1 ring-bordercolor/70 hover:border-primarypurple/30'
                    }`}
                  >
                    {/* Top reflective gradient bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div>
                      {/* Step Number & Emblem */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                          {card.step}
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

                      <p className="text-xs text-textsecondary leading-relaxed mb-1">
                        {card.overview}
                      </p>

                      {/* Measurable Outcomes (Revealed on mouse hover / tap) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isHovered
                            ? 'max-h-64 opacity-100 mt-4 pt-4 border-t border-bordercolor/80'
                            : 'max-h-0 opacity-0 mt-0 pt-0'
                        }`}
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-textprimary mb-2">
                          Measurable Outcomes:
                        </p>
                        <div className="space-y-2">
                          {card.measurableOutcomes.map((point, pIdx) => (
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
                          <span>Hover to view measurable outcomes</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-5 border-t border-bordercolor/80 flex items-center justify-between text-xs font-semibold text-textsecondary">
                      <span>Outcome-Focused</span>
                      <span
                        className={`font-bold transition-transform duration-200 flex items-center gap-1 ${
                          isHovered ? 'text-primarypurple translate-x-1' : 'text-textsecondary'
                        }`}
                      >
                        <span>Details</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Strong Conversion CTA Box directly below the Five Cards */}
        <ScrollReveal variant="scaleIn" className="mt-16">
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_16px_40px_-10px_rgba(105,87,245,0.08),0_1px_4px_rgba(0,0,0,0.03)] ring-1 ring-bordercolor/70 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan rounded-full" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sectionsoft text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 border border-primarypurple/20 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brandmint animate-pulse" />
              <span>Dedicated Strategic Partnership</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-textprimary tracking-tight leading-tight">
              Ready to Build Your Next Growth Story?
            </h3>

            <p className="text-sm sm:text-base text-textsecondary max-w-xl mx-auto mt-3 leading-relaxed">
              Let&apos;s combine creative marketing, intelligent technology and strategic execution to take your business further.
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
                  💬 Let&apos;s Grow Together
                </a>
              </MagneticButton>

              <MagneticButton maxDistance={6}>
                <Link
                  href="/services"
                  className="btn-aurora-secondary py-3.5 px-8 text-xs font-heading font-bold uppercase tracking-wider"
                >
                  Explore Our Services &rarr;
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