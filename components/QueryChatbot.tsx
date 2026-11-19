'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import { CHATBOT_IDENTITY, QUICK_ACTIONS } from '@/lib/chatbotKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  suggestedActions?: { label: string; prompt: string }[];
  whatsappHandoff?: {
    label: string;
    prefilledText: string;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-welcome',
    sender: 'bot',
    text: CHATBOT_IDENTITY.greeting,
    time: 'Just now',
    suggestedActions: [
      { label: '🚀 Grow My Business', prompt: 'I want to grow my business. What do you recommend?' },
      { label: '💰 View Pricing', prompt: 'What are your monthly package prices?' },
      { label: '📱 Social Media & Reels', prompt: 'Tell me about social media marketing and reels.' },
      { label: '📍 GMB Services', prompt: 'What are your Google Business Profile prices?' },
    ],
  },
];

export default function QueryChatbot({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('idm_chatbot_messages');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // Fall back to initial messages
      }
    }
    return INITIAL_MESSAGES;
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen]);

  // Persist conversation to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      try {
        localStorage.setItem('idm_chatbot_messages', JSON.stringify(messages.slice(-20)));
      } catch (e) {
        // Ignore quota errors
      }
    }
  }, [messages]);

  const handleResetConversation = () => {
    setMessages(INITIAL_MESSAGES);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('idm_chatbot_messages');
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: currentTime,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: data.suggestedActions,
        whatsappHandoff: data.whatsappHandoff,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      // Fallback message
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text:
          "I'm here to help you grow your business with our monthly retainers starting at ₹4,999/mo. For direct consultation or custom estimates, you can reach our team directly on WhatsApp (+91 85198 37818).",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        whatsappHandoff: {
          label: '💬 Chat on WhatsApp (+91 85198 37818)',
          prefilledText: `Hello IDM Smart Tech, I would like to inquire about your digital marketing and technology retainers.`,
        },
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] max-w-[420px] h-[580px] max-h-[82vh] rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_-12px_rgba(16,28,50,0.18),0_0_0_1px_rgba(105,87,245,0.15)] flex flex-col overflow-hidden text-textprimary"
          role="dialog"
          aria-label="IDM Smart Assistant Conversation Window"
        >
          {/* ================= HEADER ================= */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan text-white flex items-center justify-between shadow-xs select-none">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner border border-white/30">
                  🤖
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brandmint border-2 border-primarypurple" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm leading-tight text-white">
                    {CHATBOT_IDENTITY.name}
                  </h3>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider bg-white/20 text-white px-1.5 py-0.5 rounded-full">
                    AI Online
                  </span>
                </div>
                <p className="text-[11px] text-white/80 leading-tight">
                  {CHATBOT_IDENTITY.positioning}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={handleResetConversation}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white flex items-center justify-center text-xs"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                ↺
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white flex items-center justify-center text-sm font-bold"
                title="Close chat"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* ================= QUICK ACTION PILLS CAROUSEL ================= */}
          <div className="px-3 py-2 bg-sectionsoft/60 border-b border-bordercolor/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.id}
                onClick={() => handleSendMessage(action.prompt)}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-primarypurple hover:text-white border border-bordercolor text-[10px] font-semibold text-textsecondary whitespace-nowrap shadow-2xs transition-colors shrink-0 active:scale-95"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* ================= MESSAGES FEED ================= */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`relative max-w-[86%] rounded-2xl p-3.5 leading-relaxed shadow-2xs group ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white rounded-tr-xs'
                      : 'bg-white border border-bordercolor/90 text-textprimary rounded-tl-xs shadow-[0_2px_8px_rgba(16,28,50,0.04)]'
                  }`}
                >
                  {/* Message Prose with newline support */}
                  <div className="whitespace-pre-wrap font-normal select-text">
                    {msg.text}
                  </div>

                  {/* WhatsApp Direct Handoff Action Pill */}
                  {msg.whatsappHandoff && (
                    <div className="mt-3 pt-2.5 border-t border-bordercolor/60">
                      <a
                        href={getWhatsAppUrl(msg.whatsappHandoff.prefilledText)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-brandmint to-royalblue text-white font-bold text-[11px] shadow-sm hover:scale-[1.02] active:scale-98 transition-all"
                      >
                        <span>{msg.whatsappHandoff.label}</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  )}

                  {/* Contextual Follow-up Suggestion Chips */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-bordercolor/60 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleSendMessage(action.prompt)}
                          className="px-2 py-1 rounded-lg bg-sectionsoft hover:bg-primarypurple hover:text-white border border-bordercolor/80 text-[10px] font-semibold text-textprimary transition-colors text-left"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Copy Button on Hover */}
                  <button
                    onClick={() => handleCopyText(msg.id, msg.text)}
                    className="absolute -top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-1.5 py-0.5 rounded bg-white/95 border border-bordercolor text-[9px] text-textsecondary shadow-2xs"
                    title="Copy text"
                  >
                    {copiedId === msg.id ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* Message Timestamp */}
                <span className="text-[9px] text-textsecondary/60 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 text-textsecondary text-xs">
                <div className="w-8 h-8 rounded-full bg-white border border-bordercolor flex items-center justify-center text-sm shadow-2xs">
                  🤖
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-xs bg-white border border-bordercolor shadow-2xs flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primarypurple animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-royalblue animate-bounce"
                    style={{ animationDelay: '0.15s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brandcyan animate-bounce"
                    style={{ animationDelay: '0.3s' }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ================= INPUT FOOTER ================= */}
          <div className="p-3 bg-white border-t border-bordercolor flex flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about pricing, reels, SEO, tech..."
                className="flex-1 px-3.5 py-2 rounded-full bg-sectionsoft/60 border border-bordercolor text-textprimary text-xs placeholder:text-textsecondary/60 focus:outline-none focus:border-primarypurple focus:ring-1 focus:ring-primarypurple/30 transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-primarypurple to-royalblue text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-md shadow-primarypurple/20 shrink-0"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-textsecondary/70 px-1">
              <span>Supports English • తెలుగు • हिंदी</span>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to speak with a human strategist.')}
                target="_blank"
                rel="noreferrer"
                className="text-primarypurple font-semibold hover:underline"
              >
                Talk to Human &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
