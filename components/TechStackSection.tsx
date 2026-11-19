'use client';

import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations/variants';

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
    <section id="tech" className="py-24 bg-pagebg text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4 bg-white border-primarypurple/20">
            Engineering & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Built on Modern, <br />
            <span className="font-extrabold text-gradient-aurora">
              Production-Grade Technologies
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            We avoid slow page builders. We engineer lightweight, conversion-focused websites, robust mobile applications, and reliable business automation systems.
          </p>
        </ScrollReveal>

        {/* Tech Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUpVariants}
              className="aurora-card p-6 card-3d-tilt group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/15 inline-block">
                {t.category}
              </span>
              <h3 className="text-lg font-heading font-bold text-textprimary mt-3 group-hover:text-primarypurple transition-colors">
                {t.name}
              </h3>
              <p className="text-xs text-textsecondary mt-2 leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
