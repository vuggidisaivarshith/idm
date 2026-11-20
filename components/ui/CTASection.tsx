'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface CTASectionProps {
  title?: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  whatsappMessage?: string;
}

export default function CTASection({
  title = 'Ready to Build Your Brand &',
  highlightText = 'Create Real Business Demand?',
  description = 'Connect directly with our strategy team in Shamshabad, Hyderabad to architect your high-converting digital presence.',
  primaryButtonText = 'START A PROJECT',
  secondaryButtonText = 'WHATSAPP DIRECT',
  whatsappMessage = 'Hello IDM Smart Tech, I would like to schedule a growth consultation for my business.',
}: CTASectionProps) {
  return (
    <section className="py-24 bg-[#FAFAF9] text-[#0F172A] relative border-t-2 border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 text-center">
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="rule-accent" />
            <span className="badge-mono">DIRECT STRATEGIC PARTNERSHIP</span>
            <span className="rule-accent" />
          </div>

          <h2 className="font-serif text-[36px] sm:text-[50px] font-normal tracking-[-0.02em] text-[#0F172A] leading-[1.08] max-w-3xl mx-auto">
            {title}{' '}
            <span className="italic text-[#365679] font-medium block sm:inline">
              {highlightText}
            </span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#334155] mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="/contact"
              className="btn-primary-ink py-3 px-7 text-[11px]"
            >
              {primaryButtonText}
            </Link>

            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald-cta py-3 px-6 text-[11px]"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {secondaryButtonText}
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn-glossy-secondary py-3 px-6 text-[11px]"
            >
              OR CALL {COMPANY_INFO.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
