'use client';

import React, { useRef, useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

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
    title: 'Report & Scale',
    tagline: 'Transparent Review & Strategic Expansion',
    description:
      'You receive transparent bi-weekly reports covering impressions, cost-per-inquiry, engagement rates, and strategic scaling recommendations.',
    deliverables: ['Bi-weekly performance data', 'Inquiry volume tracking', 'Continuous scale roadmap'],
    icon: '📊',
  },
];

export default function GrowthProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Live Framer Motion scroll tracker targeted directly at this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 70%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 38,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setCurrentProgress(latest);
  });

  // Thresholds for the 5 stage milestone dots
  const stepThresholds = [0.05, 0.25, 0.5, 0.75, 0.95];

  const renderCard = (s: (typeof journeySteps)[0], idx: number) => {
    const isHovered = activeStep === idx;
    return (
      <div
        key={s.step}
        onMouseEnter={() => setActiveStep(idx)}
        onMouseLeave={() => setActiveStep(null)}
        onClick={() => setActiveStep(activeStep === idx ? null : idx)}
        className={`glossy-card glossy-card-hover p-7 flex flex-col justify-between relative group cursor-pointer transition-all border-2 bg-white ${
          isHovered
            ? 'border-[#0F172A] shadow-md -translate-y-1'
            : 'border-slate-200/90 hover:border-slate-400'
        }`}
      >
        <div>
          {/* Header with Step Number & Icon */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-2xl font-bold text-[#0F172A]">
              {s.step}
            </span>
            <span
              className="text-xl p-2 bg-slate-50 border border-slate-200"
              aria-hidden="true"
            >
              {s.icon}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-1">
            {s.title}
          </h3>
          <p className="font-mono text-[10px] uppercase font-bold text-[#365679] tracking-wider mb-3">
            {s.tagline}
          </p>

          {/* Details and Description */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isHovered
                ? 'max-h-64 opacity-100 mt-3 pt-3 border-t border-slate-200'
                : 'max-h-0 opacity-0 mt-0 pt-0'
            }`}
          >
            <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
              {s.description}
            </p>
            <div className="space-y-1.5 pt-2 border-t border-slate-200">
              {s.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-1.5 text-[11px] text-slate-700 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
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
            <span className="font-mono text-[10px] text-slate-500 font-medium flex items-center gap-1">
              <span>Inspect phase deliverables</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>

        <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase font-bold">
          <span>Stage 0{idx + 1} of 05</span>
          <span className={isHovered ? 'text-[#0F172A]' : 'text-slate-400'}>
            Phase Details →
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-[#FAFAF9] text-ink-900 relative border-t-2 border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" />
            <div className="inline-flex items-center gap-2 border border-slate-300 bg-white/95 px-3 py-1 shadow-xs">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                5-STAGE EXECUTION FRAMEWORK · DISCIPLINED DELIVERY
              </span>
            </div>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            Our 5-Stage Method for <span className="italic text-[#365679] font-medium">Predictable Growth</span>
          </h2>

          <p className="text-[15px] sm:text-[16.5px] text-slate-600 mt-4 leading-relaxed font-medium">
            A transparent, disciplined five-stage journey: Discover → Strategize → Create → Launch &amp; Optimize → Report &amp; Scale. Turning casual impressions into qualified commercial revenue.
          </p>
        </ScrollReveal>

        {/* Live Synchronized Connecting Line on Desktop */}
        <div className="hidden lg:block relative w-full mb-12 px-6">
          <div className="w-full h-2 bg-slate-200 border border-slate-300 relative">
            <motion.div
              className="h-full bg-[#0F172A] origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>

          {/* Milestone Dots in Live Sync with Scroll Progress */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-6 pointer-events-none">
            {journeySteps.map((s, i) => {
              const reached = currentProgress >= stepThresholds[i] || activeStep === i;
              return (
                <div
                  key={i}
                  className={`w-6 h-6 border-2 transition-all duration-200 flex items-center justify-center pointer-events-auto cursor-pointer ${
                    reached
                      ? 'bg-[#0F172A] border-white shadow-md scale-110'
                      : 'bg-white border-slate-300 hover:border-[#0F172A]'
                  }`}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  title={`Stage 0${i + 1}: ${s.title}`}
                >
                  <div
                    className={`w-2 h-2 transition-colors duration-200 ${
                      reached ? 'bg-emerald-400' : 'bg-slate-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Connected Process Cards */}
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
