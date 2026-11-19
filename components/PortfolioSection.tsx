'use client';

import React, { useState } from 'react';
import { DELIVERABLE_CATEGORIES, CREATIVE_DELIVERABLES, CreativeDeliverable } from '@/data/portfolio';
import { getWhatsAppUrl } from '@/lib/constants';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Deliverables');

  const filteredDeliverables: CreativeDeliverable[] =
    selectedCategory === 'All Deliverables'
      ? CREATIVE_DELIVERABLES
      : CREATIVE_DELIVERABLES.filter((d) => d.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-pagebg text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
              Creative Deliverables
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
              What We Create for <br />
              <span className="font-extrabold text-gradient-aurora">
                Your Brand&apos;s Growth.
              </span>
            </h2>
            <p className="text-textsecondary text-base mt-3 leading-relaxed">
              Explore the core creative formats, campaign assets, and technology solutions we produce for businesses across Hyderabad and India.
            </p>
          </div>

          {/* Client Work Notice */}
          <div className="text-xs text-textsecondary bg-white p-4 rounded-xl border border-bordercolor shadow-2xs max-w-sm">
            <span className="font-semibold text-primarypurple block mb-1">📁 Client Portfolios & Live Samples:</span>
            We respect client confidentiality. Live account handles, campaign recordings, and industry-specific work samples are presented during your one-on-one consultation.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {DELIVERABLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm shadow-primarypurple/25 scale-[1.02]'
                  : 'bg-white border border-bordercolor text-textsecondary hover:text-textprimary hover:border-primarypurple/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeliverables.map((item) => (
            <div
              key={item.id}
              className="aurora-card p-6 sm:p-7 flex flex-col justify-between group hover:border-primarypurple/40"
            >
              <div>
                {/* Header: Category Badge & Format */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sectionsoft text-primarypurple border border-primarypurple/15">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-textsecondary font-medium">
                    Deliverable
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-royalblue mb-3">
                  {item.format}
                </p>

                <p className="text-xs text-textsecondary leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-bordercolor">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-pagebg text-textsecondary border border-bordercolor/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-bordercolor">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to see recent samples and discuss: ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center bg-pagebg border border-bordercolor text-textprimary hover:bg-primarypurple hover:text-white hover:border-primarypurple transition-all"
                >
                  Request Samples on WhatsApp &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
