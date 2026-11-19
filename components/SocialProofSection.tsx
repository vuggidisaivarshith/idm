'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

const platforms = [
  { name: 'Instagram', label: 'Reels & Community', icon: '📸' },
  { name: 'Meta Ads Manager', label: 'Targeted Lead Funnels', icon: '🎯' },
  { name: 'Google Ads & Maps', label: 'Local Search Capture', icon: '📍' },
  { name: 'YouTube Shorts', label: 'Video Storytelling', icon: '🎬' },
  { name: 'WhatsApp Business', label: 'Direct Conversions', icon: '💬' },
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

        {/* Client Testimonials Placeholder / Ready State */}
        <div className="aurora-card p-8 sm:p-10 bg-sectionsoft/40 border border-primarypurple/20 text-center max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex items-center space-x-1.5 text-primarypurple mb-3">
            <span className="text-lg">⭐</span>
            <span className="text-lg">⭐</span>
            <span className="text-lg">⭐</span>
            <span className="text-lg">⭐</span>
            <span className="text-lg">⭐</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-textprimary mb-2">
            Client Success & Growth Stories
          </h3>

          <p className="text-sm text-textsecondary max-w-xl mx-auto leading-relaxed mb-6">
            We partner with ambitious retail brands, clinics, restaurants, and real estate developers across Hyderabad and India. Contact our strategy team to view verified case studies and reference accounts.
          </p>

          <a
            href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to review case studies and recent campaign results for my industry.')}
            target="_blank"
            rel="noreferrer"
            className="btn-aurora-secondary py-2.5 px-6 text-xs"
          >
            Request Industry Case Studies on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
