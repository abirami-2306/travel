import React, { useState, useEffect, useRef } from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Calendar, 
  Users, 
  Compass, 
  ShieldCheck, 
  Leaf, 
  Star, 
  ArrowRight,
  Sparkles,
  DollarSign
} from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const { 
    formatPrice, 
    searchQuery, 
    setSearchQuery, 
    selectedContinent, 
    setSelectedContinent,
    maxBudgetUSD,
    setMaxBudgetUSD,
    travelDates,
    setTravelDates,
    travelerCount,
    setTravelerCount,
    openDestinationById
  } = useTravel();

  const heroDestinations = SAMPLE_DESTINATIONS.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTravelerDropdownOpen, setIsTravelerDropdownOpen] = useState(false);
  const travelerRef = useRef<HTMLDivElement>(null);

  // Auto-advance hero slides every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroDestinations.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, heroDestinations.length]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (travelerRef.current && !travelerRef.current.contains(event.target as Node)) {
        setIsTravelerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroDestinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroDestinations.length) % heroDestinations.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const destEl = document.getElementById('destinations');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeDest = heroDestinations[currentSlide];

  return (
    <section 
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-900 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with smooth cross-fade */}
      {heroDestinations.map((dest, idx) => (
        <div
          key={dest.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 7s ease-out' }}
        >
          <img
            src={dest.heroImage}
            alt={dest.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle multi-layer cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-black/30" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />
        </div>
      ))}

      {/* Slide Navigation Buttons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 flex-1 flex flex-col justify-center">
        
        {/* Destination Sub-Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-xs font-medium w-fit mb-5 animate-fade-in">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>Featured Expedition · {activeDest.country}</span>
          <span className="text-white/40">·</span>
          <span className="text-amber-300 font-semibold">{formatPrice(activeDest.basePriceUSD)}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl drop-shadow-md leading-[1.1]">
          Journey Beyond <br />
          <span className="italic font-normal text-amber-300">The Ordinary.</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-stone-200/90 max-w-2xl font-light leading-relaxed drop-shadow">
          Handcrafted private expeditions to Earth’s most breathtaking landscapes, pairing legendary 5-star lodgings with privileged insider access.
        </p>

        {/* View current package preview button */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => openDestinationById(activeDest.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer"
          >
            <span>Explore {activeDest.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-stone-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-white">{activeDest.rating}</span>
            <span>({activeDest.reviewCount} verified travelers)</span>
          </div>
        </div>

        {/* Slide Counter & Progress Indicators */}
        <div className="mt-8 flex items-center gap-3">
          {heroDestinations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-10 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-xs text-stone-300 font-mono tracking-wider ml-2">
            0{currentSlide + 1} / 0{heroDestinations.length}
          </span>
        </div>

      </div>

      {/* Floating Search Bar (Modern Airbnb Luxe style) */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 w-full -mb-10 sm:-mb-8">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-2xl shadow-2xl border border-stone-200/80 dark:border-stone-800 p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center backdrop-blur-xl"
        >
          {/* Destination / Continent */}
          <div className="px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-stone-200 dark:border-stone-800">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-0.5">
              Where to?
            </label>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <input
                type="text"
                placeholder="Search Amalfi, Kyoto, Serengeti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium bg-transparent focus:outline-none placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
            </div>
          </div>

          {/* Travel Dates */}
          <div className="px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-stone-200 dark:border-stone-800">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-0.5">
              When?
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <select
                value={travelDates}
                onChange={(e) => setTravelDates(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="Oct 2026 - Nov 2026">Autumn 2026 (Oct - Nov)</option>
                <option value="Dec 2026 - Feb 2027">Winter 2026/27 (Dec - Feb)</option>
                <option value="Mar 2027 - May 2027">Spring 2027 (Mar - May)</option>
                <option value="Jun 2027 - Aug 2027">Summer 2027 (Jun - Aug)</option>
                <option value="Anytime (Flexible)">Flexible Dates</option>
              </select>
            </div>
          </div>

          {/* Travelers & Budget */}
          <div className="px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-stone-200 dark:border-stone-800 relative" ref={travelerRef}>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-0.5">
              Travelers & Budget
            </label>
            <div className="flex items-center justify-between">
              <div 
                onClick={() => setIsTravelerDropdownOpen(!isTravelerDropdownOpen)}
                className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-medium"
              >
                <Users className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{travelerCount} {travelerCount === 1 ? 'Traveler' : 'Travelers'}</span>
              </div>

              <select
                value={maxBudgetUSD}
                onChange={(e) => setMaxBudgetUSD(Number(e.target.value))}
                className="text-xs bg-stone-100 dark:bg-stone-800 rounded px-1.5 py-1 text-stone-600 dark:text-stone-300 font-medium cursor-pointer"
                title="Filter by Maximum Budget"
              >
                <option value={10000}>All Budgets</option>
                <option value={4000}>Under $4k</option>
                <option value={5500}>Under $5.5k</option>
                <option value={7500}>Under $7.5k</option>
              </select>
            </div>

            {/* Traveler Stepper Dropdown */}
            {isTravelerDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-xl p-3 z-50">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs font-semibold">Total Travelers</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelerCount(Math.max(1, travelerCount - 1))}
                      className="w-7 h-7 rounded-lg bg-stone-200 dark:bg-stone-800 text-sm font-bold flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-700"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{travelerCount}</span>
                    <button
                      type="button"
                      onClick={() => setTravelerCount(Math.min(12, travelerCount + 1))}
                      className="w-7 h-7 rounded-lg bg-stone-200 dark:bg-stone-800 text-sm font-bold flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-stone-400 mt-1">
                  Groups of 4+ enjoy custom villa and private yacht discounts.
                </p>
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="p-1 sm:p-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore Packages</span>
            </button>
          </div>
        </form>

        {/* Quick Filter Vibes */}
        <div className="mt-3 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 px-2 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-stone-700 dark:text-stone-300">Popular vibes:</span>
            <button
              onClick={() => { setSelectedContinent('Europe'); setSearchQuery('Amalfi'); }}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Amalfi Coast Yachting
            </button>
            <span>·</span>
            <button
              onClick={() => { setSelectedContinent('Asia'); setSearchQuery('Kyoto'); }}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Kyoto Autumn Onsens
            </button>
            <span>·</span>
            <button
              onClick={() => { setSelectedContinent('Africa'); setSearchQuery('Serengeti'); }}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Serengeti Migration
            </button>
            <span>·</span>
            <button
              onClick={() => { setSelectedContinent('Europe'); setSearchQuery('Swiss'); }}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            >
              Swiss Alpine Rails
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-[11px] text-stone-500">
            <span className="inline-flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              100% Carbon Neutral Travel
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              Guaranteed Best Departure Price
            </span>
          </div>
        </div>

      </div>

      {/* Spacing for floating search bar overlap */}
      <div className="h-12 sm:h-10" />
    </section>
  );
};
