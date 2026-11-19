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
    <section id="contact" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Agency Details */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 space-y-6">
            <div className="badge-aurora">
              Let&apos;s Talk Growth
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight leading-tight text-textprimary">
              Ready to Make Your Brand <br />
              <span className="font-extrabold text-gradient-aurora">
                Impossible to Ignore?
              </span>
            </h2>
            <p className="text-textsecondary text-base leading-relaxed">
              Book a creative marketing consultation or connect directly with our agency team in Shamshabad, Hyderabad to architect your next viral campaign.
            </p>

            <div className="space-y-4 pt-4">
              <div className="aurora-card p-5">
                <p className="text-xs uppercase tracking-wider text-primarypurple font-bold">Hyderabad Office Headquarters</p>
                <p className="text-sm font-semibold text-textprimary mt-1 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="aurora-card p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-textsecondary font-bold">Call / WhatsApp</p>
                  <p className="text-lg font-bold text-textprimary mt-0.5">{COMPANY_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="px-4 py-2 rounded-full bg-sectionsoft text-primarypurple border border-primarypurple/20 text-xs font-bold uppercase tracking-wider hover:bg-primarypurple hover:text-white transition-all shadow-2xs"
                >
                  Call Now
                </a>
              </div>

              <div className="aurora-card p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-textsecondary font-bold">Official Email</p>
                  <p className="text-base font-semibold text-textprimary mt-0.5">{COMPANY_INFO.email}</p>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="px-4 py-2 rounded-full bg-pagebg text-textsecondary border border-bordercolor text-xs font-bold uppercase tracking-wider hover:bg-sectionsoft hover:text-primarypurple transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Marketing Consultation Form */}
          <ScrollReveal variant="fade-left" className="lg:col-span-7">
            <div className="aurora-card p-8 sm:p-10 shadow-soft">
            <h3 className="text-2xl font-heading font-bold text-textprimary mb-1">
              Request Your Marketing Consultation
            </h3>
            <p className="text-sm text-textsecondary mb-8">
              Share details about your brand. We will formulate a tailored strategy and connect with you directly on WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-sectionsoft border border-primarypurple/30">
                <span className="text-4xl" aria-hidden="true">🚀</span>
                <h4 className="text-xl font-heading font-bold text-textprimary mt-3">Consultation Request Received!</h4>
                <p className="text-sm text-textsecondary mt-1">
                  Thank you! An IDM Smart Tech marketing strategist will review your brand details and connect via WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
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
                      className={`aurora-input w-full text-sm ${errors.name ? 'border-red-400 focus:border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-[11px] text-red-500 mt-1 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
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
                      className={`aurora-input w-full text-sm ${errors.phone ? 'border-red-400 focus:border-red-500' : ''}`}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="text-[11px] text-red-500 mt-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-business" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
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
                      className={`aurora-input w-full text-sm ${errors.businessName ? 'border-red-400 focus:border-red-500' : ''}`}
                    />
                    {errors.businessName && (
                      <p id="contact-business-error" className="text-[11px] text-red-500 mt-1 font-medium">
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@business.com"
                      className="aurora-input w-full text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-industry" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Your Industry *
                    </label>
                    <select
                      id="contact-industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="aurora-input w-full text-sm bg-white"
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
                    <label htmlFor="contact-service" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Primary Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="aurora-input w-full text-sm bg-white"
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
                  <label htmlFor="contact-budget" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                    Monthly Marketing Budget (Optional)
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="aurora-input w-full text-sm bg-white"
                  >
                    <option value="₹5,000 - ₹10,000 / month">₹5,000 - ₹10,000 / month</option>
                    <option value="₹10,000 - ₹25,000 / month">₹10,000 - ₹25,000 / month</option>
                    <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000+ / month">₹50,000+ / month</option>
                    <option value="Looking for One-Time Project">Looking for One-Time Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                    Current Challenges & Goals
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand targets, current Instagram page or ad challenges..."
                    className="aurora-input w-full text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-aurora-primary py-3.5 text-xs uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Marketing Request'}
                  </button>
                  <a
                    href={getWhatsAppUrl(prefilledWhatsAppMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-full bg-brandmint text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span aria-hidden="true">💬</span> Direct WhatsApp Chat
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
