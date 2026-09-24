import { Outlet } from "react-router";

import { BrochureSection } from "../components/BrochureSection";
import { Footer } from "../components/Footer";
import { ScrollToHash } from "../components/ScrollToHash";
import { ScrollToTop } from "../components/ScrollToTop";
import { SiteHeader } from "../components/SiteHeader";
import { TopContactBanner } from "../components/TopContactBanner";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToHash />
      <ScrollToTop />
      <TopContactBanner />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
        <BrochureSection />
      </main>
      <Footer />
    </div>
  );
}
