export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Retainers' | 'Google Business Profile' | 'Services';
}

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'General',
    question: 'Where is IDM Smart Tech located?',
    answer: 'Our agency office is located at First Floor, 23-98/A, near Madhura Nagar, beside Sri Sai Jyothsna Mess, Shamshabad, Hyderabad, Telangana — 501218. We serve businesses across Hyderabad, Telangana, and pan-India.',
  },
  {
    category: 'General',
    question: 'How do I start working with IDM Smart Tech?',
    answer: 'You can begin by clicking "Get Your Growth Strategy" or messaging us directly on WhatsApp at +91 85198 37818. We will review your existing digital presence, discuss your goals, and recommend a tailored growth plan.',
  },
  {
    category: 'Pricing & Retainers',
    question: 'What are the company-approved monthly growth packages?',
    answer: 'We offer four transparent monthly packages: Starter Growth (₹4,999/month), Growth (₹6,999/month), Ultimate Growth (₹9,999/month), and the Pro Plan (₹16,999/month for Growth & Leads Generation). Inclusions are customized to your business requirements upon consultation.',
  },
  {
    category: 'Pricing & Retainers',
    question: 'Are there any hidden setup fees or long-term lock-in contracts?',
    answer: 'No. Our monthly packages are transparent retainers billed monthly. You can scale your tier up or pause services based on your business seasonality with advance notice.',
  },
  {
    category: 'Google Business Profile',
    question: 'What are your individual Google Business Profile (GMB) service fees?',
    answer: 'Our individual GMB services are billed separately from monthly retainers: Profile Creation (₹4,000), Profile Reinstatement & Suspension Fix (₹2,999), Video Verification Assistance (₹2,999), and Phone Number & Address Update (₹2,999).',
  },
  {
    category: 'Google Business Profile',
    question: 'Can you guarantee that a suspended Google Business Profile will be reinstated?',
    answer: 'While no third party can legally guarantee Google Support internal review decisions, we conduct a rigorous merchant policy audit and submit compliant documentation that maximizes the likelihood of a successful appeal.',
  },
  {
    category: 'Services',
    question: 'Do you manage both organic social media and paid advertising?',
    answer: 'Yes. We provide complete end-to-end capabilities under one roof—combining creative Reels and organic Instagram management with targeted Meta Ads and Google Search PPC campaigns.',
  },
  {
    category: 'Services',
    question: 'Can inquiries from ads go directly to our sales team on WhatsApp?',
    answer: 'Yes! Click-to-WhatsApp campaign architecture is one of our core specialties. We configure ads so interested prospects open a direct chat with your team with a prefilled message.',
  },
  {
    category: 'Services',
    question: 'What technologies do you use for website and software development?',
    answer: 'We engineer websites using Next.js 14, React, TypeScript, and Tailwind CSS for rapid load times and high search visibility. For mobile applications, we utilize cross-platform Flutter and React Native toolchains.',
  },
];
