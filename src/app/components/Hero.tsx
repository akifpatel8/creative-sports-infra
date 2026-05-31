import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { ContactLink } from "./ContactLink";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6">Creative Sports Infra</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Building excellence in sports infrastructure. We develop world-class
            sports facilities including badminton courts, cricket pitches,
            basketball courts, volleyball floors, and more.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors font-medium">
              Get Started
              <ArrowRight size={20} aria-hidden />
            </Link>
            <ContactLink className="text-white border border-white/40 px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors font-medium">
              Contact
            </ContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}
