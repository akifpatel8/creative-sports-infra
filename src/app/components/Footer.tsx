import { Link } from 'react-router';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';

import siteLogo from '../../../Assets/sports/New_Logo.jpeg';
import { CONTACT_EMAILS, CONTACT_PHONES, PRIMARY_PHONE } from '../contact-info';
import { scrollToPageTop } from '../hooks/useScrollToTop';
import { ContactLink } from './ContactLink';
import { OurWorkLink } from './OurWorkLink';

export function Footer() {
  const cleanPhone = PRIMARY_PHONE.href.replace(/\D/g, '');

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={scrollToPageTop}
              className="inline-flex items-center gap-3 group"
            >
              <img
                src={siteLogo}
                alt="Creative Sports Infra"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="font-extrabold text-white text-base leading-tight block">
                  Creative Sports Infra
                </span>
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider block">
                  Building Better Playing Environments
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              India&apos;s specialist in turnkey sports infrastructure. We design, engineer, and build
              international-grade courts, stadiums, turfs, and athletic tracks for schools, clubs, and sports hubs.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-xs font-medium">
              <ShieldCheck className="size-3.5" />
              <span>Certified Installation Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link to="/" onClick={scrollToPageTop} className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToPageTop} className="hover:text-blue-400 transition-colors">
                  Sports Products &amp; Flooring
                </Link>
              </li>
              <li>
                <OurWorkLink className="hover:text-blue-400 transition-colors">
                  Our Work (Proof of Work)
                </OurWorkLink>
              </li>
              <li>
                <ContactLink className="hover:text-blue-400 transition-colors">
                  Contact &amp; Site Visits
                </ContactLink>
              </li>
              <li>
                <a
                  href={`https://wa.me/${cleanPhone}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20sports%20facility%20construction`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <MessageSquare className="size-3.5" />
                  WhatsApp Direct Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Sports Infrastructure Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Sports Facilities
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link to="/products?sport=badminton-court" className="hover:text-blue-400 transition-colors">
                  Badminton Courts (Wood / PVC)
                </Link>
              </li>
              <li>
                <Link to="/products?sport=basketball-court" className="hover:text-blue-400 transition-colors">
                  Basketball Courts &amp; Stadiums
                </Link>
              </li>
              <li>
                <Link to="/products?sport=padel-court" className="hover:text-blue-400 transition-colors">
                  Panoramic Padel Tennis
                </Link>
              </li>
              <li>
                <Link to="/products?sport=tennis-court" className="hover:text-blue-400 transition-colors">
                  Tennis Courts (ITF Acrylic / PU)
                </Link>
              </li>
              <li>
                <Link to="/products?sport=cricket-turf" className="hover:text-blue-400 transition-colors">
                  Box Cricket &amp; Football Turf
                </Link>
              </li>
              <li>
                <Link to="/products?sport=athletic-running-track" className="hover:text-blue-400 transition-colors">
                  Full PUR Athletic Running Tracks
                </Link>
              </li>
              <li>
                <Link to="/products?sport=volleyball-court" className="hover:text-blue-400 transition-colors">
                  Volleyball &amp; Multi-Play Courts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 list-none p-0 m-0">
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <a href={PRIMARY_PHONE.href} className="text-white hover:text-blue-400 transition-colors font-medium">
                    {PRIMARY_PHONE.display}
                  </a>
                  <p className="text-xs text-gray-500">{CONTACT_PHONES[1]?.display}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <a href={CONTACT_EMAILS[0].href} className="hover:text-blue-400 transition-colors truncate">
                  {CONTACT_EMAILS[0].display}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Creative Sports Infra. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Engineered to BWF, FIBA, ITF &amp; IAAF International Standards
          </p>
          <button
            type="button"
            onClick={scrollToPageTop}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

