import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function useScrollToSection(sectionId: string, hash: string) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (event?: { preventDefault: () => void }) => {
      event?.preventDefault();

      if (location.pathname === '/') {
        scrollToSection(sectionId);
        window.history.replaceState(null, '', `/#${hash}`);
        return;
      }

      navigate({ pathname: '/', hash });
    },
    [hash, location.pathname, navigate, sectionId],
  );

  return goToSection;
}
