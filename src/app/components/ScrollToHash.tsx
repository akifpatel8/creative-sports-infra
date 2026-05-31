import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { scrollToSection } from '../hooks/useScrollToSection';

const HASH_TARGETS: Record<string, string> = {
  '#contact': 'contact',
  '#our-work': 'our-work',
};

/** Scrolls to hash targets after SPA navigation (e.g. /#contact from /products). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const sectionId = HASH_TARGETS[hash];
    if (!sectionId) return;

    const scroll = () => scrollToSection(sectionId);

    const timeoutId = window.setTimeout(scroll, 50);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
}
