'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const journeySteps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Brand Audit & Current State Analysis',
    description:
      'We evaluate your current digital footprint, competitor presence, target audience habits, and local search performance to identify immediate growth levers.',
    deliverables: ['Audience profiling', 'Competitor benchmarking', 'Channel health check'],
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'Campaign & Funnel Architecture',
    description:
      'We design your monthly content pillars, high-retention video hooks, paid media acquisition funnels, and demographic targeting blueprint.',
    deliverables: ['Monthly content calendar', 'Paid funnel architecture', 'Creative direction blueprint'],
    icon: '📐',
  },
  {
    step: '03',
    title: 'Create',
    tagline: 'High-Retention Asset Production',
    description:
      'Our creative studio scripts and produces scroll-stopping Reels, aesthetic feed carousels, conversion copywriting, and targeted ad visuals.',
    deliverables: ['9:16 short-form video hooks', 'Aesthetic feed & carousels', 'High-intent conversion copy'],
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    tagline: 'Multi-Channel Activation & Performance Tuning',
    description:
      'Campaigns go live with verified pixel tracking and local SEO. We continuously monitor ad telemetry and run A/B split tests on creative hooks and audiences.',
    deliverables: ['Meta pixel & CAPI integration', 'A/B creative testing', 'Bid & audience optimization'],
    icon: '🚀',
  },
  {
    step: '05',
    title: 'Report & Improve',
    tagline: 'Transparent Review & Strategic Scaling',
    description:
      'You receive transparent bi-weekly reports covering impressions, cost-per-inquiry, engagement rates, and strategic scaling recommendations.',
    deliverables: ['Bi-weekly performance data', 'Inquiry volume tracking', 'Continuous scale roadmap'],
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

  const renderCard = (s: typeof journeySteps[0], idx: number) => {
    const isHovered = activeStep === idx;
    return (
      <div
        key={s.step}
        onMouseEnter={() => setActiveStep(idx)}
        onMouseLeave={() => setActiveStep(null)}
        onClick={() => setActiveStep(activeStep === idx ? null : idx)}
        className={`aurora-card p-7 flex flex-col justify-between relative group cursor-pointer transition-all duration-300 card-3d-tilt overflow-hidden h-full ${
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
                ? 'max-h-64 opacity-100 mt-3 pt-3 border-t border-bordercolor/70'
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
          <span>Stage 0{idx + 1} of 05</span>
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
  };

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
            Our 5-Stage Method for <br />
            <span className="font-extrabold text-gradient-aurora">
              Predictable Brand Acceleration.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            A transparent, disciplined five-stage journey: Discover → Strategize → Create → Launch &amp; Optimize → Report &amp; Improve. Turning casual scrollers into paying, long-term brand advocates.
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
              const reached = scrollProgress > i * (1 / 5);
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

        {/* 5 Connected Process Cards: 3 on Top Row, 2 Centered on Bottom Row */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {journeySteps.slice(0, 3).map((s, idx) => renderCard(s, idx))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6 items-stretch">
            {journeySteps.slice(3, 5).map((s, idx) => renderCard(s, idx + 3))}
          </div>
        </div>
      </div>
    </section>
  );
}
