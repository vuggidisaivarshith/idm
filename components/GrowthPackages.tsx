'use client';

import React from 'react';
import { MONTHLY_PACKAGES, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function GrowthPackages() {
  return (
    <section id="pricing" className="py-24 bg-white text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="badge-mono">TRANSPARENT MONTHLY RETAINERS</span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.1] text-[#0F172A] tracking-[-0.02em]">
            Company-Approved <br />
            <span className="italic text-[#365679] font-medium">Monthly Growth Packages.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#334155] mt-4 leading-relaxed font-normal">
            Select the growth tier engineered for your current operating stage. Fixed monthly pricing with direct WhatsApp communication and active agency support.
          </p>
        </ScrollReveal>

        {/* 4 Plans Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MONTHLY_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUpVariants}
              className="h-full"
            >
              <div
                className={`glossy-card glossy-card-hover p-6 sm:p-7 flex flex-col justify-between h-full border-2 transition-all relative ${
                  pkg.highlight
                    ? 'border-[#0F172A] bg-white ring-2 ring-slate-900/10 shadow-md'
                    : 'border-slate-200/90 bg-white'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0F172A] text-white font-mono text-[9px] font-bold uppercase tracking-[0.18em] shadow-xs whitespace-nowrap">
                    GROWTH &amp; LEADS
                  </div>
                )}

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#365679] block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-serif text-[22px] font-normal text-[#0F172A] mt-1">{pkg.name}</h3>
                  
                  <div className="my-5 flex items-baseline gap-1">
                    <span className="font-mono text-[30px] sm:text-[34px] font-bold text-[#0F172A] tracking-tight">{pkg.price}</span>
                    <span className="font-mono text-[11px] text-[#64748B] font-medium uppercase tracking-wider">{pkg.period}</span>
                  </div>

                  <p className="text-[12.5px] text-[#334155] leading-relaxed mb-6 font-normal">
                    {pkg.description}
                  </p>

                  {/* Inclusions Notice (No Invented Inclusions) */}
                  <div className="space-y-2.5 pt-5 border-t border-slate-200">
                    <p className="font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                      PACKAGE INCLUSIONS:
                    </p>
                    
                    <div className="p-3.5 bg-slate-50 border border-slate-200 text-center">
                      <p className="text-[12px] text-[#0F172A] font-semibold leading-snug">
                        {pkg.inclusionsNotice || 'Contact us for package inclusions.'}
                      </p>
                      <p className="font-mono text-[9.5px] text-[#64748B] mt-1">
                        Customized directly to your brand&apos;s goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-200 space-y-2.5">
                  <a
                    href="#contact"
                    className={`w-full py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] block transition-all ${
                      pkg.highlight
                        ? 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-xs'
                        : 'bg-white border-2 border-slate-300 text-[#0F172A] hover:bg-slate-50'
                    }`}
                  >
                    ENQUIRE NOW
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to enquire about the ${pkg.name} (${pkg.price}${pkg.period}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 block text-center transition-colors"
                  >
                    WHATSAPP ENQUIRY &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Retainer Scope Clarity Card */}
        <ScrollReveal variant="fade-up" delay={0.2} className="mt-14">
          <div className="glossy-card p-6 sm:p-7 border-2 border-slate-300 bg-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="p-2.5 bg-slate-100 border border-slate-200 font-mono text-base font-bold text-[#0F172A] shrink-0">
                01
              </span>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#0F172A]">
                  CLEAR DELIVERABLE SCOPING &amp; TRANSPARENT AD SPEND
                </p>
                <p className="text-[13px] text-[#334155] mt-1 leading-relaxed">
                  Package deliverables, posting schedules, and agency retainers are formalized transparently during onboarding. <strong className="text-[#0F172A] font-semibold">Platform advertising spend (paid directly to Meta or Google ad accounts) is separate from agency management fees</strong>, ensuring 100% financial clarity and client account ownership.
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppUrl('Hi IDM Smart Tech, I would like to get a customized scope and inclusions breakdown for your monthly growth packages.')}
              target="_blank"
              rel="noreferrer"
              className="btn-glossy-secondary py-2.5 px-5 text-[10.5px] whitespace-nowrap shrink-0"
            >
              REQUEST DETAILS &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
