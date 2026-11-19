export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Social Media Posts' | 'Instagram Campaigns' | 'Reels & Videos' | 'Paid Advertising' | 'Branding' | 'Website Projects';
  clientIndustry: string;
  description: string;
  highlightMetric: string;
  image: string;
  tags: string[];
  isDemo: boolean;
}

export const PORTFOLIO_CATEGORIES = [
  'All Work',
  'Social Media Posts',
  'Instagram Campaigns',
  'Reels & Videos',
  'Paid Advertising',
  'Branding',
  'Website Projects',
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'campaign-urban-brew',
    title: 'The Urban Cafe & Roastery',
    category: 'Instagram Campaigns',
    clientIndustry: 'Food & Beverage / Hospitality',
    description: 'A 30-day viral local launch campaign featuring aesthetic reel hooks, foodie giveaways, and micro-influencer collaborations in Hyderabad.',
    highlightMetric: '1.2M+ Organic Views',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    tags: ['Reels Production', 'Instagram Growth', 'Local Footfall'],
    isDemo: true,
  },
  {
    id: 'campaign-zenith-realty',
    title: 'Zenith Luxury Living',
    category: 'Paid Advertising',
    clientIndustry: 'Real Estate & Construction',
    description: 'High-intent Meta Ads & Google Search funnel targeting NRI investors for luxury 3BHK villas, generating qualified site visit appointments.',
    highlightMetric: '8.4x Verified ROAS',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Meta Lead Ads', 'Google PPC', 'Conversion Funnel'],
    isDemo: true,
  },
  {
    id: 'campaign-aurora-glow',
    title: 'Aura Skin & Aesthetics Clinic',
    category: 'Social Media Posts',
    clientIndustry: 'Healthcare & Dermatology',
    description: 'Clean medical aesthetic grid overhaul, educational doctor bite-sized carousels, and client transformation reels building trusted authority.',
    highlightMetric: '+320% WhatsApp Inquiries',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tags: ['Content Calendar', 'Carousel Strategy', 'WhatsApp CTA'],
    isDemo: true,
  },
  {
    id: 'campaign-pulse-fitness',
    title: 'Pulse Iron Athletic Club',
    category: 'Reels & Videos',
    clientIndustry: 'Fitness & Wellness',
    description: 'High-octane gym transformation reels, trainer spotlight series, and seasonal member sign-up video campaigns crafted for Instagram & YouTube Shorts.',
    highlightMetric: '450K+ Engagement',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tags: ['Short-Form Video', 'Cinematic Edits', 'Community Building'],
    isDemo: true,
  },
  {
    id: 'campaign-novatech-brand',
    title: 'NovaCloud Enterprise Suite',
    category: 'Branding',
    clientIndustry: 'B2B Software & SaaS',
    description: 'Complete brand identity refresh including typography guidelines, executive LinkedIn social kits, custom iconography, and sales pitch decks.',
    highlightMetric: 'Full Brand Overhaul',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Brand Guidelines', 'LinkedIn Kits', 'Visual Identity'],
    isDemo: true,
  },
  {
    id: 'campaign-velox-ecommerce',
    title: 'Velox Apparel & Streetwear',
    category: 'Website Projects',
    clientIndustry: 'D2C Fashion & E-Commerce',
    description: 'Lightning-fast Next.js shopping storefront with mobile-first checkout, integrated Meta catalog sync, and WhatsApp purchase support.',
    highlightMetric: '<1s Load Speed',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js 14', 'Shopify Sync', 'Mobile-First CRO'],
    isDemo: true,
  },
];
