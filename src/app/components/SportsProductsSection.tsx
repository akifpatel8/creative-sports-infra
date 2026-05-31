import { useNavigate } from 'react-router';

import { SportsProductsCatalog } from './SportsProductsCatalog';

/** Home page teaser: selecting a sport opens the full catalog on /products */
export function SportsProductsSection() {
  const navigate = useNavigate();

  return (
    <SportsProductsCatalog
      selectedSportId={null}
      onSelectSport={(sportId) => {
        if (sportId) {
          navigate(`/products?sport=${sportId}`);
        }
      }}
      showViewAllLink
    />
  );
}
