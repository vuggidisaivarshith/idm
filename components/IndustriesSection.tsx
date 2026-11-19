import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { INDUSTRIES_LIST } from '@/data/industries';
import { getWhatsAppUrl } from '@/lib/constants';

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Tailored By Sector"
            title="Strategic Marketing Approaches for"
            highlightText="High-Growth Industries."
            description="We understand that a dental clinic requires patient education, while a restaurant needs weekend dining footfall. Explore our tailored frameworks."
            className="mb-0"
          />

          <Link
            href="/industries"
            className="btn-aurora-secondary py-2.5 px-6 text-xs whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            View All Industry Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind) => (
            <Card
              key={ind.slug}
              className="p-7 flex flex-col justify-between group hover:border-primarypurple/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-sectionsoft border border-bordercolor/60 inline-block">
                    {ind.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primarypurple bg-sectionsoft px-2.5 py-1 rounded-full border border-primarypurple/20">
                    Sector Solution
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-textprimary group-hover:text-primarypurple transition-colors mb-2">
                  {ind.title}
                </h3>

                <p className="text-xs font-semibold text-royalblue mb-3">
                  {ind.tagline}
                </p>

                <p className="text-xs text-textsecondary leading-relaxed mb-5">
                  {ind.overview}
                </p>

                {/* Common Challenge Callout */}
                <div className="p-3 rounded-xl bg-pagebg border border-bordercolor/80 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-textsecondary block mb-1">
                    Primary Challenge We Solve:
                  </span>
                  <p className="text-[11px] text-textprimary leading-normal">
                    {ind.commonChallenges[0]}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-bordercolor flex items-center justify-between">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="text-xs font-bold text-primarypurple hover:underline"
                >
                  Explore Approach &rarr;
                </Link>

                <a
                  href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to discuss digital marketing for my business in the ${ind.title} sector.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-textsecondary hover:text-brandmint font-medium"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
