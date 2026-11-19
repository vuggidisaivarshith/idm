export interface IndustryDetail {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  commonChallenges: string[];
  relevantServices: string[];
  suggestedApproach: { phase: string; strategy: string }[];
  deliverablesFormat: string[];
}

export const INDUSTRIES_LIST: IndustryDetail[] = [
  {
    slug: 'restaurants-hospitality',
    title: 'Restaurants & Hospitality',
    tagline: 'Drive Local Footfall & Weekend Dining Demand',
    icon: '🍽️',
    metaTitle: 'Restaurant & Hospitality Marketing in Hyderabad | IDM Smart Tech',
    metaDescription: 'Strategic digital marketing for cafes, cloud kitchens, and restaurants in Hyderabad. Food reels production, local SEO, Google Maps visibility, and weekend Meta ads.',
    overview: 'In Hyderabad’s vibrant dining scene, visual appeal and local discoverability determine weekend footfall. We help cafes, restaurants, and cloud kitchens showcase their menu aesthetics and dominate local Google Maps search.',
    commonChallenges: [
      'Weekday dine-in lulls and reliance on high-commission food aggregators.',
      'Lack of consistent high-quality food photography and Reels production.',
      'Outdated Google Business Profiles with inaccurate hours or unmanaged reviews.',
    ],
    relevantServices: [
      'Short-form vertical food Reels capturing ambiance and signature dishes.',
      'Google Maps 3-Pack optimization for "restaurants near me" searches.',
      'Targeted weekend Meta Ads promoting dining reservations and catering.',
      'Aesthetic Instagram grid curation celebrating customer moments.',
    ],
    suggestedApproach: [
      { phase: 'Local Search Presence', strategy: 'Verify and optimize Google Business Profile with updated menus, geotagged photos, and review flows.' },
      { phase: 'Viral Food Reels', strategy: 'Produce weekly short-form video hooks focusing on sizzling preparations, interior vibes, and chef specials.' },
      { phase: 'Geo-Targeted Weekend Ads', strategy: 'Launch Meta Ads within a 5km radius on Thursday–Saturday to capture weekend dining decisions.' },
    ],
    deliverablesFormat: ['Food Reel Hooks', 'Instagram Grid Curations', 'Google Maps Geo-Pins', 'Local Radius Ad Funnels'],
  },
  {
    slug: 'healthcare-clinics',
    title: 'Healthcare & Clinics',
    tagline: 'Build Patient Trust & High-Intent Appointment Booking',
    icon: '🩺',
    metaTitle: 'Healthcare & Clinic Digital Marketing Hyderabad | IDM Smart Tech',
    metaDescription: 'Compliant digital marketing for dental clinics, dermatologists, and healthcare centers in Hyderabad. Doctor authority content, local search, and appointment funnels.',
    overview: 'Healthcare marketing demands absolute trust, clear patient education, and effortless booking. We help specialized clinics, dental practices, and doctors establish local authority without compromising medical integrity.',
    commonChallenges: [
      'Patients struggle to understand complex treatment options through generic ads.',
      'Low local visibility when patients search for emergency treatments nearby.',
      'Missed inquiries due to delayed reception response times.',
    ],
    relevantServices: [
      'Educational carousel posts and short-form doctor Q&A videos.',
      'Google Ads Search PPC targeting high-intent medical treatment keywords.',
      'Google Business Profile optimization ensuring clean verification and phone display.',
      'Automated 24/7 WhatsApp appointment scheduling assistance.',
    ],
    suggestedApproach: [
      { phase: 'Doctor Authority Content', strategy: 'Create bite-sized video answers addressing common patient questions, myths, and treatment procedures.' },
      { phase: 'Intent-Driven Search Ads', strategy: 'Target exact-match search terms on Google Ads (e.g., "dental clinic Shamshabad", "dermatologist near me").' },
      { phase: 'Automated Booking Flow', strategy: 'Connect website CTAs directly to WhatsApp so reception staff can confirm appointments immediately.' },
    ],
    deliverablesFormat: ['Educational Carousels', 'Doctor Q&A Reels', 'Google Search PPC Ads', 'WhatsApp Booking Flows'],
  },
  {
    slug: 'salons-wellness',
    title: 'Salons, Spas & Aesthetic Clinics',
    tagline: 'Attract High-Value Appointments & Repeat Bookings',
    icon: '✂️',
    metaTitle: 'Salon, Spa & Aesthetic Clinic Digital Marketing Hyderabad | IDM Smart Tech',
    metaDescription: 'Digital marketing for premium salons, luxury spas, and cosmetology clinics in Hyderabad. Transformation reels, Google Maps 3-Pack, influencer tie-ins, and local booking ads.',
    overview: 'In beauty, grooming, and aesthetics, visual proof of transformations and effortless appointment booking drive revenue. We help luxury salons, spas, and wellness clinics showcase before/after styling, build high-converting local Instagram presence, and dominate Google Maps search.',
    commonChallenges: [
      'Mid-week appointment slumps and reliance on heavy third-party aggregator discounts.',
      'Inconsistent social media showcasing before-and-after client hair, skin, and wellness transformations.',
      'Missed booking calls and slow response times on Instagram DM inquiries.',
    ],
    relevantServices: [
      'Short-form transformation Reels (hair styling, nail art, skin aesthetics, bridal glow).',
      'Local Google Maps 3-Pack SEO for searches like "best salon near me" and "luxury spa Hyderabad".',
      'Targeted Meta Ad campaigns promoting weekday pamper packages and bridal seasonal bookings.',
      'Automated WhatsApp appointment booking integration with one-tap confirmations.',
    ],
    suggestedApproach: [
      { phase: 'Visual Transformation Grid & Reels', strategy: 'Produce weekly cinematic Reels capturing hair transformations, relaxing spa therapy ambiance, and expert client consultations.' },
      { phase: 'Local Radius & Festive Booking Ads', strategy: 'Deploy hyper-local Meta Ads within 5–8km radius with special mid-week pamper packages and seasonal bridal offers.' },
      { phase: 'Instant WhatsApp Booking Flow', strategy: 'Integrate direct WhatsApp chat buttons on Instagram and Google Maps allowing clients to book slots in 30 seconds.' },
    ],
    deliverablesFormat: ['Transformation Video Reels', 'Bridal & Pamper Campaign Ads', 'Google Maps 3-Pack Optimization', 'One-Tap WhatsApp Booking Funnels'],
  },
  {
    slug: 'education',
    title: 'Education & Training Institutes',
    tagline: 'Attract Student Admissions & Course Enrollments',
    icon: '🎓',
    metaTitle: 'Education & Institute Marketing Hyderabad | IDM Smart Tech',
    metaDescription: 'Admission growth campaigns for colleges, coaching academies, and skill institutes in Hyderabad. Targeted enrollment funnels and student testimonial reels.',
    overview: 'Educational institutions and vocational academies succeed by demonstrating student outcomes and curriculum excellence. We build seasonal enrollment campaigns that drive parent and student inquiries.',
    commonChallenges: [
      'Highly seasonal admission cycles with intense competition during enrollment windows.',
      'Difficulty conveying placement records and faculty quality through static posts.',
      'Unorganized lead follow-up leading to dropped enrollments.',
    ],
    relevantServices: [
      'Student outcome stories, campus walkthroughs, and alumni spotlight reels.',
      'Targeted admission campaign funnels on Instagram, Meta, and Google Search.',
      'Local SEO ensuring the institute ranks for top career training searches in Hyderabad.',
      'Automated brochure download and counseling booking workflows.',
    ],
    suggestedApproach: [
      { phase: 'Alumni & Curriculum Spotlight', strategy: 'Showcase real training environments, student projects, and placement achievements.' },
      { phase: 'Pre-Admission Surge Campaigns', strategy: 'Run targeted lead acquisition ads 60–90 days prior to major batch commencement.' },
      { phase: 'WhatsApp Counseling Flow', strategy: 'Deliver course syllabus PDF automatically over WhatsApp and route candidates to counselors.' },
    ],
    deliverablesFormat: ['Campus Spotlight Videos', 'Admission Lead Ads', 'Local Map Optimization', 'Automated Syllabus Dispatch'],
  },
  {
    slug: 'retail-local',
    title: 'Retail & Local Businesses',
    tagline: 'Convert Local Searchers into In-Store Shoppers',
    icon: '🛍️',
    metaTitle: 'Retail & Local Business Marketing Hyderabad | IDM Smart Tech',
    metaDescription: 'Drive store footfall for apparel boutiques, jewelers, electronics, and local retailers in Hyderabad. Local SEO, festive campaigns, and Instagram catalog showcasing.',
    overview: 'Local retail businesses need to defend their market against e-commerce giants by highlighting immediate availability, personalized service, and neighborhood presence.',
    commonChallenges: [
      'Losing customers to national online marketplaces and fast-delivery apps.',
      'Inconsistent social posting during busy festival and wedding seasons.',
      'Lack of local Google Maps dominance when residents search nearby.',
    ],
    relevantServices: [
      'Google Business Profile optimization ensuring phone, location, and photos are verified.',
      'New collection showcase carousels and festival discount announcement reels.',
      'Hyper-local radius advertising (3–7km) on Meta to announce sales and store events.',
      'WhatsApp product catalog integration for direct messaging purchases.',
    ],
    suggestedApproach: [
      { phase: 'Google Maps Presence', strategy: 'Place the store at the top of local 3-Pack searches with geo-tagged inventory imagery.' },
      { phase: 'Weekly Collection Showcases', strategy: 'Highlight trending products, customer unboxings, and new arrivals on Instagram.' },
      { phase: 'Festive Flash Campaigns', strategy: 'Run high-impact local radius ads during Diwali, Eid, Sankranti, and wedding seasons.' },
    ],
    deliverablesFormat: ['Catalog Showcase Carousels', 'Festive Offer Reels', 'Local Google Maps SEO', 'WhatsApp Product Links'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    tagline: 'Position Expertise & Capture High-Value B2B Inquiries',
    icon: '💼',
    metaTitle: 'Professional Services Marketing in Hyderabad | IDM Smart Tech',
    metaDescription: 'Lead generation and digital authority for legal firms, chartered accountants, architects, and business consultancies in Hyderabad.',
    overview: 'Professional service providers earn business through reputation, domain expertise, and clarity of communication. We construct digital assets that substantiate your advisory authority.',
    commonChallenges: [
      'Reliance solely on word-of-mouth with no predictable inbound pipeline.',
      'Websites that read like generic corporate resumes rather than conversion funnels.',
      'Difficulty explaining specialized technical services to prospective clients.',
    ],
    relevantServices: [
      'High-speed Next.js corporate websites with clear service breakdowns.',
      'In-depth thought leadership content, case breakdowns, and LinkedIn creative kits.',
      'Targeted Google Search PPC ads capturing corporate advisory searches.',
      'Direct consultation calendar and WhatsApp inquiry flows.',
    ],
    suggestedApproach: [
      { phase: 'Corporate Digital Identity', strategy: 'Upgrade website to a clean, authoritative modern platform with sub-second page speed.' },
      { phase: 'Targeted Search PPC', strategy: 'Capture exact corporate search queries (e.g., "tax consultant Hyderabad", "commercial architect").' },
      { phase: 'Consultation Pipeline', strategy: 'Direct prospective corporate clients straight into structured introductory strategy meetings.' },
    ],
    deliverablesFormat: ['Executive Web Platforms', 'Google Search PPC Campaigns', 'Thought Leadership Graphics', 'Direct Consultation Scheduling'],
  },
];
