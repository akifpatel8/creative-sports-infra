import { CheckCircle2, MessageSquare, Layers, ShieldCheck, Ruler } from "lucide-react";
import type { SportSubcategory } from "../data/sportsProducts";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type SubcategoryCardProps = {
  subcategory: SportSubcategory;
  index: number;
  sportTitle?: string;
};

export function SubcategoryCard({ subcategory, index, sportTitle }: SubcategoryCardProps) {
  const { name, description, images, specs } = subcategory;
  const hasMultipleImages = images.length > 1;

  const inquiryText = encodeURIComponent(
    `Hello Creative Sports Infra, I am interested in getting a quote/site inspection for: ${sportTitle ? `${sportTitle} - ` : ""}${name}.`
  );
  const whatsappUrl = `https://wa.me/919987545934?text=${inquiryText}`;

  return (
    <article className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* Image Carousel / Media */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
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
                    className="h-full w-full object-cover aspect-[4/3]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 border-0 bg-white/90 text-gray-800 shadow-md hover:bg-white size-8" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 border-0 bg-white/90 text-gray-800 shadow-md hover:bg-white size-8" />
          </Carousel>
        ) : (
          <ImageWithFallback
            src={images[0]}
            alt={name}
            className="h-full w-full object-cover"
          />
        )}

        {/* Counter Badge */}
        {hasMultipleImages && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/70 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white shadow-sm">
            {images.length} photos
          </span>
        )}

        {/* Standards Badge */}
        {specs?.standards && (
          <span className="absolute top-2 left-2 rounded-lg bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-white shadow-sm flex items-center gap-1">
            <ShieldCheck className="size-3.5" />
            {specs.standards}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
          {name}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Technical Specs Pills */}
        {specs && (
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-4 space-y-2 text-xs">
            {specs.thickness && (
              <div className="flex items-start gap-2 text-slate-700">
                <Ruler className="size-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-semibold">Thickness:</strong>{" "}
                  {specs.thickness}
                </span>
              </div>
            )}
            {specs.surfaceType && (
              <div className="flex items-start gap-2 text-slate-700">
                <Layers className="size-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-semibold">Surface:</strong>{" "}
                  {specs.surfaceType}
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
                className="flex items-start gap-2 text-xs text-slate-600"
              >
                <CheckCircle2 className="size-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* WhatsApp Inquiry Action */}
        <div className="mt-auto pt-2 border-t border-gray-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold py-2.5 px-3 transition-colors"
          >
            <MessageSquare className="size-3.5 text-emerald-600" />
            Inquire About This Surface
          </a>
        </div>
      </div>
    </article>
  );
}
