'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '@/data/faq';

interface FAQAccordionProps {
  items: FAQItem[];
  includeSchema?: boolean;
}

export default function FAQAccordion({ items, includeSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto w-full">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`glossy-card transition-all duration-300 overflow-hidden bg-white border-2 ${
              isOpen
                ? 'border-[#0F172A] shadow-md'
                : 'border-slate-200/90 hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-serif text-[16.5px] sm:text-[18px] text-[#0F172A] hover:text-[#365679] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-[11px] font-bold text-[#64748B]">
                  0{index + 1}
                </span>
                <span>{item.question}</span>
              </div>
              <span
                className={`w-7 h-7 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shrink-0 border ${
                  isOpen
                    ? 'bg-[#0F172A] text-white border-[#0F172A] rotate-180'
                    : 'bg-slate-100 text-[#0F172A] border-slate-200'
                }`}
              >
                ↓
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2 text-[13.5px] sm:text-[14px] text-[#334155] leading-relaxed border-t border-slate-200 bg-slate-50/60 font-normal">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
