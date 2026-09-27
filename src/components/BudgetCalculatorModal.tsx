import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { CURRENCIES, SAMPLE_DESTINATIONS } from '../data/destinations';
import { CurrencyCode } from '../types/travel';
import { 
  X, 
  Calculator, 
  DollarSign, 
  Utensils, 
  Compass, 
  Sparkles, 
  ShoppingBag, 
  Coins, 
  Globe,
  ArrowRight
} from 'lucide-react';

export const BudgetCalculatorModal: React.FC = () => {
  const { 
    isBudgetCalcOpen, 
    setIsBudgetCalcOpen, 
    currency, 
    setCurrency, 
    formatPrice, 
    convertPrice,
    setSelectedDestinationModal 
  } = useTravel();

  const [totalBudgetUSD, setTotalBudgetUSD] = useState(6000);
  const [tripDays, setTripDays] = useState(7);
  const [numTravelers, setNumTravelers] = useState(2);
  const [testPackageId, setTestPackageId] = useState(SAMPLE_DESTINATIONS[0].id);

  if (!isBudgetCalcOpen) return null;

  const currentCurr = CURRENCIES[currency] || CURRENCIES.USD;
  const totalBudgetLocal = Math.round(totalBudgetUSD * currentCurr.rateFromUSD);
  const dailySpendPerPersonUSD = Math.round(totalBudgetUSD / (tripDays * numTravelers));
  const dailySpendPerPersonLocal = Math.round(dailySpendPerPersonUSD * currentCurr.rateFromUSD);

  // Breakdown percentages
  const categories = [
    { name: 'Fine Dining & Wine Terroirs', percent: 35, icon: 'Utensils', color: 'text-amber-500' },
    { name: 'Private Excursions & Local Guides', percent: 30, icon: 'Compass', color: 'text-teal-600' },
    { name: 'Wellness & Spa Rituals', percent: 15, icon: 'Sparkles', color: 'text-rose-500' },
    { name: 'Local Artisans & Shopping', percent: 10, icon: 'ShoppingBag', color: 'text-indigo-500' },
    { name: 'Concierge Incidentals & Gratuities', percent: 10, icon: 'Coins', color: 'text-stone-400' },
  ];

  const selectedTestPackage = SAMPLE_DESTINATIONS.find((d) => d.id === testPackageId) || SAMPLE_DESTINATIONS[0];
  const packageTotalUSD = selectedTestPackage.basePriceUSD * numTravelers;
  const packageTotalLocal = Math.round(packageTotalUSD * currentCurr.rateFromUSD);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={() => setIsBudgetCalcOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 text-stone-900 dark:text-stone-100"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-900 text-amber-300 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Currency & Budget Studio</h3>
              <p className="text-xs text-stone-500">Live exchange conversions and recommended daily pacing</p>
            </div>
          </div>

          <button
            onClick={() => setIsBudgetCalcOpen(false)}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close Calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Selector Bar */}
        <div className="mt-5 p-3 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-stone-400" />
            <span className="font-semibold text-stone-700 dark:text-stone-300">Active Currency:</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {Object.keys(CURRENCIES).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c as CurrencyCode)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                  currency === c
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {c} ({CURRENCIES[c].symbol})
              </button>
            ))}
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-stone-600 dark:text-stone-400">Total Budget (USD)</span>
              <span className="text-stone-900 dark:text-stone-100 font-bold">${totalBudgetUSD.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="20000"
              step="500"
              value={totalBudgetUSD}
              onChange={(e) => setTotalBudgetUSD(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-stone-600 dark:text-stone-400">Duration</span>
              <span className="text-stone-900 dark:text-stone-100 font-bold">{tripDays} Days</span>
            </div>
            <input
              type="range"
              min="3"
              max="14"
              value={tripDays}
              onChange={(e) => setTripDays(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-stone-600 dark:text-stone-400">Travelers</span>
              <span className="text-stone-900 dark:text-stone-100 font-bold">{numTravelers}</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={numTravelers}
              onChange={(e) => setNumTravelers(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

        </div>

        {/* Calculated Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-teal-900 text-white flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
              Total in {currency}
            </div>
            <div className="font-display text-2xl font-bold">
              {currentCurr.symbol}{totalBudgetLocal.toLocaleString()}
            </div>
            <div className="text-[11px] text-teal-200">
              Exchange rate: 1 USD = {currentCurr.rateFromUSD} {currency}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
              Recommended Daily Spend
            </div>
            <div className="font-display text-xl font-bold">
              {currentCurr.symbol}{dailySpendPerPersonLocal.toLocaleString()}
            </div>
            <div className="text-[11px] text-teal-200">
              per traveler / day
            </div>
          </div>
        </div>

        {/* Daily Breakdown Categories */}
        <div className="mt-6 space-y-2.5">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-500">
            Recommended Daily Allocation ({currentCurr.symbol}{dailySpendPerPersonLocal} / person / day)
          </h4>

          <div className="space-y-2">
            {categories.map((cat, i) => {
              const allocated = Math.round(dailySpendPerPersonLocal * (cat.percent / 100));
              return (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-600 dark:text-amber-400 w-8">{cat.percent}%</span>
                    <span className="text-stone-700 dark:text-stone-300">{cat.name}</span>
                  </div>
                  <span className="font-bold text-stone-900 dark:text-stone-100">
                    {currentCurr.symbol}{allocated.toLocaleString()} / day
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Package Conversion Quick Tester */}
        <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-stone-500 shrink-0">Sample Package:</span>
            <select
              value={testPackageId}
              onChange={(e) => setTestPackageId(e.target.value)}
              className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-1.5 font-medium text-stone-800 dark:text-stone-200"
            >
              {SAMPLE_DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold text-stone-800 dark:text-stone-200">
              Total ({numTravelers} pax): {currentCurr.symbol}{packageTotalLocal.toLocaleString()}
            </span>
            <button
              onClick={() => {
                setIsBudgetCalcOpen(false);
                setSelectedDestinationModal(selectedTestPackage);
              }}
              className="text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
