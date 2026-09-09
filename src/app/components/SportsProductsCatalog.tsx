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
import { CertificationLogos } from "./CertificationLogos";
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

function getCategoryColor(category: SportProduct["category"]) {
  switch (category) {
    case "turf":
      return {
        cardBg: "bg-gradient-to-b from-emerald-50 via-teal-50/60 to-emerald-100/50",
        cardBorder: "border-2 border-emerald-300 hover:border-emerald-500",
        topBorder: "border-t-4 border-t-emerald-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-emerald-900/15",
        badge: "bg-emerald-600 text-white",
        categoryTag: "bg-emerald-700 text-white",
        chip: "bg-emerald-200/90 text-emerald-950 border border-emerald-300/90 font-semibold",
        highlight: "group-hover:text-emerald-800",
        actionText: "text-emerald-900 group-hover:text-emerald-700",
        actionBorder: "border-emerald-300/80",
        actionArrow: "text-emerald-600 group-hover:text-emerald-800",
        accent: "bg-emerald-600",
      };
    case "court":
      return {
        cardBg: "bg-gradient-to-b from-amber-50 via-orange-50/60 to-amber-100/50",
        cardBorder: "border-2 border-amber-300 hover:border-amber-500",
        topBorder: "border-t-4 border-t-amber-500",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-amber-900/15",
        badge: "bg-amber-600 text-white",
        categoryTag: "bg-amber-700 text-white",
        chip: "bg-amber-200/90 text-amber-950 border border-amber-300/90 font-semibold",
        highlight: "group-hover:text-amber-800",
        actionText: "text-amber-950 group-hover:text-amber-800",
        actionBorder: "border-amber-300/80",
        actionArrow: "text-amber-600 group-hover:text-amber-800",
        accent: "bg-amber-600",
      };
    case "track":
      return {
        cardBg: "bg-gradient-to-b from-rose-50 via-red-50/60 to-rose-100/50",
        cardBorder: "border-2 border-rose-300 hover:border-rose-500",
        topBorder: "border-t-4 border-t-rose-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-rose-900/15",
        badge: "bg-rose-600 text-white",
        categoryTag: "bg-rose-700 text-white",
        chip: "bg-rose-200/90 text-rose-950 border border-rose-300/90 font-semibold",
        highlight: "group-hover:text-rose-800",
        actionText: "text-rose-950 group-hover:text-rose-800",
        actionBorder: "border-rose-300/80",
        actionArrow: "text-rose-600 group-hover:text-rose-800",
        accent: "bg-rose-600",
      };
    case "racquet":
    default:
      return {
        cardBg: "bg-gradient-to-b from-sky-50 via-blue-50/60 to-indigo-100/50",
        cardBorder: "border-2 border-sky-300 hover:border-sky-500",
        topBorder: "border-t-4 border-t-blue-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-blue-900/15",
        badge: "bg-blue-600 text-white",
        categoryTag: "bg-blue-700 text-white",
        chip: "bg-sky-200/90 text-blue-950 border border-sky-300/90 font-semibold",
        highlight: "group-hover:text-blue-800",
        actionText: "text-blue-950 group-hover:text-blue-800",
        actionBorder: "border-sky-300/80",
        actionArrow: "text-blue-600 group-hover:text-blue-800",
        accent: "bg-blue-600",
      };
  }
}

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
    <section id={sectionId} className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-100/90 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Premium Stadium Arena Showcase Background */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-6 sm:p-10 lg:p-12 mb-10 sm:mb-12 shadow-2xl border border-blue-900/50">
          {/* Decorative court geometry lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.8" />
              <rect x="15" y="20" width="70" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="size-3.5 text-amber-400" />
              <span>Turnkey Sports Infrastructure</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              World-Class Sports &amp; Flooring Solutions
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              {selectedSport
                ? `Engineered surface specifications, multi-layer cross-sections, and proof-of-work for ${selectedSport.title.toLowerCase()}.`
                : "Olympic, federation, and collegiate certified surfaces engineered with precision grading, sub-base leveling, and premium wear resistance."}
            </p>

            {/* Official Certification Logos (IAAF, BWF, FIFA, FIBA, ITF, NBA, etc.) */}
            <CertificationLogos theme="dark" />
          </div>
        </div>

        {selectedSport ? (
          /* Single Sport Detail View */
          <div>
            {/* Breadcrumb / Back Button */}
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <Button
                type="button"
                variant="outline"
                className="text-slate-800 hover:text-blue-600 bg-white border-slate-300 shadow-sm font-bold"
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
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 shadow-md shadow-emerald-700/20 transition-all"
                >
                  <MessageSquare className="size-4" />
                  Inquire on WhatsApp
                </a>
                <a
                  href="tel:+919987545934"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold px-4 py-2.5 shadow-sm transition-all"
                >
                  <Phone className="size-4 text-blue-600" />
                  Call Engineering Team
                </a>
              </div>
            </div>

            {/* Sport Overview Hero Banner */}
            <div className="mb-10 rounded-2xl border border-blue-900/40 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2.5 flex-wrap mb-3">
                    <span className="rounded-md bg-amber-500/20 border border-amber-400/40 px-2.5 py-1 text-xs font-bold text-amber-300">
                      {selectedSport.badge}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {selectedSport.subcategories.length} Specialized Systems Available
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-tight mb-3">
                    {selectedSport.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedSport.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Subcategories Grid */}
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="size-5 text-blue-600" />
                Available Flooring &amp; Construction Systems
              </h4>
              <span className="text-xs text-slate-600 font-medium">
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
                    category={selectedSport.category}
                  />
                </li>
              ))}
            </ul>

            {/* Consultation Banner with Athletic Stadium Theme */}
            <div className="mt-12 rounded-2xl border border-blue-900/60 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-8 text-center text-white shadow-xl max-w-4xl mx-auto">
              <h4 className="font-heading text-lg sm:text-xl font-black text-white mb-2">
                Need Guidance on Sub-Base Requirements or Court Sizing?
              </h4>
              <p className="text-sm text-slate-300 mb-6 max-w-2xl mx-auto">
                Our civil and sports infrastructure specialists offer complimentary site inspections, sub-base leveling analysis, and turn-key BOQ estimates across India.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={getWhatsAppInquiryUrl(selectedSport)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-3 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="size-4" />
                  Chat on WhatsApp (+91 9987545934)
                </a>
                <Button asChild variant="outline" className="border-slate-700 bg-slate-900/80 hover:bg-slate-800 font-bold text-white">
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
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer",
                      isActive
                        ? "bg-slate-950 text-white shadow-md ring-2 ring-blue-600 ring-offset-2"
                        : "bg-slate-200/90 text-slate-800 border border-slate-300 hover:bg-slate-300/90 hover:border-slate-400"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                        isActive
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-300/80 text-slate-800"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Products Grid with Distinct Category Background Colors */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
              {filteredProducts.map((sport) => {
                const colorScheme = getCategoryColor(sport.category);

                return (
                  <li key={sport.id}>
                    <button
                      type="button"
                      onClick={() => onSelectSport(sport.id)}
                      className={cn(
                        "w-full h-full text-left flex flex-col rounded-2xl",
                        colorScheme.cardBg,
                        colorScheme.cardBorder,
                        colorScheme.cardShadow,
                        colorScheme.topBorder,
                        "overflow-hidden transition-all duration-300 hover:-translate-y-1 group cursor-pointer",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      )}
                    >
                      {/* Media Thumbnail Container */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                        <ImageWithFallback
                          src={sport.imageSrc}
                          alt={sport.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                        {/* Certification Badge Top Left */}
                        <span className="absolute top-3 left-3 rounded-md bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-amber-300 border border-amber-400/30 shadow-md flex items-center gap-1.5">
                          <ShieldCheck className="size-3 text-amber-400" />
                          {sport.badge}
                        </span>

                        {/* Subcategories count badge Bottom Right */}
                        <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                          {sport.subcategories.length} systems
                        </span>
                      </div>

                      {/* Card Body with Vibrant Colored Background & High Contrast */}
                      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-transparent">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className={cn("font-heading text-xl font-black text-slate-950 transition-colors", colorScheme.highlight)}>
                            {sport.title}
                          </h3>
                          <span className={cn("text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shrink-0 shadow-xs", colorScheme.categoryTag)}>
                            {sport.category}
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm mb-4 leading-relaxed line-clamp-2 font-medium">
                          {sport.description}
                        </p>

                        {/* Subcategory System Chips Preview */}
                        <div className="mt-auto mb-4 flex flex-wrap gap-1.5">
                          {sport.subcategories.slice(0, 3).map((sub) => (
                            <span
                              key={sub.id}
                              className={cn(
                                "inline-block rounded-md text-[11px] px-2 py-0.5 font-bold shadow-xs",
                                colorScheme.chip
                              )}
                            >
                              {sub.name.replace(" System", "").replace(" Flooring", "")}
                            </span>
                          ))}
                          {sport.subcategories.length > 3 && (
                            <span className="inline-block rounded-md bg-slate-900/10 text-slate-800 text-[11px] px-2 py-0.5 font-extrabold">
                              +{sport.subcategories.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Link with Category Accent */}
                        <div className={cn("pt-3 border-t flex items-center justify-between text-xs font-black transition-colors", colorScheme.actionBorder, colorScheme.actionText)}>
                          <span className="uppercase tracking-wider">Explore Systems</span>
                          <ChevronRight className={cn("size-4 transition-transform group-hover:translate-x-1", colorScheme.actionArrow)} aria-hidden />
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* View All Products CTA on Homepage */}
        {showViewAllLink && !selectedSport && (
          <div className="mt-12 sm:mt-16 text-center">
            <Button asChild size="lg" className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-base shadow-xl cursor-pointer">
              <Link to="/products">
                Explore Full Technical Specifications
                <ChevronRight className="size-5 ml-1 text-amber-400" aria-hidden />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
