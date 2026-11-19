'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, MONTHLY_PACKAGES, getWhatsAppUrl } from '@/lib/constants';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  action?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-1',
    sender: 'bot',
    text: `Hello! 👋 I'm your IDM Smart Tech growth assistant. Ask me anything about our monthly retainers, social media reels, Meta & Google ads, or web engineering in Hyderabad!`,
    time: 'Just now',
  },
];

const SUGGESTED_QUERIES = [
  { label: '💰 Retainer Pricing', query: 'What are your monthly package prices?' },
  { label: '🚀 Core Services', query: 'What services does IDM Smart Tech provide?' },
  { label: '📈 5-Stage Process', query: 'How does your 5-stage client process work?' },
  { label: '✂️ Salons & Clinics', query: 'Do you offer marketing for salons and clinics?' },
  { label: '📍 Hyderabad Office', query: 'Where is your office located and how can I contact you?' },
];

export default function QueryChatbot({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Pricing & Packages
    if (q.includes('price') || q.includes('package') || q.includes('cost') || q.includes('retainer') || q.includes('fee')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `We offer 4 transparent, company-approved monthly growth packages:\n\n• Starter Growth: ₹4,999/mo (Social & Local Visibility)\n• Growth: ₹6,999/mo (Brand Acceleration)\n• Ultimate Growth: ₹9,999/mo (Multi-Channel Growth)\n• Pro Plan: ₹16,999/mo (Growth & Leads Generation)\n\nDeliverables are customized directly to your business goals with zero hidden fees.`,
        time,
        action: {
          label: '💬 Discuss Package on WhatsApp',
          url: getWhatsAppUrl('Hello IDM Smart Tech, I would like to inquire about your monthly growth packages.'),
          isExternal: true,
        },
      };
    }

    // Services
    if (q.includes('service') || q.includes('what do you do') || q.includes('offer') || q.includes('capabilities')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `IDM Smart Tech provides end-to-end creative marketing and intelligent technology services:\n\n1. Social Media Marketing & Management\n2. 9:16 Vertical Video & Reels Production\n3. Meta (Instagram & Facebook) Lead Ads\n4. Google Search & Display PPC Ads\n5. Local SEO & Google Business Profile (GMB)\n6. Modern Next.js 14 Web Development\n7. AI Business Automation & WhatsApp Flows`,
        time,
        action: {
          label: 'Explore Services Page →',
          url: '/services',
          isExternal: false,
        },
      };
    }

    // Process & Workflow
    if (q.includes('process') || q.includes('stage') || q.includes('how it works') || q.includes('method') || q.includes('step')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Our disciplined 5-Stage Growth Journey:\n\n01. Discover — Brand & competitor audit\n02. Strategize — Funnel architecture & content pillars\n03. Create — 9:16 Reels & carousel production\n04. Launch & Optimize — Live ads & continuous A/B tests\n05. Report & Improve — Transparent bi-weekly telemetry`,
        time,
        action: {
          label: '💬 Chat With a Strategist',
          url: getWhatsAppUrl('Hello IDM Smart Tech, I would like to understand your 5-stage client process.'),
          isExternal: true,
        },
      };
    }

    // Salons, Spas & Healthcare Clinics
    if (q.includes('salon') || q.includes('spa') || q.includes('clinic') || q.includes('doctor') || q.includes('healthcare') || q.includes('wellness')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Yes! We specialize in local marketing for Salons, Spas, and Aesthetic Clinics in Hyderabad. We produce weekly transformation reels (hair, skin, styling), optimize Google Maps 3-Pack rankings, and deploy one-tap WhatsApp appointment booking ads.`,
        time,
        action: {
          label: 'View Industry Frameworks →',
          url: '/industries#salons-wellness',
          isExternal: false,
        },
      };
    }

    // Office Location & Contact Details
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('office') || q.includes('phone') || q.includes('email') || q.includes('contact')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Our office is located in ${COMPANY_INFO.city}:\n\n📍 ${COMPANY_INFO.address}\n📞 Phone: ${COMPANY_INFO.phone}\n✉️ Email: ${COMPANY_INFO.email}\n📸 Instagram: @idmsmarttech`,
        time,
        action: {
          label: 'Open Contact Coordinates →',
          url: '/contact',
          isExternal: false,
        },
      };
    }

    // Founder Communication & Advantages
    if (q.includes('founder') || q.includes('why') || q.includes('differentiator') || q.includes('advantage')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Key IDM Smart Tech Advantages:\n\n• Direct Founder Communication (no junior account managers)\n• Transparent Fixed Retainers (no surprise billing)\n• Unified Creative & Paid Ads (reels producers work directly with ad buyers)\n• Production-Grade Next.js Engineering`,
        time,
        action: {
          label: '💬 Message Founders on WhatsApp',
          url: getWhatsAppUrl('Hello IDM Smart Tech, I would like to connect with your lead strategist.'),
          isExternal: true,
        },
      };
    }

    // Default Fallback
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `Thank you for asking! For specific campaign strategy, custom scopes, or urgent enquiries, you can talk directly with our lead team on WhatsApp or drop us an email at ${COMPANY_INFO.email}.`,
      time,
      action: {
        label: '💬 Connect on WhatsApp Now',
        url: getWhatsAppUrl(`Hello IDM Smart Tech, I had a question regarding: "${userQuery}".`),
        isExternal: true,
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate natural AI thinking time
    setTimeout(() => {
      const reply = generateBotReply(text);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-4 sm:right-6 w-[360px] sm:w-[400px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[82vh] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_24px_50px_-12px_rgba(105,87,245,0.22),0_1px_3px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-bordercolor/80 flex flex-col overflow-hidden z-50 font-body"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan p-4 text-white flex items-center justify-between shrink-0 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center space-x-3 relative z-10">
              {/* Avatar with active pulse */}
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white text-primarypurple font-heading font-extrabold flex items-center justify-center text-sm shadow-md">
                  ✨
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brandmint border-2 border-white animate-pulse" />
              </div>

              <div>
                <h3 className="text-sm font-heading font-bold text-white leading-tight flex items-center gap-1.5">
                  <span>IDM AI Strategist</span>
                  <span className="text-[9px] bg-white/20 uppercase tracking-wider px-1.5 py-0.5 rounded-full font-bold">
                    Online
                  </span>
                </h3>
                <p className="text-[11px] text-white/85 font-medium leading-none mt-1">
                  Instant Answers &amp; Growth Insights
                </p>
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={onClose}
              aria-label="Close Chatbot"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-sm font-bold relative z-10"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-pagebg/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed whitespace-pre-line shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white rounded-br-xs'
                      : 'bg-white text-textprimary border border-bordercolor/80 rounded-bl-xs'
                  }`}
                >
                  {msg.text}

                  {msg.action && (
                    <div className="mt-3 pt-2.5 border-t border-bordercolor/60">
                      <a
                        href={msg.action.url}
                        target={msg.action.isExternal ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-primarypurple hover:text-royalblue transition-colors bg-sectionsoft px-2.5 py-1 rounded-lg border border-primarypurple/20"
                      >
                        {msg.action.label}
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-textsecondary/70 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-1.5 p-3 rounded-2xl bg-white border border-bordercolor/80 w-fit text-textsecondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primarypurple animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-royalblue animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brandcyan animate-bounce [animation-delay:0.3s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Queries Suggestions */}
          <div className="p-2.5 bg-white border-t border-bordercolor/70 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
            {SUGGESTED_QUERIES.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSend(sq.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sectionsoft hover:bg-primarypurple/10 text-primarypurple border border-primarypurple/20 transition-colors shrink-0"
              >
                {sq.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-bordercolor/80 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about pricing, services, reels..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-pagebg border border-bordercolor/90 focus:outline-none focus:border-primarypurple text-textprimary placeholder:text-textsecondary/60"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-primarypurple to-royalblue text-white flex items-center justify-center transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
              aria-label="Send Message"
            >
              ➤
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
