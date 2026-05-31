import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu } from 'lucide-react';

import siteLogo from '../../../Assets/LOGO.jpeg';
import { useActiveNavSection } from '../hooks/useActiveNavSection';
import { scrollToPageTop } from '../hooks/useScrollToTop';
import { ContactLink } from './ContactLink';
import { OurWorkLink } from './OurWorkLink';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { cn } from './ui/utils';

function navItemClass(isActive: boolean, mobile = false) {
  return cn(
    'inline-flex items-center font-bold tracking-wide transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
    mobile
      ? 'w-full justify-start rounded-xl px-4 py-3.5 text-base'
      : 'justify-center rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 text-base sm:text-lg',
    isActive
      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
      : mobile
        ? 'text-gray-800 bg-gray-50 hover:bg-blue-50 hover:text-blue-700'
        : 'text-gray-800 hover:bg-white hover:text-blue-700 hover:shadow-sm',
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
        aria-current={isHomeActive ? 'page' : undefined}
        className={navItemClass(isHomeActive, mobile)}
      >
        Home
      </Link>
      <NavLink
        to="/products"
        onClick={productsClick}
        className={({ isActive }) => navItemClass(isActive, mobile)}
      >
        Products
      </NavLink>
      <OurWorkLink
        className={navItemClass(isOurWorkActive, mobile)}
        aria-current={isOurWorkActive ? 'page' : undefined}
        onNavigate={onNavigate}
      >
        Our Work
      </OurWorkLink>
      <ContactLink
        className={navItemClass(isContactActive, mobile)}
        aria-current={isContactActive ? 'page' : undefined}
        onNavigate={onNavigate}
      >
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
      className="group inline-flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 md:flex-initial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl"
    >
      <img
        src={siteLogo}
        alt="Creative Sports Infra logo"
        className={cn(
          'rounded-full object-cover border-2 border-white bg-white shadow-lg ring-2 ring-blue-200/80 shrink-0 transition-transform group-hover:scale-[1.02]',
          compact ? 'h-11 w-11' : 'h-16 w-16 sm:h-20 sm:w-20',
        )}
      />
      <span
        className={cn(
          'font-bold text-gray-900 leading-tight min-w-0',
          compact
            ? 'text-sm sm:text-base line-clamp-2'
            : 'text-lg sm:text-xl lg:text-2xl text-center md:text-left',
        )}
      >
        Creative Sports Infra
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const activeSection = useActiveNavSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomeActive = activeSection === 'home';
  const isOurWorkActive = activeSection === 'our-work';
  const isContactActive = activeSection === 'contact';

  const closeMenu = () => setMenuOpen(false);

  const navProps = {
    isHomeActive,
    isOurWorkActive,
    isContactActive,
  };

  return (
    <header className="sticky top-0 z-30 overflow-x-hidden border-b border-blue-200/80 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 shadow-[0_4px_20px_rgba(37,99,235,0.08)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between gap-3 py-3">
          <BrandLink compact />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0 size-11 rounded-xl border-blue-200 bg-white text-blue-700 shadow-sm hover:bg-blue-50"
                aria-label="Open menu"
              >
                <Menu className="size-6" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw-1rem,20rem)] border-l border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-0"
            >
              <SheetHeader className="border-b border-blue-100 bg-white/80 px-5 py-5 text-left">
                <SheetTitle className="text-lg font-bold text-gray-900">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-2 p-4"
                aria-label="Main"
                onClick={closeMenu}
              >
                <NavLinks {...navProps} mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between gap-4 py-4 min-w-0">
          <BrandLink />

          <nav
            className="flex items-center justify-end gap-2 lg:gap-3 p-1 rounded-xl bg-white/60 border border-blue-100/80 shadow-inner shrink-0"
            aria-label="Main"
          >
            <NavLinks {...navProps} />
          </nav>
        </div>
      </div>
    </header>
  );
}
