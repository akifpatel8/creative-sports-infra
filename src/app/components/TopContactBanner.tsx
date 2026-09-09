import { Mail, Phone, MessageSquare } from 'lucide-react';

import { CONTACT_EMAILS, PRIMARY_PHONE } from '../contact-info';

export function TopContactBanner() {
  const cleanPhone = PRIMARY_PHONE.href.replace(/\D/g, '');

  return (
    <div className="bg-slate-100/95 text-slate-800 border-b border-slate-200 text-xs sm:text-sm py-1.5 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 min-w-0">
        {/* Phone / Contact Link */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <a
            href={PRIMARY_PHONE.href}
            className="inline-flex items-center gap-1.5 font-medium text-slate-800 hover:text-blue-600 transition-colors shrink-0"
          >
            <Phone className="size-3.5 text-blue-600" />
            <span className="hidden min-[400px]:inline text-slate-500 font-normal">Call:</span>
            <span className="font-bold text-slate-900 tracking-tight">{PRIMARY_PHONE.display}</span>
          </a>

          <span className="hidden md:inline text-slate-300 font-light">|</span>

          <a
            href={CONTACT_EMAILS[0].href}
            className="hidden md:inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors truncate"
          >
            <Mail className="size-3.5 text-blue-600 shrink-0" />
            <span className="truncate font-medium">{CONTACT_EMAILS[0].display}</span>
          </a>
        </div>

        {/* Fast Action Links */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={`https://wa.me/${cleanPhone}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20sports%20facility%20construction`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-[11px] sm:text-xs transition-all shadow-xs"
          >
            <MessageSquare className="size-3 sm:size-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold text-xs transition-all shadow-xs"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}
