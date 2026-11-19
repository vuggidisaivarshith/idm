'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

const services = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tag: 'Community & Organic Growth',
    badge: 'Core SMMA',
    icon: '📱',
    shortDesc: 'Comprehensive Instagram and Facebook management that builds an engaged, loyal follower base aligned with your business goals.',
    features: [
      'Dedicated Instagram & Facebook page management',
      'Data-driven social media growth strategy',
      'Monthly strategic content calendars & scheduling',
      'Active community engagement & direct message handling',
      'Hashtag architecture & trending audio alignment',
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Reels',
    tag: 'Creative Production',
    badge: 'High Impact',
    icon: '🎬',
    shortDesc: 'Scroll-stopping creative visuals, high-hook Reels, carousel infographics, and branded graphic designs that demand attention.',
    features: [
      'High-retention Reels & short-form video concepts',
      'Aesthetic social media post & carousel designs',
      'Creative marketing campaign visuals & storytelling',
      'Brand identity assets, highlight covers & templates',
      'Conversion-focused copywriting & caption hooks',
    ],
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing (Ads)',
    tag: 'Paid Acquisition & ROI',
    badge: 'Fast Lead Gen',
    icon: '🎯',
    shortDesc: 'Laser-focused Meta (Instagram/Facebook) and Google Ads engineered to generate high-intent customer inquiries at optimal cost.',
    features: [
      'Meta Ads (Instagram & Facebook Lead Generation)',
      'High-intent Google Search & Local PPC Campaigns',
      'Targeted audience testing & retargeting funnels',
      'Continuous ad creative testing & budget scaling',
      'Transparent weekly lead tracking & performance metrics',
    ],
  },
  {
    id: 'seo-local-visibility',
    title: 'SEO & Local Visibility',
    tag: 'Search Dominance',
    badge: 'GMB & Maps',
    icon: '📍',
    shortDesc: 'Local SEO and Google Business Profile management designed to capture nearby customers searching for your products and services.',
    features: [
      'Google Business Profile setup, verification & recovery',
      'Google Maps 3-Pack local ranking optimization',
      'Search engine optimization (SEO) for business sites',
      'Geo-targeted local citations & directory consistency',
      'Customer review generation systems & management',
    ],
  },
  {
    id: 'website-development',
    title: 'Website & Landing Pages',
    tag: 'Digital Experience',
    badge: 'Modern Tech',
    icon: '💻',
    shortDesc: 'Lightning-fast, mobile-first websites and conversion landing pages engineered on modern frameworks to turn traffic into clients.',
    features: [
      'High-speed business & corporate brand websites',
      'Conversion-optimized landing pages for ad campaigns',
      'Fully responsive layouts optimized for mobile users',
      'Integrated WhatsApp & direct inquiry contact flows',
      'Clean code, security setup & reliable hosting',
    ],
  },
  {
    id: 'ai-business-automation',
    title: 'AI & Business Automation',
    tag: 'Intelligent Scale',
    badge: 'Smart Systems',
    icon: '⚡',
    shortDesc: 'Automate repetitive customer communication, inquiry dispatch, and business operations using custom AI chatbots and software.',
    features: [
      '24/7 AI-powered WhatsApp & web auto-responders',
      'Instant lead capture & CRM notification workflows',
      'Custom CRM & ERP software tailored for Indian SMEs',
      'Business process automation via webhooks & APIs',
      'Custom automated client follow-up sequences',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4">
            Our Agency Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            End-to-End Marketing & <br />
            <span className="font-extrabold text-gradient-aurora">
              Creative Growth Solutions.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            From creative storytelling on social media to conversion-engineered ad funnels and modern technology, we provide the full growth engine your brand needs.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className="aurora-card p-8 flex flex-col justify-between group"
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

                <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors">
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
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-textsecondary">
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
