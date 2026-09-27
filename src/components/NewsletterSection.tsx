import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { Mail, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { addLoyaltyPoints } = useTravel();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    addLoyaltyPoints(200);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-teal-950 text-white p-8 sm:p-14 border border-teal-900 shadow-2xl">
        
        {/* Subtle decorative circles */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Private Dispatch</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Join the Voyagers Circle
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            Receive unlisted private villa releases, seasonal migration forecasts, and an immediate <strong>$150 credit voucher</strong> (+200 club points) applied to your maiden voyage.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter your personal email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900/90 border border-teal-800 text-stone-100 rounded-xl pl-10 pr-4 py-3 text-xs placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all shadow-md cursor-pointer shrink-0"
              >
                Claim $150 Credit
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 text-xs font-semibold space-y-1 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-white">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Welcome to the Circle! Code <strong>VOYAGE150</strong> is active.</span>
              </div>
              <p className="text-[11px] text-emerald-300/80">
                200 Voyagers Club reward points have been credited to your browser profile.
              </p>
            </div>
          )}

          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-stone-400">
            <span>· Strictly zero marketing spam</span>
            <span>· 1 curated email every fortnight</span>
            <span>· Unsubscribe anytime</span>
          </div>

        </div>

      </div>
    </section>
  );
};
