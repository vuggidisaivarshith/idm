'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#07090E] text-white border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-copper flex items-center justify-center font-black text-black text-lg">
                IDM
              </div>
              <span className="font-bold text-xl tracking-wider text-white">IDM COMPANIES</span>
            </div>
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              A premier real estate development, in-house construction, and residential property management company founded in 1993. Building communities that elevate lives.
            </p>
            <div className="pt-2">
              <span className="text-xs text-copper font-medium tracking-wide">
                Dual Corporate Headquarters: Scottsdale, AZ & Vancouver, WA
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-copper mb-4">Architecture & Living</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#portfolio" className="hover:text-white transition">Acero Communities</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Meritum Living</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Commercial Spaces</a></li>
              <li><a href="#floorplans" className="hover:text-white transition">Residence Floorplans</a></li>
              <li><a href="https://liveidm.com" target="_blank" rel="noreferrer" className="hover:text-copper transition">Resident Portal</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-copper mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#model" className="hover:text-white transition">Land Acquisition</a></li>
              <li><a href="#model" className="hover:text-white transition">In-House Construction</a></li>
              <li><a href="#model" className="hover:text-white transition">Asset Management</a></li>
              <li><a href="#model" className="hover:text-white transition">Capital Partnerships</a></li>
              <li><a href="#culture" className="hover:text-white transition">IDM Cares</a></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-copper mb-4">Direct Contact</h4>
            <div className="space-y-3 text-xs text-white/60 leading-relaxed">
              <p>
                <strong className="text-white block">Scottsdale, AZ:</strong>
                (480) 977-3477
              </p>
              <p>
                <strong className="text-white block">Vancouver, WA:</strong>
                (360) 903-0283
              </p>
              <p>
                <strong className="text-white block">Inquiries:</strong>
                info@idmcompanies.com
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} IDM Companies. All Rights Reserved. Equal Housing Opportunity.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
