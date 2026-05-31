import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function scrollToContactSection() {
  document.getElementById('contact')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function useScrollToContact() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = useCallback(
    (event?: { preventDefault: () => void }) => {
      event?.preventDefault();

      if (location.pathname === '/') {
        scrollToContactSection();
        window.history.replaceState(null, '', '/#contact');
        return;
      }

      navigate({ pathname: '/', hash: 'contact' });
    },
    [location.pathname, navigate],
  );

  return { goToContact, scrollToContactSection };
}
