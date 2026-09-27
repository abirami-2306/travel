import React, { useState } from 'react';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { useTravel } from '../context/TravelContext';
import { Destination } from '../types/travel';
import { MapPin, Globe, Sparkles, ArrowRight, Star } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const { 
    setSelectedContinent, 
    setSelectedDestinationModal, 
    formatPrice,
    setSearchQuery 
  } = useTravel();

  const [activePin, setActivePin] = useState<Destination | null>(SAMPLE_DESTINATIONS[0]);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Approximate SVG coordinate projection: lat [-60, 75] -> y, lng [-180, 180] -> x
  const getSvgCoords = (lat: number, lng: number) => {
    // Map bounds: width 1000, height 500
    const x = ((lng + 180) / 360) * 1000;
    const y = ((75 - lat) / 135) * 500;
    return { x: Math.max(40, Math.min(960, x)), y: Math.max(30, Math.min(470, y)) };
  };

  const handlePinClick = (dest: Destination) => {
    setActivePin(dest);
    setSelectedContinent(dest.continent);
  };

  const handleContinentClick = (continent: string) => {
    setSelectedContinent(continent);
    const destEl = document.getElementById('destinations');
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="world-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Interactive Global Cartography</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
          Explore by Geography
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light leading-relaxed">
          Click any regional pin to preview climate, starting investment, and handcrafted private routes across seven continents.
        </p>
      </div>

      {/* Map Card Container */}
      <div className="relative bg-stone-900 text-stone-100 rounded-3xl p-4 sm:p-8 shadow-2xl border border-stone-800 overflow-hidden">
        
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Region Filter Buttons */}
        <div className="relative z-10 flex items-center justify-center gap-2 mb-6 flex-wrap text-xs">
          {['All Regions', 'Europe', 'Asia', 'Africa', 'Americas'].map((reg) => (
            <button
              key={reg}
              onClick={() => handleContinentClick(reg === 'All Regions' ? 'All' : reg)}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700/80 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
            >
              {reg}
            </button>
          ))}
        </div>

        {/* SVG World Map Vector Representation */}
        <div className="relative aspect-[2/1] w-full max-h-[520px] bg-stone-950/80 rounded-2xl border border-stone-800/60 overflow-hidden flex items-center justify-center">
          
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full object-contain filter drop-shadow-md"
            aria-label="Interactive World Map"
          >
            <defs>
              <linearGradient id="continentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* Simplified landmass paths */}
            {/* North America */}
            <path
              d="M120,80 Q190,70 260,110 T240,210 Q190,260 140,220 T110,130 Z M280,60 Q340,50 320,100 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Americas')}
            />
            {/* South America */}
            <path
              d="M230,250 Q310,260 330,320 T280,450 Q230,460 210,380 T220,290 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Americas')}
            />
            {/* Europe */}
            <path
              d="M460,90 Q540,80 570,130 T510,190 Q470,190 440,150 T460,90 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Europe')}
            />
            {/* Africa */}
            <path
              d="M450,190 Q570,180 580,260 T540,410 Q470,420 440,320 T440,210 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Africa')}
            />
            {/* Asia */}
            <path
              d="M580,80 Q760,70 860,140 T840,260 Q730,280 620,220 T580,110 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Asia')}
            />
            {/* Southeast Asia & Indonesia */}
            <path
              d="M740,290 Q820,280 840,340 T760,350 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Asia')}
            />
            {/* Australia / Oceania */}
            <path
              d="M760,370 Q860,360 880,430 T780,460 Q730,430 760,370 Z"
              fill="url(#continentGrad)"
              stroke="#334155"
              strokeWidth="1.2"
              className="hover:fill-teal-900/60 transition-colors cursor-pointer"
              onClick={() => handleContinentClick('Oceania')}
            />

            {/* Latitude / Equator Lines */}
            <line x1="40" y1="250" x2="960" y2="250" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" opacity="0.4" />
            <text x="50" y="245" fill="#64748b" fontSize="10" fontFamily="sans-serif">Equator</text>

            {/* Destination Hotspot Pins */}
            {SAMPLE_DESTINATIONS.map((dest) => {
              const { x, y } = getSvgCoords(dest.coordinates.lat, dest.coordinates.lng);
              const isSelected = activePin?.id === dest.id;

              return (
                <g
                  key={dest.id}
                  onClick={() => handlePinClick(dest)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 16 : 9}
                    fill={isSelected ? '#f59e0b' : '#0d9488'}
                    opacity={isSelected ? 0.35 : 0.25}
                    className="animate-ping"
                  />
                  {/* Inner Pin circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 7 : 5}
                    fill={isSelected ? '#f59e0b' : '#2dd4bf'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="transition-transform group-hover:scale-125"
                  />
                  {/* Label */}
                  <text
                    x={x + 10}
                    y={y + 4}
                    fill={isSelected ? '#fbbf24' : '#cbd5e1'}
                    fontSize={isSelected ? '11' : '10'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="sans-serif"
                    className="pointer-events-none drop-shadow-sm select-none"
                  >
                    {dest.country}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Pin Floating Card (bottom-left overlay on map) */}
          {activePin && (
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-96 bg-stone-900/95 backdrop-blur-md border border-stone-700/80 rounded-2xl p-4 shadow-2xl flex gap-4 items-center animate-fade-in z-20">
              <img
                src={activePin.heroImage}
                alt={activePin.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-stone-700"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                  <span>{activePin.country}</span>
                  <div className="flex items-center gap-1 text-stone-200">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{activePin.rating}</span>
                  </div>
                </div>

                <h4 className="font-display font-bold text-sm text-white truncate mt-0.5">
                  {activePin.name}
                </h4>

                <p className="text-[11px] text-stone-400 truncate mt-0.5">
                  {activePin.durationDays} Days · {activePin.weather.condition}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    {formatPrice(activePin.basePriceUSD)}
                  </span>
                  <button
                    onClick={() => setSelectedDestinationModal(activePin)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    <span>View Package</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Legend Ribbon */}
        <div className="mt-5 flex items-center justify-between text-xs text-stone-400 flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
              <span>Available Expeditions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span>Selected Destination</span>
            </div>
          </div>
          <div className="text-[11px]">
            * Private jet charter connections available between all continents.
          </div>
        </div>

      </div>

    </section>
  );
};
