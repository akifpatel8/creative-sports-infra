import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { useScrollToSection } from '../hooks/useScrollToSection';

type OurWorkLinkProps = {
  className?: string;
  children: ReactNode;
  'aria-current'?: 'page' | undefined;
  onNavigate?: () => void;
};

export function OurWorkLink({
  className,
  children,
  'aria-current': ariaCurrent,
  onNavigate,
}: OurWorkLinkProps) {
  const goToOurWork = useScrollToSection('our-work', 'our-work');

  return (
    <Link
      to="/#our-work"
      className={className}
      onClick={(e) => {
        goToOurWork(e);
        onNavigate?.();
      }}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
}
