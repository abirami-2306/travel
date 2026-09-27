export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromUSD: number; // multiplier from USD
  label: string;
}

export type Continent = 'Europe' | 'Asia' | 'Africa' | 'Americas' | 'Oceania';
export type TravelStyle = 'Coastal & Yacht' | 'Alpine & Glaciers' | 'Cultural Heritage' | 'Wildlife Safari' | 'Wellness & Eco';

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  mealsIncluded: string;
  accommodation: string;
  highlights: string[];
}

export interface PackageTier {
  name: string;
  badge?: string;
  pricePerPersonUSD: number;
  hotelGrade: string;
  groupType: 'Small Group (Max 12)' | 'Private Group (Max 6)' | 'Private VIP Concierge';
  includedFeatures: string[];
  notIncluded?: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  travelerType: 'Couple' | 'Solo Explorer' | 'Family' | 'Friends';
  tripTaken: string;
  helpfulCount: number;
}

export interface WeatherData {
  tempCelsius: number;
  tempFahrenheit: number;
  condition: string;
  bestMonths: string;
  rainfallAvgMm: number;
  uvIndex: number;
  packingAdvice: string;
}

export interface Hotspot360 {
  id: string;
  title: string;
  description: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  continent: Continent;
  style: TravelStyle;
  durationDays: number;
  durationNights: number;
  basePriceUSD: number;
  originalPriceUSD?: number;
  dynamicBadge?: string;
  carbonCO2eTons: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  overview: string;
  heroImage: string;
  galleryImages: string[];
  panoramaImage: string;
  panoramaHotspots: Hotspot360[];
  coordinates: { lat: number; lng: number };
  mapRegion: string;
  itinerary: DayItinerary[];
  tiers: PackageTier[];
  inclusions: string[];
  exclusions: string[];
  weather: WeatherData;
  reviews: Review[];
  featured?: boolean;
}

export interface TravelGuide {
  id: string;
  title: string;
  destination: string;
  readingTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface CustomItineraryItem {
  id: string;
  name: string;
  category: 'accommodation' | 'activity' | 'transport';
  priceUSD: number;
  details: string;
  iconName: string;
}

export interface CustomItinerary {
  id: string;
  destinationId: string;
  destinationName: string;
  startDate: string;
  endDate: string;
  days: number;
  travelers: number;
  hotel: CustomItineraryItem;
  activities: CustomItineraryItem[];
  transport: CustomItineraryItem;
  includeCarbonOffset: boolean;
  totalPriceUSD: number;
  createdAt: string;
}

export interface QuizAnswer {
  landscape: 'beach' | 'mountain' | 'culture' | 'wildlife';
  pace: 'relaxed' | 'immersive' | 'adventure';
  traveler: 'solo' | 'couple' | 'friends' | 'family';
  budgetLevel: 'moderate' | 'premium' | 'ultra';
}

export interface BookingDetails {
  bookingId: string;
  destinationId: string;
  destinationName: string;
  tierName: string;
  pricePerPerson: number;
  travelers: number;
  totalPrice: number;
  startDate: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  carbonOffsetIncluded: boolean;
  discountApplied: number;
  bookingDate: string;
}
