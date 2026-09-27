import React from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { 
  X, 
  Heart, 
  Trash2, 
  ArrowRight, 
  Star, 
  Compass, 
  ShoppingBag,
  Sparkles 
} from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const { 
    isWishlistDrawerOpen, 
    setIsWishlistDrawerOpen, 
    wishlist, 
    toggleWishlist, 
    formatPrice,
    setSelectedDestinationModal,
    setSelectedBooking 
  } = useTravel();

  if (!isWishlistDrawerOpen) return null;

  const savedDestinations = SAMPLE_DESTINATIONS.filter((d) => wishlist.includes(d.id));
  const totalWishlistUSD = savedDestinations.reduce((acc, d) => acc + d.basePriceUSD, 0);

  const handleOpenDestination = (d: typeof savedDestinations[0]) => {
    setIsWishlistDrawerOpen(false);
    setSelectedDestinationModal(d);
  };

  const handleBookDestination = (d: typeof savedDestinations[0]) => {
    setIsWishlistDrawerOpen(false);
    setSelectedBooking({ destination: d, tierName: d.tiers[1]?.name || d.tiers[0]?.name });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsWishlistDrawerOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-stone-50 dark:bg-stone-900 h-full shadow-2xl flex flex-col border-l border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100"
      >
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-white dark:bg-stone-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Saved Expeditions</h3>
              <p className="text-xs text-stone-500">{savedDestinations.length} trips saved in localStorage</p>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedDestinations.length > 0 ? (
            savedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 shadow-sm space-y-3"
              >
                <div className="flex gap-3">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => handleOpenDestination(dest)}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] text-amber-600 dark:text-amber-400 font-semibold uppercase">
                      <span>{dest.country}</span>
                      <button
                        onClick={() => toggleWishlist(dest.id)}
                        className="text-stone-400 hover:text-rose-500 transition-colors p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4
                      onClick={() => handleOpenDestination(dest)}
                      className="font-display text-xs sm:text-sm font-bold truncate cursor-pointer hover:text-amber-600"
                    >
                      {dest.name}
                    </h4>

                    <div className="text-[11px] text-stone-400 mt-0.5">
                      {dest.durationDays} Days / {dest.durationNights} Nights
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold text-xs">
                        From {formatPrice(dest.basePriceUSD)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 dark:border-stone-700">
                  <button
                    onClick={() => handleOpenDestination(dest)}
                    className="py-1.5 px-3 rounded-lg bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 text-stone-800 dark:text-stone-200 text-xs font-semibold text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleBookDestination(dest)}
                    className="py-1.5 px-3 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold text-center cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 px-4">
              <Heart className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-3 stroke-[1.5]" />
              <h4 className="font-display text-base font-bold text-stone-700 dark:text-stone-300">
                Your Wishlist is Empty
              </h4>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Explore our featured expeditions and click the heart icon to save journeys for later review.
              </p>
              <button
                onClick={() => {
                  setIsWishlistDrawerOpen(false);
                  const destEl = document.getElementById('destinations');
                  if (destEl) destEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold cursor-pointer"
              >
                Browse Expeditions
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {savedDestinations.length > 0 && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-stone-500">Combined Value:</span>
              <span className="font-display text-xl font-bold">
                {formatPrice(totalWishlistUSD)}
              </span>
            </div>

            <button
              onClick={() => {
                setIsWishlistDrawerOpen(false);
                const plannerEl = document.getElementById('trip-planner');
                if (plannerEl) plannerEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build Custom Journey from Saved</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
