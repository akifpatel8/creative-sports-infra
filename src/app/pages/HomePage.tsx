import React from "react";

import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { OurWorkGallery } from "../components/OurWorkGallery";
import { SportsProductsSection } from "../components/SportsProductsSection";
import { Testimonials } from "../components/Testimonials";
import { VideoBanner } from "../components/VideoBanner";
import { WhatWeDo } from "../components/WhatWeDo";

export function HomePage() {
  return (
    <>
      <VideoBanner />
      <SportsProductsSection />
      <OurWorkGallery />
      {/* <Hero /> */}
      {/* <WhatWeDo /> */}
      <Testimonials />
      <Contact />
    </>
  );
}
