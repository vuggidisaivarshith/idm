'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] bg-gradient-to-b from-pagebg via-sectionsoft/40 to-pagebg text-textprimary overflow-hidden flex flex-col justify-center pt-28 pb-16">
      {/* Soft Aurora Mesh Glows */}
      <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-primarypurple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brandcyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-softpink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Agency Positioning Badge */}
            <div className="badge-aurora shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-primarypurple animate-pulse inline-block" />
              <span>Social Media & Digital Growth Agency</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-heading font-extralight tracking-tight leading-[1.08] text-textprimary">
              We Make Brands <br />
              <span className="font-extrabold text-gradient-aurora">
                Impossible to Ignore.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-textsecondary max-w-xl font-normal leading-relaxed">
              From scroll-stopping content to performance-driven campaigns, we help businesses build stronger brands and grow online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="btn-aurora-primary"
              >
                Get Your Growth Strategy
              </a>
              <a
                href="#portfolio"
                className="btn-aurora-secondary"
              >
                View Our Work
              </a>
              <a
                href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to get a creative social media growth strategy for my brand.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors px-2 py-3"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* Platform Badges */}
            <div className="pt-6 border-t border-bordercolor/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-textsecondary">
              <span className="font-semibold text-textprimary uppercase tracking-wider text-[11px]">Specialized In:</span>
              <span className="flex items-center gap-1.5 font-medium">📸 Instagram Growth</span>
              <span className="flex items-center gap-1.5 font-medium">🎬 High-Hook Reels</span>
              <span className="flex items-center gap-1.5 font-medium">🎯 Meta & Google Ads</span>
              <span className="flex items-center gap-1.5 font-medium">📍 Google Maps Local</span>
            </div>
          </div>

          {/* Right Column: Creative Campaign Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primarypurple/20 via-royalblue/15 to-softpink/20 rounded-3xl blur-2xl -z-10" />

            {/* Main Instagram Reel / Creative Post Mockup Card */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] aurora-card overflow-hidden shadow-card-hover border-bordercolor bg-white relative">
              {/* Mockup Header */}
              <div className="px-4 py-3 border-b border-bordercolor flex items-center justify-between bg-white">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-primarypurple via-royalblue to-softpink p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primarypurple">IDM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-textprimary">idmsmarttech</span>
                    <span className="text-royalblue text-[10px]">✓</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sectionsoft text-primarypurple">
                  Viral Campaign
                </span>
              </div>

              {/* Creative Visual Container */}
              <div className="relative h-[320px] overflow-hidden bg-slate-900 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                  alt="Campaign Creative Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Reel Metric Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md border border-white/25 inline-flex items-center gap-1">
                      <span>▶</span> 1.2M Plays
                    </span>
                    <p className="text-xs font-medium text-white/90 mt-2 line-clamp-1">
                      Viral Recipe Launch Reel • Food & Hospitality
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-brandmint/90 text-white px-2 py-0.5 rounded-md">
                    +420% Leads
                  </span>
                </div>
              </div>

              {/* Engagement Stats Strip */}
              <div className="px-4 py-3 bg-pagebg/60 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary">
                <span className="font-semibold text-textprimary">❤️ 84.2K Likes</span>
                <span className="font-semibold text-textprimary">💬 1,480 Comments</span>
                <span className="font-semibold text-textprimary">🚀 12.6K Shares</span>
              </div>
            </div>

            {/* Floating Card 1: Top Right - Follower Acceleration */}
            <div className="hidden sm:flex absolute -top-5 -right-6 aurora-card p-3.5 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-sectionsoft text-primarypurple flex items-center justify-center font-bold text-sm">
                📈
              </div>
              <div>
                <p className="text-[11px] text-textsecondary uppercase font-semibold">Weekly Growth</p>
                <p className="text-sm font-heading font-extrabold text-textprimary">+4,820 Followers</p>
              </div>
            </div>

            {/* Floating Card 2: Bottom Left - ROAS Metric */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 aurora-card p-3.5 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sectionsoft text-brandmint flex items-center justify-center font-bold text-sm">
                🎯
              </div>
              <div>
                <p className="text-[11px] text-textsecondary uppercase font-semibold">Meta Ads Return</p>
                <p className="text-sm font-heading font-extrabold text-brandmint">8.4x Verified ROAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
