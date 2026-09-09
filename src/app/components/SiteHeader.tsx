import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Menu,
  Phone,
  MessageSquare,
  Home,
  Package,
  Layers,
  Mail,
  Trophy,
} from "lucide-react";

import siteLogo from "../../../Assets/sports/New_Logo.jpeg";
import { PRIMARY_PHONE, CONTACT_EMAILS } from "../contact-info";
import { useActiveNavSection } from "../hooks/useActiveNavSection";
import { scrollToPageTop } from "../hooks/useScrollToTop";
import { ContactLink } from "./ContactLink";
import { OurWorkLink } from "./OurWorkLink";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "./ui/utils";

function navItemClass(isActive: boolean, mobile = false) {
  return cn(
    "inline-flex items-center font-bold tracking-wide transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
    mobile
      ? "w-full justify-start rounded-xl px-4 py-3 text-base gap-3"
      : "justify-center rounded-xl px-3.5 py-2 lg:px-4 lg:py-2 text-sm lg:text-[15px]",
    isActive
      ? "bg-blue-600 text-white shadow-md shadow-blue-600/40 font-extrabold"
      : mobile
        ? "text-slate-200 bg-slate-800/60 hover:bg-blue-600/30 hover:text-white"
        : "text-slate-200 hover:bg-white/10 hover:text-white",
  );
}

type NavLinksProps = {
  isHomeActive: boolean;
  isOurWorkActive: boolean;
  isContactActive: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
};

function NavLinks({
  isHomeActive,
  isOurWorkActive,
  isContactActive,
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  const homeClick = () => {
    scrollToPageTop();
    onNavigate?.();
  };

  const productsClick = () => {
    scrollToPageTop();
    onNavigate?.();
  };

  return (
    <>
      <Link
        to="/"
        onClick={homeClick}
        aria-current={isHomeActive ? "page" : undefined}
        className={navItemClass(isHomeActive, mobile)}
      >
        {mobile && <Home className="size-5 text-blue-400" />}
        Home
      </Link>
      <NavLink
        to="/products"
        onClick={productsClick}
        className={({ isActive }) => navItemClass(isActive, mobile)}
      >
        {mobile && <Package className="size-5 text-blue-400" />}
        Products
      </NavLink>
      <OurWorkLink
        className={navItemClass(isOurWorkActive, mobile)}
        aria-current={isOurWorkActive ? "page" : undefined}
        onNavigate={onNavigate}
      >
        {mobile && <Layers className="size-5 text-blue-400" />}
        Our Work
      </OurWorkLink>
      <ContactLink
        className={navItemClass(isContactActive, mobile)}
        aria-current={isContactActive ? "page" : undefined}
        onNavigate={onNavigate}
      >
        {mobile && <Mail className="size-5 text-blue-400" />}
        Contact
      </ContactLink>
    </>
  );
}

function BrandLink({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      onClick={scrollToPageTop}
      className="group inline-flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-xl"
    >
      <div className="bg-white/95 p-1 rounded-xl shadow-md shrink-0 transition-transform duration-200 group-hover:scale-105">
        <img
          src={siteLogo}
          alt="Creative Sports Infra"
          className={cn(
            "object-contain shrink-0",
            compact
              ? "h-9 sm:h-10 w-auto max-w-[130px] min-[380px]:max-w-[160px]"
              : "h-11 sm:h-13 lg:h-14 w-auto max-w-[190px]",
          )}
        />
      </div>
      <div className="hidden min-[520px]:flex flex-col text-left">
        <span
          className={cn(
            "font-brand-title font-black text-white tracking-wide uppercase leading-tight drop-shadow-xs",
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg lg:text-xl",
          )}
        >
          Creative Sports Infra
        </span>
        <span className="font-brand-tagline text-[10px] sm:text-xs font-bold text-amber-400 tracking-wider uppercase drop-shadow-xs">
          Building Better Playing Environments
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const activeSection = useActiveNavSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomeActive = activeSection === "home";
  const isOurWorkActive = activeSection === "our-work";
  const isContactActive = activeSection === "contact";

  const closeMenu = () => setMenuOpen(false);

  const navProps = {
    isHomeActive,
    isOurWorkActive,
    isContactActive,
  };

  return (
    <header className="sticky top-0 z-40 border-b border-blue-950/80 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header (< md) */}
        <div className="flex md:hidden items-center justify-between gap-2 py-2.5">
          <BrandLink compact />

          <div className="flex items-center gap-2 shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl h-9 px-3 text-xs font-bold shadow-md shadow-blue-900/30"
            >
              <a href={PRIMARY_PHONE.href}>
                <Phone className="size-3.5 mr-1" aria-hidden />
                Call
              </a>
            </Button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 size-9 sm:size-10 rounded-xl border-slate-700 bg-slate-900/80 text-white shadow-xs hover:bg-slate-800"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw-1rem,22rem)] border-l border-slate-800 bg-slate-950 text-white p-0 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="border-b border-slate-800 bg-slate-900 px-5 py-4 text-left">
                    <SheetTitle className="font-brand-title text-lg font-black text-white uppercase tracking-wide">
                      Creative Sports Infra
                    </SheetTitle>
                    <p className="font-brand-tagline text-xs text-amber-400 font-bold uppercase tracking-wider mt-0.5">
                      Building Better Playing Environments
                    </p>
                  </SheetHeader>
                  <nav
                    className="flex flex-col gap-2 p-4"
                    aria-label="Mobile Navigation"
                    onClick={closeMenu}
                  >
                    <NavLinks {...navProps} mobile onNavigate={closeMenu} />
                  </nav>
                </div>

                {/* Mobile Drawer Quick Connect */}
                <div className="p-4 border-t border-slate-800 bg-slate-900/70 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Trophy className="size-3.5" />
                    <span>Quick Consultation</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl"
                    >
                      <a href={PRIMARY_PHONE.href}>
                        <Phone className="size-3.5 mr-1.5" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl"
                    >
                      <a
                        href={`https://wa.me/${PRIMARY_PHONE.href.replace(/\D/g, "")}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20sports%20facility%20construction`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageSquare className="size-3.5 mr-1.5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="text-[11px] text-slate-400 text-center">
                    Email: {CONTACT_EMAILS[0].display}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop header (>= md) */}
        <div className="hidden md:flex items-center justify-between gap-4 py-3 min-w-0">
          <BrandLink />

          <div className="flex items-center gap-3 shrink-0">
            <nav
              className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950/70 border border-slate-800/90 shadow-inner"
              aria-label="Main Navigation"
            >
              <NavLinks {...navProps} />
            </nav>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl px-4 shadow-lg shadow-amber-500/20 cursor-pointer transition-all"
            >
              <a href={PRIMARY_PHONE.href} className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5" />
                <span>Call Us</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
