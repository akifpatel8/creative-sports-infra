import { Mail, Phone } from 'lucide-react';

import { CONTACT_EMAILS, PRIMARY_PHONE } from '../contact-info';
import { Button } from './ui/button';

export function TopContactBanner() {
  return (
    <div className="bg-gray-900 text-white border-b border-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 min-w-0">
        <p className="text-sm text-gray-300 text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 min-w-0">
          <span className="text-gray-400 shrink-0">Reach us</span>
          <a
            href={PRIMARY_PHONE.href}
            className="font-semibold text-white tabular-nums hover:text-blue-300 transition-colors text-center sm:text-left"
          >
            {PRIMARY_PHONE.display}
          </a>
        </p>
        <div className="flex flex-col min-[360px]:flex-row w-full sm:w-auto items-stretch min-[360px]:items-center justify-center gap-2 shrink-0">
          <Button
            asChild
            size="sm"
            className="w-full min-[360px]:w-auto min-[360px]:flex-1 sm:flex-initial bg-blue-600 text-white hover:bg-blue-500 border-0"
          >
            <a href={PRIMARY_PHONE.href} className="justify-center">
              <Phone className="size-4 shrink-0" aria-hidden />
              Call us
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="w-full min-[360px]:w-auto min-[360px]:flex-1 sm:flex-initial border-gray-600 text-white bg-transparent hover:bg-gray-800 hover:text-white"
          >
            <a href={CONTACT_EMAILS[0].href} className="justify-center">
              <Mail className="size-4 shrink-0" aria-hidden />
              Mail us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
