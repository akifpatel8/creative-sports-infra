import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { useScrollToContact } from '../hooks/useScrollToContact';

type ContactLinkProps = {
  className?: string;
  children: ReactNode;
};

export function ContactLink({ className, children }: ContactLinkProps) {
  const { goToContact } = useScrollToContact();

  return (
    <Link to="/#contact" className={className} onClick={goToContact}>
      {children}
    </Link>
  );
}
