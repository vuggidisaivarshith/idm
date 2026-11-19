'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TechCanvas = dynamic(() => import('@/components/TechCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-14 h-14 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-darkbg text-white overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* Background Cyber Glow & Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(0,242,254,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
        <TechCanvas />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto pointer-events-none">
        <div className="max-w-2xl space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">
              AI-Driven Digital Marketing & Tech Hub
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.08]">
            Supercharge Growth with <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              AI & Smart Tech.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            From dominating Google Maps local rankings to high-performance web/app engineering and automated lead generation, IDM Smart Tech powers modern businesses from Hyderabad to the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#pricing"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-500 transition-all transform hover:-translate-y-0.5"
            >
              View Growth Packages (from ₹4,999)
            </a>
            <a
              href="https://wa.me/918519837818?text=Hi%20IDM%20Smart%20Tech,%20I%20want%20a%20free%20GMB%20/%20SEO%20audit."
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm tracking-wide backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
              <span>⚡</span> Get Free Audit
            </a>
          </div>
        </div>
      </div>

      {/* Live Operational Metrics Ribbon */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">500+</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Businesses Scaled</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight">98%</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">GMB Reinstatement Rate</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">₹4,999/mo</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Starter Growth Plans</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
            <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Hyderabad</p>
            <p className="text-xs uppercase text-slate-400 tracking-wider mt-1">Shamshabad Tech Hub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
