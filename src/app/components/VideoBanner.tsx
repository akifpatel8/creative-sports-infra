import { Link } from 'react-router';
import { ArrowRight, Trophy, ShieldCheck, MapPin, Play } from 'lucide-react';

import { useScrollToSection } from '../hooks/useScrollToSection';
import { Button } from './ui/button';

export function VideoBanner() {
  const goToOurWork = useScrollToSection('our-work', 'our-work');
  const goToContact = useScrollToSection('contact', 'contact');

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Video - Brightened for Clear Viewing */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-80 transition-opacity duration-500">
        <iframe
          className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%] object-cover scale-105"
          src="https://www.youtube.com/embed/Yy2ikI0lmPw?si=E1I71JK8R6OxtQKo&controls=0&autoplay=1&mute=1&loop=1&playlist=Yy2ikI0lmPw"
          title="Creative Sports Infra Video Showcase"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
      </div>

      {/* Directional Vignette Overlay - Keeps Left Text Readable While Right Video Stays Bright */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/15 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-36 min-h-[500px] sm:min-h-[560px] md:min-h-[620px] flex flex-col justify-center">
        <div className="max-w-3xl space-y-5 sm:space-y-6 text-left">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/40 border border-blue-400/50 backdrop-blur-md text-blue-200 text-xs font-bold tracking-wide shadow-md">
            <Trophy className="size-3.5 text-amber-400" />
            <span className="font-brand-tagline uppercase tracking-wider">Turnkey Sports Infrastructure Specialist</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
            World-Class Arenas, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Courts &amp; Tracks
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
            From international championship stadiums to schools and commercial turf hubs. Certified
            contractors for BWF Badminton, FIBA Basketball, Panoramic Padel, Box Cricket, and IAAF Tracks.
          </p>

          {/* Key Trust Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-200 pt-1">
            <span className="inline-flex items-center gap-1.5 font-semibold bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-700/60">
              <ShieldCheck className="size-4 text-emerald-400" />
              BWF, FIBA &amp; IAAF Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-700/60">
              <Trophy className="size-4 text-amber-400" />
              All India Railway Stadium Builder
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-700/60">
              <MapPin className="size-4 text-sky-400" />
              Pan-India Execution
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 sm:pt-6">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/40 px-6 py-6 text-sm sm:text-base cursor-pointer transition-all"
            >
              <a href="#our-work" onClick={goToOurWork}>
                <Play className="size-4 mr-2 fill-current" />
                View Proof of Work
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-400/60 bg-slate-900/60 hover:bg-white/15 text-white font-semibold rounded-xl backdrop-blur-md px-6 py-6 text-sm sm:text-base cursor-pointer transition-all"
            >
              <Link to="/products">
                Explore Flooring Solutions
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-200 hover:text-white hover:bg-white/10 font-medium rounded-xl text-sm sm:text-base cursor-pointer"
            >
              <a href="#contact" onClick={goToContact}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
