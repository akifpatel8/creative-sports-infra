import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

import { CONTACT_EMAILS, CONTACT_PHONES, PRIMARY_PHONE } from '../contact-info';
import { Button } from './ui/button';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const cleanPhone = PRIMARY_PHONE.href.replace(/\D/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 scroll-mt-36">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Build Your Sports Facility With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Ready to plan a championship arena, community sports club, or private court?
            Contact our engineering team for site visits, technical consultation, and estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Details & WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-700/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md">
                  <MessageSquare className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Fast WhatsApp Consultation</h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
                    Chat directly with our project engineers for layout advice, material catalogs, and instant ballpark quotes.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-xl shadow-xs"
                  >
                    <a
                      href={`https://wa.me/${cleanPhone}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20sports%20facility%20construction`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MessageSquare className="size-4 fill-current" />
                      Chat on WhatsApp
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Information Cards */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Direct Phone</h4>
                  {CONTACT_PHONES.map((p) => (
                    <p key={p.href}>
                      <a
                        href={p.href}
                        className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        {p.display}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Email Inquiries</h4>
                  {CONTACT_EMAILS.map((e) => (
                    <p key={e.href}>
                      <a
                        href={e.href}
                        className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        {e.display}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Head Office &amp; Operations</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    123 Sports Complex Road, Industrial Area,<br />
                    Mumbai - 400001, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-xs text-gray-400 mt-0.5">Sunday: Closed (WhatsApp open for urgent inquiries)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form below and our project engineers will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-blue-50 border border-blue-200 space-y-3">
                <div className="inline-flex p-3 rounded-full bg-blue-600 text-white">
                  <CheckCircle className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Thank you for your message!</h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Our sports infrastructure team has received your project details and will connect with you shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs"
                >
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                      placeholder="e.g. Ramesh Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Sport / Facility Type
                    </label>
                    <select
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow bg-white text-gray-700"
                    >
                      <option value="badminton">Badminton Court (Wood / PVC)</option>
                      <option value="basketball">Basketball Arena / Court</option>
                      <option value="padel">Padel Tennis Court</option>
                      <option value="tennis">Tennis / Pickleball Court</option>
                      <option value="cricket-turf">Box Cricket / Football Turf</option>
                      <option value="running-track">Athletic Running Track</option>
                      <option value="other">Multi-Sport / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Project Location &amp; Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                    placeholder="Tell us about the court dimensions, city/location, whether it is indoor or outdoor, and expected timeline..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md shadow-blue-600/20 text-sm sm:text-base cursor-pointer"
                >
                  Submit Project Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

