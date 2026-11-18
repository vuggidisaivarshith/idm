'use client';

import React, { useState } from 'react';

const communities = [
  {
    title: 'Acero Eastmark',
    category: 'Acero Communities',
    location: 'Mesa / Scottsdale, AZ',
    units: '336 Units',
    status: 'Leasing Now',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Resort-style apartment living featuring smart homes, resort pool, outdoor fireplace cabanas, and modern fitness club.',
  },
  {
    title: 'Meritum Sonoran Desert',
    category: 'Meritum Living',
    location: 'North Phoenix, AZ',
    units: '280 Units',
    status: 'Recently Completed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Sophisticated contemporary residences capturing desert mountain panoramas with chef-inspired quartz kitchens.',
  },
  {
    title: 'Acero Cooley Station',
    category: 'Acero Communities',
    location: 'Gilbert, AZ',
    units: '312 Units',
    status: 'Leasing Now',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Walkable master-planned multifamily community with co-working hubs, pet spa, and high-efficiency building designs.',
  },
  {
    title: 'Acero Haagen Park',
    category: 'Acero Communities',
    location: 'Vancouver, WA',
    units: '256 Units',
    status: 'Stabilized',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Lush Pacific Northwest garden-style community adjacent to green parklands with cedar-accented architecture.',
  },
  {
    title: 'Meritum Sheely Farms',
    category: 'Meritum Living',
    location: 'West Valley, AZ',
    units: '304 Units',
    status: 'Under Development',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated lifestyle apartments offering expansive floor plans, private garages, and resort water amenities.',
  },
  {
    title: 'Tech Center Industrial Park',
    category: 'Commercial & Mixed-Use',
    location: 'Vancouver, WA',
    units: '180,000 Sq Ft',
    status: 'Operational',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Class-A flex industrial and corporate headquarters campus built to LEED environmental sustainability standards.',
  },
];

const categories = ['All Projects', 'Acero Communities', 'Meritum Living', 'Commercial & Mixed-Use'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filtered = selectedCategory === 'All Projects'
    ? communities
    : communities.filter((c) => c.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-obsidian text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-copper text-xs font-semibold uppercase tracking-wider mb-4">
              Signature Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
              Communities <span className="font-bold text-copper">Built for Life</span>
            </h2>
            <p className="text-white/60 text-base mt-2 max-w-lg">
              Explore our proprietary residential brands and commercial hubs across Arizona and Washington.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-copper text-black font-semibold shadow-md shadow-copper/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-copper/60 transition-all duration-500 hover:shadow-2xl hover:shadow-copper/10 flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 overflow-hidden bg-slate/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-obsidian/75 text-copper border border-copper/30 backdrop-blur-md">
                    {item.status}
                  </span>
                </div>

                {/* Location Pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-white/90 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
                    📍 {item.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-copper/80 font-semibold uppercase tracking-wider mb-2">
                    <span>{item.category}</span>
                    <span>{item.units}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="https://liveidm.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-copper hover:text-white transition-colors"
                  >
                    View Community Details &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
