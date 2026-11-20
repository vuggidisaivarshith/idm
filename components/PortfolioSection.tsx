'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, PortfolioItem } from '@/data/portfolio';
import { getWhatsAppUrl } from '@/lib/constants';
import { modalVariants } from '@/lib/animations/variants';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FAFAF9] text-ink-900 relative border-t-2 border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" />
                <div className="inline-flex items-center gap-2 border border-slate-300 bg-white/95 px-3 py-1 shadow-xs">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                    SELECTED WORK &amp; DELIVERABLES
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
                Work Crafted to Capture <span className="italic text-[#365679] font-medium">Attention &amp; Convert</span>
              </h2>

              <p className="text-[15px] text-slate-600 mt-3 leading-relaxed font-medium">
                Explore demonstration samples across creative social campaigns, high-hook reels, paid advertising, branding systems, and modern digital platforms.
              </p>
            </div>

            {/* Desktop Carousel Controls & Notice */}
            <div className="flex flex-col sm:items-end gap-3">
              <div className="text-xs text-slate-600 bg-white p-3.5 border-2 border-slate-200 shadow-xs max-w-sm font-medium">
                <span className="font-mono text-[10px] uppercase font-bold text-[#0F172A] block mb-0.5 tracking-wider">
                  📁 Confidential Client Assets:
                </span>
                Demonstration formats shown. Full commercial case studies and verified client ROI telemetry are presented during private consultations.
              </div>

              <div className="hidden lg:flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  aria-label="Scroll Left"
                  className="w-9 h-9 bg-white border-2 border-slate-300 flex items-center justify-center text-[#0F172A] hover:bg-slate-50 transition-all shadow-xs"
                >
                  &larr;
                </button>
                <button
                  onClick={scrollRight}
                  aria-label="Scroll Right"
                  className="w-9 h-9 bg-white border-2 border-slate-300 flex items-center justify-center text-[#0F172A] hover:bg-slate-50 transition-all shadow-xs"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills (Reference Precision) */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-400 hover:text-[#0F172A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Track on Desktop / Grid on Mobile */}
        <motion.div
          layout
          ref={scrollContainerRef}
          className="flex lg:overflow-x-auto lg:pb-8 lg:snap-x lg:snap-mandatory gap-6 no-scrollbar flex-col lg:flex-row"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="lg:min-w-[370px] lg:max-w-[390px] w-full lg:snap-start bg-white border-2 border-slate-200 hover:border-[#0F172A] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Visual Image Container with Zoom & Click to preview */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative h-60 w-full overflow-hidden bg-slate-100 cursor-pointer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-[#0F172A] border border-slate-300 shadow-xs">
                        {item.category}
                      </span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#0F172A] text-white">
                        Inspect 🔍
                      </span>
                    </div>

                    {/* Format Subtitle on Image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <span className="font-mono text-[11px] font-bold text-white/90 drop-shadow-sm uppercase">
                        {item.format}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-[#365679] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9.5px] uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="w-full py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0F172A] block text-center border-2 border-slate-200 hover:border-slate-400 bg-white transition-colors"
                  >
                    Quick View Sample
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to see recent case studies and work samples for: ${item.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn-emerald-cta py-2.5 block text-center text-[10px]"
                  >
                    Request Telemetry on WhatsApp →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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

              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white text-[#0F172A] shadow-xs inline-block mb-2">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {activeModalItem.title}
                  </h3>
                  <p className="font-mono text-xs text-white/90">
                    {activeModalItem.format}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {activeModalItem.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
                  {activeModalItem.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-100 text-[#0F172A] border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I saw your ${activeModalItem.title} sample in portfolio and would like to see live agency results and discuss strategy.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-emerald-cta flex-1 text-center py-3 text-[10.5px]"
                  >
                    Discuss Campaign on WhatsApp →
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="btn-ghost-luxury py-3 text-[10.5px]"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
