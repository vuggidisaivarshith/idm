'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['services', 'gmb', 'pricing', 'tech', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#gmb', label: 'GMB & Local SEO', id: 'gmb' },
    { href: '#pricing', label: 'Growth Packages', id: 'pricing' },
    { href: '#tech', label: 'Tech & Apps', id: 'tech' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-purple/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group" aria-label="IDM Smart Tech Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple via-blue to-cyan flex items-center justify-center shadow-lg shadow-purple/25 group-hover:scale-105 transition-transform">
            <span className="text-white font-heading font-extrabold text-base tracking-tighter">IDM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold tracking-tight text-white flex items-center gap-1.5">
              IDM SMART TECH
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan/15 text-cyan font-semibold border border-cyan/30">AI</span>
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">Digital Marketing & Tech • Hyderabad</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-cyan font-semibold'
                  : 'hover:text-cyan'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple to-cyan rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/15 text-slate-200 hover:border-cyan hover:text-cyan transition-all flex items-center gap-1.5"
            aria-label="Call IDM Smart Tech"
          >
            <span aria-hidden="true">📞</span> {COMPANY_INFO.phone}
          </a>
          <a
            href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to discuss digital growth and technology services for my business.')}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-purple via-blue to-cyan text-white hover:opacity-90 transition-all shadow-md shadow-purple/20 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-midnight/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-cyan/40 text-cyan"
              >
                Call: {COMPANY_INFO.phone}
              </a>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to get a consultation.')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-purple to-blue text-white"
              >
                Instant WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
