'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import SocialMediaShowcase from '@/components/SocialMediaShowcase';
import ScrollReveal from '@/components/animations/ScrollReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import { WordReveal } from '@/components/animations/TextReveal';

// Dynamic import with SSR false for Three.js 3D Canvas
const TechCanvas = dynamic(() => import('@/components/TechCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[360px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primarypurple/20 via-royalblue/20 to-brandcyan/20 animate-pulse-aurora blur-xl" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-[94vh] bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg text-textprimary overflow-hidden flex flex-col justify-center pt-28 pb-16">
      {/* Soft Aurora Ambient Glows & Seamless Section Blending */}
      <div className="absolute top-12 left-1/4 w-[480px] h-[480px] bg-primarypurple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[480px] h-[480px] bg-brandcyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-softpink/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 3D WebGL Canvas Layer: Liquid Aurora 3D Environment spanning the entire hero section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Suspense fallback={null}>
          <TechCanvas />
        </Suspense>
      </div>

      {/* Seamless bottom transition into the partnership section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-pagebg via-pagebg/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Agency Positioning Badge */}
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="badge-aurora shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse inline-block" />
                <span>Glossy Aurora • Creative Marketing & Technology</span>
              </div>
            </ScrollReveal>

            {/* Primary Headline with Word-by-Word Reveal */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-heading font-extralight tracking-tight leading-[1.08] text-textprimary">
              <WordReveal text="We Build Brands." delay={0.15} />
              <br />
              <WordReveal
                text="Create Demand. Drive Growth."
                delay={0.3}
                highlightWords={['Create', 'Demand.', 'Drive', 'Growth.']}
                highlightClassName="font-extrabold text-gradient-aurora"
              />
            </h1>

            {/* Supporting Copy */}
            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg text-textsecondary max-w-xl font-normal leading-relaxed">
                Creative marketing, powerful campaigns and intelligent technology to help ambitious businesses grow.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton maxDistance={6}>
                  <a
                    href="#contact"
                    className="btn-aurora-primary"
                  >
                    Get Your Growth Strategy
                  </a>
                </MagneticButton>
                <MagneticButton maxDistance={6}>
                  <a
                    href="/portfolio"
                    className="btn-aurora-secondary"
                  >
                    Explore Our Work
                  </a>
                </MagneticButton>
                <a
                  href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to get a growth strategy for my business.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors px-2 py-3"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </ScrollReveal>

            {/* Specialized Channels Badge Strip */}
            <ScrollReveal variant="fade-up" delay={0.5}>
              <div className="pt-6 border-t border-bordercolor/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-textsecondary">
                <span className="font-semibold text-textprimary uppercase tracking-wider text-[11px]">Core Channels:</span>
                <span className="flex items-center gap-1.5 font-medium">📸 Instagram Growth</span>
                <span className="flex items-center gap-1.5 font-medium">🎬 High-Hook Reels</span>
                <span className="flex items-center gap-1.5 font-medium">🎯 Meta & Google Ads</span>
                <span className="flex items-center gap-1.5 font-medium">📍 Google Maps Local</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Layered Cinematic 3D Scene + Social Media Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[460px] sm:min-h-[520px]">
            {/* Overlay Layer: Interactive 3D Social Media Showcase Cards */}
            <ScrollReveal variant="scale" delay={0.3} className="relative z-20 w-full pointer-events-auto">
              <SocialMediaShowcase />
            </ScrollReveal>

            {/* Bottom Floating Agency Location Pill */}
            <ScrollReveal variant="fade-up" delay={0.5} className="hidden sm:flex absolute -bottom-3 left-6 z-30">
              <div className="aurora-card px-3.5 py-1.5 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-2 flex">
                <span className="w-2 h-2 rounded-full bg-brandmint inline-block" />
                <span className="text-[11px] font-semibold text-textprimary">
                  📍 {COMPANY_INFO.city}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
