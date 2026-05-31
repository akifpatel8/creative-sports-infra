import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { SportsProductsCatalog } from '../components/SportsProductsCatalog';
import { isValidSportId } from '../data/sportsProducts';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sportParam = searchParams.get('sport');

  const isValidSport = isValidSportId(sportParam);
  const selectedSportId = isValidSport ? sportParam : null;

  useEffect(() => {
    if (sportParam && !isValidSport) {
      setSearchParams({}, { replace: true });
    }
  }, [sportParam, isValidSport, setSearchParams]);

  const handleSelectSport = (sportId: string | null) => {
    if (sportId) {
      setSearchParams({ sport: sportId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <SportsProductsCatalog
      selectedSportId={selectedSportId}
      onSelectSport={handleSelectSport}
      sectionId="products-catalog"
    />
  );
}
