import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { FAQ_LIST } from '@/data/faq';
import Link from 'next/link';

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-sectionsoft/50 text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers About Our"
          highlightText="Packages, Retainers & Process."
          description="Everything you need to know about partnering with IDM Smart Tech. No hidden clauses, straightforward retainers, and transparent deliverables."
          align="center"
        />

        <FAQAccordion items={FAQ_LIST.slice(0, 6)} />

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="text-xs font-bold text-primarypurple hover:underline inline-flex items-center gap-1"
          >
            <span>Have more questions? Read our full FAQ directory</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
