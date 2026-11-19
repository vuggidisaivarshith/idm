'use client';

import React from 'react';

const technologies = [
  { name: 'Next.js & React', category: 'Frontend', desc: 'Ultra-fast, server-rendered and SEO-optimized web applications.' },
  { name: 'Flutter & React Native', category: 'Mobile Apps', desc: 'Cross-platform mobile apps for Android and iOS with native performance.' },
  { name: 'Python & Node.js', category: 'Backend & APIs', desc: 'Scalable cloud backends, microservices, and high-concurrency APIs.' },
  { name: 'Custom CRM & ERP', category: 'Enterprise', desc: 'Centralized inventory, sales tracking, and client management for SMEs.' },
  { name: 'WhatsApp Cloud API', category: 'AI Automation', desc: 'Automated 24/7 lead responses, booking triggers, and broadcast messaging.' },
  { name: 'Google Ads & Meta Pixel', category: 'Paid Performance', desc: 'Precision conversion tracking and algorithmically tuned ad funnels.' },
  { name: 'GA4 & Semrush', category: 'SEO & Analytics', desc: 'Deep keyword intelligence, competitor benchmarking, and rank tracking.' },
  { name: 'Cloudflare & AWS', category: 'Infrastructure', desc: 'Enterprise security, SSL encryption, and sub-second global content delivery.' },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 bg-darkbg text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Engineering & Technology
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
            Built on Modern, <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Future-Proof Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            We don’t use slow, outdated page builders. We engineer lightweight, conversion-focused websites, robust mobile applications, and intelligent automation systems.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                {t.category}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 group-hover:text-cyan-400 transition-colors">
                {t.name}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
