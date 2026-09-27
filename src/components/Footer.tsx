import React from 'react';
import { useTravel } from '../context/TravelContext';
import { CURRENCIES } from '../data/destinations';
import { CurrencyCode } from '../types/travel';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Leaf, 
  Award, 
  Globe, 
  Sparkles,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    currency, 
    setCurrency, 
    setIsMoodQuizOpen, 
    setIsBudgetCalcOpen, 
    setIsLoyaltyModalOpen 
  } = useTravel();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80 mt-16 transition-colors">
      
      {/* Trust Badges Ribbon */}
      <div className="border-b border-stone-900 bg-stone-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-stone-200">100% Carbon Neutral</div>
              <div className="text-[11px] text-stone-400">Gold Standard reforestation</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-stone-200">Virtuoso Preferred</div>
              <div className="text-[11px] text-stone-400">Privileged VIP hotel upgrades</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-stone-200">ASTA & ATOL Protected</div>
              <div className="text-[11px] text-stone-400">Full client fund indemnity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-stone-200">24/7 Global Concierge</div>
              <div className="text-[11px] text-stone-400">Dedicated bilingual on-call team</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Summary */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-900 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                AuraVoyage
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400 ml-2 px-1.5 py-0.5 rounded bg-amber-500/10">
                Expeditions
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
            Handcrafting high-end, low-density travel expeditions across Earth's most breathtaking frontiers. Dedicated to environmental conservation and authentic cultural preservation.
          </p>

          <div className="space-y-1.5 text-xs text-stone-400 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>VIP Line: +1 (800) 489-AURA / +44 (20) 7946 0192</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>concierge@auravoyage.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Offices: Geneva · London · New York · Tokyo</span>
            </div>
          </div>
        </div>

        {/* Quick Links: Expeditions */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
            Expeditions
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Amalfi Coast & Capri
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Kyoto & Japanese Alps
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Serengeti Migration
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Swiss Alps Rail Tour
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Santorini Private Yacht
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('destinations')} className="hover:text-amber-400 transition-colors">
                Patagonia Glacier Trek
              </button>
            </li>
          </ul>
        </div>

        {/* Planning & Tools */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
            Curated Tools
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button onClick={() => scrollTo('trip-planner')} className="hover:text-amber-400 transition-colors">
                Custom Trip Builder
              </button>
            </li>
            <li>
              <button onClick={() => setIsMoodQuizOpen(true)} className="hover:text-amber-400 transition-colors">
                Destination Vibe Quiz
              </button>
            </li>
            <li>
              <button onClick={() => setIsBudgetCalcOpen(true)} className="hover:text-amber-400 transition-colors">
                Budget & Currency Calculator
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('world-map')} className="hover:text-amber-400 transition-colors">
                Interactive World Map
              </button>
            </li>
            <li>
              <button onClick={() => setIsLoyaltyModalOpen(true)} className="hover:text-amber-400 transition-colors">
                Voyager Club Loyalty Rewards
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('travel-guides')} className="hover:text-amber-400 transition-colors">
                Field Guides & Stories
              </button>
            </li>
          </ul>
        </div>

        {/* Global Settings (Currency & Language) */}
        <div className="space-y-3">
          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
            Preferences
          </h4>

          <div className="space-y-2">
            <label className="block text-[11px] text-stone-400">Selected Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs rounded-lg p-2 font-medium cursor-pointer"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c}>{CURRENCIES[c].label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-[11px] text-stone-400">Language</label>
            <select
              className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs rounded-lg p-2 font-medium cursor-pointer"
            >
              <option value="en">English (US / Global)</option>
              <option value="fr">Français (France)</option>
              <option value="de">Deutsch (Schweiz)</option>
              <option value="ja">日本語 (Japan)</option>
              <option value="it">Italiano (Italia)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Copyright Sub-footer */}
      <div className="border-t border-stone-900 bg-stone-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} AuraVoyage Expeditions Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Voyage</a>
            <a href="#" className="hover:text-stone-300">B-Corp Certification</a>
            <a href="#" className="hover:text-stone-300">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
