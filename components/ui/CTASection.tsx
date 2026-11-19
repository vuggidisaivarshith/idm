'use client';

import React from 'react';
import Button from './Button';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import MagneticButton from '@/components/animations/MagneticButton';

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
  primaryButtonText = 'Get Your Growth Strategy',
  secondaryButtonText = 'Chat on WhatsApp',
  whatsappMessage = 'Hello IDM Smart Tech, I would like to schedule a growth consultation for my business.',
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sectionsoft/50 to-white relative border-t border-bordercolor overflow-hidden">
      {/* Soft Ambient Aurora Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-primarypurple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brandcyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-primarypurple/20 text-[11px] font-bold text-primarypurple uppercase tracking-wider mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primarypurple animate-pulse" />
            <span>Direct Strategic Partnership</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary leading-tight max-w-3xl mx-auto">
            {title}{' '}
            <span className="font-extrabold text-gradient-aurora block sm:inline">
              {highlightText}
            </span>
          </h2>

          <p className="text-textsecondary text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <MagneticButton maxDistance={6}>
              <Button href="/contact" variant="primary">
                {primaryButtonText}
              </Button>
            </MagneticButton>

            <MagneticButton maxDistance={6}>
              <Button
                href={getWhatsAppUrl(whatsappMessage)}
                variant="secondary"
                isExternal
              >
                <span>💬</span> <span className="ml-2">{secondaryButtonText}</span>
              </Button>
            </MagneticButton>

            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-xs font-bold uppercase tracking-wider text-textsecondary hover:text-primarypurple transition-colors px-3 py-3"
            >
              Or Call {COMPANY_INFO.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
