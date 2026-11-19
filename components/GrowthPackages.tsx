'use client';

import React from 'react';
import { MONTHLY_PACKAGES, getWhatsAppUrl } from '@/lib/constants';

export default function GrowthPackages() {
  return (
    <section id="pricing" className="py-24 bg-midnight text-white relative border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4">
            Transparent Monthly Retainers
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight">
            Company-Approved <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple via-blue to-cyan">
              Monthly Growth Packages
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Select the growth tier designed for your business stage. Clean, predictable monthly pricing with direct WhatsApp communication.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MONTHLY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-purple/15 via-white/[0.03] to-white/[0.01] border-cyan shadow-xl shadow-cyan/15 scale-[1.02]'
                  : 'glass-card hover:border-purple/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-purple via-blue to-cyan text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md whitespace-nowrap">
                  Growth & Leads
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-widest text-cyan font-bold block">
                  {pkg.subtitle}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">{pkg.name}</h3>
                
                <div className="my-5">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white">{pkg.price}</span>
                  <span className="text-slate-400 text-xs ml-1">{pkg.period}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Inclusions Area */}
                <div className="space-y-2.5 pt-5 border-t border-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Package Inclusions:
                  </p>
                  
                  {pkg.inclusions ? (
                    pkg.inclusions.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <span className="text-cyan font-bold mt-0.5" aria-hidden="true">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                      <p className="text-xs text-slate-300 font-medium">
                        {pkg.inclusionsNotice || 'Contact us for package inclusions.'}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Tailored directly to your business requirements.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                <a
                  href={`#contact`}
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-purple via-blue to-cyan text-white shadow-lg shadow-purple/20 hover:opacity-90'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-cyan/50'
                  }`}
                >
                  Enquire Now
                </a>

                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to enquire about the ${pkg.name} (${pkg.price}${pkg.period}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-[11px] font-semibold tracking-wide text-slate-400 hover:text-cyan block text-center transition-colors"
                >
                  WhatsApp Enquiry &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
