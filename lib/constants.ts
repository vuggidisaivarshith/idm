export const COMPANY_INFO = {
  name: 'IDM Smart Tech',
  tagline: 'AI-Powered Digital Marketing & Technology Agency',
  phone: '+91 85198 37818',
  phoneClean: '918519837818',
  email: 'info@idmsmarttech.com',
  address: 'First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess, Shamshabad, Hyderabad, Telangana — 501218',
  city: 'Shamshabad, Hyderabad',
  state: 'Telangana',
  pincode: '501218',
  country: 'India',
  instagram: 'https://www.instagram.com/idmsmarttech/',
  website: 'https://www.idmsmarttech.com/',
  websiteAlt: 'https://www.idmsmarttech.in/',
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
    subtitle: 'Essential Local Visibility',
    description: 'Designed for local shops, clinics, and service providers starting their online visibility in Hyderabad.',
    inclusions: [
      'Google Business Profile weekly optimization',
      '4 Google Maps geo-tagged posts & updates',
      '8 branded social media graphics per month',
      'Basic On-Page Local SEO audit & keyword review',
      'Review generation strategy & reply templates',
      'Monthly performance & local rank report',
      'Direct WhatsApp support',
    ],
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹6,999',
    priceNum: 6999,
    period: '/month',
    subtitle: 'Accelerated Local Presence',
    description: 'Enhanced local SEO coverage and structured content reach for growing businesses expanding their local market share.',
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
    subtitle: 'Comprehensive Search & Engagement',
    description: 'Aggressive multi-channel optimization designed for brands targeting dominant local visibility across search and social.',
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
    description: 'Full-spectrum growth marketing engineered for maximum lead acquisition, conversion funnels, and performance marketing.',
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
    description: 'Verified setup of your Google Business Profile with geo-targeted primary categories, complete service catalog, and accurate map positioning.',
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
