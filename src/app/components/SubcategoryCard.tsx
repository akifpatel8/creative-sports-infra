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
};

export function SubcategoryCard({ subcategory, index }: SubcategoryCardProps) {
  const { name, description, images } = subcategory;
  const hasMultipleImages = images.length > 1;

  return (
    <article className="flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3] bg-gray-100">
        {hasMultipleImages ? (
          <Carousel className="h-full w-full">
            <CarouselContent className="h-full ml-0">
              {images.map((src, imageIndex) => (
                <CarouselItem
                  key={`${subcategory.id}-${imageIndex}`}
                  className="pl-0 basis-full">
                  <ImageWithFallback
                    src={src}
                    alt={`${name} — image ${imageIndex + 1}`}
                    className="h-full w-full object-cover aspect-[4/3]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 border-0 bg-white/90 shadow-md hover:bg-white size-8" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 border-0 bg-white/90 shadow-md hover:bg-white size-8" />
          </Carousel>
        ) : (
          <ImageWithFallback
            src={images[0]}
            alt={name}
            className="h-full w-full object-cover"
          />
        )}
        {hasMultipleImages && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
            {images.length} photos
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          {name}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
