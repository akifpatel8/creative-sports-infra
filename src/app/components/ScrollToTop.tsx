import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { scrollToPageTop } from '../hooks/useScrollToTop';

const SCROLL_TARGET_HASHES = new Set(['#contact', '#our-work']);

/** Scrolls to top on route changes (skips when navigating to in-page sections). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (SCROLL_TARGET_HASHES.has(hash)) return;
    scrollToPageTop('auto');
  }, [pathname, hash]);

  return null;
}
