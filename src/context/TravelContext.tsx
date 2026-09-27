import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, Destination, CustomItinerary, TravelGuide } from '../types/travel';
import { CURRENCIES, SAMPLE_DESTINATIONS } from '../data/destinations';

interface TravelContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (amountUSD: number) => string;
  convertPrice: (amountUSD: number) => number;
  currencySymbol: string;

  isDarkMode: boolean;
  toggleDarkMode: () => void;

  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  loyaltyPoints: number;
  addLoyaltyPoints: (pts: number) => void;
  passportStamps: string[];
  addPassportStamp: (stamp: string) => void;

  savedCustomItineraries: CustomItinerary[];
  saveCustomItinerary: (itinerary: CustomItinerary) => void;
  deleteCustomItinerary: (id: string) => void;

  // Modals & Panels
  selectedDestinationModal: Destination | null;
  setSelectedDestinationModal: (d: Destination | null) => void;

  selectedBooking: { destination: Destination; tierName?: string } | null;
  setSelectedBooking: (b: { destination: Destination; tierName?: string } | null) => void;

  isWishlistDrawerOpen: boolean;
  setIsWishlistDrawerOpen: (open: boolean) => void;

  isMoodQuizOpen: boolean;
  setIsMoodQuizOpen: (open: boolean) => void;

  isBudgetCalcOpen: boolean;
  setIsBudgetCalcOpen: (open: boolean) => void;

  isLoyaltyModalOpen: boolean;
  setIsLoyaltyModalOpen: (open: boolean) => void;

  activeGuideModal: TravelGuide | null;
  setActiveGuideModal: (g: TravelGuide | null) => void;

  // Search & Filter state
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedContinent: string;
  setSelectedContinent: (c: string) => void;
  selectedStyle: string;
  setSelectedStyle: (s: string) => void;
  maxBudgetUSD: number;
  setMaxBudgetUSD: (b: number) => void;
  travelDates: string;
  setTravelDates: (d: string) => void;
  travelerCount: number;
  setTravelerCount: (c: number) => void;

  // Helper to open modal by ID
  openDestinationById: (id: string) => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<string[]>(['amalfi-capri-yacht', 'kyoto-japanese-alps']);
  const [loyaltyPoints, setLoyaltyPoints] = useState<number>(2450);
  const [passportStamps, setPassportStamps] = useState<string[]>(['Italy', 'Japan', 'Tanzania']);
  const [savedCustomItineraries, setSavedCustomItineraries] = useState<CustomItinerary[]>([]);

  // Modals & Drawers
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<{ destination: Destination; tierName?: string } | null>(null);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isMoodQuizOpen, setIsMoodQuizOpen] = useState(false);
  const [isBudgetCalcOpen, setIsBudgetCalcOpen] = useState(false);
  const [isLoyaltyModalOpen, setIsLoyaltyModalOpen] = useState(false);
  const [activeGuideModal, setActiveGuideModal] = useState<TravelGuide | null>(null);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [maxBudgetUSD, setMaxBudgetUSD] = useState(10000);
  const [travelDates, setTravelDates] = useState('Oct 2026 - Nov 2026');
  const [travelerCount, setTravelerCount] = useState(2);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('auravoyage_dark_mode');
      if (savedTheme !== null) {
        const isDark = savedTheme === 'true';
        setIsDarkMode(isDark);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }

      const savedCurr = localStorage.getItem('auravoyage_currency');
      if (savedCurr && CURRENCIES[savedCurr]) {
        setCurrencyState(savedCurr as CurrencyCode);
      }

      const savedWish = localStorage.getItem('auravoyage_wishlist');
      if (savedWish) {
        setWishlist(JSON.parse(savedWish));
      }

      const savedPts = localStorage.getItem('auravoyage_loyalty_pts');
      if (savedPts) {
        setLoyaltyPoints(parseInt(savedPts, 10));
      }

      const savedItins = localStorage.getItem('auravoyage_custom_itineraries');
      if (savedItins) {
        setSavedCustomItineraries(JSON.parse(savedItins));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('auravoyage_dark_mode', String(next));
      return next;
    });
  };

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('auravoyage_currency', c);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('auravoyage_wishlist', JSON.stringify(next));
      return next;
    });
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  const addLoyaltyPoints = (pts: number) => {
    setLoyaltyPoints((prev) => {
      const next = prev + pts;
      localStorage.setItem('auravoyage_loyalty_pts', String(next));
      return next;
    });
  };

  const addPassportStamp = (stamp: string) => {
    setPassportStamps((prev) => (prev.includes(stamp) ? prev : [...prev, stamp]));
  };

  const saveCustomItinerary = (itin: CustomItinerary) => {
    setSavedCustomItineraries((prev) => {
      const next = [itin, ...prev];
      localStorage.setItem('auravoyage_custom_itineraries', JSON.stringify(next));
      return next;
    });
    addLoyaltyPoints(150);
  };

  const deleteCustomItinerary = (id: string) => {
    setSavedCustomItineraries((prev) => {
      const next = prev.filter((i) => i.id !== id);
      localStorage.setItem('auravoyage_custom_itineraries', JSON.stringify(next));
      return next;
    });
  };

  const formatPrice = (amountUSD: number): string => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = Math.round(amountUSD * curr.rateFromUSD);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const convertPrice = (amountUSD: number): number => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    return Math.round(amountUSD * curr.rateFromUSD);
  };

  const openDestinationById = (id: string) => {
    const d = SAMPLE_DESTINATIONS.find((item) => item.id === id);
    if (d) {
      setSelectedDestinationModal(d);
    }
  };

  return (
    <TravelContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        currencySymbol: (CURRENCIES[currency] || CURRENCIES.USD).symbol,
        isDarkMode,
        toggleDarkMode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        loyaltyPoints,
        addLoyaltyPoints,
        passportStamps,
        addPassportStamp,
        savedCustomItineraries,
        saveCustomItinerary,
        deleteCustomItinerary,
        selectedDestinationModal,
        setSelectedDestinationModal,
        selectedBooking,
        setSelectedBooking,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        isMoodQuizOpen,
        setIsMoodQuizOpen,
        isBudgetCalcOpen,
        setIsBudgetCalcOpen,
        isLoyaltyModalOpen,
        setIsLoyaltyModalOpen,
        activeGuideModal,
        setActiveGuideModal,
        searchQuery,
        setSearchQuery,
        selectedContinent,
        setSelectedContinent,
        selectedStyle,
        setSelectedStyle,
        maxBudgetUSD,
        setMaxBudgetUSD,
        travelDates,
        setTravelDates,
        travelerCount,
        setTravelerCount,
        openDestinationById,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};
