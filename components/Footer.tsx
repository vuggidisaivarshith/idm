import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import { SERVICES_LIST } from '@/data/services';
import { INDUSTRIES_LIST } from '@/data/industries';

export default function Footer() {
  return (
    <footer className="bg-sectionsoft/80 text-textprimary border-t border-bordercolor pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primarypurple via-royalblue to-softpink flex items-center justify-center font-heading font-black text-white text-base shadow-sm">
                IDM
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-textprimary">
                IDM SMART TECH
              </span>
            </Link>

            <p className="text-sm text-textsecondary max-w-sm leading-relaxed">
              {COMPANY_INFO.brandStatement}
            </p>
            <p className="text-xs text-textsecondary max-w-sm leading-relaxed">
              {COMPANY_INFO.supportingMessage}
            </p>

            <div className="pt-2 text-xs text-primarypurple font-semibold">
              📍 {COMPANY_INFO.address}
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-bordercolor flex items-center justify-center text-xs text-textprimary hover:text-primarypurple hover:border-primarypurple transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to inquire about your services.')}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-bordercolor flex items-center justify-center text-xs text-textprimary hover:text-brandmint hover:border-brandmint transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-8 h-8 rounded-full bg-white border border-bordercolor flex items-center justify-center text-xs text-textprimary hover:text-royalblue hover:border-royalblue transition-colors shadow-2xs"
                aria-label="Phone"
              >
                📞
              </a>
            </div>
          </div>

          {/* Core Services Col */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-textsecondary">
              {SERVICES_LIST.slice(0, 6).map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="hover:text-primarypurple transition-colors">
                    {svc.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primarypurple font-semibold hover:underline">
                  All 10 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-textsecondary">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries#${ind.slug}`} className="hover:text-primarypurple transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency & Resources */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">
              Company & Work
            </h4>
            <ul className="space-y-2 text-xs text-textsecondary">
              <li><Link href="/about" className="hover:text-primarypurple transition-colors">About Agency</Link></li>
              <li><Link href="/portfolio" className="hover:text-primarypurple transition-colors">Creative Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-primarypurple transition-colors">Growth Packages</Link></li>
              <li><Link href="/blog" className="hover:text-primarypurple transition-colors">Marketing Insights</Link></li>
              <li><Link href="/faq" className="hover:text-primarypurple transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-primarypurple transition-colors">Book Strategy Call</Link></li>
            </ul>
          </div>

          {/* Legal & Local Contact */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-textsecondary leading-relaxed">
              <p>
                <strong className="text-textprimary block font-medium">Direct WhatsApp:</strong>
                <a href={getWhatsAppUrl('Hi IDM Smart Tech')} target="_blank" rel="noreferrer" className="text-primarypurple hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-textprimary block font-medium">Official Email:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="pt-2">
                <Link href="/privacy-policy" className="hover:text-primarypurple block">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-primarypurple block mt-1">Terms & Conditions</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-bordercolor/80 flex flex-col sm:flex-row items-center justify-between text-xs text-textsecondary gap-4">
          <p>© {new Date().getFullYear()} IDM Smart Tech. All rights reserved. Creative Marketing & Intelligent Technology Agency — Shamshabad, Hyderabad.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-primarypurple transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primarypurple transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-primarypurple transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
