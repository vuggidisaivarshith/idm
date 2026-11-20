'use client';

import React from 'react';
import Link from 'next/link';
import { INDUSTRIES_LIST } from '@/data/industries';
import { getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[#FAFAF9] text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="rule-accent" />
                <span className="badge-mono">TAILORED BY SECTOR</span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[42px] font-normal leading-[1.12] text-[#0F172A] tracking-[-0.02em]">
                Strategic Frameworks for <span className="italic text-[#365679] font-medium">High-Growth Industries.</span>
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-[#334155] leading-relaxed max-w-2xl font-normal">
                Dental clinics require patient education and local trust, while restaurants need footfall surges. We architect custom marketing playbooks tailored to sector economics.
              </p>
            </div>

            <Link
              href="/industries"
              className="btn-glossy-secondary py-2.5 px-5 text-[11px] whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              VIEW ALL INDUSTRY GUIDES &rarr;
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind) => (
            <motion.div key={ind.slug} variants={fadeUpVariants} className="h-full">
              <div className="glossy-card glossy-card-hover p-7 rounded-none flex flex-col justify-between h-full border-2 border-slate-200/90 group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl p-2.5 bg-slate-100 border border-slate-200 inline-flex items-center justify-center">
                      {ind.icon}
                    </span>
                    <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#0F172A] bg-slate-100 px-2.5 py-1 border border-slate-200">
                      SECTOR BLUEPRINT
                    </span>
                  </div>

                  <h3 className="font-serif text-[21px] font-normal text-[#0F172A] group-hover:text-[#365679] transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#365679] mb-3">
                    {ind.tagline}
                  </p>

                  <p className="text-[13.5px] text-[#334155] leading-[1.65] mb-5 font-normal">
                    {ind.overview}
                  </p>

                  {/* Common Challenge Callout */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 mb-6">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#64748B] block mb-1">
                      PRIMARY CHALLENGE WE SOLVE:
                    </span>
                    <p className="text-[12px] text-[#0F172A] leading-relaxed font-medium">
                      {ind.commonChallenges[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="font-mono text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#0F172A] hover:text-[#365679] transition-colors flex items-center gap-1"
                  >
                    EXPLORE APPROACH &rarr;
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to discuss digital marketing for my business in the ${ind.title} sector.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] font-bold tracking-wider uppercase text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    WHATSAPP CONSULT &rarr;
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
