'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import MagneticButton from '@/components/animations/MagneticButton';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

interface ValueCard {
  id: string;
  step: string;
  title: string;
  badge: string;
  description: string;
  keyPoints: string[];
  gradient: string;
  iconBg: string;
  iconGlow: string;
  icon: React.ReactNode;
}

const partnershipCards: ValueCard[] = [
  {
    id: 'brand',
    step: '01',
    title: 'Build a Powerful Brand',
    badge: 'Creative Identity',
    description:
      'Create a memorable brand identity with professional creatives, consistent messaging, strategic content and a strong digital presence.',
    keyPoints: [
      'Brand positioning and identity',
      'Social media strategy',
      'Creative content and design',
      'Consistent brand communication',
    ],
    gradient: 'from-primarypurple via-royalblue to-brandcyan',
    iconBg: 'bg-primarypurple/10 text-primarypurple border-primarypurple/25',
    iconGlow: 'from-primarypurple/20 to-transparent',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5l1.5 2.5m4.5-2.5l-1.5 2.5" />
      </svg>
    ),
  },
  {
    id: 'audience',
    step: '02',
    title: 'Reach the Right Audience',
    badge: 'Precision Targeting',
    description:
      'Connect your business with potential customers through targeted campaigns and data-driven digital marketing.',
    keyPoints: [
      'Meta and Google Ads',
      'Audience targeting',
      'Local SEO and Google Business Profile',
      'Lead generation campaigns',
    ],
    gradient: 'from-royalblue via-brandcyan to-brandmint',
    iconBg: 'bg-royalblue/10 text-royalblue border-royalblue/25',
    iconGlow: 'from-royalblue/20 to-transparent',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    title: 'Turn Attention Into Leads',
    badge: 'Conversion Funnels',
    description:
      'Transform digital engagement into genuine business enquiries with conversion-focused campaigns and effective lead management.',
    keyPoints: [
      'Lead generation strategies',
      'Landing page optimization',
      'WhatsApp enquiry integration',
      'Campaign performance tracking',
    ],
    gradient: 'from-brandcyan via-brandmint to-royalblue',
    iconBg: 'bg-brandcyan/10 text-brandcyan border-brandcyan/25',
    iconGlow: 'from-brandcyan/20 to-transparent',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'infrastructure',
    step: '04',
    title: 'Build Your Digital Infrastructure',
    badge: 'Modern Technology',
    description:
      'Strengthen your business with modern websites, mobile applications and custom software designed around your operations.',
    keyPoints: [
      'Website development',
      'Mobile application development',
      'Custom CRM and ERP solutions',
      'Business automation systems',
    ],
    gradient: 'from-primarypurple via-softpink to-royalblue',
    iconBg: 'bg-deepviolet/10 text-primarypurple border-primarypurple/25',
    iconGlow: 'from-deepviolet/20 to-transparent',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    title: 'Grow Smarter With AI',
    badge: 'Intelligent Automation',
    description:
      'Save time and improve business efficiency with intelligent automation and AI-powered business solutions.',
    keyPoints: [
      'AI-powered workflows',
      'Chatbots and enquiry automation',
      'Automated lead management',
      'Custom AI integrations',
    ],
    gradient: 'from-softpink via-primarypurple to-brandcyan',
    iconBg: 'bg-softpink/10 text-softpink border-softpink/25',
    iconGlow: 'from-softpink/20 to-transparent',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function AgencyPartnershipSection() {
  const whatsappConsultationUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to partner with your agency to grow my business.'
  );

  return (
    <section
      id="partnership"
      className="py-24 bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg text-textprimary relative border-t border-bordercolor overflow-hidden"
    >
      {/* Ambient Glossy Glows */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-primarypurple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-brandcyan/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-primarypurple/20 text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(105,87,245,0.06)]">
            <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse" />
            <span>The Agency Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-[1.15]">
            What Happens When You <br />
            <span className="font-extrabold text-gradient-aurora">
              Partner With IDM?
            </span>
          </h2>

          <p className="text-textsecondary text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto font-normal">
            More than a service provider. Your growth partner, creative team, marketing strategist and technology partner — working together to move your business forward.
          </p>
        </ScrollReveal>

        {/* 5 Premium Partnership Cards — Balanced Composition (Top 3, Bottom 2) */}
        <StaggerContainer staggerDelay={0.1} className="space-y-6">
          {/* Top Row: 3 Cards on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipCards.slice(0, 3).map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUpVariants}
                className="group relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_30px_-5px_rgba(16,28,50,0.06),0_1px_3px_rgba(0,0,0,0.03)] ring-1 ring-bordercolor/70 hover:border-primarypurple/40 hover:shadow-[0_20px_40px_-10px_rgba(105,87,245,0.15)] transition-all duration-300 hover:-translate-y-1.5 p-7 sm:p-8 flex flex-col justify-between card-3d-tilt overflow-hidden"
              >
                {/* Subtle Top Reflective Line & Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                
                {/* Ambient Soft Card Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.iconGlow} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Card Header: Step & 3D Emblem Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                      {card.step}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/15 inline-block mb-3">
                    {card.badge}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-textsecondary leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Key Points Checklist */}
                  <div className="space-y-2.5 pt-5 border-t border-bordercolor/80">
                    {card.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-textsecondary">
                        <span className="w-4 h-4 rounded-full bg-primarypurple/10 text-primarypurple flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5" aria-hidden="true">
                          ✓
                        </span>
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 mt-6 border-t border-bordercolor/80 flex items-center justify-between text-xs font-semibold text-textsecondary group-hover:text-primarypurple transition-colors">
                  <span>Structured Delivery</span>
                  <span className="font-bold text-primarypurple group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards centered on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6">
            {partnershipCards.slice(3, 5).map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUpVariants}
                className="group relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_30px_-5px_rgba(16,28,50,0.06),0_1px_3px_rgba(0,0,0,0.03)] ring-1 ring-bordercolor/70 hover:border-primarypurple/40 hover:shadow-[0_20px_40px_-10px_rgba(105,87,245,0.15)] transition-all duration-300 hover:-translate-y-1.5 p-7 sm:p-8 flex flex-col justify-between card-3d-tilt overflow-hidden"
              >
                {/* Ambient Soft Card Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.iconGlow} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Card Header: Step & 3D Emblem Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                      {card.step}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/15 inline-block mb-3">
                    {card.badge}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-textsecondary leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Key Points Checklist */}
                  <div className="space-y-2.5 pt-5 border-t border-bordercolor/80">
                    {card.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-textsecondary">
                        <span className="w-4 h-4 rounded-full bg-primarypurple/10 text-primarypurple flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5" aria-hidden="true">
                          ✓
                        </span>
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 mt-6 border-t border-bordercolor/80 flex items-center justify-between text-xs font-semibold text-textsecondary group-hover:text-primarypurple transition-colors">
                  <span>Structured Delivery</span>
                  <span className="font-bold text-primarypurple group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

        {/* Strong Conversion CTA Box directly below the Five Cards */}
        <ScrollReveal variant="scale" className="mt-16">
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_16px_40px_-10px_rgba(105,87,245,0.08),0_1px_4px_rgba(0,0,0,0.03)] ring-1 ring-bordercolor/70 relative overflow-hidden">
            {/* Top Glowing Subtle Border */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan rounded-full" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sectionsoft text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 border border-primarypurple/20 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brandmint animate-pulse" />
              <span>Dedicated Agency Collaboration</span>
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