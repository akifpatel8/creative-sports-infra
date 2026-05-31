import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { scrollToPageTop } from '../hooks/useScrollToTop';

/** Scrolls to top on route changes (skips when navigating to #contact). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact') return;
    scrollToPageTop('auto');
  }, [pathname, hash]);

  return null;
}
