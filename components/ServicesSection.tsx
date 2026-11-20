'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
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
      'Strengthen your digital foundation with high-performance Next.js web applications, mobile platforms, custom CRM tools, and scalable e-commerce systems engineered for conversion.',
    coreServices: [
      {
        name: 'Website Development',
        desc: 'Optimized page load speeds, mobile-first Next.js 14 architecture, and conversion funnels.',
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
        <div className="h-36 sm:h-40 bg-slate-50 border-2 border-slate-200 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-mono font-bold text-[#0F172A] bg-white px-2.5 py-0.5 border border-slate-200 shadow-2xs flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Creative Studio
            </span>
            <span className="font-mono text-[9px] text-slate-500 uppercase font-semibold">9:16 Video &amp; Ads</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="bg-white border border-slate-200 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">🎬</span>
              <span className="font-mono text-[9px] font-bold text-[#0F172A] block leading-tight">Reel Hook</span>
              <span className="font-mono text-[8px] text-emerald-700 font-bold uppercase">Viral 9:16</span>
            </div>
            <div className="bg-white border border-slate-200 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">🎯</span>
              <span className="font-mono text-[9px] font-bold text-[#365679] block leading-tight">Meta Ads</span>
              <span className="font-mono text-[8px] text-[#365679] font-bold uppercase">Low CPL</span>
            </div>
            <div className="bg-white border border-slate-200 p-2 text-center shadow-xs">
              <span className="text-base block mb-0.5">📍</span>
              <span className="font-mono text-[9px] font-bold text-slate-700 block leading-tight">Maps 3-Pack</span>
              <span className="font-mono text-[8px] text-slate-500 font-bold uppercase">Local SEO</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1 border-t border-slate-200">
            <span>✨ Brand Sync</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1 uppercase">
              <span className="w-1 h-1 rounded-full bg-emerald-500" /> Active Ads
            </span>
          </div>
        </div>
      );

    case 'development':
      return (
        <div className="h-36 sm:h-40 bg-slate-50 border-2 border-slate-200 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-mono font-bold text-[#0F172A] bg-white px-2.5 py-0.5 border border-slate-200 shadow-2xs flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Engineered Stack
            </span>
            <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase">&lt; 1s Page Load</span>
          </div>

          <div className="bg-white border border-slate-200 p-2.5 my-auto shadow-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-mono text-slate-600 font-semibold ml-1">app/layout.tsx</span>
              </div>
              <div className="text-[10px] font-bold text-[#0F172A] pt-1">Next.js 14 App Router + TypeScript</div>
              <div className="font-mono text-[8px] text-slate-500 uppercase">Modular · Zero Bloat</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-[10px] px-2 py-0.5 bg-slate-100 text-[#0F172A] font-bold border border-slate-300 uppercase">SSR</span>
              <span className="font-mono text-[8px] text-emerald-700 font-bold mt-1 uppercase">100% Mobile</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1 border-t border-slate-200">
            <span>Modern Web Architecture</span>
            <span className="text-[#0F172A] font-bold uppercase">Conversion Stack</span>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="h-36 sm:h-40 bg-slate-50 border-2 border-slate-200 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-mono font-bold text-[#0F172A] bg-white px-2.5 py-0.5 border border-slate-200 shadow-2xs flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Automated Pipelines
            </span>
            <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase">24/7 Webhooks</span>
          </div>

          <div className="flex items-center justify-between my-auto gap-1.5">
            <div className="bg-white p-2 border border-slate-200 text-center flex-1 shadow-xs">
              <span className="text-xs block">📥</span>
              <span className="block font-mono font-bold text-[9px] text-[#0F172A] uppercase">Lead</span>
              <span className="font-mono text-[8px] text-slate-500">Meta/Google</span>
            </div>
            <span className="text-xs text-slate-400 font-bold">&rarr;</span>
            <div className="bg-white p-2 border border-[#0F172A] text-center flex-1 shadow-xs">
              <span className="text-xs block">🤖</span>
              <span className="block font-mono font-bold text-[9px] text-[#0F172A] uppercase">AI Qualify</span>
              <span className="font-mono text-[8px] text-emerald-700 font-bold">Instant</span>
            </div>
            <span className="text-xs text-slate-400 font-bold">&rarr;</span>
            <div className="bg-white p-2 border border-slate-200 text-center flex-1 shadow-xs">
              <span className="text-xs block">💬</span>
              <span className="block font-mono font-bold text-[9px] text-emerald-800 uppercase">WhatsApp</span>
              <span className="font-mono text-[8px] text-slate-500">Sales Alert</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1 border-t border-slate-200">
            <span>Zero Inbound Lag</span>
            <span className="text-emerald-700 font-bold uppercase">Automated</span>
          </div>
        </div>
      );
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white text-ink-900 relative border-t-2 border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Reference Style */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" />
            <div className="inline-flex items-center gap-2 border border-slate-300 bg-slate-100 px-3 py-1 shadow-xs">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                INTEGRATED SERVICES · THREE CORE PILLARS
              </span>
            </div>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            Integrated Services for <span className="italic text-[#365679] font-medium">Smarter Marketing &amp; Growth</span>
          </h2>

          <p className="text-[15px] sm:text-[16.5px] text-slate-600 mt-4 leading-relaxed max-w-2xl font-medium">
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
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`h-full ${isThirdCard ? 'md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-1 lg:max-w-none w-full' : ''}`}
                >
                  <div className="border-2 border-slate-200 hover:border-[#0F172A] bg-white p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-200 shadow-xs hover:shadow-md group">
                    <div>
                      {/* Illustration Header */}
                      <div className="mb-6">
                        <CategoryIllustration type={category.illustrationType} />
                      </div>

                      {/* Number & Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xl font-bold text-[#0F172A]">
                          {category.number}
                        </span>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5">
                          {category.badge}
                        </span>
                      </div>

                      {/* Category Heading */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#365679] transition-colors duration-150 mb-1.5 leading-snug">
                        {category.title}
                      </h3>

                      <p className="font-mono text-xs font-bold text-[#365679] mb-3">
                        {category.tagline}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                        {category.overview}
                      </p>

                      {/* Included Core Services */}
                      <div className="space-y-3 pt-5 border-t border-slate-200 mb-6">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Included Solutions:
                        </p>
                        {category.coreServices.map((svc, sIdx) => (
                          <div key={sIdx} className="flex items-start space-x-2 text-xs">
                            <span className="text-emerald-600 font-bold text-xs shrink-0 mt-0.5">
                              ✓
                            </span>
                            <div>
                              <span className="font-bold text-[#0F172A] block leading-tight">{svc.name}</span>
                              <span className="text-[11px] text-slate-600 leading-normal">{svc.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Compact Service Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {category.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[9.5px] tracking-wider uppercase px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Primary CTA and WhatsApp Handoff */}
                    <div className="pt-5 border-t border-slate-200 space-y-2">
                      <Link
                        href={category.ctaHref}
                        className="w-full btn-primary-ink py-3 text-center block text-[10.5px]"
                      >
                        {category.ctaText} →
                      </Link>

                      <a
                        href={getWhatsAppUrl(category.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 font-mono text-[10.5px] font-bold text-slate-600 hover:text-[#0F172A] text-center block uppercase tracking-wider transition-colors"
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
