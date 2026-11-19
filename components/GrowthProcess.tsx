'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Brand DNA & Audience Mapping',
    description: 'We analyze your business, current social media presence, competitors, and target audience in Hyderabad and pan-India to identify genuine growth opportunities.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'Content Pillars & Funnel Architecture',
    description: 'We construct a strategic content calendar, aesthetic guidelines, Reel concepts, and targeted ad funnels aligned with your specific business goals.',
    icon: '📐',
  },
  {
    step: '03',
    title: 'Create',
    tagline: 'High-Retention Design & Production',
    description: 'Our creative team produces eye-catching graphics, edits dynamic short-form Reels, writes high-converting copy, and launches targeted campaigns.',
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Optimize',
    tagline: 'Review, Refine & Scale',
    description: 'We continuously evaluate real engagement and lead data, doubling down on top-performing creative formats and refining audience targeting for maximum ROI.',
    icon: '📈',
  },
];

export default function GrowthProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has progressed through the viewport
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
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Our 4-Step Method for <br />
            <span className="font-extrabold text-gradient-aurora">
              Predictable Brand Acceleration.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            A transparent, disciplined creative process that turns casual social media scrollers into paying, long-term brand advocates.
          </p>
        </div>

        {/* Animated Connecting Line on Desktop */}
        <div className="hidden lg:block relative w-full mb-10 px-8">
          <div className="w-full h-1 bg-white/80 rounded-full overflow-hidden shadow-2xs border border-bordercolor/60">
            <div
              className="h-full bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(Math.max(scrollProgress * 115, 8), 100)}%` }}
            />
          </div>
          {/* Milestone Dots */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none">
            {steps.map((_, i) => {
              const reached = scrollProgress > (i * 0.25);
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

        {/* 4 Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="aurora-card p-7 flex flex-col justify-between relative group hover:border-primarypurple/40 card-3d-tilt"
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
                <span className="text-primarypurple font-bold">Step {idx + 1} &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
