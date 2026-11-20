'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, PortfolioItem } from '@/data/portfolio';
import { getWhatsAppUrl } from '@/lib/constants';
import { modalVariants } from '@/lib/animations/variants';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems: PortfolioItem[] =
    selectedCategory === 'All Work'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const flagshipItem = PORTFOLIO_ITEMS[0];
  const secondaryItems = filteredItems.filter((item) => selectedCategory !== 'All Work' || item.id !== flagshipItem.id);

  return (
    <section id="portfolio" className="py-24 bg-[#FAFAF9] text-[#0F172A] relative border-t-2 border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="rule-accent" />
                <span className="badge-mono">SELECTED WORK &amp; DELIVERABLES</span>
              </div>

              <h2 className="font-serif text-[34px] sm:text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
                Work Crafted to Capture <span className="italic text-[#365679] font-medium">Attention &amp; Convert.</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#334155] mt-3 leading-relaxed font-normal">
                Explore demonstration samples across creative social campaigns, high-hook reels, paid acquisition setups, brand guidelines, and high-performance digital platforms.
              </p>
            </div>

            {/* Confidential Client Assets Notice */}
            <div className="text-xs text-[#334155] bg-white p-4 border-2 border-slate-300 shadow-xs max-w-sm font-normal shrink-0">
              <span className="font-mono text-[9.5px] uppercase font-bold text-[#0F172A] block mb-1 tracking-wider">
                📁 CONFIDENTIAL CLIENT ASSETS:
              </span>
              Demonstration formats shown. Full commercial case studies and verified client ROI telemetry are presented during private consultations.
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills (Reference Precision) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-white border-2 border-slate-200 text-[#475569] hover:border-slate-400 hover:text-[#0F172A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= EDITORIAL ASYMMETRIC SHOWCASE ================= */}
        {selectedCategory === 'All Work' ? (
          <div className="space-y-8">
            {/* 1. Flagship Hero Case Showcase (Asymmetric Split Banner) */}
            <ScrollReveal variant="fade-up">
              <div className="glossy-card border-2 border-slate-300 bg-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm group">
                {/* Large Visual Frame */}
                <div
                  onClick={() => setActiveModalItem(flagshipItem)}
                  className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[340px] bg-slate-900 cursor-pointer overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flagshipItem.image}
                    alt={flagshipItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 bg-white text-[#0F172A] border border-slate-200 shadow-xs">
                      FLAGSHIP CASE STUDY
                    </span>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-1 bg-[#0F172A] text-white">
                      INSPECT 🔍
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                      {flagshipItem.format}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                      {flagshipItem.title}
                    </h3>
                  </div>
                </div>

                {/* Editorial Details Column */}
                <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#365679]">
                        {flagshipItem.category}
                      </span>
                    </div>

                    <h4 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#0F172A] mb-3 leading-snug">
                      Strategic Multi-Channel Growth Execution
                    </h4>

                    <p className="text-[13.5px] sm:text-[14px] text-[#334155] leading-relaxed mb-6 font-normal">
                      {flagshipItem.description}
                    </p>

                    {/* Strategic Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 mb-6">
                      {flagshipItem.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9.5px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-100 border border-slate-200 text-[#475569]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setActiveModalItem(flagshipItem)}
                      className="w-full btn-primary-ink py-3 text-[11px] block text-center"
                    >
                      INSPECT FULL BLUEPRINT SPECIFICATION
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to review recent telemetry for: ${flagshipItem.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full btn-emerald-cta py-2.5 text-[10.5px] block text-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      REQUEST COMMERCIAL CASE STUDY ON WHATSAPP &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Asymmetric Secondary Grid (2 Columns with Generous Frames) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {secondaryItems.map((item) => (
                <div
                  key={item.id}
                  className="glossy-card glossy-card-hover border-2 border-slate-200/90 hover:border-[#0F172A] bg-white flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Visual Frame */}
                    <div
                      onClick={() => setActiveModalItem(item)}
                      className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 cursor-pointer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-[#0F172A] border border-slate-200">
                          {item.category}
                        </span>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#0F172A] text-white">
                          Inspect 🔍
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="font-mono text-[10.5px] font-bold text-slate-200 block uppercase">
                          {item.format}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-[19px] sm:text-[20px] font-normal text-[#0F172A] group-hover:text-[#365679] transition-colors mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-[12.5px] text-[#334155] leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                        {item.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-100 border border-slate-200 text-[#475569]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="w-full py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] block text-center border-2 border-slate-200 hover:border-slate-400 bg-white transition-colors"
                    >
                      QUICK VIEW SAMPLE
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to see recent case studies for: ${item.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full btn-emerald-cta py-2 block text-center text-[9.5px]"
                    >
                      REQUEST TELEMETRY ON WHATSAPP &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glossy-card glossy-card-hover border-2 border-slate-200/90 hover:border-[#0F172A] bg-white flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-[#0F172A] border border-slate-200">
                        {item.category}
                      </span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#0F172A] text-white">
                        Inspect 🔍
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="font-mono text-[10.5px] font-bold text-slate-200 block uppercase">
                        {item.format}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-[20px] font-normal text-[#0F172A] group-hover:text-[#365679] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[12.5px] text-[#334155] leading-relaxed mb-4 font-normal">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-100 border border-slate-200 text-[#475569]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="w-full py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] block text-center border-2 border-slate-200 hover:border-slate-400 bg-white transition-colors"
                  >
                    QUICK VIEW SAMPLE
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to see recent case studies for: ${item.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn-emerald-cta py-2 block text-center text-[9.5px]"
                  >
                    REQUEST TELEMETRY ON WHATSAPP &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl bg-white border-2 border-slate-300 shadow-2xl overflow-hidden z-10 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors text-sm font-mono font-bold"
              >
                ✕
              </button>

              <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-[#0F172A] shadow-xs inline-block mb-2">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    {activeModalItem.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-300">
                    {activeModalItem.format}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#365679] mb-1">
                    EXECUTION OVERVIEW
                  </h4>
                  <p className="text-[13.5px] text-[#334155] leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                    DELIVERABLE SPECIFICATIONS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-100 border border-slate-200 text-[#475569]"
                      >
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="font-mono text-[10.5px] text-[#64748B]">
                    Confidential demonstration asset.
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult on a project similar to: ${activeModalItem.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-emerald-cta text-[10.5px] w-full sm:w-auto text-center"
                  >
                    DISCUSS PROJECT ON WHATSAPP &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
