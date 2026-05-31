import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export type ActiveNavSection = 'home' | 'products' | 'our-work' | 'contact';

const WATCHED_SECTIONS = ['our-work', 'contact'] as const;

function pickSectionFromVisibility(ratios: Record<string, number>): ActiveNavSection {
  const contact = ratios.contact ?? 0;
  const ourWork = ratios['our-work'] ?? 0;

  if (contact >= 0.12) return 'contact';
  if (ourWork >= 0.12) return 'our-work';
  return 'home';
}

export function useActiveNavSection(): ActiveNavSection {
  const { pathname } = useLocation();
  const [section, setSection] = useState<ActiveNavSection>('home');

  useEffect(() => {
    if (pathname === '/products') {
      setSection('products');
      return;
    }

    if (pathname !== '/') {
      setSection('home');
      return;
    }

    const elements = WATCHED_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (elements.length === 0) {
      setSection('home');
      return;
    }

    const ratios: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios[entry.target.id] = entry.intersectionRatio;
        }
        setSection(pickSectionFromVisibility(ratios));
      },
      {
        root: null,
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return section;
}
