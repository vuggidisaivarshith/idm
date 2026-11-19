'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

const services = [
  {
    id: 'gmb',
    title: 'Google Business Profile & Local SEO',
    tag: 'Local Visibility & Search',
    badge: 'Popular',
    icon: '📍',
    shortDesc: 'Drive foot traffic and high-intent local phone calls by optimizing your presence on Google Maps and localized search results.',
    features: [
      'New Google Business Profile Creation & Setup (₹4,000)',
      'Suspension Reinstatement & Compliance Appeals (₹2,999)',
      'Live Video Verification & Re-verification Guidance (₹2,999)',
      'Phone Number & Address Update Pending Fixes (₹2,999)',
      'Google Maps 3-Pack Local Ranking Optimization Strategy',
      'Local Geo-tagged Citations & Review Growth Framework',
    ],
  },
  {
    id: 'ads',
    title: 'Digital Marketing & Paid Ads (PPC)',
    tag: 'Targeted Lead Generation',
    badge: 'High Intent',
    icon: '🎯',
    shortDesc: 'Laser-targeted paid ad campaigns engineered to turn clicks into qualified leads with disciplined cost-per-acquisition management.',
    features: [
      'High-Intent Google Search & Performance Max Ad Campaigns',
      'Meta (Instagram & Facebook) Retargeting & Lead Forms',
      'High-Converting Ad Copywriting, Visual Creatives & Hooks',
      'Landing Page Conversion Rate Optimization (CRO)',
      'Direct Click-to-WhatsApp Inbound Lead Funnels',
      'Weekly Transparent Performance & Cost Metrics',
    ],
  },
  {
    id: 'tech',
    title: 'Web, Mobile Apps & Software',
    tag: 'Full-Stack Engineering',
    badge: 'Modern Stack',
    icon: '💻',
    shortDesc: 'High-speed, responsive, SEO-ready web applications and cross-platform mobile apps engineered with Next.js, React, and Flutter.',
    features: [
      'High-Speed Modern Business & Portfolio Websites',
      'E-Commerce Stores with Secure Payment Gateway Integrations',
      'Android & iOS Mobile Application Development',
      'Custom CRM & ERP Software for Indian Businesses',
      'Domain Setup, SSL, Cloud Hosting & Routine Maintenance',
      'SEO-Friendly Clean Code & Sub-Second Page Load Times',
    ],
  },
  {
    id: 'ai',
    title: 'AI Automation & Business Tools',
    tag: 'Intelligent Workflows',
    badge: 'Automation',
    icon: '⚡',
    shortDesc: 'Automate repetitive customer support, lead routing, and business operations using intelligent bots and integrated cloud workflows.',
    features: [
      '24/7 AI-Powered WhatsApp & Web Chatbot Assistants',
      'Automated Inbound Lead Capture & CRM Dispatch',
      'AI Content & Social Media Generation Workflows',
      'Automated Invoicing & Business Process Connectors',
      'Staff Productivity Automations via Zapier & Custom APIs',
      'Custom AI Solutions & Workflow Tailoring',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4">
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Comprehensive Growth & Tech Solutions for <br />
            <span className="font-extrabold text-gradient-aurora">
              Modern Businesses.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            We unite AI technologies, search visibility, performance advertising, and custom software engineering to build sustainable growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className="aurora-card p-8 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl p-3.5 rounded-2xl bg-sectionsoft border border-primarypurple/15 text-primarypurple" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sectionsoft text-primarypurple border border-primarypurple/20">
                      {item.badge}
                    </span>
                    <span className="text-xs text-textsecondary font-mono">0{idx + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs uppercase font-semibold text-royalblue tracking-wider mt-1 mb-3">
                  {item.tag}
                </p>
                <p className="text-sm text-textsecondary leading-relaxed mb-6">
                  {item.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-5 border-t border-bordercolor">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-textsecondary">
                      <span className="text-brandmint font-bold mt-0.5" aria-hidden="true">✓</span>
                      <span className="text-textprimary/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-bordercolor flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult regarding ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-primarypurple hover:text-royalblue transition-colors flex items-center gap-1.5"
                >
                  Consult on WhatsApp &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
