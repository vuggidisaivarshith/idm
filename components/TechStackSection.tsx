'use client';

import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

const technologies = [
  { name: 'Next.js & React', category: 'Frontend', desc: 'High-speed, server-rendered and SEO-optimized web applications with optimized performance.' },
  { name: 'Flutter & React Native', category: 'Mobile Apps', desc: 'Cross-platform mobile applications for Android and iOS with native performance.' },
  { name: 'Python & Node.js', category: 'Backend & APIs', desc: 'Scalable cloud backends, microservices, and secure API architectures.' },
  { name: 'Custom CRM & ERP', category: 'Enterprise', desc: 'Centralized sales tracking, client records, and inventory systems for SMEs.' },
  { name: 'WhatsApp Cloud API', category: 'Automation', desc: 'Automated 24/7 lead responses, instant alerts, and smart webhook notifications.' },
  { name: 'Google Ads & Meta Pixel', category: 'Performance', desc: 'Conversion tracking, retargeting funnels, and algorithmic ad optimization.' },
  { name: 'GA4 & Search Console', category: 'SEO & Analytics', desc: 'Deep keyword intelligence, user journey telemetry, and rank tracking.' },
  { name: 'Cloudflare & AWS', category: 'Infrastructure', desc: 'Global edge caching, SSL encryption, DDoS mitigation, and enterprise-grade high availability.' },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 bg-white text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="badge-mono">ENGINEERING &amp; INFRASTRUCTURE</span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.1] text-[#0F172A] tracking-[-0.02em]">
            Built on Modern, <br />
            <span className="italic text-[#365679] font-medium">Production-Grade Technologies.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#334155] mt-4 leading-relaxed font-normal">
            We avoid fragile page builders. We engineer lightweight, conversion-focused websites, robust mobile applications, and reliable business automation systems.
          </p>
        </ScrollReveal>

        {/* Tech Grid */}
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUpVariants}
              className="h-full"
            >
              <div className="glossy-card glossy-card-hover p-6 sm:p-7 border-2 border-slate-200/90 bg-white h-full flex flex-col justify-between group">
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#0F172A] bg-slate-100 px-2.5 py-1 border border-slate-200 inline-block mb-3">
                    {t.category}
                  </span>
                  <h3 className="font-serif text-[19px] font-normal text-[#0F172A] group-hover:text-[#365679] transition-colors mb-2">
                    {t.name}
                  </h3>
                  <p className="text-[12.5px] text-[#334155] leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#64748B] tracking-wider uppercase">PRODUCTION READY</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
