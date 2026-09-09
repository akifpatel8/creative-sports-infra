import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Video,
  Trophy,
  CheckCircle2,
  Layers,
} from 'lucide-react';

import {
  OUR_WORK_GALLERY,
  GALLERY_CATEGORIES,
  type GalleryCategory,
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

const INITIAL_DISPLAY_COUNT = 12;

export function OurWorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Compute items matching the active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return OUR_WORK_GALLERY;
    if (selectedCategory === 'video') {
      return OUR_WORK_GALLERY.filter((item) => item.type === 'video');
    }
    return OUR_WORK_GALLERY.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Compute counts for tab badges
  const getCategoryCount = useCallback((catId: GalleryCategory) => {
    if (catId === 'all') return OUR_WORK_GALLERY.length;
    if (catId === 'video') {
      return OUR_WORK_GALLERY.filter((item) => item.type === 'video').length;
    }
    return OUR_WORK_GALLERY.filter((item) => item.category === catId).length;
  }, []);

  // Display items considering the progressive expansion
  const displayedItems = useMemo(() => {
    if (selectedCategory !== 'all' || isExpanded) {
      return filteredItems;
    }
    return filteredItems.slice(0, INITIAL_DISPLAY_COUNT);
  }, [filteredItems, selectedCategory, isExpanded]);

  // Active item index within currently filtered list for lightbox navigation
  const currentIndex = useMemo(() => {
    if (!activeItem) return -1;
    return filteredItems.findIndex((item) => item.id === activeItem.id);
  }, [activeItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (filteredItems.length === 0) return;
    if (currentIndex <= 0) {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    } else {
      setActiveItem(filteredItems[currentIndex - 1]);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    if (currentIndex === -1 || currentIndex >= filteredItems.length - 1) {
      setActiveItem(filteredItems[0]);
    } else {
      setActiveItem(filteredItems[currentIndex + 1]);
    }
  }, [currentIndex, filteredItems]);

  // Arrow key navigation when lightbox is open
  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, handlePrev, handleNext]);

  return (
    <section id="our-work" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800 scroll-mt-36">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Trophy className="size-3.5 text-amber-400" />
            <span>Proof of Work &amp; Project Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Built for Champions Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore authentic photos and on-site video walkthroughs of stadiums, courts, tracks, and
            turfs designed, engineered, and constructed by Creative Sports Infra.
          </p>
        </div>

        {/* Proof of Work Trust Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
              <Trophy className="size-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Championship Venues</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">All India Railway Stadium</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">35+ Completed Sites</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Schools, clubs &amp; academies</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
              <Layers className="size-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Certified Systems</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">BWF, FIBA, ITF &amp; IAAF specs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shrink-0">
              <Video className="size-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Live Video Proof</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">On-site project inspections</p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsExpanded(false);
                }}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400"
                    : "bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800 shadow-xs"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "text-[11px] px-2 py-0.5 rounded-full font-extrabold",
                    isActive ? "bg-slate-950/30 text-slate-950" : "bg-slate-800 text-slate-400"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[230px]">
          {displayedItems.map((item) => (
            <li
              key={item.id}
              className={cn(
                item.featured && 'col-span-2 row-span-2',
                'relative group'
              )}
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="group relative h-full w-full overflow-hidden rounded-2xl bg-slate-950 shadow-md ring-1 ring-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:ring-amber-400/70"
              >
                <ImageWithFallback
                  src={isVideoItem(item) ? item.poster : item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

                {/* Top Badge: Tag & Duration */}
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex items-center gap-1.5 flex-wrap max-w-[85%] z-10">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-xs">
                    {item.tag}
                  </span>
                  {isVideoItem(item) && item.duration && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-red-600/90 text-white shadow-xs">
                      <Video className="size-3" />
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Video Play Button Overlay */}
                {isVideoItem(item) && (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 z-10">
                    <Play className="size-6 sm:size-8 fill-current ml-0.5 sm:ml-1" aria-hidden />
                    <span className="sr-only">Play video</span>
                  </span>
                )}

                {/* Bottom Caption & Title */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left z-10">
                  <p className="font-heading text-xs sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </p>
                  {item.caption && (
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-1 sm:line-clamp-2 hidden xs:block leading-relaxed">
                      {item.caption}
                    </p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Progressive Expansion Button for All Projects */}
        {selectedCategory === 'all' && filteredItems.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 shadow-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {isExpanded ? (
                <>
                  <span>Show Featured Highlights Only</span>
                  <ChevronDown className="size-4 rotate-180 transition-transform text-amber-400" />
                </>
              ) : (
                <>
                  <span>View All {filteredItems.length} Proof-of-Work Projects &amp; Videos</span>
                  <ChevronDown className="size-4 transition-transform text-amber-400" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Video Modal */}
      <Dialog open={!!activeItem} onOpenChange={(open) => !open && setActiveItem(null)}>
        <DialogContent className="sm:max-w-5xl p-0 overflow-hidden gap-0 bg-neutral-950 border-neutral-800 text-white rounded-2xl shadow-2xl [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:bg-black/60 [&_[data-slot=dialog-close]]:p-2 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:top-3 [&_[data-slot=dialog-close]]:right-3 [&_[data-slot=dialog-close]]:hover:bg-black/90">
          {activeItem && (
            <div className="flex flex-col">
              {/* Media Player Area */}
              <div className="relative w-full bg-black aspect-video max-h-[70vh] flex items-center justify-center overflow-hidden">
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
                      key={activeItem.id}
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

                {/* Floating Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous project"
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all border border-white/20 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next project"
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all border border-white/20 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer Info */}
              <div className="p-5 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                      {activeItem.tag}
                    </span>
                    {isVideoItem(activeItem) && (
                      <span className="inline-flex items-center gap-1 text-xs text-red-400 font-medium">
                        <Video className="size-3.5" />
                        Video Walkthrough
                      </span>
                    )}
                  </div>
                  <DialogTitle className="font-heading text-lg sm:text-xl font-bold text-white">
                    {activeItem.title}
                  </DialogTitle>
                  {activeItem.caption && (
                    <DialogDescription className="text-sm text-neutral-300 leading-relaxed">
                      {activeItem.caption}
                    </DialogDescription>
                  )}
                </div>

                <div className="shrink-0">
                  <a
                    href="https://wa.me/919987545934?text=Hi%2C%20I%20saw%20your%20project%20in%20the%20gallery%20and%20would%20like%20to%20inquire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
