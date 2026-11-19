export const COMPANY_INFO = {
  name: 'IDM Smart Tech',
  legalName: 'IDM Smart Tech',
  positioning: 'Creative Marketing, Digital Growth and Intelligent Technology Agency',
  brandStatement: 'We Build Brands. Create Demand. Drive Growth.',
  supportingMessage:
    'From creative social media campaigns and performance marketing to search visibility, website development and intelligent automation, IDM Smart Tech helps businesses build a stronger digital presence.',
  phone: '+91 85198 37818',
  phoneClean: '918519837818',
  email: 'info@idmsmarttech.com',
  address: 'First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess, Shamshabad, Hyderabad, Telangana — 501218',
  city: 'Shamshabad, Hyderabad',
  state: 'Telangana',
  pincode: '501218',
  country: 'India',
  instagram: 'https://www.instagram.com/idmsmarttech/',
  website: 'https://idm-inky.vercel.app',
  websiteAlt: 'https://www.idmsmarttech.com/',
  differentiators: [
    {
      title: 'Brand Building & Identity',
      desc: 'Create a memorable, cohesive brand identity with professional creative direction, consistent brand messaging, and aesthetic multi-platform assets.',
      icon: '🎨',
    },
    {
      title: 'Audience Reach & Visibility',
      desc: 'Expand your reach to active prospective customers through targeted Meta & Google Ad campaigns and strategic local search engine presence.',
      icon: '🎯',
    },
    {
      title: 'Lead Generation & Conversions',
      desc: 'Turn digital attention into genuine customer conversations with conversion-focused funnels, persuasive copywriting, and direct WhatsApp response channels.',
      icon: '⚡',
    },
    {
      title: 'Digital Infrastructure & Development',
      desc: 'Strengthen your business foundation with high-speed Next.js web applications, mobile platforms, and customized management tools.',
      icon: '💻',
    },
    {
      title: 'AI Automation & Business Efficiency',
      desc: 'Streamline day-to-day operations and accelerate customer response times with automated workflows and intelligent business solutions.',
      icon: '🤖',
    },
  ],
};

export interface MonthlyPackage {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  period: string;
  subtitle: string;
  description: string;
  inclusions: string[] | null;
  inclusionsNotice?: string;
  highlight?: boolean;
}

export const MONTHLY_PACKAGES: MonthlyPackage[] = [
  {
    id: 'starter-growth',
    name: 'Starter Growth',
    price: '₹4,999',
    priceNum: 4999,
    period: '/month',
    subtitle: 'Social & Local Visibility',
    description: 'Designed for local brands and emerging businesses seeking consistent social media presence and local search visibility.',
    inclusions: null,
    inclusionsNotice: 'Contact us for package inclusions.',
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹6,999',
    priceNum: 6999,
    period: '/month',
    subtitle: 'Brand Acceleration',
    description: 'Expanded creative production, regular social media posting, and audience engagement tailored for growing businesses.',
    inclusions: null,
    inclusionsNotice: 'Contact us for package inclusions.',
    highlight: false,
  },
  {
    id: 'ultimate-growth',
    name: 'Ultimate Growth',
    price: '₹9,999',
    priceNum: 9999,
    period: '/month',
    subtitle: 'Multi-Channel Growth',
    description: 'Comprehensive multi-platform social media strategy, video content distribution, and enhanced digital presence.',
    inclusions: null,
    inclusionsNotice: 'Contact us for package inclusions.',
    highlight: false,
  },
  {
    id: 'pro-plan',
    name: 'Pro Plan',
    price: '₹16,999',
    priceNum: 16999,
    period: '/month',
    subtitle: 'Growth & Leads Generation',
    description: 'Full-service digital marketing, lead acquisition campaigns, and advanced digital growth solutions.',
    inclusions: null,
    inclusionsNotice: 'Contact us for package inclusions.',
    highlight: true,
  },
];

export interface GMBService {
  id: string;
  title: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
}

export const GMB_SERVICES: GMBService[] = [
  {
    id: 'gmb-creation',
    title: 'Google Business Profile Creation',
    price: '₹4,000',
    frequency: 'One-Time Setup',
    description: 'Verified setup of your Google Business Profile with geo-targeted categories, complete services listing, and precise map positioning.',
    features: [
      'Official verification guidance & setup',
      'High-converting business description & service tags',
      'Complete product & services catalog listing',
      'High-resolution logo & exterior/interior image uploads',
      'Precise Google Maps geolocation pin placement',
    ],
    highlight: false,
    ctaText: 'Create My GMB Profile',
  },
  {
    id: 'gmb-reinstatement',
    title: 'Profile Reinstatement & Suspension Fix',
    price: '₹2,999',
    frequency: 'Per Profile Issue',
    description: 'Professional diagnosis and appeal preparation for suspended, disabled, or policy-flagged Google Business Profiles.',
    features: [
      'Detailed root-cause suspension diagnosis',
      'Google Guidelines & merchant compliance audit',
      'Formal appeal documentation preparation',
      'Direct Google Support case submission & follow-up',
      'Transparent status updates throughout review',
    ],
    highlight: true,
    ctaText: 'Reinstate My Suspended GMB',
  },
  {
    id: 'gmb-video-verification',
    title: 'Video Verification Assistance',
    price: '₹2,999',
    frequency: 'One-Time Assistance',
    description: 'Preparation and structured guidance for Google’s mandatory live video verification process to ensure clean compliance.',
    features: [
      'Pre-verification readiness check & required proof list',
      'Business signage, street address & equipment guidance',
      'Step-by-step video walkthrough procedure',
      'Document proof alignment with Google policy',
      'Assistance to prevent repeated verification rejections',
    ],
    highlight: false,
    ctaText: 'Video Verification Assistance',
  },
  {
    id: 'gmb-phone-update',
    title: 'Phone Number & Address Update',
    price: '₹2,999',
    frequency: 'Per Update Fix',
    description: 'Resolution of algorithmic "Under Review" pending status on business phone number or primary address updates.',
    features: [
      'Resolution of "Under Review" pending number loops',
      'NAP (Name, Address, Phone) consistency check',
      'Official documentation proof submission to Google',
      'Accurate contact display on Search & Maps',
      'Focused turnaround support',
    ],
    highlight: false,
    ctaText: 'Fix My Phone Number',
  },
];

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
}
