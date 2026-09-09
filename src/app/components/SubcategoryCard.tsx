import { CheckCircle2, MessageSquare, Layers, ShieldCheck, Ruler } from "lucide-react";
import type { SportProduct, SportSubcategory } from "../data/sportsProducts";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "./ui/utils";

type SubcategoryCardProps = {
  subcategory: SportSubcategory;
  index: number;
  sportTitle?: string;
  category?: SportProduct["category"];
};

function getSubcategoryColor(category?: SportProduct["category"]) {
  switch (category) {
    case "turf":
      return {
        cardBg: "bg-gradient-to-b from-emerald-50 via-teal-50/60 to-emerald-100/50",
        cardBorder: "border-2 border-emerald-300 hover:border-emerald-500",
        topBorder: "border-t-4 border-t-emerald-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-emerald-900/15",
        featuresCheck: "text-emerald-700",
        divider: "border-emerald-200/90",
      };
    case "court":
      return {
        cardBg: "bg-gradient-to-b from-amber-50 via-orange-50/60 to-amber-100/50",
        cardBorder: "border-2 border-amber-300 hover:border-amber-500",
        topBorder: "border-t-4 border-t-amber-500",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-amber-900/15",
        featuresCheck: "text-amber-700",
        divider: "border-amber-200/90",
      };
    case "track":
      return {
        cardBg: "bg-gradient-to-b from-rose-50 via-red-50/60 to-rose-100/50",
        cardBorder: "border-2 border-rose-300 hover:border-rose-500",
        topBorder: "border-t-4 border-t-rose-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-rose-900/15",
        featuresCheck: "text-rose-700",
        divider: "border-rose-200/90",
      };
    case "racquet":
    default:
      return {
        cardBg: "bg-gradient-to-b from-sky-50 via-blue-50/60 to-indigo-100/50",
        cardBorder: "border-2 border-sky-300 hover:border-sky-500",
        topBorder: "border-t-4 border-t-blue-600",
        cardShadow: "shadow-md hover:shadow-xl hover:shadow-blue-900/15",
        featuresCheck: "text-blue-700",
        divider: "border-sky-200/90",
      };
  }
}

export function SubcategoryCard({ subcategory, index, sportTitle, category }: SubcategoryCardProps) {
  const { name, description, images, specs } = subcategory;
  const hasMultipleImages = images.length > 1;
  const color = getSubcategoryColor(category);

  const inquiryText = encodeURIComponent(
    `Hello Creative Sports Infra, I am interested in getting a quote/site inspection for: ${sportTitle ? `${sportTitle} - ` : ""}${name}.`
  );
  const whatsappUrl = `https://wa.me/919987545934?text=${inquiryText}`;

  return (
    <article
      className={cn(
        "flex flex-col h-full rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1",
        color.cardBg,
        color.cardBorder,
        color.topBorder,
        color.cardShadow
      )}
    >
      {/* Image Carousel / Media */}
      <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
        {hasMultipleImages ? (
          <Carousel className="h-full w-full">
            <CarouselContent className="h-full ml-0">
              {images.map((src, imageIndex) => (
                <CarouselItem
                  key={`${subcategory.id}-${imageIndex}`}
                  className="pl-0 basis-full"
                >
                  <ImageWithFallback
                    src={src}
                    alt={`${name} — image ${imageIndex + 1}`}
                    className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 border-0 bg-slate-950/80 text-white shadow-md hover:bg-slate-900 size-8" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 border-0 bg-slate-950/80 text-white shadow-md hover:bg-slate-900 size-8" />
          </Carousel>
        ) : (
          <ImageWithFallback
            src={images[0]}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Counter Badge */}
        {hasMultipleImages && (
          <span className="absolute bottom-2 right-2 rounded-full bg-slate-950/85 backdrop-blur-sm px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
            {images.length} photos
          </span>
        )}

        {/* Standards Badge */}
        {specs?.standards && (
          <span className="absolute top-2 left-2 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-amber-400/40 px-2.5 py-1 text-xs font-bold text-amber-300 shadow-md flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-amber-400" />
            {specs.standards}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h4 className="font-heading text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">
          {name}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Technical Specs Box with High Contrast Dark Theme */}
        {specs && (
          <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 text-white mb-4 space-y-2 text-xs shadow-inner">
            {specs.thickness && (
              <div className="flex items-start gap-2">
                <Ruler className="size-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-300 font-semibold">Thickness:</strong>{" "}
                  <span className="text-white font-medium">{specs.thickness}</span>
                </span>
              </div>
            )}
            {specs.surfaceType && (
              <div className="flex items-start gap-2">
                <Layers className="size-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-300 font-semibold">Surface:</strong>{" "}
                  <span className="text-white font-medium">{specs.surfaceType}</span>
                </span>
              </div>
            )}
          </div>
        )}

        {/* Key Features Bullets */}
        {specs?.features && specs.features.length > 0 && (
          <ul className="mb-5 space-y-1.5 list-none p-0">
            {specs.features.map((feature, fIndex) => (
              <li
                key={fIndex}
                className="flex items-start gap-2 text-xs text-slate-800 font-medium"
              >
                <CheckCircle2 className={cn("size-3.5 mt-0.5 shrink-0", color.featuresCheck)} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* WhatsApp Inquiry Action */}
        <div className={cn("mt-auto pt-3 border-t", color.divider)}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
          >
            <MessageSquare className="size-3.5 fill-current" />
            Inquire About This Surface
          </a>
        </div>
      </div>
    </article>
  );
}
