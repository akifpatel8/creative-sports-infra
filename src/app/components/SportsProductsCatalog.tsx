import { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  Sparkles,
  Layers,
} from "lucide-react";
import { Link } from "react-router";

import {
  SPORTS_PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductSportCategory,
  type SportProduct,
} from "../data/sportsProducts";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SubcategoryCard } from "./SubcategoryCard";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

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
  sectionId = "products",
}: SportsProductsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductSportCategory>("all");

  const selectedSport = SPORTS_PRODUCTS.find((s) => s.id === selectedSportId);

  // Filter products by selected category tab when viewing the catalog grid
  const filteredProducts = activeCategory === "all"
    ? SPORTS_PRODUCTS
    : SPORTS_PRODUCTS.filter((sport) => sport.category === activeCategory);

  const handleBackToAll = () => {
    onSelectSport(null);
  };

  const getWhatsAppInquiryUrl = (sport: SportProduct) => {
    const text = encodeURIComponent(
      `Hello Creative Sports Infra, I would like to inquire about specifications and turnkey installation for ${sport.title}.`
    );
    return `https://wa.me/919987545934?text=${text}`;
  };

  return (
    <section id={sectionId} className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="size-3.5" />
            Turnkey Sports Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            World-Class Sports &amp; Flooring Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {selectedSport
              ? `Engineered surface specifications, multi-layer cross-sections, and proof-of-work for ${selectedSport.title.toLowerCase()}.`
              : "Discover FIFA, BWF, FIBA, IAAF, and ITF certified sports surfaces constructed with precision engineering."}
          </p>
        </div>

        {selectedSport ? (
          /* Single Sport Detail View */
          <div>
            {/* Breadcrumb / Back Button */}
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <Button
                type="button"
                variant="outline"
                className="text-slate-700 hover:text-blue-600 hover:bg-white border-slate-200 shadow-sm font-medium"
                onClick={handleBackToAll}
              >
                <ArrowLeft className="size-4 mr-1.5" aria-hidden />
                Back to All Sports
              </Button>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppInquiryUrl(selectedSport)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 shadow-sm transition-all"
                >
                  <MessageSquare className="size-4" />
                  Inquire on WhatsApp
                </a>
                <a
                  href="tel:+919987545934"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2.5 shadow-sm transition-all"
                >
                  <Phone className="size-4 text-blue-600" />
                  Call Engineering Team
                </a>
              </div>
            </div>

            {/* Sport Overview Hero Banner */}
            <div className="mb-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2.5 flex-wrap mb-3">
                    <span className="rounded-md bg-blue-500/30 border border-blue-400/40 px-2.5 py-1 text-xs font-semibold text-blue-200">
                      {selectedSport.badge}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {selectedSport.subcategories.length} Specialized Systems Available
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                    {selectedSport.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedSport.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Subcategories Grid */}
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="size-5 text-blue-600" />
                Available Flooring &amp; Construction Systems
              </h4>
              <span className="text-xs text-slate-500">
                Swipe or click arrows to view photos
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
              {selectedSport.subcategories.map((sub, index) => (
                <li key={sub.id}>
                  <SubcategoryCard
                    subcategory={sub}
                    index={index}
                    sportTitle={selectedSport.title}
                  />
                </li>
              ))}
            </ul>

            {/* Consultation Banner */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-sm max-w-4xl mx-auto">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Need Guidance on Sub-Base Requirements or Court Sizing?
              </h4>
              <p className="text-sm text-slate-600 mb-6 max-w-2xl mx-auto">
                Our civil and sports infrastructure specialists offer complimentary site inspections, sub-base leveling analysis, and turn-key BOQ estimates across India.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={getWhatsAppInquiryUrl(selectedSport)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-3 shadow-sm transition-all"
                >
                  <MessageSquare className="size-4" />
                  Chat on WhatsApp (+91 9987545934)
                </a>
                <Button asChild variant="outline" className="border-slate-300">
                  <Link to="/contact">Request Official Site Survey</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Products Catalog Grid with Category Filter */
          <div>
            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = cat.id === "all"
                  ? SPORTS_PRODUCTS.length
                  : SPORTS_PRODUCTS.filter((s) => s.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm",
                      isActive
                        ? "bg-blue-600 text-white shadow-blue-500/20 shadow-md ring-2 ring-blue-600 ring-offset-2"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
              {filteredProducts.map((sport) => (
                <li key={sport.id}>
                  <button
                    type="button"
                    onClick={() => onSelectSport(sport.id)}
                    className={cn(
                      "w-full h-full text-left flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm",
                      "overflow-hidden transition-all duration-200 hover:shadow-xl hover:border-blue-400 group",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    )}
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <ImageWithFallback
                        src={sport.imageSrc}
                        alt={sport.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Certification Pill Top Left */}
                      <span className="absolute top-3 left-3 rounded-md bg-blue-600/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white shadow-md flex items-center gap-1.5">
                        <ShieldCheck className="size-3" />
                        {sport.badge}
                      </span>

                      {/* Subcategories count badge Bottom Right */}
                      <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                        {sport.subcategories.length} systems
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {sport.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {sport.description}
                      </p>

                      {/* Subcategory System Chips Preview */}
                      <div className="mt-auto mb-4 flex flex-wrap gap-1.5">
                        {sport.subcategories.slice(0, 3).map((sub) => (
                          <span
                            key={sub.id}
                            className="inline-block rounded-md bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 font-medium border border-slate-200/60"
                          >
                            {sub.name.replace(" System", "").replace(" Flooring", "")}
                          </span>
                        ))}
                        {sport.subcategories.length > 3 && (
                          <span className="inline-block rounded-md bg-blue-50 text-blue-700 text-[11px] px-2 py-0.5 font-semibold">
                            +{sport.subcategories.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Link */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                        <span>Explore Technical Specs</span>
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View All Products CTA on Homepage */}
        {showViewAllLink && !selectedSport && (
          <div className="mt-12 sm:mt-16 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 rounded-xl text-base shadow-lg shadow-blue-500/20">
              <Link to="/products">
                Explore Full Technical Specifications
                <ChevronRight className="size-5 ml-1" aria-hidden />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
