import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { scrollToContactSection } from '../hooks/useScrollToContact';

/** Scrolls to hash targets after SPA navigation (e.g. /#contact from /products). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash !== '#contact') return;

    const scroll = () => scrollToContactSection();

    // Allow the home page outlet to mount before scrolling
    const timeoutId = window.setTimeout(scroll, 50);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
}
