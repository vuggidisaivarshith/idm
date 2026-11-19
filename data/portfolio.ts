export interface CreativeDeliverable {
  id: string;
  title: string;
  category: 'Social Media' | 'Reels & Videos' | 'Paid Ads' | 'Local SEO & GMB' | 'Web Development' | 'AI & Automation';
  format: string;
  description: string;
  tags: string[];
}

export const DELIVERABLE_CATEGORIES = [
  'All Deliverables',
  'Social Media',
  'Reels & Videos',
  'Paid Ads',
  'Local SEO & GMB',
  'Web Development',
  'AI & Automation',
] as const;

export const CREATIVE_DELIVERABLES: CreativeDeliverable[] = [
  {
    id: 'deliverable-social-feed',
    title: 'Brand Visual Identity & Carousel Posts',
    category: 'Social Media',
    format: 'Static & Multi-Slide Informational Carousels',
    description: 'Custom graphic designs, cohesive brand color schemes, high-readability typography, and educational carousels formatted for Instagram and Facebook.',
    tags: ['Grid Architecture', 'Brand Consistency', 'Multi-Slide Posts'],
  },
  {
    id: 'deliverable-reels-video',
    title: 'Short-Form Reels & Video Production',
    category: 'Reels & Videos',
    format: 'Vertical Video (9:16) for Instagram & YouTube Shorts',
    description: 'High-hook video concepts, dynamic captions, sound design, and pacing optimized for audience retention on Instagram Reels and YouTube Shorts.',
    tags: ['Hook Scripting', 'Reels Editing', 'Trending Audio'],
  },
  {
    id: 'deliverable-performance-ads',
    title: 'High-Intent Paid Ad Creative Sets',
    category: 'Paid Ads',
    format: 'Direct-Response Ad Creatives for Meta & Google',
    description: 'Targeted visual ads, carousel variations, and compelling call-to-action copy designed to reduce cost-per-lead across Meta Ads and Google Search.',
    tags: ['Lead Generation Ads', 'Creative Testing', 'Conversion Copy'],
  },
  {
    id: 'deliverable-local-gmb',
    title: 'Google Business Profile & Local Search Setup',
    category: 'Local SEO & GMB',
    format: 'Google Maps Presence & Profile Architecture',
    description: 'Full profile creation, geo-targeted category configuration, business attribute mapping, and compliance alignment for local search presence.',
    tags: ['GMB Optimization', 'Google Maps', 'Local Footfall'],
  },
  {
    id: 'deliverable-web-landing',
    title: 'Conversion-Focused Websites & Landing Pages',
    category: 'Web Development',
    format: 'Modern Mobile-First Web Experiences',
    description: 'Clean Next.js websites and campaign landing pages optimized for speed, mobile responsiveness, and direct WhatsApp lead conversion.',
    tags: ['Next.js Framework', 'Mobile-First', 'Fast Loading'],
  },
  {
    id: 'deliverable-ai-automation',
    title: 'AI Chatbots & WhatsApp Automation Flows',
    category: 'AI & Automation',
    format: 'Automated Lead Notification & Response Systems',
    description: 'Automated 24/7 inquiry responders, lead notification alerts, and webhook integrations to streamline customer communication.',
    tags: ['WhatsApp Automation', 'Instant Alerts', 'Process Automation'],
  },
];
