import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { CURRENCIES } from '../data/destinations';
import { CurrencyCode } from '../types/travel';
import { 
  Compass, 
  Heart, 
  Moon, 
  Sun, 
  Award, 
  Sparkles, 
  Menu, 
  X, 
  Globe, 
  Calculator, 
  Search 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currency,
    setCurrency,
    isDarkMode,
    toggleDarkMode,
    wishlist,
    setIsWishlistDrawerOpen,
    setIsMoodQuizOpen,
    setIsBudgetCalcOpen,
    setIsLoyaltyModalOpen,
    loyaltyPoints,
  } = useTravel();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-50/90 dark:bg-stone-950/90 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-900 dark:bg-teal-800 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                AuraVoyage
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400 px-1 py-0.5 rounded bg-amber-500/10">
                Expeditions
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 tracking-wider">
              Handcrafted Luxury & Adventure
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700 dark:text-stone-300">
          <button
            onClick={() => scrollToSection('destinations')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            Expeditions
          </button>
          <button
            onClick={() => scrollToSection('world-map')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            World Map
          </button>
          <button
            onClick={() => scrollToSection('trip-planner')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            Trip Planner
          </button>
          <button
            onClick={() => scrollToSection('travel-guides')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            Stories & Guides
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer py-1"
          >
            Travelers
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Mood Quiz Trigger */}
          <button
            onClick={() => setIsMoodQuizOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors cursor-pointer border border-stone-200 dark:border-stone-800"
            title="Take our destination mood quiz"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Vibe Finder</span>
          </button>

          {/* Budget Calculator Trigger */}
          <button
            onClick={() => setIsBudgetCalcOpen(true)}
            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer border border-stone-200 dark:border-stone-800"
            title="Open Budget & Currency Calculator"
            aria-label="Budget Calculator"
          >
            <Calculator className="w-4 h-4" />
          </button>

          {/* Currency Selector */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="appearance-none bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium rounded-lg pl-2.5 pr-6 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Select currency"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c} className="bg-stone-50 dark:bg-stone-900">
                  {c}
                </option>
              ))}
            </select>
            <Globe className="w-3 h-3 text-stone-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Wishlist Drawer Trigger */}
          <button
            onClick={() => setIsWishlistDrawerOpen(true)}
            className="relative p-2 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer border border-stone-200 dark:border-stone-800"
            aria-label="View Saved Trips"
            title="View Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Loyalty Club Trigger */}
          <button
            onClick={() => setIsLoyaltyModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 dark:hover:bg-amber-500/30 transition-colors cursor-pointer border border-amber-300/40 dark:border-amber-600/40"
            title="Voyager Elite Club Loyalty Status"
          >
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{loyaltyPoints.toLocaleString()} pts</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer border border-stone-200 dark:border-stone-800"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('trip-planner')}
            className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600 text-white transition-all shadow-sm cursor-pointer"
          >
            Plan a Trip
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setIsWishlistDrawerOpen(true)}
            className="relative p-2 rounded-lg bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300"
            aria-label="View Saved Trips"
          >
            <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              Expeditions
            </button>
            <button
              onClick={() => scrollToSection('world-map')}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              World Map
            </button>
            <button
              onClick={() => scrollToSection('trip-planner')}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              Trip Planner
            </button>
            <button
              onClick={() => scrollToSection('travel-guides')}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              Stories & Guides
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsMoodQuizOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Vibe Quiz</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoyaltyModalOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300"
            >
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{loyaltyPoints} Pts</span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-medium rounded p-1.5 text-stone-800 dark:text-stone-200"
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-1.5 text-xs text-stone-700 dark:text-stone-300 p-2 rounded-lg bg-stone-100 dark:bg-stone-900"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
