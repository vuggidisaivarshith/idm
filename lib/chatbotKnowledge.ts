import { COMPANY_INFO, MONTHLY_PACKAGES, GMB_SERVICES } from './constants';

export const CHATBOT_IDENTITY = {
  name: 'IDM Smart Assistant',
  role: 'Official AI Business Consultant',
  positioning: 'Your 24/7 Digital Growth Consultant',
  greeting:
    "Hello! Welcome to IDM Smart Tech. I'm your digital growth assistant. I can help you explore our services, understand our packages and identify the right digital solutions for your business.",
  whatsappNumber: COMPANY_INFO.phoneClean,
  officialEmail: COMPANY_INFO.email,
  officeLocation: COMPANY_INFO.city,
  officeAddress: COMPANY_INFO.address,
};

export const QUICK_ACTIONS = [
  { id: 'grow', label: '🚀 Grow My Business', prompt: 'I want to grow my business. What do you recommend?' },
  { id: 'social', label: '📱 Social Media Marketing', prompt: 'Tell me about your social media and reels creation services.' },
  { id: 'web', label: '💻 Website Development', prompt: 'What website and software development services do you offer?' },
  { id: 'ads', label: '🎯 Google & Meta Ads', prompt: 'How do you run Google and Meta advertising campaigns?' },
  { id: 'gmb', label: '📍 Google Business Profile', prompt: 'What are your Google Business Profile (GMB) services and prices?' },
  { id: 'automation', label: '🤖 AI & Automation', prompt: 'What AI and WhatsApp automation solutions do you build?' },
  { id: 'pricing', label: '💰 View Pricing', prompt: 'What are your monthly package prices?' },
  { id: 'human', label: '👤 Talk to a Human', prompt: 'I would like to speak directly with an IDM team member.' },
];

export const SYSTEM_PROMPT = `You are IDM Smart Assistant, the official AI-powered business consultant for IDM Smart Tech.
You are not a basic FAQ bot. You are an intelligent, conversational, helpful, and professional assistant designed to understand users, answer questions, explain services, solve business problems, and guide potential customers toward suitable solutions.

1. IDENTITY & CREDENTIALS
Company: IDM Smart Tech
Positioning: Creative Marketing, Business Growth & Intelligent Technology Agency
Location: ${COMPANY_INFO.address}
Contact Phone / WhatsApp: ${COMPANY_INFO.phone}
Official Email: ${COMPANY_INFO.email}
Never claim to be a human representative. When asked who you are, respond:
"I'm IDM Smart Assistant, the AI business consultant for IDM Smart Tech."

2. OFFICIAL PRICING & POLICIES (SOURCE OF TRUTH)
Monthly Growth Retainers:
- Starter Growth: ₹4,999/month
- Growth: ₹6,999/month
- Ultimate Growth: ₹9,999/month
- Pro Plan: ₹16,999/month

Google Business Profile (GMB) Services:
- Profile Creation: ₹4,000
- Reinstatement Assistance: ₹2,999 (Final decision controlled by Google)
- Video Verification Assistance: ₹2,999
- Phone Number & Address Update Assistance: ₹2,999

Ad Spend Policy: Meta and Google ad spend is paid directly to advertising accounts and is separate from agency management retainers.
Deliverables: The confirmed inclusions for packages are determined based on client business requirements and confirmed by the IDM team. Never invent unapproved inclusions, guarantees, or discounts.

3. CORE SERVICES
- Creative & Digital Marketing: Social Media Management, High-Hook 9:16 Reels Production, Meta Ads (Instagram/Facebook), Google Ads (Search/PPC), Local SEO & Google Maps Visibility.
- Web & Software Development: High-performance Next.js 14 websites, Mobile Applications (Android & iOS), Custom CRM & ERP, E-commerce solutions.
- AI & Business Automation: AI Chatbots, WhatsApp Business Automation, Automated Lead Routing, Custom Business Workflows.

4. 5-STAGE CLIENT JOURNEY
01. Discover — In-depth brand, audience & competitor audit.
02. Strategize — Funnel architecture & content pillar roadmap.
03. Create — 9:16 vertical video & high-conversion ad creatives.
04. Launch & Optimize — Live deployment & continuous performance testing.
05. Report & Improve — Transparent telemetry, analytics & scaling.

5. ACCURACY & INTEGRITY RULES
- Never promise guaranteed rankings, fixed follower counts, viral results, or sales guarantees.
- Always qualify that results depend on product offer, budget, market competition, and audience resonance.
- For custom quotations, technical scoping, or formal proposals, direct the visitor to connect with the team via WhatsApp (+91 85198 37818).

6. MULTILINGUAL INTELLIGENCE
Support English, Telugu (తెలుగు), and Hindi (हिंदी). Handle mixed Telugu-English and Hindi-English (Hinglish) naturally. Reply in the visitor's preferred language.`;

export interface ChatbotResponse {
  reply: string;
  suggestedActions?: { label: string; prompt: string }[];
  whatsappHandoff?: {
    label: string;
    prefilledText: string;
  };
}

/**
 * Intelligent Consultation & Fallback Engine
 * Handles natural language questions, multilingual inputs, qualification flow,
 * pricing, services, and objection handling with zero hallucination.
 */
export function processConsultantMessage(
  userMessage: string,
  history: { sender: 'bot' | 'user'; text: string }[]
): ChatbotResponse {
  const query = userMessage.toLowerCase().trim();

  // 1. TELUGU QUERIES
  if (
    query.includes('నమస్కారం') ||
    query.includes('మీ దగ్గర') ||
    query.includes('వెబ్సైట్') ||
    query.includes('ఎంత') ||
    query.includes('చేస్తారా') ||
    query.includes('ప్యాకేజీలు') ||
    query.includes('ధర') ||
    query.includes('ఆఫీస్ ఎక్కడ')
  ) {
    if (query.includes('ప్యాకేజీ') || query.includes('ధర') || query.includes('ఎంత')) {
      return {
        reply: `నమస్కారం! IDM Smart Tech 4 పారదర్శక నెలవారీ గ్రోత్ ప్యాకేజీలను అందిస్తుంది:\n\n• స్టార్టర్ గ్రోత్: ₹4,999/నెలకు\n• గ్రోత్: ₹6,999/నెలకు\n• అల్టిమేట్ గ్రోత్: ₹9,999/నెలకు\n• ప్రో ప్లాన్: ₹16,999/నెలకు\n\nఖచ్చితమైన deliverables మరియు మీ వ్యాపార అవసరాల గురించి మా సీనియర్ టీమ్‌తో మాట్లాడవచ్చు.`,
        suggestedActions: [
          { label: '💬 WhatsApp లో మాట్లాడండి', prompt: 'I want to speak in Telugu on WhatsApp.' },
          { label: '🚀 సేవల వివరాలు', prompt: 'What services does IDM offer?' },
        ],
        whatsappHandoff: {
          label: '💬 WhatsApp లో కనెక్ట్ అవ్వండి',
          prefilledText: 'నమస్కారం IDM Smart Tech, మీ డిజిటల్ మార్కెటింగ్ మరియు గ్రోత్ సర్వీసెస్ గురించి తెలుసుకోవాలనుకుంటున్నాను.',
        },
      };
    }

    return {
      reply: `నమస్కారం! అవును, IDM Smart Tech సోషల్ మీడియా మార్కెటింగ్, రీల్స్ క్రియేషన్, గూగుల్ & మెటా యాడ్స్, వెబ్‌సైట్ డెవలప్‌మెంట్ మరియు వాట్సాప్ ఆటోమేషన్ సేవలను అందిస్తుంది.\n\nమీ వ్యాపార రకం ఏమిటి మరియు మీ ప్రధాన లక్ష్యం ఏమిటి?`,
      suggestedActions: [
        { label: '💰 ప్యాకేజీల ధరలు', prompt: 'What are your package prices?' },
        { label: '💬 డైరెక్ట్ WhatsApp', prompt: 'Talk to team on WhatsApp' },
      ],
      whatsappHandoff: {
        label: '💬 టీమ్‌తో మాట్లాడండి',
        prefilledText: 'నమస్కారం IDM Smart Tech, నా వ్యాపార వృద్ధి కోసం మీ సేవలు కావాలి.',
      },
    };
  }

  // 2. HINDI QUERIES
  if (
    query.includes('नमस्ते') ||
    query.includes('क्या आप') ||
    query.includes('कीमत') ||
    query.includes('कितने') ||
    query.includes('चलाते हैं') ||
    query.includes('वेबसाइट') ||
    query.includes('पैकेज')
  ) {
    if (query.includes('कीमत') || query.includes('पैकेज') || query.includes('कितने')) {
      return {
        reply: `नमस्ते! IDM Smart Tech 4 पारदर्शी मासिक पैकेज प्रदान करता है:\n\n• Starter Growth: ₹4,999/माह\n• Growth: ₹6,999/माह\n• Ultimate Growth: ₹9,999/माह\n• Pro Plan: ₹16,999/माह\n\nGoogle और Meta विज्ञापन खर्च सीधे विज्ञापन खातों में भुगतान किया जाता है और एजेंसी प्रबंधन शुल्क से अलग होता है।`,
        suggestedActions: [
          { label: '💬 WhatsApp पर बात करें', prompt: 'Talk to team on WhatsApp' },
          { label: '🚀 हमारी सेवाएँ', prompt: 'What services does IDM offer?' },
        ],
        whatsappHandoff: {
          label: '💬 WhatsApp पर बात करें',
          prefilledText: 'नमस्ते IDM Smart Tech, मुझे आपके मासिक पैकेजेस और सेवाओं की जानकारी चाहिए।',
        },
      };
    }

    return {
      reply: `नमस्ते! जी हाँ, IDM Smart Tech सोशल मीडिया मार्केटिंग, रील्स प्रोडक्शन, Meta & Google Ads, आधुनिक वेबसाइट डेवलपमेंट और AI ऑटोमेशन सेवाएँ प्रदान करता है।\n\nआपका व्यवसाय किस क्षेत्र में है और आपका मुख्य लक्ष्य क्या है?`,
      suggestedActions: [
        { label: '💰 पैकेज की कीमतें', prompt: 'What are your package prices?' },
        { label: '💬 WhatsApp संपर्क', prompt: 'Talk to team on WhatsApp' },
      ],
    };
  }

  // 3. HUMAN HANDOFF & DIRECT CONTACT
  if (
    query.includes('human') ||
    query.includes('person') ||
    query.includes('representative') ||
    query.includes('talk to someone') ||
    query.includes('speak to') ||
    query.includes('call me') ||
    query.includes('phone number') ||
    query.includes('contact')
  ) {
    return {
      reply: `You can connect directly with our senior growth strategists:\n\n📱 **Direct Phone / WhatsApp:** ${COMPANY_INFO.phone}\n✉️ **Official Email:** ${COMPANY_INFO.email}\n📍 **Office Address:** ${COMPANY_INFO.address}\n\nWould you like me to prepare a pre-filled WhatsApp message with your project details?`,
      whatsappHandoff: {
        label: '💬 Chat With IDM Team on WhatsApp',
        prefilledText: `Hello IDM Smart Tech, I would like to speak directly with a growth strategist regarding digital marketing and technology solutions.`,
      },
      suggestedActions: [
        { label: '💰 View Retainers', prompt: 'What are your monthly package prices?' },
        { label: '📍 Visit Office', prompt: 'Where is your office located?' },
      ],
    };
  }

  // 4. PRICING & PACKAGES
  if (
    query.includes('price') ||
    query.includes('pricing') ||
    query.includes('package') ||
    query.includes('cost') ||
    query.includes('retainer') ||
    query.includes('fee') ||
    query.includes('how much') ||
    query.includes('4999') ||
    query.includes('6999') ||
    query.includes('9999') ||
    query.includes('16999')
  ) {
    if (query.includes('starter') || query.includes('4,999') || query.includes('4999') || query.includes('cheapest')) {
      return {
        reply: `Our entry-level monthly retainer is the **Starter Growth Plan at ₹4,999/month**.\n\n• Designed for local businesses establishing digital and Google Maps visibility\n• Focused on foundational social media presence and search setup\n• Direct strategy reviews with no lock-in contracts\n\n*Note: Advertising platform spend (Meta/Google) is paid directly to advertising platforms and is separate from agency management retainers.*`,
        suggestedActions: [
          { label: '💬 Discuss ₹4,999 Plan on WhatsApp', prompt: 'I want to discuss the ₹4,999 Starter Growth plan.' },
          { label: 'View All 4 Packages', prompt: 'Show me all package prices' },
        ],
        whatsappHandoff: {
          label: '💬 Inquire About Starter Plan',
          prefilledText: 'Hello IDM Smart Tech, I would like to inquire about your ₹4,999 Starter Growth monthly retainer.',
        },
      };
    }

    if (query.includes('pro') || query.includes('16,999') || query.includes('16999') || query.includes('highest')) {
      return {
        reply: `Our most comprehensive growth retainer is the **Pro Plan at ₹16,999/month**.\n\n• Full-funnel digital acceleration across high-hook Reels, Meta Ads, and Google Ads\n• Custom landing pages, lead capture automation, and priority same-day creative revisions\n• Bi-weekly live performance reviews and ROI telemetry\n\n*Confirmed deliverable volume is customized based on your business objectives.*`,
        suggestedActions: [
          { label: '💬 Inquire About Pro Plan on WhatsApp', prompt: 'I want to inquire about the ₹16,999 Pro Plan.' },
          { label: 'Compare All Packages', prompt: 'Show me all package prices' },
        ],
        whatsappHandoff: {
          label: '💬 Inquire About Pro Plan',
          prefilledText: 'Hello IDM Smart Tech, I would like to inquire about your ₹16,999 Pro Plan monthly retainer.',
        },
      };
    }

    return {
      reply: `Here are IDM Smart Tech's official, company-approved monthly growth retainers:\n\n| Package | Monthly Retainer | Focus |\n| :--- | :--- | :--- |\n| **Starter Growth** | **₹4,999/mo** | Foundational social presence & local visibility |\n| **Growth** | **₹6,999/mo** | Brand acceleration & consistent video content |\n| **Ultimate Growth** | **₹9,999/mo** | Multi-channel engagement & targeted acquisition |\n| **Pro Plan** | **₹16,999/mo** | Full-funnel lead generation & digital acceleration |\n\n**Key Billing Transparency:**\n1. Meta & Google advertising spend is paid directly to ad platforms and is separate from agency management retainers.\n2. Inclusions are tailored directly to your commercial targets.\n3. Flexible month-to-month contracts with zero penalty lock-ins.`,
      suggestedActions: [
        { label: '💬 Get Custom Retainer Recommendation', prompt: 'Which package is best for my business?' },
        { label: '📍 Google Business Profile Pricing', prompt: 'What are your GMB service prices?' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Packages on WhatsApp',
        prefilledText: 'Hello IDM Smart Tech, I would like to discuss which monthly package fits my business goals.',
      },
    };
  }

  // 5. GOOGLE BUSINESS PROFILE (GMB) SERVICES & PRICING
  if (
    query.includes('gmb') ||
    query.includes('google business') ||
    query.includes('google maps') ||
    query.includes('reinstatement') ||
    query.includes('suspension') ||
    query.includes('verification') ||
    query.includes('video verification') ||
    query.includes('address update')
  ) {
    return {
      reply: `Here is our official pricing for individual Google Business Profile (GMB) solutions in Hyderabad:\n\n• **Profile Creation & Optimization:** ₹4,000 (one-time)\n• **Reinstatement Assistance:** ₹2,999 (for suspended or disabled profiles)\n• **Video Verification Assistance:** ₹2,999 (guided preparation & submission)\n• **Phone Number & Address Update:** ₹2,999 (assisting eligible profile corrections)\n\n*Important:* Reinstatement and verification decisions are strictly subject to Google's official policies and review processes. We do not invent guarantees or create fake reviews.`,
      suggestedActions: [
        { label: '💬 GMB Assistance on WhatsApp', prompt: 'I need help with my Google Business Profile.' },
        { label: 'Local SEO Strategy', prompt: 'How do you optimize Google Maps ranking?' },
      ],
      whatsappHandoff: {
        label: '💬 Inquire About GMB Services',
        prefilledText: 'Hello IDM Smart Tech, I need professional assistance with my Google Business Profile.',
      },
    };
  }

  // 6. ADVERTISING (META & GOOGLE ADS) & SPEND SCOPE
  if (query.includes('ad') || query.includes('meta') || query.includes('google ad') || query.includes('facebook') || query.includes('instagram ad') || query.includes('ppc')) {
    return {
      reply: `Our paid advertising management focuses on targeted lead generation and customer acquisition:\n\n1. **Meta Ads (Instagram & Facebook):** 9:16 vertical video ad hooks, carousel offers, lookalike audience targeting, and instant lead forms.\n2. **Google Ads (Search & Maps PPC):** High-intent keyword search campaigns and location-based local campaigns.\n3. **Landing Pages & Conversion Optimization:** Fast-loading Next.js landing pages matching ad creative styles.\n\n**Billing Policy:** Advertising platform spend (paid to Meta/Google) is billed directly to your business card/account and is completely separate from our agency retainer.`,
      suggestedActions: [
        { label: '💰 Retainer Pricing', prompt: 'What are your monthly package prices?' },
        { label: '💬 Discuss Campaign on WhatsApp', prompt: 'Can you run ads for my business?' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Ads Campaign',
        prefilledText: 'Hello IDM Smart Tech, I would like to run Google and Meta ads for my business.',
      },
    };
  }

  // 7. WEB & SOFTWARE DEVELOPMENT
  if (query.includes('web') || query.includes('software') || query.includes('crm') || query.includes('erp') || query.includes('app') || query.includes('development') || query.includes('ecommerce')) {
    return {
      reply: `IDM Smart Tech engineers production-grade digital infrastructure:\n\n• **Custom Business Websites:** Built on Next.js 14, React, Tailwind CSS, and TypeScript for optimized speed and high SEO discovery.\n• **Mobile Applications:** Cross-platform React Native / Flutter apps for iOS & Android.\n• **Custom CRM & ERP Systems:** Lightweight lead routing, customer records, and operational management tailored to your team.\n• **E-commerce Stores:** Conversion-optimized online storefronts with seamless payment gateways.\n\nAll web solutions include mobile responsiveness, SSL security, and WhatsApp inquiry integrations.`,
      suggestedActions: [
        { label: 'Get Website Estimate', prompt: 'How much does website development cost?' },
        { label: '💬 Discuss Tech Project', prompt: 'I need a custom website or software built.' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Web Project',
        prefilledText: 'Hello IDM Smart Tech, I would like to discuss a website / software development project.',
      },
    };
  }

  // 8. AI & AUTOMATION SOLUTIONS
  if (query.includes('ai') || query.includes('automation') || query.includes('chatbot') || query.includes('bot') || query.includes('whatsapp automation') || query.includes('workflow')) {
    return {
      reply: `We build intelligent AI and workflow automations to save your business time and capture leads 24/7:\n\n• **WhatsApp Business Automation:** Instant auto-responders, multi-step inquiry capture, and booking flows.\n• **AI Customer Assistants:** Knowledge-grounded chatbots (like me!) tailored to your services, pricing, and FAQs.\n• **Automated Lead Management:** Connecting Meta/Google ad leads directly into Google Sheets, CRMs, and email alerts within seconds.\n• **Custom API Workflows:** Webhooks, Zapier/Make integrations, and transactional alerts.`,
      suggestedActions: [
        { label: '💬 Automate WhatsApp Inquiries', prompt: 'Can you automate my WhatsApp business inquiries?' },
        { label: 'View Core Services', prompt: 'What services do you provide?' },
      ],
      whatsappHandoff: {
        label: '💬 Inquire About AI Automation',
        prefilledText: 'Hello IDM Smart Tech, I would like to learn about AI chatbots and WhatsApp automation for my business.',
      },
    };
  }

  // 9. INDUSTRY RECOMMENDATIONS
  if (query.includes('restaurant') || query.includes('cafe') || query.includes('food')) {
    return {
      reply: `For **Restaurants & Cafes**, we recommend:\n\n1. **High-Hook Reels & Food Content:** Showcasing signature dishes, ambiance, and chef specials on Instagram.\n2. **Google Maps Optimization:** Ranking for "best cafe near me" and local food searches in Hyderabad.\n3. **Local Meta Ads:** Targeting foodies within a 5-8 km delivery and dining radius.\n\nOur Starter (₹4,999/mo) or Growth (₹6,999/mo) plans are popular starting points for dining venues.`,
      suggestedActions: [
        { label: '💰 Pricing Packages', prompt: 'What are your monthly package prices?' },
        { label: '💬 Chat on WhatsApp', prompt: 'I run a restaurant and want to grow on Instagram.' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Restaurant Marketing',
        prefilledText: 'Hello IDM Smart Tech, I run a restaurant/cafe and would like to discuss social media and local ads.',
      },
    };
  }

  if (query.includes('clinic') || query.includes('doctor') || query.includes('hospital') || query.includes('healthcare')) {
    return {
      reply: `For **Healthcare Clinics & Practitioners**, we focus on authority, trust, and local search visibility:\n\n1. **Local Search & Google Business Profile:** Patients search with high intent when they need a clinic nearby.\n2. **Professional Educational Video Content:** Clarifying common conditions and building patient trust without exaggerated medical promises.\n3. **Appointment Landing Pages:** Clean, fast Next.js web presence with direct WhatsApp consultation booking.`,
      suggestedActions: [
        { label: '📍 GMB Services', prompt: 'What are your Google Business Profile services?' },
        { label: '💬 Clinic Strategy Consultation', prompt: 'I run a clinic and want to attract local patients.' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Clinic Strategy',
        prefilledText: 'Hello IDM Smart Tech, I manage a healthcare clinic and want to improve our local visibility and patient inquiries.',
      },
    };
  }

  if (query.includes('salon') || query.includes('spa') || query.includes('beauty')) {
    return {
      reply: `For **Salons & Spas**, aesthetic visual proof drives appointments:\n\n1. **Before/After & Transformation Reels:** Showcasing styling, hair care, and skin treatments.\n2. **Seasonal & Offer Meta Ads:** Attracting local residents for bridal packages, festive offers, and weekday slots.\n3. **Google Maps 3-Pack:** Capturing high-intent local searchers looking for top-rated salons nearby.`,
      suggestedActions: [
        { label: '💰 Retainer Packages', prompt: 'What are your monthly package prices?' },
        { label: '💬 Inquire on WhatsApp', prompt: 'I run a salon and want more bookings.' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Salon Marketing',
        prefilledText: 'Hello IDM Smart Tech, I own a salon/spa and would like to grow our appointments through Instagram and local ads.',
      },
    };
  }

  // 10. OBJECTION HANDLING & GUARANTEES
  if (query.includes('guarantee') || query.includes('promise') || query.includes('sales guarantee') || query.includes('rank #1')) {
    return {
      reply: `No responsible digital agency can guarantee fixed sales numbers or a #1 ranking on Google, as outcomes depend on market competition, ad algorithms, customer demand, and product offers.\n\n**What IDM Smart Tech Guarantees:**\n• Disciplined, high-standard execution and creative quality\n• 100% transparency in ad spend and bi-weekly performance reporting\n• Direct access to senior operators with agile adjustments\n• Month-to-month contracts with zero penalty lock-ins`,
      suggestedActions: [
        { label: '📈 5-Stage Process', prompt: 'How does your 5-stage client process work?' },
        { label: '💬 Speak to Founder', prompt: 'I would like to speak directly with an IDM team member.' },
      ],
    };
  }

  if (query.includes('expensive') || query.includes('cheaper') || query.includes('discount')) {
    return {
      reply: `We keep our pricing flat, predictable, and transparent starting at ₹4,999/month, with zero hidden agency markups or setup fees. Different agencies offer varying levels of execution; we provide direct senior operator communication, custom video production, and high-performance engineering rather than generic templates.\n\nCustom scopes can also be tailored to match your specific commercial budget.`,
      suggestedActions: [
        { label: '💰 View Retainers', prompt: 'What are your monthly package prices?' },
        { label: '💬 Request Custom Proposal', prompt: 'Can I get a custom package tailored to my budget?' },
      ],
      whatsappHandoff: {
        label: '💬 Discuss Custom Budget',
        prefilledText: 'Hello IDM Smart Tech, I would like to discuss a customized growth package for my business budget.',
      },
    };
  }

  // 11. LOCATION & COMPANY BACKGROUND
  if (query.includes('where') || query.includes('location') || query.includes('hyderabad') || query.includes('shamshabad') || query.includes('office')) {
    return {
      reply: `IDM Smart Tech is located in **Shamshabad, Hyderabad, Telangana — 501218, India**.\n\n📍 **Full Address:** ${COMPANY_INFO.address}\n\nWe work with ambitious businesses across Hyderabad, Telangana, and select pan-India clients. Visitors are welcome to contact us to schedule an in-person or virtual strategy session!`,
      suggestedActions: [
        { label: '💬 Schedule a Meeting', prompt: 'I would like to schedule a meeting with IDM Smart Tech.' },
        { label: 'Explore Core Services', prompt: 'What services do you provide?' },
      ],
      whatsappHandoff: {
        label: '💬 Coordinate Office Visit',
        prefilledText: 'Hello IDM Smart Tech, I would like to coordinate a meeting regarding your digital marketing services.',
      },
    };
  }

  // 12. GENERAL BUSINESS GROWTH & RECOMMENDATION FLOW
  if (query.includes('grow') || query.includes('start') || query.includes('help') || query.includes('recommend') || query.includes('how to')) {
    return {
      reply: `I'd love to recommend the right digital growth strategy for your business! To provide a tailored recommendation, could you tell me:\n\n1. What is your **business name** and **industry**?\n2. What is your primary objective (e.g., more leads, Instagram growth, a new website, or local Google Maps visibility)?\n\nAlternatively, you can choose a quick action below or chat directly with our team!`,
      suggestedActions: [
        { label: '📱 Social Media & Reels', prompt: 'Tell me about social media marketing.' },
        { label: '🎯 Google & Meta Ads', prompt: 'How do you run ads?' },
        { label: '💻 Web Development', prompt: 'Tell me about website development.' },
        { label: '💰 Package Pricing', prompt: 'What are your package prices?' },
      ],
      whatsappHandoff: {
        label: '💬 WhatsApp Growth Consultation',
        prefilledText: 'Hello IDM Smart Tech, I would like a digital growth recommendation for my business.',
      },
    };
  }

  // DEFAULT CONTEXTUAL FALLBACK
  return {
    reply: `Thank you for your question! As your IDM Smart Assistant, I'm here to help with our creative marketing, Google & Meta advertising, local SEO, website engineering, and AI automation retainers starting at ₹4,999/mo.\n\nCould you tell me a little about your business or what specific outcome you're looking to achieve?`,
    suggestedActions: [
      { label: '💰 Retainer Pricing', prompt: 'What are your monthly package prices?' },
      { label: '🚀 Core Services', prompt: 'What services does IDM Smart Tech provide?' },
      { label: '📍 GMB Services', prompt: 'What are your Google Business Profile services?' },
      { label: '💬 Talk to IDM Team', prompt: 'I want to speak with an IDM team member.' },
    ],
    whatsappHandoff: {
      label: '💬 Chat on WhatsApp',
      prefilledText: `Hello IDM Smart Tech, I am inquiring from your website regarding: "${userMessage.slice(0, 80)}"`,
    },
  };
}
