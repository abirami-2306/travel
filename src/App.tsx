import React from 'react';
import { TravelProvider } from './context/TravelContext';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { FlashDealsBanner } from './components/FlashDealsBanner';
import { DestinationsGrid } from './components/DestinationsGrid';
import { InteractiveMap } from './components/InteractiveMap';
import { TripPlanner } from './components/TripPlanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TravelGuidesSection } from './components/TravelGuidesSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals & Floating Tools
import { PackageDetailModal } from './components/PackageDetailModal';
import { MoodQuizModal } from './components/MoodQuizModal';
import { BudgetCalculatorModal } from './components/BudgetCalculatorModal';
import { LoyaltyModal } from './components/LoyaltyModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { BookingModal } from './components/BookingModal';
import { TravelAssistantChat } from './components/TravelAssistantChat';

export default function App() {
  return (
    <TravelProvider>
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-200">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with Cinematic Slider & Floating Search */}
        <main>
          <HeroSlider />

          {/* Flash Deals & Limited-Time Countdown Banner */}
          <FlashDealsBanner />

          {/* Featured Destinations & Package Catalog */}
          <DestinationsGrid />

          {/* Interactive World Map with Clickable Regional Hotspots */}
          <InteractiveMap />

          {/* Custom Trip Builder / Step-by-Step Itinerary Studio */}
          <TripPlanner />

          {/* Traveler Reviews & Testimonials Memoirs */}
          <TestimonialsSection />

          {/* Editorial Field Guides & Stories */}
          <TravelGuidesSection />

          {/* Newsletter Signup with $150 Welcome Voucher */}
          <NewsletterSection />
        </main>

        {/* Footer with Concierge Contact, Trust Badges, and Global Options */}
        <Footer />

        {/* Full Interactive Modals & Slide-over Drawers */}
        <PackageDetailModal />
        <MoodQuizModal />
        <BudgetCalculatorModal />
        <LoyaltyModal />
        <WishlistDrawer />
        <BookingModal />

        {/* Floating AI Concierge Chatbot (Powered by Gemini) */}
        <TravelAssistantChat />

      </div>
    </TravelProvider>
  );
}
