import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6">
            Creative Sports Infra
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Building excellence in sports infrastructure. We develop world-class sports facilities including badminton courts, cricket pitches, basketball courts, volleyball floors, and more.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
