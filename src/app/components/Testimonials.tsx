import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Sports Club Director',
    content: 'Outstanding work! They built our badminton facility from scratch and the quality is exceptional. Our members are thrilled with the professional-grade courts.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Athletic Director',
    content: 'The basketball courts they installed are world-class. The attention to detail and commitment to quality exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Cricket Academy Owner',
    content: 'We needed a cricket pitch that could handle intensive training sessions. They delivered beyond our requirements with superior turf and drainage.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    role: 'School Principal',
    content: 'The volleyball court they built for our school has transformed our sports program. Students love it and it has become the centerpiece of our athletics.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
