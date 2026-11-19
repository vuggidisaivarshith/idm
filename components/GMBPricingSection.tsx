'use client';

import React from 'react';
import { GMB_SERVICES, getWhatsAppUrl } from '@/lib/constants';

export default function GMBPricingSection() {
  return (
    <section id="gmb" className="py-24 bg-midnight text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4">
            Specialized GMB Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight">
            Google Business Profile <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple via-blue to-cyan">
              Fixes & Local SEO Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Protect and optimize your most valuable local acquisition asset. We provide structured compliance guidance, reinstatement support, and verified map setup at transparent rates.
          </p>
        </div>

        {/* 4 GMB Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GMB_SERVICES.map((gmb) => (
            <div
              key={gmb.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${
                gmb.highlight
                  ? 'bg-gradient-to-b from-purple/10 via-white/[0.03] to-white/[0.01] border-purple/60 shadow-xl shadow-purple/10 scale-[1.02]'
                  : 'glass-card hover:border-cyan/40'
              }`}
            >
              {gmb.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple to-cyan text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{gmb.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-heading font-extrabold text-cyan">{gmb.price}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">{gmb.frequency}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {gmb.description}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  {gmb.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="text-cyan mt-0.5" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I need assistance with ${gmb.title} (${gmb.price}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    gmb.highlight
                      ? 'bg-gradient-to-r from-purple via-blue to-cyan text-white shadow-md shadow-purple/25 hover:opacity-90'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-cyan hover:text-black hover:border-cyan'
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
