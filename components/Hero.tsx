'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import SocialMediaShowcase from '@/components/SocialMediaShowcase';

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
      {/* Soft Aurora Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-[480px] h-[480px] bg-primarypurple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[480px] h-[480px] bg-brandcyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-softpink/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Agency Positioning Badge */}
            <div className="badge-aurora shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse inline-block" />
              <span>Creative 3D Aurora • Digital Growth Agency</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-heading font-extralight tracking-tight leading-[1.08] text-textprimary">
              We Turn Attention <br />
              <span className="font-extrabold text-gradient-aurora">
                Into Business Growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-textsecondary max-w-xl font-normal leading-relaxed">
              Creative marketing, powerful content and intelligent technology to help ambitious brands grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="btn-aurora-primary"
              >
                Start Your Growth Journey
              </a>
              <a
                href="#portfolio"
                className="btn-aurora-secondary"
              >
                Explore Our Work
              </a>
              <a
                href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to discuss a creative marketing and growth strategy for my brand.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors px-2 py-3"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* Specialized Channels Badge Strip */}
            <div className="pt-6 border-t border-bordercolor/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-textsecondary">
              <span className="font-semibold text-textprimary uppercase tracking-wider text-[11px]">Core Channels:</span>
              <span className="flex items-center gap-1.5 font-medium">📸 Instagram Growth</span>
              <span className="flex items-center gap-1.5 font-medium">🎬 High-Hook Reels</span>
              <span className="flex items-center gap-1.5 font-medium">🎯 Meta & Google Ads</span>
              <span className="flex items-center gap-1.5 font-medium">📍 Google Maps Local</span>
            </div>
          </div>

          {/* Right Column: Layered Cinematic 3D Scene + Social Media Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[460px] sm:min-h-[520px]">
            {/* 3D WebGL Canvas Layer (Floating Iridescent Glass Orb) */}
            <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none sm:pointer-events-auto">
              <Suspense fallback={null}>
                <TechCanvas />
              </Suspense>
            </div>

            {/* Overlay Layer: Interactive 3D Social Media Showcase Cards */}
            <div className="relative z-20 w-full pointer-events-auto">
              <SocialMediaShowcase />
            </div>

            {/* Bottom Floating Agency Location Pill */}
            <div className="hidden sm:flex absolute -bottom-3 left-6 z-30 aurora-card px-3.5 py-1.5 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandmint inline-block" />
              <span className="text-[11px] font-semibold text-textprimary">
                📍 {COMPANY_INFO.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
