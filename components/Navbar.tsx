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

      const sections = ['services', 'portfolio', 'process', 'pricing', 'contact'];
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#portfolio', label: 'Creative Work', id: 'portfolio' },
    { href: '#process', label: 'How We Grow', id: 'process' },
    { href: '#pricing', label: 'Packages', id: 'pricing' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-bordercolor py-3.5 shadow-sm'
          : 'bg-pagebg/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group" aria-label="IDM Smart Tech Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primarypurple via-royalblue to-softpink flex items-center justify-center shadow-md shadow-primarypurple/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-heading font-extrabold text-base tracking-tighter">IDM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold tracking-tight text-textprimary flex items-center gap-1.5">
              IDM SMART TECH
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sectionsoft text-primarypurple font-semibold border border-primarypurple/20">SMMA</span>
            </span>
            <span className="text-[10px] tracking-wider text-textsecondary uppercase font-medium">Creative & Digital Growth • Hyderabad</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-textsecondary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-primarypurple font-semibold'
                  : 'hover:text-primarypurple'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primarypurple via-royalblue to-softpink rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide border border-bordercolor bg-white text-textprimary hover:border-primarypurple hover:text-primarypurple transition-all flex items-center gap-1.5 shadow-2xs"
            aria-label="Call IDM Smart Tech"
          >
            <span aria-hidden="true">📞</span> {COMPANY_INFO.phone}
          </a>
          <a
            href="#contact"
            className="btn-aurora-primary py-2.5 px-5 text-xs"
          >
            Get Growth Strategy
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white border border-bordercolor text-textprimary hover:text-primarypurple transition-colors shadow-2xs"
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
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-bordercolor px-6 py-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-textsecondary hover:text-primarypurple py-1 border-b border-bordercolor/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-bordercolor text-textprimary bg-sectionsoft"
              >
                Call: {COMPANY_INFO.phone}
              </a>
              <a
                href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to get a growth strategy for my business.')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-primarypurple to-royalblue text-white shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
