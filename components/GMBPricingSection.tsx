'use client';

import React from 'react';

const gmbServices = [
  {
    title: 'Google Business Profile Creation',
    price: '₹4,000',
    frequency: 'One-Time Setup',
    description: 'Complete verified setup of your Google Business Profile from scratch, with geo-targeted keywords, category optimization, and verified location marker.',
    features: [
      'Official verification assistance',
      'High-converting business description',
      'Complete services & product catalog listing',
      'High-res photo & logo uploads',
      'Google Maps geolocation pinpointing',
    ],
    highlight: false,
    ctaText: 'Create My GMB Profile',
  },
  {
    title: 'Profile Reinstatement & Suspension Fix',
    price: '₹2,999',
    frequency: 'Per Profile Issue',
    description: 'Has your Google profile been suspended, disabled, or flagged for deceptive content? We prepare comprehensive compliance appeals to get your business back online fast.',
    features: [
      'Root cause suspension diagnosis',
      'Google compliance audit & policy cleanup',
      'Formal appeal preparation & documentation',
      'Direct Google Support escalation',
      '98% historic reinstatement success',
    ],
    highlight: true,
    ctaText: 'Reinstate My Suspended GMB',
  },
  {
    title: 'Video Verification Assistance',
    price: '₹2,999',
    frequency: 'One-Time Assistance',
    description: 'Stuck on Google’s mandatory live video verification? We guide you through the exact requirements, signage, equipment, and live video proof to get instant approval.',
    features: [
      'Pre-verification check & checklist',
      'Signage, tools & address verification advice',
      'Step-by-step video script walkthrough',
      'Guaranteed video proof readiness',
      'Avoid continuous rejection loops',
    ],
    highlight: false,
    ctaText: 'Pass Video Verification',
  },
  {
    title: 'Phone Number & Address Update',
    price: '₹2,999',
    frequency: 'Per Update Fix',
    description: 'Google rejecting your updated phone number or address change? We resolve the algorithmic pending loop so your customers can call you without delay.',
    features: [
      'Fix "Under Review" pending number loops',
      'NAP (Name, Address, Phone) consistency audit',
      'Documentation & utility bill proof submission',
      'Correct official display on Google Search & Maps',
      'Fast resolution turnaround',
    ],
    highlight: false,
    ctaText: 'Fix My Phone Number',
  },
];

export default function GMBPricingSection() {
  return (
    <section id="gmb" className="py-24 bg-darkbg text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Specialized GMB Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Google Business Profile <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Fixes & Local SEO Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Stop losing customers to your competitors on Google Maps. We provide expert verification, policy reinstatement, and ranking optimization at transparent fixed rates.
          </p>
        </div>

        {/* 4 GMB Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gmbServices.map((gmb, i) => (
            <div
              key={gmb.title}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                gmb.highlight
                  ? 'bg-gradient-to-b from-cyan-950/40 via-darkcard to-darkcard border-cyan-400/60 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {gmb.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500 text-black text-[10px] font-extrabold uppercase tracking-widest">
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-2">{gmb.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-cyan-400">{gmb.price}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">{gmb.frequency}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {gmb.description}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  {gmb.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20need%20help%20with%20${encodeURIComponent(gmb.title)}%20(${gmb.price})`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                    gmb.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-500'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500'
                  }`}
                >
                  {gmb.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
