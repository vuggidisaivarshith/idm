'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-sectionsoft/70 text-textprimary border-t border-bordercolor py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primarypurple via-royalblue to-brandcyan flex items-center justify-center font-heading font-black text-white text-base shadow-sm">
                IDM
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-textprimary">IDM SMART TECH</span>
            </div>
            <p className="text-sm text-textsecondary max-w-sm leading-relaxed">
              Hyderabad’s premier AI-powered digital marketing and modern technology agency. Delivering measurable ROI through local SEO, Google Ads, custom web/app development, and business automations.
            </p>
            <div className="pt-2 text-xs text-primarypurple font-semibold">
              📍 {COMPANY_INFO.city}, {COMPANY_INFO.state} — {COMPANY_INFO.pincode}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">GMB & Local SEO</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-textsecondary">
              <li><a href="#gmb" className="hover:text-primarypurple transition-colors">New GMB Creation (₹4,000)</a></li>
              <li><a href="#gmb" className="hover:text-primarypurple transition-colors">Profile Reinstatement (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-primarypurple transition-colors">Video Verification (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-primarypurple transition-colors">Phone Number Fixes (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-primarypurple transition-colors">Google Maps 3-Pack Ranking</a></li>
            </ul>
          </div>

          {/* Growth Packages */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">Growth Packages</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-textsecondary">
              <li><a href="#pricing" className="hover:text-primarypurple transition-colors">Starter Growth (₹4,999/mo)</a></li>
              <li><a href="#pricing" className="hover:text-primarypurple transition-colors">Growth Plan (₹6,999/mo)</a></li>
              <li><a href="#pricing" className="hover:text-primarypurple transition-colors">Ultimate Growth (₹9,999/mo)</a></li>
              <li><a href="#pricing" className="hover:text-primarypurple transition-colors">Pro Plan (₹16,999/mo)</a></li>
              <li><a href="#services" className="hover:text-primarypurple transition-colors">AI WhatsApp Automation</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-textprimary mb-4">Connect Directly</h4>
            <div className="space-y-3 text-xs text-textsecondary leading-relaxed">
              <p>
                <strong className="text-textprimary block font-medium">Call / WhatsApp:</strong>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-primarypurple hover:underline">{COMPANY_INFO.phone}</a>
              </p>
              <p>
                <strong className="text-textprimary block font-medium">Email:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">{COMPANY_INFO.email}</a>
              </p>
              <p>
                <strong className="text-textprimary block font-medium">Instagram:</strong>
                <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="text-royalblue hover:underline">@idmsmarttech</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-bordercolor flex flex-col sm:flex-row items-center justify-between text-xs text-textsecondary gap-4">
          <p>© {new Date().getFullYear()} IDM Smart Tech. All Rights Reserved. Based in Shamshabad, Hyderabad.</p>
          <div className="flex space-x-6">
            <a href={COMPANY_INFO.website} target="_blank" rel="noreferrer" className="hover:text-primarypurple transition-colors">Official Domain</a>
            <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-primarypurple transition-colors">Instagram</a>
            <a href="#contact" className="hover:text-primarypurple transition-colors">Request Free Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
