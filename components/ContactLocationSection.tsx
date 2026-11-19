'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '@/lib/constants';

export default function ContactLocationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Starter Growth (₹4,999/mo)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white text-textprimary relative border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Agency Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="badge-aurora">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-light tracking-tight leading-tight text-textprimary">
              Ready to Accelerate <br />
              <span className="font-extrabold text-gradient-aurora">
                Your Revenue?
              </span>
            </h2>
            <p className="text-textsecondary text-base leading-relaxed">
              Book a free consultation or discuss your Google Business Profile, paid ads, or web/app project directly with our Shamshabad team.
            </p>

            <div className="space-y-4 pt-4">
              <div className="aurora-card p-5">
                <p className="text-xs uppercase tracking-wider text-primarypurple font-bold">Hyderabad Office Location</p>
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
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 aurora-card p-8 sm:p-10 shadow-soft">
            <h3 className="text-2xl font-heading font-bold text-textprimary mb-2">Request a Free Growth Audit</h3>
            <p className="text-sm text-textsecondary mb-8">
              Fill out this quick form or reach out via WhatsApp for a direct response from our local team.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-sectionsoft border border-primarypurple/30">
                <span className="text-4xl" aria-hidden="true">🚀</span>
                <h4 className="text-xl font-heading font-bold text-textprimary mt-3">Audit Request Received!</h4>
                <p className="text-sm text-textsecondary mt-1">
                  Thank you! An IDM Smart Tech growth specialist will contact you via WhatsApp/Phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Your Name / Business Name *
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="aurora-input w-full text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="aurora-input w-full text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="aurora-input w-full text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                      Primary Service Needed *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="aurora-input w-full text-sm bg-white"
                    >
                      <option value="Starter Growth (₹4,999/mo)">Starter Growth Plan (₹4,999/month)</option>
                      <option value="Growth (₹6,999/mo)">Growth Plan (₹6,999/month)</option>
                      <option value="Ultimate Growth (₹9,999/mo)">Ultimate Growth Plan (₹9,999/month)</option>
                      <option value="Pro Plan (₹16,999/mo)">Pro Plan (₹16,999/month - Leads Gen)</option>
                      <option value="GMB Creation (₹4,000)">Google Business Profile Creation (₹4,000)</option>
                      <option value="GMB Reinstatement (₹2,999)">GMB Suspension Reinstatement (₹2,999)</option>
                      <option value="GMB Video Verification (₹2,999)">GMB Video Verification Guidance (₹2,999)</option>
                      <option value="GMB Number Update (₹2,999)">GMB Phone / Address Update Fix (₹2,999)</option>
                      <option value="Web & Mobile App Development">Web & Mobile App Engineering</option>
                      <option value="AI Automation & Custom Software">AI Automation & Custom CRM/ERP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-textsecondary mb-1.5 font-semibold">
                    Current Challenges / Business Goals
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business, current website or GMB issue, and what targets you want to achieve..."
                    className="aurora-input w-full text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-aurora-primary py-3.5 text-xs uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit Growth Request'}
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello IDM Smart Tech, I would like to consult regarding ${formData.service}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-full bg-brandmint text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span aria-hidden="true">💬</span> WhatsApp Instant
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
