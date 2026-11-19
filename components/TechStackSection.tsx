'use client';

import React from 'react';

const technologies = [
  { name: 'Next.js & React', category: 'Frontend', desc: 'High-speed, server-rendered and SEO-optimized web applications with sub-second loads.' },
  { name: 'Flutter & React Native', category: 'Mobile Apps', desc: 'Cross-platform mobile applications for Android and iOS with native performance.' },
  { name: 'Python & Node.js', category: 'Backend & APIs', desc: 'Scalable cloud backends, microservices, and secure API architectures.' },
  { name: 'Custom CRM & ERP', category: 'Enterprise', desc: 'Centralized sales tracking, client records, and inventory systems for SMEs.' },
  { name: 'WhatsApp Cloud API', category: 'Automation', desc: 'Automated 24/7 lead responses, instant alerts, and smart webhook notifications.' },
  { name: 'Google Ads & Meta Pixel', category: 'Performance', desc: 'Conversion tracking, retargeting funnels, and algorithmic ad optimization.' },
  { name: 'GA4 & Search Console', category: 'SEO & Analytics', desc: 'Deep keyword intelligence, user journey telemetry, and rank tracking.' },
  { name: 'Cloudflare & AWS', category: 'Infrastructure', desc: 'Global edge caching, SSL encryption, DDoS mitigation, and 99.9% uptime.' },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 bg-midnight text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-pill mb-4">
            Engineering & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight">
            Built on Modern, <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple via-blue to-cyan">
              Production-Grade Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            We avoid slow page builders. We engineer lightweight, conversion-focused websites, robust mobile applications, and reliable business automation systems.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((t) => (
            <div
              key={t.name}
              className="glass-card p-6 hover:border-cyan/50 hover:shadow-glow-cyan/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/25 inline-block">
                {t.category}
              </span>
              <h3 className="text-lg font-heading font-bold text-white mt-3 group-hover:text-cyan transition-colors">
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
