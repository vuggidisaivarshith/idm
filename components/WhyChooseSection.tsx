'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-lightblue/40 text-textprimary relative border-t border-bordercolor overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            badge="Why IDM Smart Tech"
            title="Engineered to Give Ambitious Brands a"
            highlightText="True Competitive Advantage."
            description="Most agencies only provide fragmented services. We unify creative production, performance marketing, local visibility, and custom technology under one roof."
            align="left"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.differentiators.map((diff, idx) => (
            <motion.div key={idx} variants={fadeUpVariants} className="h-full">
              <Card
                className="p-7 flex flex-col justify-between group hover:border-primarypurple/40 h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sectionsoft border border-primarypurple/20 flex items-center justify-center text-2xl mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple block mb-1">
                    Differentiator 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-textprimary mb-3 group-hover:text-primarypurple transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-textsecondary leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-bordercolor flex items-center justify-between text-xs text-textsecondary font-medium">
                  <span>Integrated Focus</span>
                  <span className="text-primarypurple font-bold">Proven Strategy &rarr;</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
