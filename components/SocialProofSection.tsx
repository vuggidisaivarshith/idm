'use client';

import React from 'react';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

const platforms = [
  { name: 'Instagram', label: 'Reels, Carousels & Grid Strategy', icon: '📸' },
  { name: 'Meta Ads Manager', label: 'Targeted Lead & Conversion Funnels', icon: '🎯' },
  { name: 'Google Ads & Maps', label: 'Local Search & Google Business Profile', icon: '📍' },
  { name: 'YouTube Shorts', label: 'Short-Form Video Distribution', icon: '🎬' },
  { name: 'WhatsApp Business', label: 'Direct Inquiries & Automated Response', icon: '💬' },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-white text-[#0F172A] border-t-2 border-slate-200 relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Platform Ecosystem Strip */}
        <ScrollReveal variant="fade-up" className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="rule-accent" />
            <span className="badge-mono">CORE PLATFORM ECOSYSTEM</span>
            <span className="rule-accent" />
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#64748B] font-bold">
            CHANNELS WE ENGINEER &amp; SCALE FOR CLIENTS
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="glossy-card glossy-card-hover p-4 sm:p-5 flex flex-col items-center text-center border-2 border-slate-200/90 group"
            >
              <span className="text-2xl mb-2" aria-hidden="true">{p.icon}</span>
              <span className="font-serif text-[16px] font-normal text-[#0F172A] group-hover:text-[#365679] transition-colors">
                {p.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#64748B] mt-1">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Agency Consultation Card (Genuine & Transparent) */}
        <ScrollReveal variant="scale">
          <div className="glossy-card p-8 sm:p-12 border-2 border-slate-300 bg-white text-center max-w-3xl mx-auto shadow-md">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="badge-mono">DIRECT FOUNDER PARTNERSHIP</span>
            </div>

            <h3 className="font-serif text-[26px] sm:text-[34px] font-normal text-[#0F172A] mb-3">
              Ready for a Custom <span className="italic text-[#365679] font-medium">Growth Blueprint?</span>
            </h3>

            <p className="text-[14.5px] sm:text-[15.5px] text-[#334155] max-w-xl mx-auto leading-relaxed mb-8 font-normal">
              Every business has unique economics and growth bottlenecks. Connect directly with our core team in Shamshabad, Hyderabad to audit your digital footprint and architect an actionable expansion roadmap.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to schedule an introductory marketing consultation for my business.')}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-cta"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                CHAT ON WHATSAPP &rarr;
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="btn-glossy-secondary py-3 px-6 text-[11px]"
              >
                CALL {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
