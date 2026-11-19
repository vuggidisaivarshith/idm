'use client';

import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep Dive & Audience Mapping',
    description: 'We analyze your brand DNA, existing social footprint, competitive landscape, and highest-value customer personas to identify untapped growth opportunities.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'Content Pillars & Funnel Architecture',
    description: 'We develop a bespoke social media content calendar, visual aesthetics guide, Reels concept hooks, and paid acquisition funnel mapped to clear revenue targets.',
    icon: '📐',
  },
  {
    step: '03',
    title: 'Create',
    tagline: 'Production, Design & Campaign Launch',
    description: 'Our creative team produces eye-catching graphics, edits dynamic short-form video reels, writes engaging copy, and launches targeted campaigns on Instagram and Google.',
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Optimize',
    tagline: 'Data Review & Scaling Strategy',
    description: 'We analyze real engagement and conversion metrics weekly, doubling down on top-performing creative formats and refining audience targeting to maximize ROI.',
    icon: '📈',
  },
];

export default function GrowthProcess() {
  return (
    <section id="process" className="py-24 bg-sectionsoft text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Our 4-Step Method for <br />
            <span className="font-extrabold text-gradient-aurora">
              Predictable Brand Acceleration.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            A structured, creative process that turns casual social media scrollers into paying, long-term brand advocates.
          </p>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="aurora-card p-7 flex flex-col justify-between relative group hover:border-primarypurple/40"
            >
              <div>
                {/* Header with Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                    {s.step}
                  </span>
                  <span className="text-2xl p-2.5 rounded-xl bg-sectionsoft border border-primarypurple/15 text-primarypurple" aria-hidden="true">
                    {s.icon}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-1">
                  {s.title}
                </h3>
                <p className="text-xs uppercase font-semibold text-royalblue tracking-wider mb-4">
                  {s.tagline}
                </p>
                <p className="text-xs sm:text-sm text-textsecondary leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary font-medium">
                <span>Phase 0{idx + 1}</span>
                <span className="text-primarypurple font-bold">Step Complete &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
