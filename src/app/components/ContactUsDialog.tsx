import { Mail, Phone } from 'lucide-react';

import { CONTACT_EMAILS, CONTACT_PHONES } from '../contact-info';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

type ContactUsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactUsDialog({ open, onOpenChange }: ContactUsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact us</DialogTitle>
          <DialogDescription>
            Call or email us for a detailed quote and site visit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
              <Phone className="size-3.5" aria-hidden />
              Phone
            </p>
            <ul className="space-y-2">
              {CONTACT_PHONES.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-base font-medium text-blue-600 hover:underline"
                  >
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
              <Mail className="size-3.5" aria-hidden />
              Email
            </p>
            <ul className="space-y-2">
              {CONTACT_EMAILS.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="text-base font-medium text-blue-600 hover:underline break-all"
                  >
                    {e.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
