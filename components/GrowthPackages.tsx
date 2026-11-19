'use client';

import React from 'react';
import { MONTHLY_PACKAGES, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

export default function GrowthPackages() {
  return (
    <section id="pricing" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4">
            Transparent Monthly Retainers
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Company-Approved <br />
            <span className="font-extrabold text-gradient-aurora">
              Monthly Growth Packages
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            Select the growth package engineered for your business stage. Clear monthly pricing with direct WhatsApp communication and active agency support.
          </p>
        </ScrollReveal>

        {/* 4 Plans Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MONTHLY_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUpVariants}
              className={`aurora-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative card-3d-tilt ${
                pkg.highlight
                  ? 'border-primarypurple/50 ring-2 ring-primarypurple/20 shadow-soft-lg scale-[1.02] bg-gradient-to-b from-sectionsoft/60 to-white'
                  : 'bg-white hover:border-primarypurple/30'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-primarypurple to-royalblue text-white text-[10px] font-extrabold uppercase tracking-widest shadow-sm whitespace-nowrap">
                  Growth & Leads
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-widest text-primarypurple font-bold block">
                  {pkg.subtitle}
                </span>
                <h3 className="text-xl font-heading font-bold text-textprimary mt-1">{pkg.name}</h3>
                
                <div className="my-5">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-textprimary">{pkg.price}</span>
                  <span className="text-textsecondary text-xs ml-1">{pkg.period}</span>
                </div>

                <p className="text-xs text-textsecondary leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Inclusions Notice (No Invented Inclusions) */}
                <div className="space-y-2.5 pt-5 border-t border-bordercolor">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-textsecondary">
                    Package Inclusions:
                  </p>
                  
                  <div className="p-4 rounded-xl bg-sectionsoft/70 border border-bordercolor/80 text-center">
                    <p className="text-xs text-textprimary font-medium">
                      {pkg.inclusionsNotice || 'Contact us for package inclusions.'}
                    </p>
                    <p className="text-[10px] text-textsecondary mt-1">
                      Customized directly to your brand&apos;s goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-bordercolor space-y-2">
                <a
                  href="#contact"
                  className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm hover:opacity-95'
                      : 'bg-pagebg border border-bordercolor text-textprimary hover:bg-sectionsoft hover:text-primarypurple hover:border-primarypurple/30'
                  }`}
                >
                  Enquire Now
                </a>

                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to enquire about the ${pkg.name} (${pkg.price}${pkg.period}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-full text-[11px] font-semibold tracking-wide text-textsecondary hover:text-primarypurple block text-center transition-colors"
                >
                  WhatsApp Enquiry &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
