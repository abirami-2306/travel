import React, { useState, useRef } from 'react';
import { useTravel } from '../context/TravelContext';
import { 
  X, 
  Heart, 
  Star, 
  MapPin, 
  Calendar, 
  Check, 
  CheckCircle2, 
  XCircle, 
  Leaf, 
  ShieldCheck, 
  Sun, 
  CloudRain, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Users, 
  DollarSign, 
  Camera, 
  Info,
  Maximize2
} from 'lucide-react';
import { Hotspot360 } from '../types/travel';

export const PackageDetailModal: React.FC = () => {
  const { 
    selectedDestinationModal, 
    setSelectedDestinationModal, 
    formatPrice, 
    isInWishlist, 
    toggleWishlist,
    setSelectedBooking
  } = useTravel();

  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'tiers' | '360' | 'weather' | 'reviews'>('overview');
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [selectedTierName, setSelectedTierName] = useState<string>('Signature Luxury');
  
  // 360 viewer state
  const [panOffset, setPanOffset] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [panStartX, setPanStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot360 | null>(null);

  if (!selectedDestinationModal) return null;

  const dest = selectedDestinationModal;
  const isFavorited = isInWishlist(dest.id);

  const closeModal = () => {
    setSelectedDestinationModal(null);
  };

  const handleBookCurrent = (tierName: string) => {
    setSelectedBooking({ destination: dest, tierName });
    closeModal();
  };

  const handleScrollToBuilder = () => {
    closeModal();
    const builderEl = document.getElementById('trip-planner');
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 360 drag handlers
  const handleMouseDown360 = (e: React.MouseEvent) => {
    setIsPanning(true);
    setPanStartX(e.clientX);
  };

  const handleMouseMove360 = (e: React.MouseEvent) => {
    if (!isPanning) return;
    const delta = e.clientX - panStartX;
    setPanStartX(e.clientX);
    setPanOffset((prev) => (prev + delta * 0.4) % 100);
  };

  const handleMouseUp360 = () => {
    setIsPanning(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={closeModal}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-auto max-h-[92vh] flex flex-col text-stone-900 dark:text-stone-100"
      >
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {dest.continent} · {dest.country}
            </span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <div className="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-400">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>{dest.durationDays} Days / {dest.durationNights} Nights</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(dest.id)}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
              title="Save to Wishlist"
              aria-label="Save to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
            <button
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1 px-6 pt-3 pb-2 border-b border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-950/40 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            Overview & Gallery
          </button>
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'itinerary'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            Day-by-Day Itinerary ({dest.itinerary.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('tiers')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tiers'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            Tier Comparison ({dest.tiers.length} Tiers)
          </button>
          <button
            onClick={() => setActiveTab('360')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === '360'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Virtual 360° Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('weather')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'weather'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            Weather & Packing
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-teal-900 text-amber-300 dark:bg-teal-800'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            Traveler Reviews ({dest.reviews.length})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* TAB 1: OVERVIEW & GALLERY */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Main Photo & Thumbnail Gallery */}
              <div className="space-y-3">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg bg-stone-900">
                  <img
                    src={dest.galleryImages[selectedPhotoIdx] || dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold drop-shadow">
                        {dest.name}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-stone-200 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{dest.mapRegion}</span>
                        <span>·</span>
                        <span>{dest.coordinates.lat.toFixed(2)}°N, {dest.coordinates.lng.toFixed(2)}°E</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-bold">{dest.rating}</span>
                      <span className="text-stone-300">({dest.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="grid grid-cols-4 gap-2">
                  {dest.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPhotoIdx(idx)}
                      className={`relative aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedPhotoIdx === idx
                          ? 'border-amber-500 scale-95 shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Narrative Overview */}
              <div>
                <h3 className="font-display text-lg font-bold mb-2">The Experience</h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                  {dest.overview}
                </p>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800">
                
                {/* Inclusions */}
                <div className="p-4 rounded-2xl bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Included in This Package</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                    {dest.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-stone-400" />
                    <span>Not Included</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                    {dest.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: DAY-BY-DAY ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="font-display text-lg font-bold">Curated Journey Sequence</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Paced for unhurried exploration and immersive cultural moments.
                  </p>
                </div>
                <div className="text-xs text-stone-500">
                  Total Duration: <strong className="text-stone-800 dark:text-stone-200">{dest.durationDays} Days</strong>
                </div>
              </div>

              <div className="space-y-3">
                {dest.itinerary.map((day) => {
                  const isOpen = expandedDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden bg-white dark:bg-stone-800/60"
                    >
                      <button
                        onClick={() => setExpandedDay(isOpen ? null : day.day)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-teal-900 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                              Day {day.day}
                            </div>
                            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                              {day.title}
                            </h4>
                          </div>
                        </div>

                        <span className="text-xs text-stone-400 font-mono">
                          {isOpen ? '—' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 space-y-3 text-xs border-t border-stone-100 dark:border-stone-800 text-stone-600 dark:text-stone-300">
                          <p className="leading-relaxed">
                            {day.description}
                          </p>

                          {/* Highlights pills */}
                          <div className="space-y-1">
                            <span className="font-semibold text-stone-700 dark:text-stone-200 text-[11px] uppercase tracking-wider">
                              Daily Highlights:
                            </span>
                            <div className="flex items-center gap-2 flex-wrap">
                              {day.highlights.map((h, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400">
                                  <Sparkles className="w-3 h-3 text-amber-500" />
                                  <span>{h}</span>
                                  {idx < day.highlights.length - 1 && <span aria-hidden="true">·</span>}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/80 text-[11px]">
                            <div>
                              <strong className="text-stone-700 dark:text-stone-300">Meals Included:</strong> {day.mealsIncluded}
                            </div>
                            <div>
                              <strong className="text-stone-700 dark:text-stone-300">Lodging:</strong> {day.accommodation}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: TIER COMPARISON */}
          {activeTab === 'tiers' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold">Select Your Expedition Tier</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Compare inclusions across Classic, Signature Luxury, and Private VIP experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {dest.tiers.map((tier) => {
                  const isSelected = selectedTierName === tier.name;
                  return (
                    <div
                      key={tier.name}
                      onClick={() => setSelectedTierName(tier.name)}
                      className={`relative flex flex-col justify-between p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 shadow-md ring-1 ring-amber-500'
                          : 'bg-white dark:bg-stone-800/60 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                      }`}
                    >
                      {tier.badge && (
                        <div className="absolute -top-2.5 right-4 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                          {tier.badge}
                        </div>
                      )}

                      <div>
                        <h4 className="font-display text-base font-bold text-stone-900 dark:text-stone-100">
                          {tier.name}
                        </h4>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                          {tier.groupType}
                        </div>

                        <div className="mt-3 mb-4">
                          <span className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                            {formatPrice(tier.pricePerPersonUSD)}
                          </span>
                          <span className="text-xs text-stone-500"> / person</span>
                        </div>

                        <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
                          Accommodations:
                        </div>
                        <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 pb-3 border-b border-stone-200 dark:border-stone-800">
                          {tier.hotelGrade}
                        </p>

                        <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
                          Tier Inclusions:
                        </div>
                        <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                          {tier.includedFeatures.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookCurrent(tier.name);
                        }}
                        className={`mt-6 w-full py-2.5 rounded-xl font-semibold text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-teal-800 hover:bg-teal-900 text-white'
                            : 'bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 text-stone-800 dark:text-stone-200'
                        }`}
                      >
                        {isSelected ? 'Book This Tier' : 'Select Tier'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: VIRTUAL 360° PREVIEW */}
          {activeTab === '360' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold flex items-center gap-2">
                    <Camera className="w-5 h-5 text-amber-500" />
                    <span>Interactive 360° Panoramic Preview</span>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Click and drag horizontally across the panorama to look around. Click hotspot pins to discover vantage points.
                  </p>
                </div>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium bg-amber-500/10 px-2.5 py-1 rounded-md">
                  Drag to rotate 360°
                </span>
              </div>

              {/* Pan container */}
              <div
                onMouseDown={handleMouseDown360}
                onMouseMove={handleMouseMove360}
                onMouseUp={handleMouseUp360}
                onMouseLeave={handleMouseUp360}
                className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-stone-200 dark:border-stone-800 shadow-inner select-none bg-stone-950"
              >
                <div
                  className="absolute inset-0 w-[200%] h-full flex"
                  style={{
                    transform: `translateX(-${Math.abs(panOffset % 50)}%)`,
                    transition: isPanning ? 'none' : 'transform 0.2s ease-out'
                  }}
                >
                  <img
                    src={dest.panoramaImage}
                    alt="360 view"
                    className="w-1/2 h-full object-cover pointer-events-none"
                  />
                  <img
                    src={dest.panoramaImage}
                    alt="360 view duplicate"
                    className="w-1/2 h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Hotspot Markers */}
                {dest.panoramaHotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                    style={{ left: `${hotspot.xPercent}%`, top: `${hotspot.yPercent}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center shadow-lg hover:scale-125 transition-transform animate-pulse border-2 border-white"
                    title={hotspot.title}
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                ))}

                {/* Active Hotspot Callout Modal */}
                {activeHotspot && (
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-stone-900/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/20 shadow-xl z-20 animate-fade-in">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-bold text-amber-400">Hotspot Vantage</span>
                      <button onClick={() => setActiveHotspot(null)} className="text-stone-400 hover:text-white">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="font-display font-bold text-sm">{activeHotspot.title}</h4>
                    <p className="text-xs text-stone-300 mt-1 leading-relaxed">{activeHotspot.description}</p>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3 text-amber-400" />
                  <span>Interactive 360° Simulation</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: WEATHER & PACKING */}
          {activeTab === 'weather' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold">Climate & Packing Guide</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Meteorological forecast and recommendations for {dest.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
                  <Sun className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                  <div className="text-2xl font-bold font-display text-stone-900 dark:text-stone-100">
                    {dest.weather.tempCelsius}°C / {dest.weather.tempFahrenheit}°F
                  </div>
                  <div className="text-xs text-stone-500 font-medium mt-1">
                    {dest.weather.condition}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-center">
                  <Calendar className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                    Optimal Travel Window
                  </div>
                  <div className="text-xs text-teal-700 dark:text-teal-300 font-medium mt-1">
                    {dest.weather.bestMonths}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
                  <CloudRain className="w-6 h-6 text-stone-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                    Average Rainfall / UV
                  </div>
                  <div className="text-xs text-stone-500 font-medium mt-1">
                    {dest.weather.rainfallAvgMm} mm / UV Index {dest.weather.uvIndex}
                  </div>
                </div>

              </div>

              {/* Packing advice callout */}
              <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 space-y-2">
                <h4 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
                  Concierge Packing Recommendations
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {dest.weather.packingAdvice}
                </p>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-stone-200 dark:border-stone-700">
                  * All guests receive a personalized departure weather brief via SMS 48 hours prior to flight.
                </p>
              </div>

            </div>
          )}

          {/* TAB 6: TRAVELER REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <h3 className="font-display text-lg font-bold">Verified Traveler Testimonials</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Feedback from guests who completed this exact expedition.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>{dest.rating}</span>
                  <span className="text-xs font-normal text-stone-400">/ 5.0</span>
                </div>
              </div>

              <div className="space-y-4">
                {dest.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.avatar}
                          alt={rev.author}
                          className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                            {rev.author}
                          </h4>
                          <div className="text-[11px] text-stone-400">
                            {rev.location} · {rev.tripTaken}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed italic">
                      "{rev.comment}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                      <span>Travel date: {rev.date}</span>
                      <span>{rev.helpfulCount} travelers found this helpful</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
          <div>
            <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
              Selected Package Pricing
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                {formatPrice(dest.basePriceUSD)}
              </span>
              <span className="text-xs text-stone-500">/ person · 100% Carbon Neutral</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleScrollToBuilder}
              className="flex-1 sm:flex-none text-xs font-semibold px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Customize in Builder
            </button>
            <button
              onClick={() => handleBookCurrent(selectedTierName)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs font-bold px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 text-white transition-all shadow-md cursor-pointer"
            >
              <span>Book Expedition</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
