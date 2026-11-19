'use client';

import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS, PortfolioProject } from '@/data/portfolio';
import { getWhatsAppUrl } from '@/lib/constants';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');

  const filteredProjects: PortfolioProject[] =
    selectedCategory === 'All Work'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-pagebg text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
              Creative Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
              Campaigns Engineered to <br />
              <span className="font-extrabold text-gradient-aurora">
                Capture Attention & Convert.
              </span>
            </h2>
            <p className="text-textsecondary text-base mt-3 leading-relaxed">
              Explore our creative work across social media reels, high-ROAS paid ads, aesthetic branding, and conversion web experiences.
            </p>
          </div>

          {/* Industry Showcase Notice */}
          <div className="text-xs text-textsecondary bg-white p-3.5 rounded-xl border border-bordercolor shadow-2xs max-w-xs">
            <span className="font-semibold text-primarypurple block mb-0.5">💡 Creative Showcase:</span>
            Demonstration campaign formats. Reach out on WhatsApp for customized sample creatives for your specific industry.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
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

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="aurora-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-textprimary border border-white/40 shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Key Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-extrabold bg-primarypurple/90 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                      {project.highlightMetric}
                    </span>
                    <span className="text-[11px] text-white/80 font-medium">
                      {project.clientIndustry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textsecondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-textsecondary bg-pagebg px-2 py-0.5 rounded-md border border-bordercolor/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-3 border-t border-bordercolor flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I saw your ${project.category} campaign for "${project.title}" and would like to discuss a similar creative campaign for my business.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors flex items-center gap-1.5"
                >
                  Discuss Similar Campaign &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
