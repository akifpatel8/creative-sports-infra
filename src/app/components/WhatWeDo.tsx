import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Badminton Courts',
    description: 'Professional-grade indoor badminton courts with high-quality flooring, lighting, and ventilation systems.',
    image: 'https://images.unsplash.com/photo-1776999035766-9c2b5cddf613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3Nzg0Nzc2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Basketball Courts',
    description: 'State-of-the-art basketball courts with premium flooring, hoops, and regulation markings for optimal gameplay.',
    image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzc4NDc3NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Cricket Pitches',
    description: 'Championship-level cricket pitches with perfect turf, drainage systems, and professional groundskeeping.',
    image: 'https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGl0Y2glMjBzdGFkaXVtfGVufDF8fHx8MTc3ODQ3NzY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Volleyball Floors',
    description: 'Specialized volleyball court flooring designed for shock absorption, player safety, and peak performance.',
    image: 'https://images.unsplash.com/photo-1479859546309-cd77fa21c8f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwY291cnR8ZW58MXx8fHwxNzc4NDc3NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in developing top-tier sports infrastructure that meets international standards and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
