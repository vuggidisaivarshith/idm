'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function WhyChooseSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-lightblue/40 text-textprimary relative border-t border-bordercolor overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            badge="Why IDM Smart Tech"
            title="Engineered to Give Ambitious Brands a"
            highlightText="True Competitive Advantage."
            description="We unify creative production, performance marketing, local visibility, and custom technology under one roof."
            align="left"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {COMPANY_INFO.differentiators.map((diff, idx) => {
            const isHovered = activeCard === idx;
            return (
              <motion.div key={idx} variants={fadeUpVariants} className="h-full">
                <div
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                  className={`rounded-2xl border bg-white p-7 flex flex-col justify-between transition-all duration-300 relative cursor-pointer overflow-hidden ${
                    isHovered
                      ? 'border-primarypurple/50 shadow-[0_16px_36px_-6px_rgba(105,87,245,0.14),inset_0_1px_1px_rgba(255,255,255,1)] -translate-y-1.5 ring-1 ring-primarypurple/20'
                      : 'border-bordercolor shadow-card hover:border-primarypurple/30 hover:shadow-card-hover'
                  }`}
                >
                  {/* Subtle top reflective indicator */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div>
                    {/* Icon with smooth scale */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 ${
                        isHovered
                          ? 'bg-gradient-to-tr from-primarypurple/15 to-royalblue/15 border border-primarypurple/40 scale-110 shadow-xs'
                          : 'bg-sectionsoft border border-primarypurple/20 shadow-2xs'
                      }`}
                    >
                      {diff.icon}
                    </div>

                    {/* Differentiator Badge */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple block mb-1">
                      Differentiator 0{idx + 1}
                    </span>

                    {/* Heading (Always Visible 1st) */}
                    <h3
                      className={`text-lg font-heading font-bold transition-colors duration-200 leading-snug ${
                        isHovered ? 'text-primarypurple' : 'text-textprimary'
                      }`}
                    >
                      {diff.title}
                    </h3>

                    {/* Details and Description (Revealed while mouse moves on it) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isHovered
                          ? 'max-h-48 opacity-100 mt-3 pt-3 border-t border-bordercolor/70'
                          : 'max-h-0 opacity-0 mt-0 pt-0'
                      }`}
                    >
                      <p className="text-xs text-textsecondary leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>

                    {/* Interactive hint when idle */}
                    <div
                      className={`transition-opacity duration-200 mt-2 ${
                        isHovered ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-70'
                      }`}
                    >
                      <span className="text-[10px] text-textsecondary/80 font-medium flex items-center gap-1">
                        <span>Hover to view details</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 mt-4 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary font-medium">
                    <span className="text-[11px]">Integrated Focus</span>
                    <span
                      className={`font-bold transition-transform duration-200 flex items-center gap-1 ${
                        isHovered ? 'text-primarypurple translate-x-1' : 'text-textsecondary'
                      }`}
                    >
                      <span>Explore</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
