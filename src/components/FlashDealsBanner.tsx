import React, { useState, useEffect } from 'react';
import { useTravel } from '../context/TravelContext';
import { Sparkles, Clock, ArrowRight, Tag, Check } from 'lucide-react';

export const FlashDealsBanner: React.FC = () => {
  const { openDestinationById } = useTravel();
  const [copied, setCopied] = useState(false);

  // Countdown timer: target 3 days, 14 hours, 22 mins, 40 secs
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyPromo = () => {
    navigator.clipboard?.writeText('VOYAGE150');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-stone-900 via-teal-950 to-stone-900 text-white p-5 sm:p-7 shadow-lg border border-teal-800/40">
        
        {/* Subtle decorative background glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Column: Offer Details */}
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Limited Departure Window
              </span>
              <span className="text-xs text-stone-300">
                Autumn & Winter Expeditions
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Save up to 15% on Amalfi Coast & Japanese Alps Departures
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Book your private charter or luxury ryokan retreat by midnight this Sunday. Includes complimentary private Riva yacht upgrade or master Kaiseki wine pairing.
            </p>
          </div>

          {/* Right Column: Live Countdown & Code CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            
            {/* Ticking Countdown Boxes */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-stone-400 mr-1 text-xs">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Ends in:</span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-center">
                <div className="bg-black/50 backdrop-blur border border-white/10 rounded-lg px-2.5 py-1.5 min-w-[42px]">
                  <div className="text-sm font-bold text-amber-300">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">Days</div>
                </div>
                <span className="text-stone-500 font-bold">:</span>
                <div className="bg-black/50 backdrop-blur border border-white/10 rounded-lg px-2.5 py-1.5 min-w-[42px]">
                  <div className="text-sm font-bold text-amber-300">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">Hrs</div>
                </div>
                <span className="text-stone-500 font-bold">:</span>
                <div className="bg-black/50 backdrop-blur border border-white/10 rounded-lg px-2.5 py-1.5 min-w-[42px]">
                  <div className="text-sm font-bold text-amber-300">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">Min</div>
                </div>
                <span className="text-stone-500 font-bold">:</span>
                <div className="bg-black/50 backdrop-blur border border-white/10 rounded-lg px-2.5 py-1.5 min-w-[42px]">
                  <div className="text-sm font-bold text-amber-300">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">Sec</div>
                </div>
              </div>
            </div>

            {/* Promo Code & Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyPromo}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-stone-200 transition-colors cursor-pointer"
                title="Copy discount voucher code"
              >
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>VOYAGE150</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span className="text-[10px] text-stone-400 ml-1">Copy</span>}
              </button>

              <button
                onClick={() => openDestinationById('amalfi-capri-yacht')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md cursor-pointer shrink-0"
              >
                <span>Claim Deal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
