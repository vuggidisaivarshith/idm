'use client';

import React from 'react';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { FAQ_LIST } from '@/data/faq';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#FAFAF9] text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="badge-mono">FREQUENTLY ASKED QUESTIONS</span>
            <span className="rule-accent" />
          </div>
          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.1] text-[#0F172A] tracking-[-0.02em]">
            Clear Answers About Our <br />
            <span className="italic text-[#365679] font-medium">Packages, Retainers &amp; Process.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#334155] mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Everything you need to know about partnering with IDM Smart Tech. No hidden clauses, straightforward retainers, and transparent deliverables.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15}>
          <FAQAccordion items={FAQ_LIST.slice(0, 6)} />
        </ScrollReveal>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="btn-glossy-secondary py-2.5 px-6 text-[11px] inline-flex items-center gap-2"
          >
            <span>HAVE MORE QUESTIONS? READ FULL FAQ DIRECTORY</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
