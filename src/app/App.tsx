import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}