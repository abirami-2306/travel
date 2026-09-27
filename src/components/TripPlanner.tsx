import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { 
  BUILDER_HOTEL_OPTIONS, 
  BUILDER_ACTIVITY_OPTIONS, 
  BUILDER_TRANSPORT_OPTIONS 
} from '../data/travelGuides';
import { CustomItinerary, CustomItineraryItem } from '../types/travel';
import { 
  Compass, 
  Building, 
  Crown, 
  Leaf, 
  Sparkles, 
  Ship, 
  Plane, 
  Utensils, 
  MapPin, 
  Car, 
  Train, 
  Shield, 
  Users, 
  DollarSign, 
  Check, 
  Share2, 
  BookmarkCheck, 
  Printer, 
  ArrowRight,
  Calculator
} from 'lucide-react';

export const TripPlanner: React.FC = () => {
  const { 
    formatPrice, 
    convertPrice, 
    currencySymbol,
    saveCustomItinerary, 
    savedCustomItineraries,
    deleteCustomItinerary,
    setSelectedBooking
  } = useTravel();

  const [selectedDestId, setSelectedDestId] = useState(SAMPLE_DESTINATIONS[0].id);
  const [durationDays, setDurationDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState<CustomItineraryItem>(BUILDER_HOTEL_OPTIONS[1]);
  const [selectedActivities, setSelectedActivities] = useState<CustomItineraryItem[]>([
    BUILDER_ACTIVITY_OPTIONS[0],
    BUILDER_ACTIVITY_OPTIONS[3],
  ]);
  const [selectedTransport, setSelectedTransport] = useState<CustomItineraryItem>(BUILDER_TRANSPORT_OPTIONS[0]);
  const [includeCarbonOffset, setIncludeCarbonOffset] = useState(true);
  const [groupSplitCount, setGroupSplitCount] = useState(2);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);

  const activeDestination = SAMPLE_DESTINATIONS.find((d) => d.id === selectedDestId) || SAMPLE_DESTINATIONS[0];

  // Price Calculation
  const nights = Math.max(1, durationDays - 1);
  const hotelTotal = selectedHotel.priceUSD * nights;
  const activitiesTotal = selectedActivities.reduce((acc, a) => acc + a.priceUSD, 0) * travelers;
  const transportTotal = selectedTransport.priceUSD * durationDays;
  const carbonOffsetCost = includeCarbonOffset ? 24 * travelers : 0;

  const totalTripUSD = hotelTotal + activitiesTotal + transportTotal + carbonOffsetCost;
  const perPersonUSD = Math.round(totalTripUSD / travelers);
  const splitShareUSD = Math.round(totalTripUSD / groupSplitCount);

  // Toggle activity
  const toggleActivity = (act: CustomItineraryItem) => {
    setSelectedActivities((prev) => {
      const exists = prev.some((item) => item.id === act.id);
      if (exists) {
        return prev.filter((item) => item.id !== act.id);
      } else {
        return [...prev, act];
      }
    });
  };

  const handleSaveItinerary = () => {
    const newItin: CustomItinerary = {
      id: 'custom-' + Date.now(),
      destinationId: activeDestination.id,
      destinationName: activeDestination.name,
      startDate: 'October 2026',
      endDate: 'November 2026',
      days: durationDays,
      travelers,
      hotel: selectedHotel,
      activities: selectedActivities,
      transport: selectedTransport,
      includeCarbonOffset,
      totalPriceUSD: totalTripUSD,
      createdAt: new Date().toLocaleDateString(),
    };
    saveCustomItinerary(newItin);
    setSaveSuccessMessage(true);
    setTimeout(() => setSaveSuccessMessage(false), 3500);
  };

  const handleBookCustom = () => {
    setSelectedBooking({
      destination: activeDestination,
      tierName: `Custom Bespoke (${selectedHotel.name})`,
    });
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'Crown': return <Crown className="w-4 h-4 text-amber-500" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Ship': return <Ship className="w-4 h-4 text-blue-500" />;
      case 'Plane': return <Plane className="w-4 h-4 text-indigo-500" />;
      case 'Compass': return <Compass className="w-4 h-4 text-amber-500" />;
      case 'Utensils': return <Utensils className="w-4 h-4 text-rose-500" />;
      case 'MapPin': return <MapPin className="w-4 h-4 text-teal-600" />;
      case 'Car': return <Car className="w-4 h-4 text-stone-600 dark:text-stone-300" />;
      case 'Train': return <Train className="w-4 h-4 text-teal-600" />;
      default: return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="trip-planner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Itinerary Studio</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
          Custom Trip Builder
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light leading-relaxed">
          Craft your bespoke expedition step by step. Choose luxury accommodations, private excursions, and ground transit with live cost calculation and group split estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Step-Based Builder (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* STEP 1: DESTINATION & DATES */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                Expedition Destination & Duration
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 mb-1">
                  Destination
                </label>
                <select
                  value={selectedDestId}
                  onChange={(e) => setSelectedDestId(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-2.5 text-xs font-semibold text-stone-800 dark:text-stone-200 cursor-pointer"
                >
                  {SAMPLE_DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.country})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 mb-1">
                  Duration (Days)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="3"
                    max="14"
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 min-w-[50px] text-right">
                    {durationDays} Days
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 dark:text-stone-400 mb-1">
                  Travelers
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const next = Math.max(1, travelers - 1);
                      setTravelers(next);
                      setGroupSplitCount(next);
                    }}
                    className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 w-8 text-center">
                    {travelers}
                  </span>
                  <button
                    onClick={() => {
                      const next = Math.min(10, travelers + 1);
                      setTravelers(next);
                      setGroupSplitCount(next);
                    }}
                    className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: ACCOMMODATION SELECTION */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                  Select Accommodation Tier
                </h3>
              </div>
              <span className="text-xs text-stone-500">{nights} Nights</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {BUILDER_HOTEL_OPTIONS.map((hotel) => {
                const isSelected = selectedHotel.id === hotel.id;
                return (
                  <div
                    key={hotel.id}
                    onClick={() => setSelectedHotel(hotel)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 shadow-sm'
                        : 'bg-stone-50/50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {renderIcon(hotel.iconName)}
                          <h4 className="font-display text-xs font-bold text-stone-900 dark:text-stone-100">
                            {hotel.name}
                          </h4>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-amber-500" />}
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                        {hotel.details}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800 dark:text-stone-200">
                        {formatPrice(hotel.priceUSD)} <span className="text-[10px] font-normal text-stone-400">/ night</span>
                      </span>
                      <span className="text-[10px] text-stone-400">
                        Total: {formatPrice(hotel.priceUSD * nights)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: BESPOKE EXPERIENCES & ACTIVITIES */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                  Select Private Excursions & Activities
                </h3>
              </div>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                {selectedActivities.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {BUILDER_ACTIVITY_OPTIONS.map((act) => {
                const isSelected = selectedActivities.some((a) => a.id === act.id);
                return (
                  <div
                    key={act.id}
                    onClick={() => toggleActivity(act)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 shadow-sm'
                        : 'bg-stone-50/50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {renderIcon(act.iconName)}
                          <h4 className="font-display text-xs font-bold text-stone-900 dark:text-stone-100">
                            {act.name}
                          </h4>
                        </div>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                        {act.details}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800 dark:text-stone-200">
                        {formatPrice(act.priceUSD)} <span className="text-[10px] font-normal text-stone-400">/ traveler</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 4: GROUND & REGIONAL TRANSPORT */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                Ground & Regional Transit
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {BUILDER_TRANSPORT_OPTIONS.map((trans) => {
                const isSelected = selectedTransport.id === trans.id;
                return (
                  <div
                    key={trans.id}
                    onClick={() => setSelectedTransport(trans)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 shadow-sm'
                        : 'bg-stone-50/50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {renderIcon(trans.iconName)}
                          <h4 className="font-display text-xs font-bold text-stone-900 dark:text-stone-100">
                            {trans.name}
                          </h4>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-amber-500" />}
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                        {trans.details}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs font-bold text-stone-800 dark:text-stone-200">
                      {formatPrice(trans.priceUSD)} <span className="text-[10px] font-normal text-stone-400">/ day</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Live Running Cost & Group Trip Splitter (4 Cols Sticky) */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">
                  Custom Itinerary Total
                </span>
                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100">
                  {activeDestination.name}
                </h3>
              </div>
              <span className="text-xs text-stone-500">{durationDays} Days</span>
            </div>

            {/* Line items */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-stone-600 dark:text-stone-400">
                <span>Lodging ({nights} nights · {selectedHotel.name})</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{formatPrice(hotelTotal)}</span>
              </div>
              
              <div className="flex items-center justify-between text-stone-600 dark:text-stone-400">
                <span>Activities ({selectedActivities.length} items × {travelers} travelers)</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{formatPrice(activitiesTotal)}</span>
              </div>

              <div className="flex items-center justify-between text-stone-600 dark:text-stone-400">
                <span>Transport ({durationDays} days · {selectedTransport.name})</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{formatPrice(transportTotal)}</span>
              </div>

              {/* Carbon Offset Toggle */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeCarbonOffset}
                    onChange={(e) => setIncludeCarbonOffset(e.target.checked)}
                    className="rounded accent-emerald-600"
                  />
                  <span className="text-stone-700 dark:text-stone-300">Verified Carbon Offset</span>
                </label>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {includeCarbonOffset ? formatPrice(carbonOffsetCost) : '$0'}
                </span>
              </div>
            </div>

            {/* Total Display */}
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Estimated Total:</span>
                <span className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {formatPrice(totalTripUSD)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>Per Traveler ({travelers}):</span>
                <span className="font-bold text-teal-800 dark:text-teal-300">{formatPrice(perPersonUSD)}</span>
              </div>
            </div>

            {/* Group Trip Splitter Tool */}
            <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-300/40 dark:border-amber-600/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <Users className="w-3.5 h-3.5" />
                  <span>Group Cost Splitter</span>
                </div>
                <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                  {groupSplitCount} people
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="8"
                value={groupSplitCount}
                onChange={(e) => setGroupSplitCount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-stone-500">Share per traveler:</span>
                <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  {formatPrice(splitShareUSD)}
                </span>
              </div>
              <div className="text-[10px] text-stone-400">
                Deposit required to hold dates: 20% ({formatPrice(Math.round(splitShareUSD * 0.2))} / person)
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={handleBookCustom}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                <span>Book Custom Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSaveItinerary}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-xs font-semibold transition-colors cursor-pointer text-stone-800 dark:text-stone-200"
              >
                <BookmarkCheck className="w-4 h-4 text-amber-500" />
                <span>Save to My Trips (+150 pts)</span>
              </button>

              {saveSuccessMessage && (
                <div className="text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-fade-in">
                  ✓ Itinerary saved to My Trips! 150 points added.
                </div>
              )}
            </div>

          </div>

          {/* Saved Itineraries Accordion */}
          {savedCustomItineraries.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-stone-800 space-y-3">
              <h4 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center justify-between">
                <span>My Saved Custom Trips ({savedCustomItineraries.length})</span>
                <span className="text-[10px] text-amber-500 font-semibold uppercase">localStorage</span>
              </h4>

              <div className="space-y-2">
                {savedCustomItineraries.map((it) => (
                  <div
                    key={it.id}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-stone-800 dark:text-stone-200">{it.destinationName}</div>
                      <div className="text-[10px] text-stone-400">{it.days} Days · {formatPrice(it.totalPriceUSD)}</div>
                    </div>

                    <button
                      onClick={() => deleteCustomItinerary(it.id)}
                      className="text-stone-400 hover:text-rose-500 text-[11px] p-1"
                      title="Delete saved itinerary"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
