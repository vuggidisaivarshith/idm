'use client';

import React, { useState } from 'react';

const plans = [
  {
    id: '1bed',
    name: 'The Sonoran (Plan A1)',
    type: '1 Bedroom • 1 Bathroom',
    sqft: '785 Sq Ft',
    deposit: '$500 Deposit',
    highlights: [
      'Chef-inspired kitchen island with quartz countertops',
      'Walk-in primary closet with custom shelving',
      'Private expansive patio or covered balcony',
      'Smart keyless entry and Wi-Fi enabled thermostat',
      'In-unit front loading full-size washer & dryer',
    ],
    rendering: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2bed',
    name: 'The Cascadia (Plan B2)',
    type: '2 Bedrooms • 2 Bathrooms',
    sqft: '1,140 Sq Ft',
    deposit: '$750 Deposit',
    highlights: [
      'Dual master suites with en-suite spa bathrooms',
      'Open-concept great room with 10-foot ceilings',
      'Wraparound corner terrace with unobstructed views',
      'Dual vanities with illuminated LED mirrors',
      'Dedicated built-in home office workstation nook',
    ],
    rendering: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3bed',
    name: 'The Horizon (Plan C1)',
    type: '3 Bedrooms • 2.5 Bathrooms',
    sqft: '1,490 Sq Ft',
    deposit: '$1,000 Deposit',
    highlights: [
      'Top-floor residence with panoramic city & mountain views',
      'Gourmet chef kitchen with gas range & wine cooler',
      'Private direct-access attached garage available',
      'Hardwood-style luxury plank flooring throughout',
      'Resort-style soaking tubs and frameless glass showers',
    ],
    rendering: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FloorPlanExplorer() {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section id="floorplans" className="py-24 bg-[#0A0D13] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-semibold uppercase tracking-wider mb-4">
            Interior Design & Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Residences <span className="font-bold text-copper">Crafted With Intent</span>
          </h2>
          <p className="text-white/60 text-lg mt-3">
            Every apartment community developed by IDM delivers spatial harmony, natural lighting, and luxury finishes built to outlast trends.
          </p>
        </div>

        {/* Plan Switcher Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {plans.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePlan(idx)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activePlan === idx
                  ? 'bg-copper text-black shadow-lg shadow-copper/20 scale-105'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Active Plan Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src={plans[activePlan].rendering}
              alt={plans[activePlan].name}
              className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase text-copper font-bold tracking-widest">Architectural Spec</p>
                <p className="text-2xl font-bold text-white mt-1">{plans[activePlan].type}</p>
              </div>
              <div className="text-right">
                <span className="px-4 py-2 rounded-full bg-copper text-black font-extrabold text-xs uppercase tracking-wider">
                  {plans[activePlan].sqft}
                </span>
              </div>
            </div>
          </div>

          {/* Plan Details & Amenities List */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-copper/80 font-semibold">
                Available at Acero & Meritum Communities
              </span>
              <h3 className="text-3xl font-bold text-white mt-1">{plans[activePlan].name}</h3>
              <p className="text-sm text-white/50 mt-1">{plans[activePlan].deposit}</p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Design Features & Amenities
              </p>
              {plans[activePlan].highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm text-white/80">
                  <span className="text-copper mt-0.5">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href="https://liveidm.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-copper text-black font-bold text-xs uppercase tracking-wider hover:bg-[#c29e2e] transition-all shadow-md shadow-copper/20"
              >
                Tour in Person
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Inquire Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
