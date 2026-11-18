'use client';

import React from 'react';

const values = [
  {
    title: 'Faith & Integrity',
    desc: 'Founded on unyielding ethical principles, conducting every land acquisition and partner contract with total transparency.',
  },
  {
    title: 'People-First Culture',
    desc: 'Consistently recognized as an industry-leading workplace, empowering team members to grow, lead, and prosper.',
  },
  {
    title: 'Community Stewardship',
    desc: 'Our developments are built to enhance the broader neighborhood fabric for decades, not for quick speculative flips.',
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="py-24 bg-obsidian text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-semibold uppercase tracking-wider">
              IDM Cares & Core Values
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Driven by Values. <br />
              <span className="font-bold text-copper">Dedicated to People.</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              At IDM Companies, we believe that great real estate begins with a high-character culture. Through the <strong>IDM Cares</strong> initiative, our team members receive paid volunteer time off to support local food banks, healthcare networks, educational programs, and youth development across Washington and Arizona.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-3xl font-extrabold text-copper">5,000+</p>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Volunteer Hours Donated</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-3xl font-extrabold text-white">#1</p>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Top Workplace Honors</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-copper/40 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-copper/20 text-copper flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{v.title}</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed pl-11">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
