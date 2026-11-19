'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl, COMPANY_INFO } from '@/lib/constants';
import QueryChatbot from '@/components/QueryChatbot';

export default function FloatingContactDock() {
  const [chatOpen, setChatOpen] = useState(false);

  const emailSubject = encodeURIComponent('Growth Inquiry — IDM Smart Tech');
  const emailBody = encodeURIComponent(
    'Hello IDM Smart Tech team,\n\nI would like to inquire about your digital marketing and technology services.\n\nBusiness Name:\nPhone / WhatsApp:\nPrimary Goals:\n'
  );
  const emailUrl = `mailto:${COMPANY_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappUrl = getWhatsAppUrl(
    'Hello IDM Smart Tech, I would like to enquire about your digital marketing and technology services.'
  );

  return (
    <>
      {/* Interactive Query Chatbot Window */}
      <QueryChatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating Multi-Channel Action Dock */}
      <aside
        aria-label="Contact and Chat Assistance"
        className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3"
      >
        {/* ================= 1. EMAIL BUTTON ================= */}
        <div className="relative group">
          <span className="hidden sm:inline-block absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-bordercolor text-textprimary text-[11px] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ✉️ Email Us
          </span>

          <a
            href={emailUrl}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-primarypurple to-royalblue text-white flex items-center justify-center shadow-lg shadow-primarypurple/25 hover:scale-110 active:scale-95 transition-all duration-200 border border-white/40 ring-1 ring-bordercolor/50"
            aria-label={`Email IDM Smart Tech at ${COMPANY_INFO.email}`}
            title={`Email: ${COMPANY_INFO.email}`}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* ================= 2. WHATSAPP BUTTON ================= */}
        <div className="relative group">
          <span className="hidden sm:inline-block absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-bordercolor text-textprimary text-[11px] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            💬 WhatsApp Us
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-brandmint to-royalblue text-white flex items-center justify-center shadow-lg shadow-royalblue/25 hover:scale-110 active:scale-95 transition-all duration-200 border border-white/40 ring-1 ring-bordercolor/50"
            aria-label={`Chat with IDM Smart Tech on WhatsApp (${COMPANY_INFO.phone})`}
            title={`WhatsApp: ${COMPANY_INFO.phone}`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.847-.433-1.442-.602-2.38-2.072-2.452-2.169-.072-.097-.58-0.771-.58-1.47 0-.698.366-1.042.497-1.185.131-.143.286-.179.382-.179.095 0 .191.002.274.006.088.005.205-.033.322.247.118.286.405.992.441 1.063.036.072.06.155.012.25-.048.096-.072.155-.143.239-.072.083-.151.186-.216.25-.072.071-.147.148-.063.292.083.143.37.61.794.987.545.485 1.005.636 1.148.707.143.072.227.06.311-.036.084-.095.358-.417.454-.56.096-.143.191-.119.322-.072.131.048.835.394.978.465.143.072.239.107.274.167.036.06.036.346-.108.751z" />
            </svg>
          </a>
        </div>

        {/* ================= 3. QUERY CHATBOT WITH AVATAR ================= */}
        <div className="relative group">
          {/* Callout speech bubble above avatar (Never overlaps Email or WhatsApp buttons) */}
          {!chatOpen && (
            <div className="hidden sm:flex flex-col items-center absolute bottom-full mb-2.5 right-0 pointer-events-none">
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-primarypurple/30 text-textprimary text-[11px] font-bold shadow-lg shadow-primarypurple/15 whitespace-nowrap">
                <span className="text-primarypurple">Ask IDM AI</span> 👋
              </span>
              <span className="w-2 h-2 bg-white border-r border-b border-primarypurple/30 rotate-45 -mt-1 shadow-2xs" />
            </div>
          )}

          <button
            onClick={() => setChatOpen(!chatOpen)}
            className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative shadow-xl ${
              chatOpen
                ? 'bg-textprimary text-white scale-95 shadow-black/20'
                : 'bg-gradient-to-tr from-primarypurple via-royalblue to-softpink text-white hover:scale-108 active:scale-95 shadow-primarypurple/30 ring-2 ring-primarypurple/30 ring-offset-2'
            }`}
            aria-label={chatOpen ? 'Close IDM AI Chatbot' : 'Open IDM AI Query Chatbot'}
            title="Ask IDM AI Strategist"
          >
            {chatOpen ? (
              <span className="text-lg font-bold">✕</span>
            ) : (
              <div className="relative flex items-center justify-center">
                {/* Avatar Icon */}
                <span className="text-2xl filter drop-shadow-sm">🤖</span>
                {/* Active Online Indicator Pulse */}
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-brandmint border-2 border-white animate-pulse" />
              </div>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
