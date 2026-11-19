'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  badge: string;
  icon: string;
  shortDesc: string;
  features: string[];
  visualType: 'social' | 'content' | 'ads' | 'seo' | 'web' | 'ai';
}

const services: ServiceItem[] = [
  {
    id: 'social-media-management',
    title: 'Social Media Marketing',
    tag: 'Community & Organic Growth',
    badge: 'Core SMMA',
    icon: '📱',
    visualType: 'social',
    shortDesc: 'Comprehensive Instagram and Facebook management that builds an engaged, loyal follower base aligned with your business goals.',
    features: [
      'Dedicated Instagram & Facebook page management',
      'Data-driven social media growth strategy',
      'Monthly strategic content calendars & scheduling',
      'Active community engagement & response handling',
      'Hashtag architecture & trending audio alignment',
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Reels',
    tag: 'Creative Production',
    badge: 'High Impact',
    icon: '🎬',
    visualType: 'content',
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
    title: 'Google & Meta Ads',
    tag: 'Paid Acquisition & ROI',
    badge: 'Fast Lead Gen',
    icon: '🎯',
    visualType: 'ads',
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
    title: 'SEO & Local SEO',
    tag: 'Search Dominance',
    badge: 'GMB & Maps',
    icon: '📍',
    visualType: 'seo',
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
    title: 'Website Development',
    tag: 'Digital Experience',
    badge: 'Modern Tech',
    icon: '💻',
    visualType: 'web',
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
    title: 'AI Automation',
    tag: 'Intelligent Scale',
    badge: 'Smart Systems',
    icon: '⚡',
    visualType: 'ai',
    shortDesc: 'Automate repetitive customer communication, inquiry dispatch, and business operations using custom AI chatbots and software.',
    features: [
      '24/7 AI-powered WhatsApp & web auto-responders',
      'Instant lead capture & notification workflows',
      'Custom CRM & ERP software tailored for SMEs',
      'Business process automation via webhooks & APIs',
      'Custom automated client follow-up sequences',
    ],
  },
];

function ServiceVisual({ type }: { type: ServiceItem['visualType'] }) {
  switch (type) {
    case 'social':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-primarypurple/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-primarypurple bg-white px-2 py-0.5 rounded-full shadow-2xs">Instagram Grid</span>
            <span className="text-textsecondary">Weekly Strategy</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            <div className="h-10 rounded-md bg-gradient-to-tr from-primarypurple/20 to-royalblue/20 flex items-center justify-center text-[10px] font-bold text-primarypurple">Feed</div>
            <div className="h-10 rounded-md bg-gradient-to-tr from-royalblue/20 to-brandcyan/20 flex items-center justify-center text-[10px] font-bold text-royalblue">Reel</div>
            <div className="h-10 rounded-md bg-gradient-to-tr from-softpink/20 to-primarypurple/20 flex items-center justify-center text-[10px] font-bold text-softpink">Story</div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-textsecondary">
            <span>✨ Cohesive Aesthetics</span>
            <span className="text-brandmint font-semibold">Active Curation</span>
          </div>
        </div>
      );
    case 'content':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-royalblue/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-royalblue bg-white px-2 py-0.5 rounded-full shadow-2xs">Canvas Artboard</span>
            <span className="text-primarypurple font-semibold">9:16 Vertical</span>
          </div>
          <div className="flex items-center justify-center gap-3 my-auto">
            <div className="w-14 h-14 rounded-lg bg-white border border-royalblue/20 shadow-xs flex flex-col items-center justify-center">
              <span className="text-base">🎬</span>
              <span className="text-[8px] font-bold text-royalblue">Reel Hook</span>
            </div>
            <div className="w-14 h-14 rounded-lg bg-white border border-primarypurple/20 shadow-xs flex flex-col items-center justify-center">
              <span className="text-base">🎨</span>
              <span className="text-[8px] font-bold text-primarypurple">Visual Kit</span>
            </div>
          </div>
          <div className="text-[9px] text-textsecondary flex justify-between">
            <span>Kinetic Typography</span>
            <span className="text-royalblue font-semibold">Sound Design</span>
          </div>
        </div>
      );
    case 'ads':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-brandmint/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-brandmint bg-white px-2 py-0.5 rounded-full shadow-2xs">Ads Manager</span>
            <span className="text-brandmint font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brandmint animate-ping" /> Active
            </span>
          </div>
          <div className="my-auto space-y-1.5">
            <div className="flex items-center justify-between text-[10px] bg-white p-1.5 rounded-lg border border-bordercolor">
              <span className="font-semibold text-textprimary">Meta Lead Campaign</span>
              <span className="text-primarypurple font-bold">Optimizing</span>
            </div>
            <div className="flex items-center justify-between text-[10px] bg-white p-1.5 rounded-lg border border-bordercolor">
              <span className="font-semibold text-textprimary">Google Search PPC</span>
              <span className="text-royalblue font-bold">Targeted</span>
            </div>
          </div>
          <div className="text-[9px] text-textsecondary flex justify-between">
            <span>Low CPL Funnel</span>
            <span className="text-textprimary font-semibold">A/B Testing</span>
          </div>
        </div>
      );
    case 'seo':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-brandcyan/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-brandcyan bg-white px-2 py-0.5 rounded-full shadow-2xs">Google Search & Maps</span>
            <span className="text-brandcyan font-bold">Local 3-Pack</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-bordercolor my-auto space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] text-textprimary font-bold">
              <span>📍</span> Google Maps Geopin Verified
            </div>
            <div className="w-full bg-sectionsoft h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-brandcyan to-royalblue h-full w-[85%]" />
            </div>
          </div>
          <div className="text-[9px] text-textsecondary flex justify-between">
            <span>Profile Optimization</span>
            <span className="text-brandcyan font-semibold">Rankings</span>
          </div>
        </div>
      );
    case 'web':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-primarypurple/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-primarypurple bg-white px-2 py-0.5 rounded-full shadow-2xs">Next.js 14 App</span>
            <span className="text-brandmint font-semibold">&lt; 1s Load</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-bordercolor my-auto flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[10px] font-bold text-textprimary">Desktop & Mobile UI</div>
              <div className="text-[8px] text-textsecondary">Tailwind CSS & 3D WebGL</div>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-sectionsoft text-primarypurple font-bold">SSR</span>
          </div>
          <div className="text-[9px] text-textsecondary flex justify-between">
            <span>WhatsApp Lead Flow</span>
            <span className="text-primarypurple font-semibold">100% Responsive</span>
          </div>
        </div>
      );
    case 'ai':
      return (
        <div className="h-32 rounded-xl bg-gradient-to-tr from-sectionsoft via-white to-sectionsoft border border-bordercolor/80 p-3 flex flex-col justify-between relative overflow-hidden group-hover:border-softpink/40 transition-colors">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-softpink bg-white px-2 py-0.5 rounded-full shadow-2xs">Automation Workflow</span>
            <span className="text-softpink font-bold">24/7 Live</span>
          </div>
          <div className="flex items-center justify-between my-auto text-[9px] gap-1">
            <div className="bg-white p-1.5 rounded border border-bordercolor text-center flex-1">
              <span className="block font-bold text-textprimary">Inquiry</span>
              <span className="text-[8px] text-textsecondary">Form / Web</span>
            </div>
            <span className="text-primarypurple font-bold">&rarr;</span>
            <div className="bg-white p-1.5 rounded border border-bordercolor text-center flex-1">
              <span className="block font-bold text-primarypurple">AI Route</span>
              <span className="text-[8px] text-textsecondary">Smart Dispatch</span>
            </div>
            <span className="text-primarypurple font-bold">&rarr;</span>
            <div className="bg-white p-1.5 rounded border border-bordercolor text-center flex-1">
              <span className="block font-bold text-brandmint">WhatsApp</span>
              <span className="text-[8px] text-textsecondary">Instant Alert</span>
            </div>
          </div>
          <div className="text-[9px] text-textsecondary flex justify-between">
            <span>Zero Manual Delay</span>
            <span className="text-brandmint font-semibold">Real-Time Lead Alert</span>
          </div>
        </div>
      );
  }
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="services" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="badge-aurora mb-4">
            Interactive Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight text-textprimary">
            Integrated Services for <br />
            <span className="font-extrabold text-gradient-aurora">
              Smarter Marketing & Growth.
            </span>
          </h2>
          <p className="text-textsecondary text-base sm:text-lg mt-4 leading-relaxed">
            From creative social media management to high-converting performance ads and intelligent business automation, we build cohesive digital growth engines for businesses.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="aurora-card p-7 flex flex-col justify-between group hover:border-primarypurple/40 relative card-3d-tilt"
            >
              <div>
                {/* Visual Header */}
                <div className="mb-5">
                  <ServiceVisual type={service.visualType} />
                </div>

                {/* Service Tag & Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple">
                    {service.tag}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sectionsoft text-textsecondary border border-bordercolor">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-textsecondary leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-bordercolor">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-textsecondary">
                      <span className="text-primarypurple font-bold mt-0.5" aria-hidden="true">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-6 mt-6 border-t border-bordercolor">
                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult with your team regarding: ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center bg-pagebg border border-bordercolor text-textprimary hover:bg-gradient-to-r hover:from-primarypurple hover:to-royalblue hover:text-white hover:border-transparent transition-all shadow-2xs"
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
