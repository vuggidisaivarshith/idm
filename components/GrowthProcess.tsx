'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const journeySteps = [
  {
    step: '01',
    title: 'Audit',
    tagline: 'Discovery & Current State Analysis',
    description:
      'We evaluate your current social channels, local search footprint, competitors, and audience behavior to pinpoint precise growth opportunities.',
    deliverables: ['Competitor benchmarking', 'Audience profiling', 'Channel health check'],
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategy',
    tagline: 'Campaign & Funnel Roadmap',
    description:
      'We architect your monthly content pillars, high-hook creative angles, paid ad funnels, and target demographic segments tailored to your industry.',
    deliverables: ['Monthly content calendar', 'Paid ads funnel architecture', 'Brand guidelines'],
    icon: '📐',
  },
  {
    step: '03',
    title: 'Creation',
    tagline: 'High-Retention Asset Production',
    description:
      'Our design and video team produces scroll-stopping Reels, aesthetic post carousels, ad visual variations, and persuasive copywriting.',
    deliverables: ['9:16 short-form video hooks', 'Aesthetic feed & carousel posts', 'High-intent ad copy'],
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Launch',
    tagline: 'Multi-Channel Activation',
    description:
      'Campaigns go live with structured scheduling, verified Meta & Google tracking pixels, local SEO citations, and instant WhatsApp inquiry routing.',
    deliverables: ['Pixel & conversion API setup', 'Scheduled grid deployment', 'WhatsApp lead workflow'],
    icon: '🚀',
  },
  {
    step: '05',
    title: 'Optimization',
    tagline: 'Data-Driven Performance Tuning',
    description:
      'We analyze real engagement and conversion telemetry, conducting continuous A/B tests on creative hooks, audience segments, and budget allocation.',
    deliverables: ['Creative A/B testing', 'Audience bid optimization', 'Cost-per-lead refinement'],
    icon: '⚡',
  },
  {
    step: '06',
    title: 'Reporting',
    tagline: 'Transparent Review & Scaling',
    description:
      'You receive clear performance reports covering reach, engagement, inquiries generated, and actionable recommendations for subsequent growth stages.',
    deliverables: ['Bi-weekly performance data', 'Inquiry volume tracking', 'Scaling recommendations'],
    icon: '📊',
  },
];

export default function GrowthProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;

      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-sectionsoft text-textprimary relative border-t border-bordercolor overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fadeUp" className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
            Structured Client Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Our 6-Step Method for <br />
            <span className="font-extrabold text-gradient-aurora">
              Predictable Brand Acceleration.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            A transparent, disciplined six-stage journey: Audit → Strategy → Creation → Launch → Optimization → Reporting. Turning casual scrollers into paying, long-term brand advocates.
          </p>
        </ScrollReveal>

        {/* Animated Connecting Line on Desktop */}
        <div className="hidden lg:block relative w-full mb-10 px-8">
          <div className="w-full h-1 bg-white/80 rounded-full overflow-hidden shadow-2xs border border-bordercolor/60">
            <div
              className="h-full bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(Math.max(scrollProgress * 115, 6), 100)}%` }}
            />
          </div>
          {/* Milestone Dots */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none">
            {journeySteps.map((_, i) => {
              const reached = scrollProgress > i * (1 / 6);
              return (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    reached
                      ? 'bg-primarypurple border-white shadow-sm shadow-primarypurple/50 scale-110'
                      : 'bg-white border-bordercolor'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${reached ? 'bg-white' : 'bg-bordercolor'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Connected Process Cards (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative items-start">
          {journeySteps.map((s, idx) => {
            const isHovered = activeStep === idx;
            return (
              <div
                key={s.step}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                className={`aurora-card p-7 flex flex-col justify-between relative group cursor-pointer transition-all duration-300 card-3d-tilt overflow-hidden ${
                  isHovered
                    ? 'border-primarypurple/50 shadow-[0_16px_36px_-6px_rgba(105,87,245,0.14),inset_0_1px_1px_rgba(255,255,255,1)] -translate-y-1.5 ring-1 ring-primarypurple/20'
                    : 'hover:border-primarypurple/30 hover:shadow-card-hover'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Header with Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primarypurple to-royalblue">
                      {s.step}
                    </span>
                    <span
                      className={`text-2xl p-2.5 rounded-xl border transition-all duration-300 ${
                        isHovered
                          ? 'bg-primarypurple/15 border-primarypurple/40 scale-110 shadow-xs'
                          : 'bg-sectionsoft border-primarypurple/15 text-primarypurple'
                      }`}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                  </div>

                  {/* Heading 1st (Always visible) */}
                  <h3
                    className={`text-xl font-heading font-bold transition-colors duration-200 mb-1 ${
                      isHovered ? 'text-primarypurple' : 'text-textprimary'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="text-xs uppercase font-semibold text-royalblue tracking-wider mb-2">
                    {s.tagline}
                  </p>

                  {/* Details and Description (Revealed while mouse moves on it) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isHovered
                        ? 'max-h-56 opacity-100 mt-3 pt-3 border-t border-bordercolor/70'
                        : 'max-h-0 opacity-0 mt-0 pt-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-textsecondary leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-bordercolor/60">
                      {s.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center space-x-1.5 text-[11px] text-textsecondary">
                          <span className="text-brandmint font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover prompt when idle */}
                  <div
                    className={`transition-opacity duration-200 mt-2 ${
                      isHovered ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-70'
                    }`}
                  >
                    <span className="text-[10px] text-textsecondary/80 font-medium flex items-center gap-1">
                      <span>Hover to reveal phase details</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary font-medium">
                  <span>Step 0{idx + 1} of 06</span>
                  <span
                    className={`font-bold transition-transform duration-200 flex items-center gap-1 ${
                      isHovered ? 'text-primarypurple translate-x-1' : 'text-primarypurple'
                    }`}
                  >
                    <span>{s.title}</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}