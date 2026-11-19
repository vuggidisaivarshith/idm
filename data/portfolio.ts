export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Social Media Campaigns' | 'Instagram Creatives' | 'Reels & Videos' | 'Branding' | 'Google & Meta Ads' | 'Websites';
  format: string;
  description: string;
  tags: string[];
  image: string;
  isDemoFormat: boolean;
}

export const PORTFOLIO_CATEGORIES = [
  'All Work',
  'Social Media Campaigns',
  'Instagram Creatives',
  'Reels & Videos',
  'Branding',
  'Google & Meta Ads',
  'Websites',
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-social-campaigns',
    title: 'Multi-Channel Brand Growth Campaign',
    category: 'Social Media Campaigns',
    format: 'Integrated Social Media Execution',
    description: 'Coordinated content calendar, storytelling captions, audience engagement protocols, and cross-platform distribution designed to build brand authority.',
    tags: ['Content Calendar', 'Community Engagement', 'Brand Storytelling'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
  {
    id: 'portfolio-instagram-creatives',
    title: 'Aesthetic Grid & Carousel Architecture',
    category: 'Instagram Creatives',
    format: 'High-Resolution Carousel & Feed Posts',
    description: 'Visual typography hierarchy, branded color palettes, product feature slides, and informational carousels engineered for high save and share rates.',
    tags: ['Aesthetic Grid', 'Carousel Design', 'Visual Hierarchy'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
  {
    id: 'portfolio-reels-videos',
    title: 'Viral Hook Short-Form Video Production',
    category: 'Reels & Videos',
    format: 'Vertical Video (9:16) for Reels & Shorts',
    description: 'Retention-optimized video editing, dynamic kinetic typography, sound design, and trending audio alignment crafted to capture attention in the first 3 seconds.',
    tags: ['3s Hook Strategy', 'Kinetic Typography', 'Trending Audio'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
  {
    id: 'portfolio-branding',
    title: 'Comprehensive Brand Identity & Guidelines',
    category: 'Branding',
    format: 'Full Visual Identity & Social Kit',
    description: 'Distinctive logo systems, bespoke color schemes, curated typography pairing, and digital social media design guidelines for emerging businesses.',
    tags: ['Visual Identity', 'Color Palette', 'Brand Guidelines'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
  {
    id: 'portfolio-ads',
    title: 'High-Intent Meta & Google Ad Creative Sets',
    category: 'Google & Meta Ads',
    format: 'Paid Acquisition Creative & Funnel Setup',
    description: 'Direct-response visual ad banners, short video variations, and conversion-focused copy architectures structured to reduce customer acquisition costs.',
    tags: ['Meta Ads', 'Google Search PPC', 'Conversion Funnels'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
  {
    id: 'portfolio-websites',
    title: 'Modern High-Speed Digital Agency Websites',
    category: 'Websites',
    format: 'Next.js 14 Production Web Platform',
    description: 'Sub-second page speeds, interactive responsive UI, smooth scroll animations, and integrated direct WhatsApp lead capture pipelines.',
    tags: ['Next.js 14', 'Mobile-First', 'Lead Generation'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    isDemoFormat: true,
  },
];
