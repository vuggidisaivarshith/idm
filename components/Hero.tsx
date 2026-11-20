'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import SocialMediaShowcase from '@/components/SocialMediaShowcase';
import ScrollReveal from '@/components/animations/ScrollReveal';

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
  const whatsappUrl = getWhatsAppUrl(
    'Hi IDM Smart Tech, I would like to get a growth strategy for my business.'
  );

  return (
    <section className="relative w-full min-h-[92vh] bg-gradient-to-b from-[#FAFAF9] via-[#F8FAFC] to-[#FAFAF9] text-ink-900 overflow-hidden flex flex-col justify-center pt-24 pb-16">
      {/* Soft Aurora Ambient Glows & Seamless Section Blending */}
      <div className="absolute top-12 left-1/4 w-[480px] h-[480px] bg-primarypurple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[480px] h-[480px] bg-brandcyan/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-softpink/6 rounded-full blur-[130px] pointer-events-none" />

      {/* 3D WebGL Canvas Layer: Liquid Aurora 3D Environment spanning the entire hero section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Suspense fallback={null}>
          <TechCanvas />
        </Suspense>
      </div>

      {/* Seamless bottom transition into the partnership section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-[1240px] mx-auto px-6 md:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Reference Editorial Authority Eyebrow Badge */}
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 border-2 border-slate-300 bg-white/95 px-3.5 py-1.5 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                  HYDERABAD &bull; GOOGLE &amp; META PARTNER &bull; AI TECH
                </span>
              </div>
            </ScrollReveal>

            {/* Primary Headline with Editorial Luxury Typography */}
            <h1 className="font-serif text-[38px] sm:text-[54px] lg:text-[68px] font-normal leading-[1.08] sm:leading-[1.05] tracking-[-0.025em] text-[#0F172A] text-balance">
              We Build Brands.
              <br />
              Create <span className="italic text-[#365679] font-medium">Demand.</span>
              <br />
              Drive <span className="italic text-gradient-aurora font-medium">Growth.</span>
            </h1>

            {/* Supporting Copy */}
            <ScrollReveal variant="fade-up" delay={0.25}>
              <p className="text-[15.5px] sm:text-[17px] leading-[1.72] text-[#1E293B] font-medium max-w-xl">
                Creative marketing, high-converting campaigns and intelligent technology engineered to scale ambitious businesses across Hyderabad and beyond.
              </p>
            </ScrollReveal>

            {/* CTA Buttons (Precision Architectural Styling) */}
            <ScrollReveal variant="fade-up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="btn-primary-ink"
                >
                  START A PROJECT
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald-cta"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  WHATSAPP DIRECT
                </a>
                <Link
                  href="/portfolio"
                  className="btn-ghost-luxury"
                >
                  VIEW WORK
                </Link>
              </div>
            </ScrollReveal>

            {/* Specialized Channels Badge Strip */}
            <ScrollReveal variant="fade-up" delay={0.45}>
              <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-[0.16em]">
                  CAPABILITIES:
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 bg-white/90 font-mono text-[10px] tracking-wider uppercase text-[#0F172A] font-bold">
                  📸 Instagram Reels
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 bg-white/90 font-mono text-[10px] tracking-wider uppercase text-[#0F172A] font-bold">
                  🎯 Google &amp; Meta Ads
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 bg-white/90 font-mono text-[10px] tracking-wider uppercase text-[#0F172A] font-bold">
                  📍 Local 3-Pack Maps
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-slate-300 bg-white/90 font-mono text-[10px] tracking-wider uppercase text-[#0F172A] font-bold">
                  ⚡ Web &amp; AI Apps
                </span>
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
              <div className="border-2 border-slate-300 bg-white/95 px-3.5 py-1.5 shadow-xs items-center gap-2 flex">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase font-bold text-[#0F172A]">
                  📍 {COMPANY_INFO.city} HQ
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
