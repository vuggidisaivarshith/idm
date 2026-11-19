'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { getWhatsAppUrl } from '@/lib/constants';

const TechCanvas = dynamic(() => import('@/components/TechCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-primarypurple/20 border-t-primarypurple rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-pagebg via-sectionsoft/50 to-pagebg text-textprimary overflow-hidden flex flex-col justify-between pt-28 pb-12">
      {/* Soft Aurora Mesh Glows */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-primarypurple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brandcyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-lavender/15 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
        <TechCanvas />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto pointer-events-none">
        <div className="max-w-2xl space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="badge-aurora shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse inline-block" />
            <span>AI-Powered Digital Growth & Tech</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extralight tracking-tight leading-[1.08] text-textprimary">
            Supercharge Your Business with <br />
            <span className="font-extrabold text-gradient-aurora">
              AI & Smart Tech.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-textsecondary max-w-xl font-normal leading-relaxed">
            From Google Maps visibility to high-performance websites and intelligent automation, IDM Smart Tech helps businesses grow smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="btn-aurora-primary"
            >
              Get a Free Growth Audit
            </a>
            <a
              href="#services"
              className="btn-aurora-secondary"
            >
              Explore Our Services
            </a>
            <a
              href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to enquire about digital marketing and tech services.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors px-2 py-3"
            >
              Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Ribbon (Clean White Cards) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
          <div className="aurora-card p-5 bg-white/90 backdrop-blur-sm">
            <p className="text-base sm:text-lg font-heading font-bold text-textprimary tracking-tight">Local SEO & GMB</p>
            <p className="text-xs text-textsecondary mt-0.5">Maps Dominance & Verification</p>
          </div>
          <div className="aurora-card p-5 bg-white/90 backdrop-blur-sm">
            <p className="text-base sm:text-lg font-heading font-bold text-textprimary tracking-tight">Paid Ads & PPC</p>
            <p className="text-xs text-textsecondary mt-0.5">Google & Meta Lead Funnels</p>
          </div>
          <div className="aurora-card p-5 bg-white/90 backdrop-blur-sm">
            <p className="text-base sm:text-lg font-heading font-bold text-textprimary tracking-tight">Web & Mobile Apps</p>
            <p className="text-xs text-textsecondary mt-0.5">Modern Next.js, React & Flutter</p>
          </div>
          <div className="aurora-card p-5 bg-white/90 backdrop-blur-sm">
            <p className="text-base sm:text-lg font-heading font-bold text-textprimary tracking-tight">Hyderabad Hub</p>
            <p className="text-xs text-textsecondary mt-0.5">Shamshabad Office Location</p>
          </div>
        </div>
      </div>
    </section>
  );
}
