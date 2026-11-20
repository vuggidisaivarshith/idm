'use client';

import React from 'react';
import { GMB_SERVICES, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function GMBPricingSection() {
  return (
    <section id="gmb" className="py-24 bg-[#FAFAF9] text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="badge-mono">LOCAL ACQUISITION INFRASTRUCTURE</span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.1] text-[#0F172A] tracking-[-0.02em]">
            Google Business Profile <br />
            <span className="italic text-[#365679] font-medium">Compliance &amp; Local SEO Solutions.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#334155] mt-4 leading-relaxed font-normal">
            Protect and optimize your core local discovery asset. We deliver structured policy compliance, reinstatement documentation support, and map optimization at transparent flat rates.
          </p>
        </ScrollReveal>

        {/* 4 GMB Packages Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GMB_SERVICES.map((gmb) => (
            <motion.div
              key={gmb.id}
              variants={fadeUpVariants}
              className="h-full"
            >
              <div
                className={`glossy-card glossy-card-hover p-6 sm:p-7 flex flex-col justify-between h-full border-2 transition-all relative ${
                  gmb.highlight
                    ? 'border-[#0F172A] bg-white ring-2 ring-slate-900/10 shadow-md'
                    : 'border-slate-200/90 bg-white'
                }`}
              >
                {gmb.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0F172A] text-white font-mono text-[9px] font-bold uppercase tracking-[0.18em] shadow-xs whitespace-nowrap">
                    HIGH DEMAND
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-[20px] font-normal text-[#0F172A] mb-2">{gmb.title}</h3>
                  <div className="mb-4">
                    <span className="font-mono text-[28px] sm:text-[32px] font-bold text-[#0F172A] tracking-tight">{gmb.price}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#64748B] block mt-0.5">{gmb.frequency}</span>
                  </div>
                  <p className="text-[12.5px] text-[#334155] leading-relaxed mb-6 font-normal">
                    {gmb.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-200 pt-4">
                    {gmb.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-[12px] text-[#334155]">
                        <span className="text-emerald-600 font-bold font-mono mt-0.5" aria-hidden="true">✓</span>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I need assistance with ${gmb.title} (${gmb.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] block transition-all ${
                      gmb.highlight
                        ? 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-xs'
                        : 'bg-white border-2 border-slate-300 text-[#0F172A] hover:bg-slate-50'
                    }`}
                  >
                    {gmb.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
