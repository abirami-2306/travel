import React, { useMemo, useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { DestinationCard } from './DestinationCard';
import { Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const DestinationsGrid: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedContinent,
    setSelectedContinent,
    selectedStyle,
    setSelectedStyle,
    maxBudgetUSD,
    setMaxBudgetUSD,
    setIsMoodQuizOpen,
  } = useTravel();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'duration'>('featured');

  const continents = ['All', 'Europe', 'Asia', 'Africa', 'Americas'];
  const styles = ['All', 'Coastal & Yacht', 'Alpine & Glaciers', 'Cultural Heritage', 'Wildlife Safari'];

  const filteredDestinations = useMemo(() => {
    return SAMPLE_DESTINATIONS.filter((item) => {
      // Continent filter
      if (selectedContinent !== 'All' && item.continent !== selectedContinent) {
        return false;
      }
      // Style filter
      if (selectedStyle !== 'All' && item.style !== selectedStyle) {
        return false;
      }
      // Budget filter
      if (item.basePriceUSD > maxBudgetUSD) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCountry = item.country.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesStyle = item.style.toLowerCase().includes(q);
        if (!matchesName && !matchesCountry && !matchesDesc && !matchesStyle) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.basePriceUSD - b.basePriceUSD;
      if (sortBy === 'price-desc') return b.basePriceUSD - a.basePriceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return b.durationDays - a.durationDays;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedContinent, selectedStyle, maxBudgetUSD, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedContinent('All');
    setSelectedStyle('All');
    setMaxBudgetUSD(10000);
    setSortBy('featured');
  };

  const isFiltered = selectedContinent !== 'All' || selectedStyle !== 'All' || searchQuery !== '' || maxBudgetUSD < 10000;

  return (
    <section id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Expedition Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Handcrafted Destinations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl font-light">
            Every itinerary is personally vetted and paced by our expedition team, featuring private access and premier boutique lodges.
          </p>
        </div>

        {/* Vibe Quiz Callout Button */}
        <button
          onClick={() => setIsMoodQuizOpen(true)}
          className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-600/40 text-xs font-semibold transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Need Inspiration? Take the 60-Sec Quiz</span>
        </button>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="space-y-4 mb-8">
        
        {/* Continent Buttons (Segmented Controls) */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 rounded-xl overflow-x-auto max-w-full">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedContinent === continent
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {continent === 'All' ? 'All Regions' : continent}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end">
            <span className="text-xs text-stone-500 dark:text-stone-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg px-2.5 py-1.5 text-stone-800 dark:text-stone-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500"
              aria-label="Sort packages by"
            >
              <option value="featured">Curated & Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Traveler Rating</option>
              <option value="duration">Trip Duration</option>
            </select>
          </div>
        </div>

        {/* Style Buttons & Active Filter Tags */}
        <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-stone-500 font-medium">Travel Style:</span>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedStyle === style
                    ? 'bg-teal-900 text-amber-300 font-semibold dark:bg-teal-800'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 hover:underline cursor-pointer font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* Grid of Destination Cards */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-stone-100/70 dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800">
          <SlidersHorizontal className="w-10 h-10 text-stone-400 mx-auto mb-3" />
          <h3 className="font-display text-xl font-bold text-stone-800 dark:text-stone-200">
            No expeditions match your current filters
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Try adjusting your budget slider, changing continent selection, or clearing your search term.
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Trust badges footer note */}
      <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 flex-wrap gap-4">
        <span>Showing {filteredDestinations.length} of {SAMPLE_DESTINATIONS.length} signature expeditions</span>
        <div className="flex items-center gap-4">
          <span>· Private Groups Max 6-12</span>
          <span>· VIP Fast-Track Entry</span>
          <span>· Transparent All-Inclusive Pricing</span>
        </div>
      </div>

    </section>
  );
};
