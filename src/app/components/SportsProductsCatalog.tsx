import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { SPORTS_PRODUCTS } from '../data/sportsProducts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SubcategoryCard } from './SubcategoryCard';
import { Button } from './ui/button';
import { cn } from './ui/utils';

type SportsProductsCatalogProps = {
  selectedSportId: string | null;
  onSelectSport: (sportId: string | null) => void;
  showViewAllLink?: boolean;
  sectionId?: string;
};

export function SportsProductsCatalog({
  selectedSportId,
  onSelectSport,
  showViewAllLink = false,
  sectionId = 'products',
}: SportsProductsCatalogProps) {
  const selectedSport = SPORTS_PRODUCTS.find((s) => s.id === selectedSportId);

  return (
    <section id={sectionId} className="py-16 sm:py-20 px-4 sm:px-6 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
            Our products
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sports &amp; flooring solutions
          </h2>
          <p className="text-lg text-gray-600">
            {selectedSport
              ? `Explore flooring and surface options for ${selectedSport.title.toLowerCase()}.`
              : 'Select a sport to view available subcategories and product images.'}
          </p>
        </div>

        {selectedSport ? (
          <div>
            <Button
              type="button"
              variant="ghost"
              className="mb-6 -ml-2 text-gray-700 hover:text-blue-600"
              onClick={() => onSelectSport(null)}
            >
              <ArrowLeft className="size-4" aria-hidden />
              All sports
            </Button>

            <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedSport.title}</h3>
              <p className="text-gray-600 max-w-3xl">{selectedSport.description}</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
              {selectedSport.subcategories.map((sub, index) => (
                <li key={sub.id}>
                  <SubcategoryCard subcategory={sub} index={index} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
            {SPORTS_PRODUCTS.map((sport) => (
              <li key={sport.id}>
                <button
                  type="button"
                  onClick={() => onSelectSport(sport.id)}
                  className={cn(
                    'w-full h-full text-left flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm',
                    'overflow-hidden transition-all hover:shadow-md hover:border-blue-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
                  )}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={sport.imageSrc}
                      alt={sport.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{sport.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {sport.description}
                    </p>
                    <p className="mt-auto text-sm font-medium text-blue-600 flex items-center gap-1">
                      View {sport.subcategories.length} subcategories
                      <ChevronRight className="size-4" aria-hidden />
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        {showViewAllLink && !selectedSport && (
          <div className="mt-12 text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/products">
                View all products
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
