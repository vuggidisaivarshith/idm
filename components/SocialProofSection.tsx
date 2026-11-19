'use client';

import React from 'react';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';

const platforms = [
  { name: 'Instagram', label: 'Reels, Carousels & Grid Strategy', icon: '📸' },
  { name: 'Meta Ads Manager', label: 'Targeted Lead & Conversion Funnels', icon: '🎯' },
  { name: 'Google Ads & Maps', label: 'Local Search & Google Business Profile', icon: '📍' },
  { name: 'YouTube Shorts', label: 'Short-Form Video Distribution', icon: '🎬' },
  { name: 'WhatsApp Business', label: 'Direct Inquiries & Automated Response', icon: '💬' },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-white text-textprimary border-t border-bordercolor relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Platform Ecosystem Strip */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-textsecondary">
            Platforms & Growth Channels We Specialize In
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="aurora-card p-4 flex flex-col items-center text-center hover:border-primarypurple/30 group"
            >
              <span className="text-2xl mb-1.5" aria-hidden="true">{p.icon}</span>
              <span className="text-xs font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors">
                {p.name}
              </span>
              <span className="text-[10px] text-textsecondary mt-0.5">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Agency Consultation Card (Genuine & Transparent) */}
        <div className="aurora-card p-8 sm:p-10 bg-sectionsoft/40 border border-primarypurple/20 text-center max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-primarypurple/20 text-[11px] font-bold text-primarypurple mb-4">
            Direct Agency Partnership
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-textprimary mb-3">
            Looking for a Tailored Marketing Strategy?
          </h3>

          <p className="text-sm text-textsecondary max-w-xl mx-auto leading-relaxed mb-6">
            Every business has unique goals and target audiences. Connect directly with our agency team in Shamshabad, Hyderabad to review your existing digital footprint and explore growth opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to schedule an introductory marketing consultation for my business.')}
              target="_blank"
              rel="noreferrer"
              className="btn-aurora-primary py-2.5 px-6 text-xs"
            >
              Chat on WhatsApp &rarr;
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="btn-aurora-secondary py-2.5 px-6 text-xs"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
