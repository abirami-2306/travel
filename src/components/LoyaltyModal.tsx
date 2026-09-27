import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { 
  X, 
  Award, 
  Check, 
  Sparkles, 
  Gift, 
  ShieldCheck, 
  Compass, 
  Crown, 
  MapPin 
} from 'lucide-react';

export const LoyaltyModal: React.FC = () => {
  const { 
    isLoyaltyModalOpen, 
    setIsLoyaltyModalOpen, 
    loyaltyPoints, 
    addLoyaltyPoints,
    passportStamps 
  } = useTravel();

  const [redeemedPerk, setRedeemedPerk] = useState<string | null>(null);

  if (!isLoyaltyModalOpen) return null;

  const currentTier = loyaltyPoints >= 3500 ? 'Diamond Explorer' : loyaltyPoints >= 2000 ? 'Gold Pathfinder' : 'Silver Voyager';
  const nextTierPoints = loyaltyPoints >= 3500 ? 5000 : 3500;
  const progressPercent = Math.min(100, Math.round((loyaltyPoints / nextTierPoints) * 100));

  const allPossibleStamps = [
    { country: 'Italy', region: 'Amalfi & Capri', color: 'border-emerald-500 text-emerald-600' },
    { country: 'Japan', region: 'Kyoto & Alps', color: 'border-rose-500 text-rose-600' },
    { country: 'Tanzania', region: 'Serengeti Migration', color: 'border-amber-500 text-amber-600' },
    { country: 'Switzerland', region: 'Matterhorn & Rails', color: 'border-blue-500 text-blue-600' },
    { country: 'Greece', region: 'Santorini Caldera', color: 'border-cyan-500 text-cyan-600' },
    { country: 'Indonesia', region: 'Komodo Archipelago', color: 'border-teal-500 text-teal-600' },
    { country: 'Chile', region: 'Torres del Paine', color: 'border-indigo-500 text-indigo-600' },
    { country: 'Canada', region: 'Banff Rockies', color: 'border-red-500 text-red-600' },
  ];

  const perks = [
    { id: 'perk1', name: '$150 Expedition Air Credit', pointsCost: 1500, desc: 'Applied directly to your next flight booking via Aura concierge' },
    { id: 'perk2', name: '60-Min In-Suite Spa Ritual', pointsCost: 1800, desc: 'Complimentary holistic herbal massage in your villa or ryokan' },
    { id: 'perk3', name: 'VIP Airport Lounge Pass', pointsCost: 800, desc: 'Priority Pass lounge access for 2 travelers during transit' },
    { id: 'perk4', name: 'Welcome Vintage Champagne', pointsCost: 600, desc: 'Chilled bottle of Dom Pérignon or Krug upon hotel arrival' },
  ];

  const handleRedeem = (perk: typeof perks[0]) => {
    if (loyaltyPoints >= perk.pointsCost) {
      addLoyaltyPoints(-perk.pointsCost);
      setRedeemedPerk(perk.name);
      setTimeout(() => setRedeemedPerk(null), 4000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={() => setIsLoyaltyModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 text-stone-900 dark:text-stone-100"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-400/40 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold">Voyagers Club</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/40">
                  {currentTier}
                </span>
              </div>
              <p className="text-xs text-stone-500">Tier benefits, passport stamp collection, and reward redemptions</p>
            </div>
          </div>

          <button
            onClick={() => setIsLoyaltyModalOpen(false)}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close Loyalty Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tier Status Card */}
        <div className="mt-5 p-5 rounded-2xl bg-gradient-to-r from-stone-900 to-teal-950 text-white shadow-lg border border-teal-800/40 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                Current Balance
              </div>
              <div className="font-display text-3xl font-bold">
                {loyaltyPoints.toLocaleString()} <span className="text-sm font-sans font-normal text-stone-300">Expedition Points</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Next Tier</div>
              <div className="text-xs font-bold text-amber-300">
                Diamond Explorer (at {nextTierPoints.toLocaleString()} pts)
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>{currentTier}</span>
              <span>{progressPercent}% towards next upgrade</span>
            </div>
          </div>
        </div>

        {/* Redeemed success banner */}
        {redeemedPerk && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>Success! {redeemedPerk} has been credited to your active booking profile.</span>
          </div>
        )}

        {/* Virtual Passport Stamps */}
        <div className="mt-6 space-y-2.5">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center justify-between">
            <span>Virtual Passport Stamps ({passportStamps.length} of {allPossibleStamps.length})</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 lowercase font-mono">click destinations to collect</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {allPossibleStamps.map((stamp) => {
              const isStamped = passportStamps.some((s) => s.toLowerCase() === stamp.country.toLowerCase());
              return (
                <div
                  key={stamp.country}
                  className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                    isStamped
                      ? `${stamp.color} bg-white dark:bg-stone-800 shadow-sm border-dashed rotate-[-1deg]`
                      : 'border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/50 opacity-40'
                  }`}
                >
                  <div className="text-[10px] uppercase font-mono tracking-wider font-bold">
                    {isStamped ? '★ VISITED ★' : 'UNEXPLORED'}
                  </div>
                  <div className="font-display text-xs font-bold mt-0.5">{stamp.country}</div>
                  <div className="text-[9px] text-stone-500 truncate">{stamp.region}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Redeemable Perks Catalog */}
        <div className="mt-6 space-y-2.5">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-500">
            Redeem Points for Exclusive Amenities
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((perk) => {
              const canAfford = loyaltyPoints >= perk.pointsCost;
              return (
                <div
                  key={perk.id}
                  className="p-3.5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="font-display text-xs font-bold text-stone-900 dark:text-stone-100">
                        {perk.name}
                      </h5>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {perk.pointsCost} pts
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRedeem(perk)}
                    disabled={!canAfford}
                    className={`mt-3 py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      canAfford
                        ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-700 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? 'Redeem Perk' : 'Need More Points'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-center text-[11px] text-stone-500">
          Earn 100 points for every quiz taken, 150 points for building custom itineraries, and 1,000 points per booked expedition.
        </div>

      </div>
    </div>
  );
};
