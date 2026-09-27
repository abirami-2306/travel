import React, { useState } from 'react';
import { Destination } from '../types/travel';
import { useTravel } from '../context/TravelContext';
import { Heart, Star, Compass, ArrowRight, Eye, Leaf, Sparkles, MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { 
    formatPrice, 
    isInWishlist, 
    toggleWishlist, 
    setSelectedDestinationModal,
    setSelectedBooking,
    addPassportStamp
  } = useTravel();

  const isFavorited = isInWishlist(destination.id);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleCardClick = () => {
    addPassportStamp(destination.country);
    setSelectedDestinationModal(destination);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(destination.id);
  };

  const handleQuickBookClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addPassportStamp(destination.country);
    setSelectedBooking({ destination, tierName: destination.tiers[1]?.name || destination.tiers[0]?.name });
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200/90 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container with subtle photo cycling on thumbnail click / hover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
        <img
          src={destination.galleryImages[activePhotoIdx] || destination.heroImage}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Dynamic Urgency / Pricing Badge */}
        {destination.dynamicBadge && (
          <div className="absolute top-3 left-3 z-10 bg-stone-950/85 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-amber-400/20 shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{destination.dynamicBadge}</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-stone-200/60 dark:border-stone-700/60 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-rose-500 hover:scale-110 transition-all cursor-pointer shadow-sm"
        >
          <Heart className={`w-4 h-4 transition-colors ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Image preview dots */}
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          {destination.galleryImages.slice(0, 4).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                activePhotoIdx === idx ? 'bg-amber-400 w-3' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`View photo ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        
        <div>
          {/* Metadata Bar (Anti-slop: clean text with typographic dot separators, no static pills) */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>{destination.country}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.durationDays} Days / {destination.durationNights} Nights</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 font-medium text-stone-800 dark:text-stone-200">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{destination.rating}</span>
              <span className="text-[11px] text-stone-400 font-normal">({destination.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-teal-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
            {destination.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
            {destination.shortDescription}
          </p>

          {/* Sustainable Offset Feature */}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
            <Leaf className="w-3 h-3 text-emerald-600 dark:text-emerald-500 shrink-0" />
            <span>{destination.carbonCO2eTons}t CO₂e offset included</span>
            <span aria-hidden="true">·</span>
            <span>{destination.style}</span>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold">
              Starting from
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                {formatPrice(destination.basePriceUSD)}
              </span>
              {destination.originalPriceUSD && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(destination.originalPriceUSD)}
                </span>
              )}
              <span className="text-[11px] text-stone-500 dark:text-stone-400">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleQuickBookClick}
              className="text-xs font-semibold px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={handleCardClick}
              className="flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 text-white transition-colors cursor-pointer shadow-sm"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
