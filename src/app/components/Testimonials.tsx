import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Sports Club Director, Mumbai',
    facility: 'BWF Badminton Complex',
    content: 'Outstanding engineering! They built our 4-court indoor badminton facility with sprung teakwood and BWF mats from scratch. The force reduction and shuttle bounce are truly international grade.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Athletic Director, International School',
    facility: 'FIBA Basketball & Volleyball Arena',
    content: 'The basketball and volleyball courts they installed exceeded our school federation expectations. The multi-layer acrylic grip and line marking accuracy transformed our campus athletics.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Cricket Academy & Turf Arena Owner',
    facility: 'Commercial Box Cricket Pitch & Cage',
    content: 'We needed a cricket pitch that could handle continuous 24/7 pay-and-play matches. They delivered superior high-density turf with heavy-duty peripheral netting and flawless drainage.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    role: 'Sports Complex Trustee, Bengaluru',
    facility: 'Panoramic Padel & Tennis Arena',
    content: 'From the sub-base concrete curing to the 12mm toughened panoramic glass installation, Creative Sports Infra proved their turnkey mastery. Our padel courts are fully booked weeks in advance.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-100/90 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Star className="size-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Institutional Reviews</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Trusted by Academies &amp; Stadiums Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Hear directly from sports directors, institutional trustees, and tournament organizers who built their facilities with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 border-l-4 border-l-amber-500 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="size-3 text-emerald-600" />
                    {testimonial.facility}
                  </span>
                </div>

                <Quote className="size-8 text-amber-200 mb-2 rotate-180" />
                <p className="text-slate-700 mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-heading font-black text-slate-900 text-base">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
