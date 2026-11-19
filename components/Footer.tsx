'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#04060A] text-white border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-base">
                IDM
              </div>
              <span className="font-bold text-xl tracking-tight text-white">IDM SMART TECH</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Hyderabad’s premier AI-powered digital marketing and modern technology agency. Delivering measurable ROI through local SEO, Google Ads, custom web/app development, and business automations.
            </p>
            <div className="pt-2 text-xs text-cyan-400 font-medium">
              📍 Shamshabad, Hyderabad, Telangana — 501218
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">GMB & Local SEO</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#gmb" className="hover:text-white transition">New GMB Creation (₹4,000)</a></li>
              <li><a href="#gmb" className="hover:text-white transition">Profile Reinstatement (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-white transition">Video Verification (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-white transition">Phone Number Fixes (₹2,999)</a></li>
              <li><a href="#gmb" className="hover:text-white transition">Google Maps 3-Pack Ranking</a></li>
            </ul>
          </div>

          {/* Marketing & Tech */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Tech & Marketing</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition">Starter Growth (₹4,999/mo)</a></li>
              <li><a href="#services" className="hover:text-white transition">Google & Meta Ads (PPC)</a></li>
              <li><a href="#tech" className="hover:text-white transition">Web & App Development</a></li>
              <li><a href="#tech" className="hover:text-white transition">Custom CRM / ERP Software</a></li>
              <li><a href="#services" className="hover:text-white transition">AI WhatsApp Automation</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Connect Directly</h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <p>
                <strong className="text-white block">Call / WhatsApp:</strong>
                <a href="tel:+918519837818" className="text-cyan-400 hover:underline">+91 85198 37818</a>
              </p>
              <p>
                <strong className="text-white block">Email:</strong>
                info@idmsmarttech.com
              </p>
              <p>
                <strong className="text-white block">Instagram:</strong>
                <a href="https://www.instagram.com/idmsmarttech/" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">@idmsmarttech</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} IDM Smart Tech. All Rights Reserved. Based in Shamshabad, Hyderabad.</p>
          <div className="flex space-x-6">
            <a href="https://www.idmsmarttech.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">Official Domain</a>
            <a href="https://www.instagram.com/idmsmarttech/" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="#contact" className="hover:text-white transition">Request Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
