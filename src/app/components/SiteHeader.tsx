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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
    mobile
      ? "w-full justify-start rounded-xl px-4 py-3 text-base gap-3"
      : "justify-center rounded-lg px-3.5 py-2 lg:px-4 lg:py-2.5 text-sm lg:text-base",
    isActive
      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
      : mobile
        ? "text-gray-800 bg-gray-50/80 hover:bg-blue-50 hover:text-blue-700"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600",
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
        {mobile && <Home className="size-5 text-blue-600" />}
        Home
      </Link>
      <NavLink
        to="/products"
        onClick={productsClick}
        className={({ isActive }) => navItemClass(isActive, mobile)}
      >
        {mobile && <Package className="size-5 text-blue-600" />}
        Products
      </NavLink>
      <OurWorkLink
        className={navItemClass(isOurWorkActive, mobile)}
        aria-current={isOurWorkActive ? "page" : undefined}
        onNavigate={onNavigate}
      >
        {mobile && <Layers className="size-5 text-blue-600" />}
        Our Work
      </OurWorkLink>
      <ContactLink
        className={navItemClass(isContactActive, mobile)}
        aria-current={isContactActive ? "page" : undefined}
        onNavigate={onNavigate}
      >
        {mobile && <Mail className="size-5 text-blue-600" />}
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
      className="group inline-flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl"
    >
      <img
        src={siteLogo}
        alt="Creative Sports Infra"
        className={cn(
          "object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02]",
          compact
            ? "h-11 sm:h-12 w-auto max-w-[140px] min-[380px]:max-w-[170px]"
            : "h-12 sm:h-14 lg:h-15 w-auto max-w-[200px]",
        )}
      />
      <div className="hidden min-[540px]:flex flex-col text-left">
        <span
          className={cn(
            "font-extrabold text-gray-900 tracking-tight leading-tight",
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg lg:text-xl",
          )}
        >
          Creative Sports Infra
        </span>
        <span className="text-[10px] sm:text-xs font-semibold text-blue-600 tracking-wider uppercase">
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
    <header className="sticky top-0 z-40 border-b border-gray-200/90 bg-white/95 backdrop-blur-md shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header (< md) */}
        <div className="flex md:hidden items-center justify-between gap-2 py-2.5">
          <BrandLink compact />

          <div className="flex items-center gap-2 shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 px-3 text-xs font-semibold shadow-xs"
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
                  className="shrink-0 size-9 sm:size-10 rounded-xl border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-100"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw-1rem,22rem)] border-l border-gray-200 bg-white p-0 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="border-b border-gray-100 bg-gray-50/70 px-5 py-4 text-left">
                    <SheetTitle className="text-base font-bold text-gray-900">
                      Creative Sports Infra
                    </SheetTitle>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      Turnkey Sports Facility Specialist
                    </p>
                  </SheetHeader>
                  <nav
                    className="flex flex-col gap-1.5 p-4"
                    aria-label="Mobile Navigation"
                    onClick={closeMenu}
                  >
                    <NavLinks {...navProps} mobile onNavigate={closeMenu} />
                  </nav>
                </div>

                {/* Mobile Drawer Quick Connect */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/60 space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Quick Consultation
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl"
                    >
                      <a href={PRIMARY_PHONE.href}>
                        <Phone className="size-3.5 mr-1.5" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
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
                  <p className="text-[11px] text-gray-500 text-center">
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
              className="flex items-center gap-1 p-1 rounded-xl bg-gray-100/80 border border-gray-200/80"
              aria-label="Main Navigation"
            >
              <NavLinks {...navProps} />
            </nav>

            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 shadow-sm shadow-blue-600/20"
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
