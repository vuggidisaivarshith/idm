'use client';

import React, { useState } from 'react';
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
            className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
              isOpen ? 'border-primarypurple/40 shadow-card' : 'border-bordercolor hover:border-primarypurple/25'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-textprimary hover:text-primarypurple transition-colors"
            >
              <span>{item.question}</span>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 shrink-0 ${
                  isOpen ? 'bg-primarypurple text-white rotate-180' : 'bg-sectionsoft text-primarypurple'
                }`}
              >
                ↓
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-textsecondary leading-relaxed border-t border-bordercolor/60 bg-pagebg/40">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
