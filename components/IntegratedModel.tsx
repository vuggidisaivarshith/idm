'use client';

import React, { useState } from 'react';

const pillars = [
  {
    step: '01',
    title: 'Site Acquisition & Land Planning',
    subtitle: 'High-conviction market research & entitlements',
    description:
      'We identify strategic, high-growth corridors across Arizona, Washington, and Oregon. Our pre-development experts handle feasibility, zoning, architectural coordination, and environmental entitlements with long-term community value in mind.',
    stats: '150+ Parcels Evaluated Annually',
    tag: 'Strategic Growth',
  },
  {
    step: '02',
    title: 'In-House Construction & Engineering',
    subtitle: 'True general contracting and precision building',
    description:
      'Unlike firms that outsource execution, IDM’s self-performing construction division controls project schedules, material procurement, safety standards, and craftsmanship from ground-breaking to ribbon-cutting.',
    stats: 'On-Time Delivery Guarantee',
    tag: 'Execution Precision',
  },
  {
    step: '03',
    title: 'Elevated Property Management',
    subtitle: 'Concierge living and customer-first stewardship',
    description:
      'Our dedicated property management teams operate through our proprietary Live IDM platform. We manage communities with resort-level amenities, proactive maintenance, resident events, and industry-leading retention rates.',
    stats: '96.4% Portfolio Occupancy',
    tag: 'Resident Experience',
  },
  {
    step: '04',
    title: 'Capital & Investment Growth',
    subtitle: 'Disciplined underwriting and investor transparency',
    description:
      'Three decades of enduring institutional relationships. We deliver value for investment partners through conservative capital structuring, tax-advantaged development, and disciplined lifecycle asset management.',
    stats: 'Consistent Historical ROI',
    tag: 'Fiduciary Duty',
  },
];

export default function IntegratedModel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="model" className="py-24 bg-[#0F141E] text-white relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-copper/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-semibold uppercase tracking-wider mb-4">
            The IDM Advantage
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            The Fully <span className="font-bold text-copper">Integrated Model</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 font-normal leading-relaxed">
            By managing the entire lifecycle internally—from land acquisition to ongoing resident concierge service—we eliminate friction, safeguard margins, and produce spaces that endure for generations.
          </p>
        </div>

        {/* Desktop Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((p, idx) => (
              <button
                key={p.step}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                  activeTab === idx
                    ? 'bg-white/[0.07] border-copper/70 shadow-lg shadow-copper/10 scale-[1.02]'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <span
                  className={`text-xl font-bold transition-colors ${
                    activeTab === idx ? 'text-copper' : 'text-white/30'
                  }`}
                >
                  {p.step}
                </span>
                <div>
                  <h3
                    className={`text-lg font-semibold transition-colors ${
                      activeTab === idx ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/40 mt-1">{p.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Detail Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/15 backdrop-blur-xl relative shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-copper/20 text-copper border border-copper/30">
                {pillars[activeTab].tag}
              </span>
              <span className="text-4xl font-extrabold text-white/10 font-mono">
                {pillars[activeTab].step}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {pillars[activeTab].title}
            </h3>
            <p className="text-copper/90 text-sm font-medium mb-6">
              {pillars[activeTab].subtitle}
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              {pillars[activeTab].description}
            </p>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase text-white/40 tracking-wider">Benchmark</p>
                <p className="text-xl font-bold text-white mt-0.5">{pillars[activeTab].stats}</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-copper hover:text-white transition-colors"
              >
                Inquire Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
