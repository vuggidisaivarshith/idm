'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { getWhatsAppUrl } from '@/lib/constants';

const TechCanvas = dynamic(() => import('@/components/TechCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-14 h-14 border-2 border-cyan/30 border-t-cyan rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-midnight text-white overflow-hidden flex flex-col justify-between pt-28 pb-12">
      {/* Background Cyber Glow & Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(0,212,255,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-pink/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
        <TechCanvas />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto pointer-events-none">
        <div className="max-w-2xl space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="badge-pill">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping inline-block" />
            <span>AI-Powered Digital Growth & Tech</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extralight tracking-tight leading-[1.08]">
            Supercharge Your Business with <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple via-blue to-cyan">
              AI & Smart Tech.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            From dominating Google Maps local rankings to high-performance web/app engineering and automated lead generation, IDM Smart Tech helps businesses grow smarter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#pricing"
              className="px-7 py-3.5 rounded-full font-bold text-sm tracking-wide text-white bg-gradient-to-r from-purple via-blue to-cyan shadow-lg shadow-purple/25 hover:shadow-cyan/30 hover:scale-[1.02] transition-all"
            >
              View Growth Packages (from ₹4,999)
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full font-medium text-sm tracking-wide text-white bg-white/5 border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-cyan/50 transition-all flex items-center gap-2"
            >
              <span>⚡</span> Get Free Audit
            </a>
            <a
              href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to enquire about digital marketing and tech services.')}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-white/25 transition-all"
            >
              Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Operational Highlights Ribbon (Fact-Based Highlights - No Invented Claims) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
          <div className="glass-card p-4 hover:border-cyan/40 transition-colors">
            <p className="text-lg sm:text-xl font-heading font-bold text-cyan tracking-tight">Local SEO & GMB</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Maps Dominance & Verification</p>
          </div>
          <div className="glass-card p-4 hover:border-purple/40 transition-colors">
            <p className="text-lg sm:text-xl font-heading font-bold text-purple tracking-tight">Paid Ads & PPC</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Google & Meta Lead Funnels</p>
          </div>
          <div className="glass-card p-4 hover:border-blue/40 transition-colors">
            <p className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight">Web & Mobile Apps</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Modern React, Next.js & Flutter</p>
          </div>
          <div className="glass-card p-4 hover:border-pink/40 transition-colors">
            <p className="text-lg sm:text-xl font-heading font-bold text-pink tracking-tight">Hyderabad Hub</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Shamshabad Office Location</p>
          </div>
        </div>
      </div>
    </section>
  );
}
