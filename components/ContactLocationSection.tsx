'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ContactLocationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    industry: 'Retail & E-Commerce',
    service: 'Social Media Management (Instagram/Facebook)',
    budget: '₹10,000 - ₹25,000 / month',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; businessName?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; businessName?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit WhatsApp phone number.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or brand name.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 7000);
    }, 600);
  };

  const prefilledWhatsAppMessage = `Hello IDM Smart Tech,
Name: ${formData.name || 'Not provided'}
Business: ${formData.businessName || 'Not provided'}
Industry: ${formData.industry}
Service: ${formData.service}
Budget: ${formData.budget}
Message: ${formData.message || 'I would like to discuss my marketing strategy.'}`;

  return (
    <section id="contact" className="py-24 bg-white text-[#0F172A] relative border-t-2 border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Agency Details */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="rule-accent" />
              <span className="badge-mono">DIRECT CONSULTATION</span>
            </div>
            <h2 className="font-serif text-[34px] sm:text-[46px] font-normal leading-[1.1] text-[#0F172A] tracking-[-0.02em]">
              Ready to Make Your Brand <br />
              <span className="italic text-[#365679] font-medium">Impossible to Ignore?</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed font-normal">
              Book a strategic consultation or connect directly with our agency team in Shamshabad, Hyderabad to architect your next high-converting campaign.
            </p>

            <div className="space-y-4 pt-2">
              <div className="glossy-card p-5 border-2 border-slate-200/90 bg-white">
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#0F172A] block mb-1">
                  HYDERABAD OFFICE HEADQUARTERS
                </span>
                <p className="text-[13.5px] font-medium text-[#334155] leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="glossy-card p-5 border-2 border-slate-200/90 bg-white flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#64748B] block">
                    CALL / WHATSAPP DIRECT
                  </span>
                  <p className="font-mono text-[16px] font-bold text-[#0F172A] mt-0.5">{COMPANY_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="btn-glossy-secondary py-2 px-4 text-[10.5px]"
                >
                  CALL NOW
                </a>
              </div>

              <div className="glossy-card p-5 border-2 border-slate-200/90 bg-white flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#64748B] block">
                    OFFICIAL EMAIL
                  </span>
                  <p className="font-mono text-[14px] font-medium text-[#0F172A] mt-0.5">{COMPANY_INFO.email}</p>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="btn-glossy-secondary py-2 px-4 text-[10.5px]"
                >
                  EMAIL US
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Marketing Consultation Form */}
          <ScrollReveal variant="fade-left" className="lg:col-span-7">
            <div className="glossy-card p-8 sm:p-10 border-2 border-slate-300 bg-white shadow-md">
              <h3 className="font-serif text-[24px] font-normal text-[#0F172A] mb-1">
                Request Your Marketing Consultation
              </h3>
              <p className="text-[13.5px] text-[#334155] mb-8 font-normal">
                Share details about your brand. We will formulate a tailored strategy and connect with you directly on WhatsApp.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-slate-50 border-2 border-[#0F172A]">
                  <span className="text-3xl" aria-hidden="true">✓</span>
                  <h4 className="font-serif text-[20px] font-normal text-[#0F172A] mt-2">Consultation Request Received!</h4>
                  <p className="text-[13px] text-[#334155] mt-1 font-normal">
                    Thank you! An IDM Smart Tech marketing strategist will review your brand details and connect via WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full text-[13px] px-3.5 py-2.5 bg-white border-2 text-[#0F172A] outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-slate-300 focus:border-[#0F172A]'
                        }`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="font-mono text-[10px] text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        required
                        type="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full text-[13px] px-3.5 py-2.5 bg-white border-2 text-[#0F172A] outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-[#0F172A]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="font-mono text-[10px] text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-business" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        Business Name *
                      </label>
                      <input
                        id="contact-business"
                        required
                        type="text"
                        aria-invalid={!!errors.businessName}
                        aria-describedby={errors.businessName ? 'contact-business-error' : undefined}
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        placeholder="e.g. Zen Lifestyle Cafe"
                        className={`w-full text-[13px] px-3.5 py-2.5 bg-white border-2 text-[#0F172A] outline-none transition-colors ${
                          errors.businessName ? 'border-red-500' : 'border-slate-300 focus:border-[#0F172A]'
                        }`}
                      />
                      {errors.businessName && (
                        <p id="contact-business-error" className="font-mono text-[10px] text-red-600 mt-1">
                          {errors.businessName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@business.com"
                        className="w-full text-[13px] px-3.5 py-2.5 bg-white border-2 border-slate-300 focus:border-[#0F172A] text-[#0F172A] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-industry" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        Your Industry *
                      </label>
                      <select
                        id="contact-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full text-[13px] px-3.5 py-2.5 bg-white border-2 border-slate-300 focus:border-[#0F172A] text-[#0F172A] outline-none transition-colors"
                      >
                        <option value="Retail & E-Commerce">Retail & D2C E-Commerce</option>
                        <option value="Healthcare & Clinics">Healthcare, Doctors & Clinics</option>
                        <option value="Restaurants & Hospitality">Restaurants, Cafes & Food</option>
                        <option value="Salons & Spas">Salons, Spas & Aesthetic Clinics</option>
                        <option value="Education & Coaching">Education, Colleges & Coaching</option>
                        <option value="Fitness & Wellness">Fitness, Gyms & Wellness</option>
                        <option value="B2B & IT Services">B2B, SaaS & IT Services</option>
                        <option value="Other Industry">Other Industry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                        Primary Service Required *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-[13px] px-3.5 py-2.5 bg-white border-2 border-slate-300 focus:border-[#0F172A] text-[#0F172A] outline-none transition-colors"
                      >
                        <option value="Social Media Management (Instagram/Facebook)">Social Media Management (Instagram/FB)</option>
                        <option value="Content Creation & Viral Reels">Content Creation & Reels Video</option>
                        <option value="Performance Marketing (Meta & Google Ads)">Performance Marketing (Paid Ads)</option>
                        <option value="Local SEO & Google Business Profile">Local SEO & Google Business Profile</option>
                        <option value="High-Speed Website / Landing Page">High-Speed Website / Landing Page</option>
                        <option value="Starter Growth Package (₹4,999/mo)">Starter Growth Package (₹4,999/mo)</option>
                        <option value="Pro Plan (₹16,999/mo)">Pro Plan (₹16,999/mo - Leads Gen)</option>
                        <option value="AI Automation & Custom Software">AI Automation & Custom Software</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                      Monthly Marketing Budget (Optional)
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full text-[13px] px-3.5 py-2.5 bg-white border-2 border-slate-300 focus:border-[#0F172A] text-[#0F172A] outline-none transition-colors"
                    >
                      <option value="₹5,000 - ₹10,000 / month">₹5,000 - ₹10,000 / month</option>
                      <option value="₹10,000 - ₹25,000 / month">₹10,000 - ₹25,000 / month</option>
                      <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month</option>
                      <option value="₹50,000+ / month">₹50,000+ / month</option>
                      <option value="Looking for One-Time Project">Looking for One-Time Project</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#0F172A] font-bold mb-1.5">
                      Current Challenges &amp; Goals
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand targets, current Instagram page or ad challenges..."
                      className="w-full text-[13px] px-3.5 py-2.5 bg-white border-2 border-slate-300 focus:border-[#0F172A] text-[#0F172A] outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-ink py-3 text-[11px] flex-1 disabled:opacity-50"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT MARKETING REQUEST'}
                    </button>
                    <a
                      href={getWhatsAppUrl(prefilledWhatsAppMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-emerald-cta py-3 text-[11px]"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      WHATSAPP DIRECT
                    </a>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
