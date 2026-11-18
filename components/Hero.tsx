'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with ssr: false ensures WebGL Canvas renders cleanly in client only
const ArchitecturalCanvas = dynamic(() => import('@/components/ArchitecturalCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-copper/30 border-t-copper rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-obsidian text-white overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* Background Ambience and Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_40%,rgba(212,175,55,0.13),transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
        <ArchitecturalCanvas />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto pointer-events-none">
        <div className="max-w-2xl space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-copper animate-ping inline-block" />
            <span className="text-xs uppercase tracking-widest text-copper/90 font-semibold">
              Integrated Real Estate Firm
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
            Architecting Place. <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5E6BE] to-copper">
              Engineering Value.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl font-normal leading-relaxed">
            Since 1993, IDM Companies has unified real estate investment, design, in-house construction, and elevated residential property management across the Pacific Northwest and Southwest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-copper text-black font-bold text-sm tracking-wide shadow-xl shadow-copper/25 hover:bg-[#c29e2e] transition-all transform hover:-translate-y-0.5"
            >
              Explore Communities
            </a>
            <a
              href="#model"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm tracking-wide backdrop-blur-md hover:bg-white/10 hover:border-copper/50 transition-all"
            >
              The Integrated Model &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Live Operational Metrics Ribbon */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-copper/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-bold text-copper tracking-tight">30+ Years</p>
            <p className="text-xs uppercase text-white/50 tracking-wider mt-1">Established 1993</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-copper/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">10,000+</p>
            <p className="text-xs uppercase text-white/50 tracking-wider mt-1">Apartment Homes</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-copper/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-bold text-copper tracking-tight">$2.5B+</p>
            <p className="text-xs uppercase text-white/50 tracking-wider mt-1">Total Assets Developed</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-copper/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</p>
            <p className="text-xs uppercase text-white/50 tracking-wider mt-1">Vertically Integrated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
