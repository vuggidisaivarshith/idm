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

          {/* Right Column: Authentic Agency Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primarypurple/20 via-royalblue/15 to-softpink/20 rounded-3xl blur-2xl -z-10" />

            {/* Agency Focus Card */}
            <div className="w-full max-w-[360px] aurora-card p-6 shadow-card-hover border-bordercolor bg-white relative space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-bordercolor">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primarypurple via-royalblue to-softpink flex items-center justify-center text-white font-heading font-extrabold text-sm shadow-sm">
                    IDM
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-textprimary">IDM Smart Tech</h3>
                    <p className="text-[11px] text-textsecondary">Digital Marketing & Tech Agency</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sectionsoft text-primarypurple border border-primarypurple/20">
                  Hyderabad
                </span>
              </div>

              {/* Core Offerings List */}
              <div className="space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-textsecondary">
                  Core Expertise & Channels
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-pagebg border border-bordercolor/60 text-xs">
                    <span className="font-semibold text-textprimary flex items-center gap-2">
                      <span>📸</span> Social Media & Reels
                    </span>
                    <span className="text-[10px] text-primarypurple font-bold">Instagram & Meta</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-pagebg border border-bordercolor/60 text-xs">
                    <span className="font-semibold text-textprimary flex items-center gap-2">
                      <span>🎯</span> Performance Advertising
                    </span>
                    <span className="text-[10px] text-royalblue font-bold">Google & Meta Ads</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-pagebg border border-bordercolor/60 text-xs">
                    <span className="font-semibold text-textprimary flex items-center gap-2">
                      <span>📍</span> Local SEO & GMB
                    </span>
                    <span className="text-[10px] text-brandmint font-bold">Maps & Local Search</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-pagebg border border-bordercolor/60 text-xs">
                    <span className="font-semibold text-textprimary flex items-center gap-2">
                      <span>💻</span> Web, Apps & AI Tech
                    </span>
                    <span className="text-[10px] text-softpink font-bold">Next.js & Automation</span>
                  </div>
                </div>
              </div>

              {/* Tagline Footer */}
              <div className="pt-3 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary">
                <span className="italic text-[11px] text-textsecondary">
                  &ldquo;Creative Strategies. Smarter Marketing.&rdquo;
                </span>
                <a
                  href="#contact"
                  className="text-[11px] font-bold text-primarypurple hover:underline"
                >
                  Consult Now &rarr;
                </a>
              </div>
            </div>

            {/* Floating Badge 1: Top Right */}
            <div className="hidden sm:flex absolute -top-4 -right-4 aurora-card px-3.5 py-2 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandmint inline-block" />
              <span className="text-xs font-semibold text-textprimary">Active Agency Support</span>
            </div>

            {/* Floating Badge 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 aurora-card px-3.5 py-2 bg-white/95 backdrop-blur-md shadow-card border-bordercolor items-center gap-2">
              <span className="text-sm">📍</span>
              <span className="text-xs font-semibold text-textprimary">Shamshabad, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
