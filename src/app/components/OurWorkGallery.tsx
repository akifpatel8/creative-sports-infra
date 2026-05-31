import { useState } from 'react';
import { Play } from 'lucide-react';

import {
  OUR_WORK_GALLERY,
  type GalleryItem,
  type GalleryVideoItem,
} from '../data/ourWorkGallery';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { cn } from './ui/utils';

function isVideoItem(item: GalleryItem): item is GalleryVideoItem {
  return item.type === 'video';
}

function isYoutubeEmbed(src: string) {
  return src.includes('youtube.com/embed') || src.includes('youtu.be');
}

export function OurWorkGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="our-work" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 scroll-mt-44">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            View our work
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse of courts, tracks, and turfs we have designed and built for schools,
            clubs, and commercial sports facilities across India.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0 auto-rows-[140px] sm:auto-rows-[180px]">
          {OUR_WORK_GALLERY.map((item) => (
            <li
              key={item.id}
              className={cn(
                item.featured && 'col-span-2 row-span-2',
              )}
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200 shadow-sm ring-1 ring-gray-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <ImageWithFallback
                  src={isVideoItem(item) ? item.poster : item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                  <p className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </p>
                  {item.caption && (
                    <p className="text-xs text-white/80 mt-0.5 line-clamp-1 hidden sm:block">
                      {item.caption}
                    </p>
                  )}
                </div>
                {isVideoItem(item) && (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="size-6 sm:size-7 fill-current ml-0.5" aria-hidden />
                    <span className="sr-only">Play video</span>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!activeItem} onOpenChange={(open) => !open && setActiveItem(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden gap-0">
          {activeItem && (
            <>
              <div className="relative w-full bg-black aspect-video max-h-[70vh]">
                {isVideoItem(activeItem) ? (
                  isYoutubeEmbed(activeItem.videoSrc) ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={activeItem.videoSrc}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="h-full w-full object-contain"
                      src={activeItem.videoSrc}
                      controls
                      autoPlay
                      playsInline
                      poster={activeItem.poster}
                    />
                  )
                ) : (
                  <ImageWithFallback
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <DialogHeader className="p-5 sm:p-6 text-left border-t">
                <DialogTitle>{activeItem.title}</DialogTitle>
                {activeItem.caption && (
                  <DialogDescription>{activeItem.caption}</DialogDescription>
                )}
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
