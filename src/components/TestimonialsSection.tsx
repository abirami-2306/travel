import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 't1',
      author: 'Eleanor & Marcus Vance',
      role: 'Private Collectors',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      trip: 'Amalfi Coast & Capri Yacht Odyssey',
      tier: 'Signature Luxury Tier',
      rating: 5,
      quote: 'The private Riva yacht charter to Capri was the defining travel experience of our lives. Bypassing public moorings into secret emerald grottos with chilled Franciacorta made us feel like 1960s cinema stars.',
      travelDate: 'May 2026',
    },
    {
      id: 't2',
      author: 'Dr. Julian Thorne & Family',
      role: 'Architectural Historian',
      location: 'Boston, USA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      trip: 'Kyoto & Japanese Alps Heritage',
      tier: 'Signature Luxury Tier',
      rating: 5,
      quote: 'Waking up in a 200-year-old cedar ryokan with steam rising from our private onsen facing crimson autumn maples was pure transcendence. AuraVoyage’s cultural access was dignified and second to none.',
      travelDate: 'November 2025',
    },
    {
      id: 't3',
      author: 'Robert & Victoria Sterling',
      role: 'Wildlife Photographers',
      location: 'Melbourne, Australia',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      trip: 'Serengeti & Ngorongoro Great Migration',
      tier: 'Signature Luxury Tier',
      rating: 5,
      quote: 'Our Maasai tracker predicted the exact Mara River crossing forty minutes before anyone else arrived. Floating in a hot air balloon over 200,000 wildebeest at sunrise is etched into our souls forever.',
      travelDate: 'August 2025',
    },
    {
      id: 't4',
      author: 'Henri & Camille Laurent',
      role: 'Restaurateurs',
      location: 'Paris, France',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      trip: 'Swiss Alps & Glacier Express Grand Tour',
      tier: 'Excellence Class Tier',
      rating: 5,
      quote: 'Excellence Class through 291 alpine bridges, paired with five-course regional menus and rare Valais vintages, redefines modern slow luxury. Pacing was effortless from arrival to departure.',
      travelDate: 'July 2026',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-12 relative overflow-hidden border border-stone-800 shadow-2xl">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Column: Heading and Stats */}
          <div className="space-y-4 max-w-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Traveler Memoirs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Stories from the Frontiers
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Read uncensored reflections from our global patrons on the moments that transformed their travel lives.
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-stone-800 text-xs">
              <div>
                <div className="font-display text-2xl font-bold text-amber-400">4.97 / 5</div>
                <div className="text-stone-400">Overall traveler satisfaction</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-amber-400">89%</div>
                <div className="text-stone-400">Return for second expedition</div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-white transition-colors cursor-pointer border border-stone-700"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-white transition-colors cursor-pointer border border-stone-700"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-stone-400 ml-2 font-mono">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Column: Active Card */}
          <div className="w-full lg:max-w-xl bg-stone-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-stone-800 space-y-4 shadow-xl">
            <Quote className="w-8 h-8 text-amber-500/60 stroke-[1.5]" />

            <p className="font-display text-base sm:text-lg text-stone-100 leading-relaxed italic">
              "{active.quote}"
            </p>

            <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={active.avatar}
                  alt={active.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/40"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-white">{active.author}</h4>
                  <div className="text-[11px] text-stone-400">{active.role} · {active.location}</div>
                  <div className="text-[10px] text-amber-400 font-semibold">{active.trip}</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
