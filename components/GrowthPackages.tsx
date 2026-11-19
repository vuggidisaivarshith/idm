'use client';

import React from 'react';

const packages = [
  {
    name: 'Starter Growth',
    price: '₹4,999',
    period: '/month',
    badge: 'Popular for Local Businesses',
    description: 'Designed for small businesses, clinics, and local services in Hyderabad looking to establish consistent local visibility.',
    features: [
      'Google Business Profile weekly optimization',
      '4 Google Maps geo-tagged posts & updates',
      '8 branded social media graphics per month',
      'Basic On-Page Local SEO audit & fixes',
      'Review generation strategy & reply templates',
      'Monthly performance & keyword rank report',
      'WhatsApp direct support',
    ],
    highlight: false,
    ctaText: 'Start with ₹4,999/mo',
  },
  {
    name: 'Pro Scale Marketing',
    price: '₹12,999',
    period: '/month',
    badge: 'Best Value for Fast Growth',
    description: 'High-velocity lead generation combining localized search dominance with performance-driven Google and Meta ads.',
    features: [
      'Everything in Starter Growth, plus:',
      'Google Ads (Search/PPC) or Meta Ads management',
      '16 engaging social media posts & trending reels',
      'Top 3-Pack Google Maps ranking push',
      'High-converting landing page review & CRO advice',
      'Local citation building across 30+ directories',
      'Bi-weekly lead performance review calls',
      'Dedicated marketing manager',
    ],
    highlight: true,
    ctaText: 'Get Pro Scale Plan',
  },
  {
    name: 'Enterprise Tech & Growth',
    price: '₹24,999',
    period: '/month',
    badge: 'Full-Funnel Transformation',
    description: 'Complete digital agency partnership with AI automation, custom web maintenance, and omni-channel advertising.',
    features: [
      'Everything in Pro Scale, plus:',
      'Multi-channel ads (Google Ads + Instagram/FB Ads)',
      'Custom AI WhatsApp Lead Responder Chatbot setup',
      'Website maintenance & technical SEO optimization',
      'Video ad scripts, creative hooks & editing',
      'CRM integration & automated lead routing',
      'Competitor intelligence & market expansion',
      '24/7 Priority VIP escalation',
    ],
    highlight: false,
    ctaText: 'Inquire Enterprise Plan',
  },
];

export default function GrowthPackages() {
  return (
    <section id="pricing" className="py-24 bg-darkcard/40 text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Transparent Retainers
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Monthly Growth Packages <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Built for Tangible ROI
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            No hidden fees or long lock-in contracts. Choose the growth tier tailored to your stage and scale your leads predictably.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-indigo-950/40 via-darkcard to-darkbg border-cyan-400 shadow-2xl shadow-cyan-500/15 scale-[1.03]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/25'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                  {pkg.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{pkg.name}</h3>
                
                <div className="my-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-slate-400 text-sm">{pkg.period}</span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What&apos;s Included:
                  </p>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <a
                  href={`https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price}${pkg.period})`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-500'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-cyan-400/50'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
