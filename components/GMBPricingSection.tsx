'use client';

import React from 'react';
import { GMB_SERVICES, getWhatsAppUrl } from '@/lib/constants';

export default function GMBPricingSection() {
  return (
    <section id="gmb" className="py-24 bg-sectionsoft text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
            Specialized GMB Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Google Business Profile <br />
            <span className="font-extrabold text-gradient-aurora">
              Fixes & Local SEO Solutions
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            Protect and optimize your most valuable local acquisition asset. We provide structured compliance guidance, reinstatement support, and verified map setup at transparent rates.
          </p>
        </div>

        {/* 4 GMB Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GMB_SERVICES.map((gmb) => (
            <div
              key={gmb.id}
              className={`aurora-card p-6 flex flex-col justify-between transition-all duration-300 relative ${
                gmb.highlight
                  ? 'border-primarypurple/40 ring-2 ring-primarypurple/15 shadow-soft-lg scale-[1.02]'
                  : 'hover:border-primarypurple/30'
              }`}
            >
              {gmb.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-primarypurple to-royalblue text-white text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="text-lg font-heading font-bold text-textprimary mb-2">{gmb.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-heading font-extrabold text-primarypurple">{gmb.price}</span>
                  <span className="text-xs text-textsecondary block mt-0.5">{gmb.frequency}</span>
                </div>
                <p className="text-xs text-textsecondary leading-relaxed mb-6">
                  {gmb.description}
                </p>

                <div className="space-y-2 border-t border-bordercolor pt-4">
                  {gmb.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-textsecondary">
                      <span className="text-brandmint mt-0.5 font-bold" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-bordercolor">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I need assistance with ${gmb.title} (${gmb.price}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    gmb.highlight
                      ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm hover:opacity-90'
                      : 'bg-pagebg border border-bordercolor text-textprimary hover:bg-sectionsoft hover:text-primarypurple hover:border-primarypurple/30'
                  }`}
                >
                  {gmb.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
