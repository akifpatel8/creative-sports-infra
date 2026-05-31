import { Link, NavLink } from 'react-router';

import siteLogo from '../../../Assets/LOGO.jpeg';
import { scrollToPageTop } from '../hooks/useScrollToTop';
import { ContactLink } from './ContactLink';
import { cn } from './ui/utils';

function navItemClass(isActive: boolean) {
  return cn(
    'inline-flex items-center justify-center rounded-lg px-4 py-2.5 sm:px-5 sm:py-3',
    'text-base sm:text-lg font-bold tracking-wide transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
    isActive
      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
      : 'text-gray-800 hover:bg-white hover:text-blue-700 hover:shadow-sm',
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 overflow-x-hidden border-b border-blue-200/80 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 shadow-[0_4px_20px_rgba(37,99,235,0.08)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-4 min-[520px]:flex-row min-[520px]:items-center min-[520px]:justify-between min-w-0">
          <Link
            to="/"
            onClick={scrollToPageTop}
            className="group inline-flex items-center justify-center min-[520px]:justify-start gap-3 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl"
          >
            <img
              src={siteLogo}
              alt="Creative Sports Infra logo"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-white bg-white shadow-lg ring-2 ring-blue-200/80 shrink-0 transition-transform group-hover:scale-[1.02]"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight text-center min-[520px]:text-left">
              Creative Sports Infra
            </span>
          </Link>

          <nav
            className="flex w-full min-[520px]:w-auto items-stretch min-[520px]:items-center justify-center min-[520px]:justify-end gap-2 sm:gap-3 p-1 rounded-xl bg-white/60 border border-blue-100/80 shadow-inner min-w-0"
            aria-label="Main"
          >
            <NavLink
              to="/"
              end
              onClick={scrollToPageTop}
              className={({ isActive }) => navItemClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={scrollToPageTop}
              className={({ isActive }) => navItemClass(isActive)}
            >
              Products
            </NavLink>
            <ContactLink
              className={cn(
                navItemClass(false),
                'bg-blue-700/10 text-blue-800 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-600/20',
              )}
            >
              Contact
            </ContactLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
