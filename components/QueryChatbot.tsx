'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '@/lib/constants';
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

/**
 * Formats message prose, detecting markdown tables and rendering them
 * in responsive, horizontally scrollable cards with zebra striping.
 */
function FormattedMessageText({ text }: { text: string }) {
  if (!text.includes('|')) {
    return <div className="whitespace-pre-wrap font-normal select-text">{text}</div>;
  }

  const lines = text.split('\n');
  const blocks: { type: 'text' | 'table'; content: string | string[] }[] = [];
  let currentTableLines: string[] = [];
  let currentTextLines: string[] = [];

  const flushText = () => {
    if (currentTextLines.length > 0) {
      blocks.push({ type: 'text', content: currentTextLines.join('\n') });
      currentTextLines = [];
    }
  };

  const flushTable = () => {
    if (currentTableLines.length > 0) {
      blocks.push({ type: 'table', content: [...currentTableLines] });
      currentTableLines = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushText();
      currentTableLines.push(trimmed);
    } else {
      flushTable();
      currentTextLines.push(line);
    }
  }
  flushText();
  flushTable();

  return (
    <div className="space-y-2 select-text">
      {blocks.map((block, bIdx) => {
        if (block.type === 'text') {
          return (
            <div key={bIdx} className="whitespace-pre-wrap font-normal">
              {block.content as string}
            </div>
          );
        }

        const tableLines = block.content as string[];
        if (tableLines.length < 2) {
          return (
            <div key={bIdx} className="whitespace-pre-wrap font-normal">
              {tableLines.join('\n')}
            </div>
          );
        }

        const headerCells = tableLines[0]
          .split('|')
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map((c) => c.trim().replace(/\*\*/g, ''));

        const rowLines = tableLines.slice(1).filter((l) => !l.includes('---'));
        const rows = rowLines.map((row) =>
          row
            .split('|')
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
            .map((c) => c.trim())
        );

        return (
          <div
            key={bIdx}
            className="my-2.5 rounded-xl border border-bordercolor/80 overflow-x-auto chat-scroll-x shadow-2xs bg-pagebg/70"
          >
            <table className="w-full text-left border-collapse text-[11px] min-w-[280px]">
              <thead>
                <tr className="bg-primarypurple/10 border-b border-bordercolor text-textprimary font-bold">
                  {headerCells.map((h, hIdx) => (
                    <th key={hIdx} className="px-3 py-2 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`border-b border-bordercolor/50 transition-colors hover:bg-primarypurple/5 ${
                      rIdx % 2 === 1 ? 'bg-white/40' : 'bg-white/90'
                    }`}
                  >
                    {r.map((cell, cIdx) => {
                      const cleanCell = cell.replace(/\*\*/g, '');
                      const isBold = cell.includes('**');
                      return (
                        <td
                          key={cIdx}
                          className={`px-3 py-2 text-textsecondary whitespace-nowrap ${
                            isBold ? 'font-bold text-textprimary' : ''
                          }`}
                        >
                          {cleanCell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

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
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  };

  const handleFeedScroll = () => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollBottom(distFromBottom > 100);
  };

  const checkChipsScroll = () => {
    const el = chipsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 6);
  };

  const scrollChips = (direction: 'left' | 'right') => {
    if (!chipsRef.current) return;
    const offset = direction === 'left' ? -150 : 150;
    chipsRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkChipsScroll, 200);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
        checkChipsScroll();
      }, 300);
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
          <div className="px-4 py-3.5 bg-gradient-to-r from-primarypurple via-royalblue to-brandcyan text-white flex items-center justify-between shadow-xs select-none shrink-0">
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

          {/* ================= QUICK ACTION PILLS CAROUSEL (SCROLLABLE TAB STRIP) ================= */}
          <div className="relative bg-sectionsoft/70 border-b border-bordercolor/80 shrink-0">
            {/* Scroll Left Button */}
            {canScrollLeft && (
              <button
                onClick={() => scrollChips('left')}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white/95 border border-bordercolor shadow-sm flex items-center justify-center text-primarypurple font-bold text-xs hover:bg-sectionsoft hover:scale-110 active:scale-95 transition-all"
                aria-label="Scroll topics left"
                title="Scroll topics left"
              >
                ‹
              </button>
            )}

            {/* Scrollable Container with Horizontal Wheel & Drag Support */}
            <div
              ref={chipsRef}
              onScroll={checkChipsScroll}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              className="px-3 py-2 flex items-center gap-1.5 overflow-x-auto chat-scroll-x scroll-smooth select-none"
            >
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

            {/* Scroll Right Button */}
            {canScrollRight && (
              <button
                onClick={() => scrollChips('right')}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white/95 border border-bordercolor shadow-sm flex items-center justify-center text-primarypurple font-bold text-xs hover:bg-sectionsoft hover:scale-110 active:scale-95 transition-all"
                aria-label="Scroll topics right"
                title="Scroll topics right"
              >
                ›
              </button>
            )}
          </div>

          {/* ================= MESSAGES FEED (SCROLLABLE CHAT WINDOW) ================= */}
          <div
            ref={messagesContainerRef}
            onScroll={handleFeedScroll}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain chat-scroll-y p-4 space-y-3.5 text-xs relative"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`relative max-w-[88%] rounded-2xl p-3.5 leading-relaxed shadow-2xs group ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primarypurple to-royalblue text-white rounded-tr-xs'
                      : 'bg-white border border-bordercolor/90 text-textprimary rounded-tl-xs shadow-[0_2px_8px_rgba(16,28,50,0.04)]'
                  }`}
                >
                  {/* Formatted Message Prose with Markdown Table Horizontal Scroll */}
                  <FormattedMessageText text={msg.text} />

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

            {/* Floating Jump to Latest Button when Scrolled Up */}
            {showScrollBottom && (
              <div className="sticky bottom-2 left-0 right-0 flex justify-center z-30 pointer-events-none">
                <button
                  onClick={() => scrollToBottom(true)}
                  className="pointer-events-auto px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-primarypurple/40 text-primarypurple font-bold text-[11px] shadow-lg shadow-primarypurple/15 flex items-center gap-1.5 hover:bg-sectionsoft active:scale-95 transition-all"
                  aria-label="Scroll to latest messages"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>Jump to latest</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ================= INPUT FOOTER ================= */}
          <div className="p-3 bg-white border-t border-bordercolor flex flex-col gap-2 shrink-0">
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