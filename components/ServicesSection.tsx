'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import MagneticButton from '@/components/animations/MagneticButton';
import { motion } from 'framer-motion';

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  coreServices: { name: string; desc: string }[];
  tags: string[];
  gradient: string;
  iconBg: string;
  accentBorder: string;
  ctaText: string;
  ctaHref: string;
  whatsappMessage: string;
  illustrationType: 'marketing' | 'development' | 'automation';
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'creative-digital-marketing',
    number: '01',
    title: 'Creative & Digital Marketing',
    badge: 'Brand & Growth',
    tagline: 'Brand Building & High-ROI Customer Acquisition',
    overview:
      'Build strong brand authority, produce scroll-stopping creative assets, and scale qualified customer acquisition through organic storytelling and precision paid advertising.',
    coreServices: [
      {
        name: 'Social Media Marketing',
        desc: 'Dedicated Instagram & Facebook growth, content calendars, and community engagement.',
      },
      {
        name: 'Content Creation & Reels',
        desc: 'High-hook 9:16 short-form video production, aesthetic feed carousels, and copywriting.',
      },
      {
        name: 'Google & Meta Ads',
        desc: 'Laser-focused paid acquisition campaigns with continuous creative testing and low CPL.',
      },
      {
        name: 'SEO & Local SEO',
        desc: 'Google Maps 3-Pack domination, local citation consistency, and search visibility.',
      },
    ],
    tags: ['Social Media', '9:16 Reels', 'Meta & Google Ads', 'Local SEO & GMB'],
    gradient: 'from-primarypurple via-royalblue to-brandcyan',
    iconBg: 'bg-primarypurple/10 text-primarypurple border-primarypurple/25',
    accentBorder: 'hover:border-primarypurple/40',
    ctaText: 'Explore Marketing Solutions',
    ctaHref: '/services',
    whatsappMessage: 'Hello IDM Smart Tech, I would like to consult on Creative & Digital Marketing solutions.',
    illustrationType: 'marketing',
  },
  {
    id: 'web-software-development',
    number: '02',
    title: 'Web & Software Development',
    badge: 'Engineering & Scale',
    tagline: 'High-Performance Web Platforms & Custom Systems',
    overview:
      'Strengthen your digital foundation with sub-second Next.js web applications, mobile platforms, custom CRM tools, and scalable e-commerce systems engineered for conversion.',
    coreServices: [
      {
        name: 'Website Development',
        desc: 'Sub-second page speeds, mobile-first Next.js 14 architecture, and conversion funnels.',
      },
      {
        name: 'Mobile Applications',
        desc: 'Cross-platform iOS and Android apps crafted for intuitive, fluid smartphone experiences.',
      },
      {
        name: 'Custom CRM & ERP',
        desc: 'Tailored operational portals, client record systems, and administrative software.',
      },
      {
        name: 'E-commerce Solutions',
        desc: 'High-converting online storefronts, catalog architecture, and secure payment checkout.',
      },
    ],
    tags: ['Next.js 14', 'Mobile Apps', 'Custom CRM/ERP', 'E-Commerce'],
    gradient: 'from-royalblue via-brandcyan to-brandmint',
    iconBg: 'bg-royalblue/10 text-royalblue border-royalblue/25',
    accentBorder: 'hover:border-royalblue/40',
    ctaText: 'Explore Web & Software Solutions',
    ctaHref: '/services/website-development',
    whatsappMessage: 'Hello IDM Smart Tech, I would like to discuss Web & Software Development for my business.',
    illustrationType: 'development',
  },
  {
    id: 'ai-business-automation',
    number: '03',
    title: 'AI & Business Automation',
    badge: 'Intelligent Scale',
    tagline: 'Automated Operations & Instant Customer Response',
    overview:
      'Eliminate repetitive operational friction and ensure zero dropped inquiries with 24/7 intelligent AI chatbots, automated WhatsApp workflows, and seamless webhook data routing.',
    coreServices: [
      {
        name: 'AI Chatbots',
        desc: '24/7 conversational web assistants providing instant query resolution and appointment booking.',
      },
      {
        name: 'WhatsApp Automation',
        desc: 'Automated greeting funnels, catalog sharing, and instant appointment scheduling over WhatsApp.',
      },
      {
        name: 'Automated Lead Management',
        desc: 'Real-time lead qualification, deduplication, and instant routing directly to your sales desk.',
      },
      {
        name: 'AI Workflows & Integrations',
        desc: 'Custom webhook pipelines connecting ad platforms, spreadsheets, and internal CRM tools.',
      },
    ],
    tags: ['AI Chatbots', 'WhatsApp Automation', 'Lead Routing', 'Custom Webhooks'],
    gradient: 'from-softpink via-primarypurple to-royalblue',
    iconBg: 'bg-softpink/10 text-softpink border-softpink/25',
    accentBorder: 'hover:border-softpink/40',
    ctaText: 'Explore AI & Automation',
    ctaHref: '/services/ai-business-automation',
    whatsappMessage: 'Hello IDM Smart Tech, I would like to learn about AI & Business Automation workflows.',
    illustrationType: 'automation',
  },
];

function CategoryIllustration({ type }: { type: ServiceCategory['illustrationType'] }) {
  switch (type) {
    case 'marketing':
      return (
        <div className="h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-sectionsoft via-white to-sectionsoft/60 border border-bordercolor/80 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs group-hover:border-primarypurple/30 transition-all duration-300">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-primarypurple bg-white px-2.5 py-0.5 rounded-full border border-primarypurple/20 shadow-2xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primarypurple animate-pulse" />
              Creative Studio
            </span>
            <span className="text-[10px] text-textsecondary font-medium">9:16 Video &amp; Paid Ads</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="rounded-xl bg-white border border-bordercolor/80 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">🎬</span>
              <span className="text-[9px] font-bold text-primarypurple block leading-tight">Reel Hook</span>
              <span className="text-[8px] text-brandmint font-semibold">Viral 9:16</span>
            </div>
            <div className="rounded-xl bg-white border border-bordercolor/80 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">🎯</span>
              <span className="text-[9px] font-bold text-royalblue block leading-tight">Meta Ads</span>
              <span className="text-[8px] text-royalblue font-semibold">Low CPL</span>
            </div>
            <div className="rounded-xl bg-white border border-bordercolor/80 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">📍</span>
              <span className="text-[9px] font-bold text-brandcyan block leading-tight">Maps 3-Pack</span>
              <span className="text-[8px] text-textsecondary font-semibold">Rank #1</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-textsecondary pt-1 border-t border-bordercolor/60">
            <span>✨ Cohesive Visual Identity</span>
            <span className="text-brandmint font-bold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-brandmint" /> Active Media Buying
            </span>
          </div>
        </div>
      );

    case 'development':
      return (
        <div className="h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-sectionsoft via-white to-sectionsoft/60 border border-bordercolor/80 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs group-hover:border-royalblue/30 transition-all duration-300">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-royalblue bg-white px-2.5 py-0.5 rounded-full border border-royalblue/20 shadow-2xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-royalblue animate-pulse" />
              Engineered Stack
            </span>
            <span className="text-[10px] text-brandmint font-bold">&lt; 1s Page Load</span>
          </div>

          <div className="bg-white rounded-xl border border-bordercolor/80 p-2.5 my-auto shadow-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[9px] font-mono text-textsecondary font-semibold ml-1">app/layout.tsx</span>
              </div>
              <div className="text-[10px] font-bold text-textprimary pt-1">Next.js 14 App Router + Tailwind</div>
              <div className="text-[8px] text-textsecondary">Clean TypeScript • Zero Template Bloat</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs px-2 py-0.5 rounded-md bg-royalblue/10 text-royalblue font-bold border border-royalblue/20">SSR</span>
              <span className="text-[8px] text-brandmint font-semibold mt-1">100% Mobile</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-textsecondary pt-1 border-t border-bordercolor/60">
            <span>Modern Web &amp; Mobile Architecture</span>
            <span className="text-primarypurple font-bold">Fast Conversion</span>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-sectionsoft via-white to-sectionsoft/60 border border-bordercolor/80 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs group-hover:border-softpink/30 transition-all duration-300">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-softpink bg-white px-2.5 py-0.5 rounded-full border border-softpink/20 shadow-2xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-softpink animate-pulse" />
              Automated Operations
            </span>
            <span className="text-[10px] text-brandmint font-bold">24/7 Live Webhooks</span>
          </div>

          <div className="flex items-center justify-between my-auto gap-1.5">
            <div className="bg-white p-2 rounded-xl border border-bordercolor/80 text-center flex-1 shadow-xs">
              <span className="text-xs block">📥</span>
              <span className="block font-bold text-[9px] text-textprimary">Inquiry</span>
              <span className="text-[8px] text-textsecondary">Ads / Web</span>
            </div>
            <span className="text-xs text-primarypurple font-bold">&rarr;</span>
            <div className="bg-white p-2 rounded-xl border border-bordercolor/80 text-center flex-1 shadow-xs ring-1 ring-primarypurple/20">
              <span className="text-xs block">🤖</span>
              <span className="block font-bold text-[9px] text-primarypurple">AI Route</span>
              <span className="text-[8px] text-textsecondary">Parsing</span>
            </div>
            <span className="text-xs text-primarypurple font-bold">&rarr;</span>
            <div className="bg-white p-2 rounded-xl border border-bordercolor/80 text-center flex-1 shadow-xs">
              <span className="text-xs block">💬</span>
              <span className="block font-bold text-[9px] text-brandmint">WhatsApp</span>
              <span className="text-[8px] text-textsecondary">Instant Alert</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-textsecondary pt-1 border-t border-bordercolor/60">
            <span>Zero Customer Response Lag</span>
            <span className="text-brandmint font-bold">Automated Scale</span>
          </div>
        </div>
      );
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white text-textprimary relative border-t border-bordercolor overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-primarypurple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-brandcyan/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Line-Mask Reveal */}
        <ScrollReveal variant="fadeUp" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sectionsoft border border-primarypurple/20 text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse" />
            <span>Integrated Agency Pillars</span>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-[1.18]">
              Integrated Services for <br />
              <span className="font-extrabold text-gradient-aurora">
                Smarter Marketing &amp; Growth.
              </span>
            </h2>
          </div>

          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed max-w-2xl font-normal">
            Three interconnected capabilities: creative marketing to capture demand, modern engineering to build conversions, and intelligent automation to scale operations.
          </p>
        </ScrollReveal>

        {/* Exactly Three Premium Category Cards */}
        <StaggerContainer staggerDelay={0.14}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {serviceCategories.map((category, index) => {
              const isThirdCard = index === 2;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`h-full ${isThirdCard ? 'md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-1 lg:max-w-none w-full' : ''}`}
                >
                  <div
                    className={`rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 relative group overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_30px_-5px_rgba(16,28,50,0.06)] ring-1 ring-bordercolor/70 hover:shadow-[0_20px_45px_-10px_rgba(105,87,245,0.15)] hover:-translate-y-1.5 ${category.accentBorder}`}
                  >
                    {/* Top reflective gradient bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.gradient} transition-opacity duration-300`}
                    />

                    <div>
                      {/* Illustration Header */}
                      <div className="mb-6">
                        <CategoryIllustration type={category.illustrationType} />
                      </div>

                      {/* Number & Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                          {category.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-0.5 rounded-full border border-primarypurple/15">
                          {category.badge}
                        </span>
                      </div>

                      {/* Category Heading */}
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors duration-200 mb-1.5 leading-snug">
                        {category.title}
                      </h3>

                      <p className="text-xs font-semibold text-royalblue mb-3">
                        {category.tagline}
                      </p>

                      <p className="text-xs text-textsecondary leading-relaxed mb-6">
                        {category.overview}
                      </p>

                      {/* Included Core Services */}
                      <div className="space-y-3 pt-5 border-t border-bordercolor/80 mb-6">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-textsecondary">
                          Included Solutions:
                        </p>
                        {category.coreServices.map((svc, sIdx) => (
                          <div key={sIdx} className="flex items-start space-x-2 text-xs">
                            <span className="w-3.5 h-3.5 rounded-full bg-brandmint/20 text-brandmint flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                              ✓
                            </span>
                            <div>
                              <span className="font-bold text-textprimary block leading-tight">{svc.name}</span>
                              <span className="text-[11px] text-textsecondary leading-normal">{svc.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Compact Service Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {category.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2.5 py-0.5 rounded-md bg-sectionsoft/80 text-textsecondary border border-bordercolor/70 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Primary CTA and WhatsApp Handoff */}
                    <div className="pt-5 border-t border-bordercolor/80 space-y-2">
                      <Link
                        href={category.ctaHref}
                        className="w-full py-3 px-5 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm hover:shadow-md hover:opacity-95 transition-all group/btn"
                      >
                        <span>{category.ctaText}</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-200">&rarr;</span>
                      </Link>

                      <a
                        href={getWhatsAppUrl(category.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-full text-[11px] font-semibold text-textsecondary hover:text-primarypurple text-center block transition-colors"
                      >
                        💬 Consult via WhatsApp &rarr;
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
