'use client';

import React, { useState } from 'react';

const services = [
  {
    id: 'gmb',
    title: 'Google Business Profile & Local SEO',
    tag: 'Local Domination',
    badge: 'Popular',
    icon: '📍',
    shortDesc: 'Own your local market on Google Maps and search results. Drive foot traffic and high-intent local phone calls.',
    features: [
      'New Google Business Profile Creation & Setup (₹4,000)',
      'Suspension Reinstatement & Appeal Handling (₹2,999)',
      'Live Video Verification & Re-verification (₹2,999)',
      'Phone Number & Address Update Fixes (₹2,999)',
      'Top 3-Pack Google Maps Local Ranking Strategy',
      'Local Geo-tagged Citations & Review Growth Systems',
    ],
  },
  {
    id: 'ads',
    title: 'Digital Marketing & Paid Ads (PPC)',
    tag: 'Direct Lead Generation',
    badge: 'High ROI',
    icon: '🎯',
    shortDesc: 'Laser-targeted paid ad campaigns engineered to convert clicks into paying customers with optimized cost-per-lead.',
    features: [
      'High-Intent Google Search & Performance Max Ads',
      'Meta (Instagram & Facebook) Retargeting Funnels',
      'High-Converting Ad Copy, Creatives & Video Hooks',
      'Landing Page Conversion Rate Optimization (CRO)',
      'WhatsApp Click-to-Chat Direct Ad Funnels',
      'Weekly Analytics & Transparent ROI Dashboards',
    ],
  },
  {
    id: 'tech',
    title: 'Web, Mobile Apps & Software',
    tag: 'Custom Engineering',
    badge: 'Modern Stack',
    icon: '💻',
    shortDesc: 'Ultra-fast, responsive, modern websites and cross-platform mobile apps built on React, Next.js, and Flutter.',
    features: [
      'High-Speed Modern Business & Portfolio Websites',
      'E-Commerce Portals with Payment Gateway Integrations',
      'Android & iOS Mobile Application Development',
      'Custom CRM & ERP Software for Indian Businesses',
      'Domain Setup, SSL, AWS/Cloudflare Hosting & Maintenance',
      'SEO-Friendly Clean Code & Lightning-Fast Page Load',
    ],
  },
  {
    id: 'ai',
    title: 'AI Automation & Business Tools',
    tag: 'Next-Gen Productivity',
    badge: 'Trending',
    icon: '⚡',
    shortDesc: 'Automate repetitive workflows, customer support, and sales outreach with intelligent AI bots and integrations.',
    features: [
      '24/7 AI-Powered WhatsApp & Web Chatbots',
      'Automated Lead Capture & Instant CRM Routing',
      'AI Content & Social Media Generation Workflows',
      'Automated Invoicing & GST Compliance Tools',
      'Staff Productivity Automations via Zapier & Make',
      'Custom AI Solutions & Large Language Model Fine-Tuning',
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 bg-darkcard/60 text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Comprehensive Growth Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Everything Your Business Needs to <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Scale in the Digital Era.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            We blend cutting-edge AI technologies with battle-tested performance marketing to help businesses in Hyderabad and beyond capture market leadership.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveService(idx)}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10">
                    {item.icon}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs uppercase font-semibold text-cyan-300/80 tracking-wider mt-1 mb-3">
                  {item.tag}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`https://wa.me/918519837818?text=Hello%20IDM%20Smart%20Tech,%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Book Consultation on WhatsApp &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
