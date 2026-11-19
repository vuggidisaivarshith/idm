'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, PortfolioItem } from '@/data/portfolio';
import { getWhatsAppUrl } from '@/lib/constants';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <section id="portfolio" className="py-24 bg-pagebg text-textprimary relative border-t border-bordercolor overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
              Creative Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
              Work Crafted to <br />
              <span className="font-extrabold text-gradient-aurora">
                Capture Attention & Convert.
              </span>
            </h2>
            <p className="text-textsecondary text-base mt-3 leading-relaxed">
              Explore our creative work across social media campaigns, high-hook reels, paid ads, branding systems, and modern digital platforms.
            </p>
          </div>

          {/* Desktop Carousel Controls & Notice */}
          <div className="flex flex-col sm:items-end gap-3">
            <div className="text-xs text-textsecondary bg-white p-3.5 rounded-xl border border-bordercolor shadow-2xs max-w-sm">
              <span className="font-semibold text-primarypurple block mb-0.5">📁 Agency Work Showcase:</span>
              Demonstration formats. Confidential client handles and live campaigns are presented during one-on-one consultation.
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll Left"
                className="w-10 h-10 rounded-full bg-white border border-bordercolor flex items-center justify-center text-textprimary hover:border-primarypurple hover:text-primarypurple transition-all shadow-2xs"
              >
                &larr;
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll Right"
                className="w-10 h-10 rounded-full bg-white border border-bordercolor flex items-center justify-center text-textprimary hover:border-primarypurple hover:text-primarypurple transition-all shadow-2xs"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                className="lg:min-w-[370px] lg:max-w-[390px] w-full lg:snap-start aurora-card overflow-hidden flex flex-col justify-between group relative card-3d-tilt"
              >
                <div>
                {/* Visual Image Container with Zoom & Gradient Reveal */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-textprimary border border-white/40 shadow-xs">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primarypurple/90 text-white backdrop-blur-md">
                      Format Sample
                    </span>
                  </div>

                  {/* Format Subtitle on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-medium text-white/90 drop-shadow-sm">
                      {item.format}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-textsecondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-bordercolor">
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
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to see recent case studies and work samples for: ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center bg-pagebg border border-bordercolor text-textprimary hover:bg-gradient-to-r hover:from-primarypurple hover:to-royalblue hover:text-white hover:border-transparent transition-all duration-300 shadow-2xs"
                >
                  Request Samples on WhatsApp &rarr;
                </a>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
