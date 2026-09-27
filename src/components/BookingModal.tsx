import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { 
  X, 
  Check, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  ArrowRight, 
  Leaf, 
  CreditCard,
  QrCode,
  Download,
  Mail
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { 
    selectedBooking, 
    setSelectedBooking, 
    formatPrice, 
    addLoyaltyPoints,
    travelerCount,
    travelDates 
  } = useTravel();

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guestName, setGuestName] = useState('Elena Rostova');
  const [guestEmail, setGuestEmail] = useState('elena.rostova@voyager.com');
  const [guestPhone, setGuestPhone] = useState('+1 (555) 382-9102');
  const [specialRequests, setSpecialRequests] = useState('Vegetarian menu for 1 traveler, private terrace preferred.');
  const [promoCode, setPromoCode] = useState('VOYAGE150');
  const [isPromoApplied, setIsPromoApplied] = useState(true);
  const [includeCarbonOffset, setIncludeCarbonOffset] = useState(true);
  const [bookingId, setBookingId] = useState('');

  if (!selectedBooking) return null;

  const dest = selectedBooking.destination;
  const tierName = selectedBooking.tierName || dest.tiers[1]?.name || 'Signature Luxury';
  const tierObj = dest.tiers.find((t) => t.name === tierName) || dest.tiers[0];
  const pricePerPerson = tierObj ? tierObj.pricePerPersonUSD : dest.basePriceUSD;

  const discountAmount = isPromoApplied ? 150 : 0;
  const carbonOffsetCost = includeCarbonOffset ? 24 * travelerCount : 0;
  const subtotal = pricePerPerson * travelerCount;
  const grandTotalUSD = Math.max(0, subtotal - discountAmount + carbonOffsetCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VOYAGE150') {
      setIsPromoApplied(true);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = 'AV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(newBookingId);
    addLoyaltyPoints(1000);
    setStep('confirmed');
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setStep('form');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 text-stone-900 dark:text-stone-100"
      >
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
          aria-label="Close Booking"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleConfirmBooking} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Expedition Privileges</span>
              </div>
              <h3 className="font-display text-2xl font-bold">
                {dest.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                <span>{tierName}</span>
                <span>·</span>
                <span>{dest.durationDays} Days</span>
                <span>·</span>
                <span>{travelDates}</span>
              </div>
            </div>

            {/* Traveler Information Form */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-stone-500">
                Primary Traveler Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    Email for Confirmation & Documents
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    Phone / WhatsApp (For Concierge)
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                    Travelers Count
                  </label>
                  <div className="w-full bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-700 dark:text-stone-300 font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-500" />
                    <span>{travelerCount} Travelers</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 dark:text-stone-400 mb-1">
                  Dietary Preferences & Special Requests
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Promo Code & Carbon Offset Bar */}
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-semibold">Promo Code</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-32 bg-white dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-lg px-2.5 py-1 text-xs font-mono uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3 py-1 rounded-lg bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {isPromoApplied && (
                <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <span>✓ VOYAGE150 code applied: $150 Welcome Credit</span>
                  <span>-$150</span>
                </div>
              )}

              <div className="pt-2 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCarbonOffset}
                    onChange={(e) => setIncludeCarbonOffset(e.target.checked)}
                    className="rounded accent-emerald-600"
                  />
                  <span className="text-stone-700 dark:text-stone-300">
                    Include Certified Gold Standard Carbon Offset
                  </span>
                </label>
                <span className="font-semibold text-emerald-600">
                  {includeCarbonOffset ? formatPrice(carbonOffsetCost) : '$0'}
                </span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="p-4 rounded-2xl bg-teal-950 text-white space-y-2">
              <div className="flex justify-between text-xs text-teal-200">
                <span>{tierName} ({travelerCount} × {formatPrice(pricePerPerson)})</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {isPromoApplied && (
                <div className="flex justify-between text-xs text-amber-300">
                  <span>Voyagers Club Promo Discount</span>
                  <span>-{formatPrice(150)}</span>
                </div>
              )}
              {includeCarbonOffset && (
                <div className="flex justify-between text-xs text-emerald-300">
                  <span>Carbon Offset Contribution</span>
                  <span>+{formatPrice(carbonOffsetCost)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-teal-800 flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-300">Grand Total</div>
                  <div className="text-[11px] text-teal-300">Deposit due today: 20% ({formatPrice(Math.round(grandTotalUSD * 0.2))})</div>
                </div>
                <div className="font-display text-2xl font-bold">
                  {formatPrice(grandTotalUSD)}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Confirm & Place Reservation (+1,000 pts)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                100% Refundable up to 30 days
              </span>
              <span>·</span>
              <span>No hidden resort fees</span>
            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="space-y-6 text-center py-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Reservation Confirmed
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1">
                Welcome to AuraVoyage, {guestName.split(' ')[0]}!
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Your reservation for <strong>{dest.name}</strong> has been secured. Your dedicated concierge will contact you within 4 hours.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-left space-y-3 font-mono text-xs max-w-md mx-auto">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 pb-2">
                <span className="text-stone-400">Booking Reference:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">{bookingId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Expedition:</span>
                <span className="font-bold font-sans">{dest.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Tier:</span>
                <span>{tierName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Travelers:</span>
                <span>{travelerCount} Guests</span>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-700 pt-2 font-bold font-sans text-sm">
                <span>Total Investment:</span>
                <span>{formatPrice(grandTotalUSD)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                Return to Expeditions
              </button>
            </div>

            <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-stone-400" />
              <span>Confirmation receipt sent to {guestEmail}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
