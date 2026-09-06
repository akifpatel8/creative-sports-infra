import { Mail, Phone, MessageSquare } from 'lucide-react';

import { CONTACT_EMAILS, PRIMARY_PHONE } from '../contact-info';

export function TopContactBanner() {
  const cleanPhone = PRIMARY_PHONE.href.replace(/\D/g, '');

  return (
    <div className="bg-gray-950 text-white border-b border-gray-800/80 text-xs sm:text-sm py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 min-w-0">
        {/* Phone / Contact Link */}
        <div className="flex items-center gap-4 min-w-0">
          <a
            href={PRIMARY_PHONE.href}
            className="inline-flex items-center gap-1.5 font-medium text-gray-200 hover:text-blue-400 transition-colors shrink-0"
          >
            <Phone className="size-3.5 text-blue-400" />
            <span className="hidden min-[400px]:inline text-gray-400">Direct:</span>
            <span className="font-semibold text-white">{PRIMARY_PHONE.display}</span>
          </a>

          <span className="hidden md:inline text-gray-700">|</span>

          <a
            href={CONTACT_EMAILS[0].href}
            className="hidden md:inline-flex items-center gap-1.5 text-gray-300 hover:text-blue-400 transition-colors truncate"
          >
            <Mail className="size-3.5 text-blue-400 shrink-0" />
            <span className="truncate">{CONTACT_EMAILS[0].display}</span>
          </a>
        </div>

        {/* Fast Action Links */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`https://wa.me/${cleanPhone}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20sports%20facility%20construction`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 font-medium text-[11px] sm:text-xs transition-colors"
          >
            <MessageSquare className="size-3 sm:size-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 font-medium text-xs transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

