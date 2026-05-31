/** Shared contact details used across the site */
export const CONTACT_PHONES = [
  { display: '+91 98765 43210', href: 'tel:+919876543210' },
  { display: '+91 87654 32109', href: 'tel:+918765432109' },
] as const;

export const CONTACT_EMAILS = [
  {
    display: 'info@creativesportsinfra.com',
    href: 'mailto:info@creativesportsinfra.com',
  },
  {
    display: 'sales@creativesportsinfra.com',
    href: 'mailto:sales@creativesportsinfra.com',
  },
] as const;

export const PRIMARY_PHONE = CONTACT_PHONES[0];
