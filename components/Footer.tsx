import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import { SERVICES_LIST } from '@/data/services';
import { INDUSTRIES_LIST } from '@/data/industries';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t-2 border-slate-800 pt-20 pb-14 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <span className="w-8 h-8 bg-white text-[#0F172A] flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                &#9670;
              </span>
              <span className="font-serif text-[20px] font-normal tracking-tight text-white group-hover:text-slate-200 transition-colors">
                IDM SMART TECH
              </span>
            </Link>

            <p className="text-[13.5px] text-slate-400 max-w-sm leading-relaxed font-normal">
              {COMPANY_INFO.brandStatement}
            </p>
            <p className="text-[12.5px] text-slate-400 max-w-sm leading-relaxed font-normal">
              {COMPANY_INFO.supportingMessage}
            </p>

            <div className="pt-2 text-[12.5px] text-slate-300 font-mono">
              📍 {COMPANY_INFO.address}
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-slate-700 bg-slate-800/80 flex items-center justify-center text-xs text-white hover:bg-slate-700 hover:border-slate-500 transition-colors"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to inquire about your services.')}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-emerald-600/40 bg-emerald-950/40 flex items-center justify-center text-xs text-emerald-400 hover:bg-emerald-900/60 transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-9 h-9 border border-slate-700 bg-slate-800/80 flex items-center justify-center text-xs text-white hover:bg-slate-700 hover:border-slate-500 transition-colors"
                aria-label="Phone"
              >
                📞
              </a>
            </div>
          </div>

          {/* Core Services Col */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white font-bold mb-4">
              CORE SERVICES
            </h4>
            <ul className="space-y-2.5 text-[12.5px] text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="hover:text-white transition-colors">
                    {svc.shortTitle}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="font-mono text-[11px] text-emerald-400 hover:underline tracking-wider uppercase font-bold">
                  ALL SERVICES &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Served */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white font-bold mb-4">
              SECTORS
            </h4>
            <ul className="space-y-2.5 text-[12.5px] text-slate-400">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries#${ind.slug}`} className="hover:text-white transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency & Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white font-bold mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-[12.5px] text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About IDM</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Creative Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Growth Packages</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Marketing Insights</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Strategy</Link></li>
            </ul>
          </div>

          {/* Legal & Local Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white font-bold mb-4">
              DIRECT CONTACT
            </h4>
            <div className="space-y-3 text-[12.5px] text-slate-400 leading-relaxed">
              <p>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block">WhatsApp:</span>
                <a href={getWhatsAppUrl('Hi IDM Smart Tech')} target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 font-mono text-[12px] font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block">Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline font-mono text-[12px]">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <div className="pt-2 font-mono text-[11px] space-y-1">
                <Link href="/privacy-policy" className="hover:text-white block">PRIVACY POLICY</Link>
                <Link href="/terms-and-conditions" className="hover:text-white block">TERMS OF SERVICE</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Divider */}
        <div className="structural-divider my-8 bg-slate-800" />

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} IDM SMART TECH. ALL RIGHTS RESERVED. SHAMSHABAD, HYDERABAD.</p>
          <div className="flex space-x-6 tracking-wider uppercase">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
