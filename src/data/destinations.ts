import { Destination, CurrencyConfig } from '../types/travel';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateFromUSD: 1.0, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rateFromUSD: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rateFromUSD: 0.79, label: 'GBP (£)' },
  JPY: { code: 'JPY', symbol: '¥', rateFromUSD: 154.5, label: 'JPY (¥)' },
  AUD: { code: 'AUD', symbol: 'A$', rateFromUSD: 1.52, label: 'AUD (A$)' },
  CAD: { code: 'CAD', symbol: 'C$', rateFromUSD: 1.38, label: 'CAD (C$)' },
};

export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: 'amalfi-capri-yacht',
    slug: 'amalfi-coast-capri-yacht-odyssey',
    name: 'Amalfi Coast & Capri Yacht Odyssey',
    country: 'Italy',
    continent: 'Europe',
    style: 'Coastal & Yacht',
    durationDays: 7,
    durationNights: 6,
    basePriceUSD: 3850,
    originalPriceUSD: 4500,
    dynamicBadge: '⚡ Price drops 15% this week',
    carbonCO2eTons: 0.45,
    rating: 4.96,
    reviewCount: 142,
    shortDescription: 'Private Riva yacht cruising through emerald coves, cliffside Positano suites, and private sunset dining in Ravello.',
    overview: 'Glide along Italy’s legendary Tyrrhenian coastline aboard a private mahogany Riva speedboat. Wake up in a cliff-hugging boutique hotel in Positano, discover secret swimming grottos accessible only by water, and savour sommelier-curated Campania vintages on cliffside terraces scented by wild rosemary and lemon blossoms.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=80',
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h1', title: 'Private Riva Mooring', description: 'Exclusive slip in Positano harbour with dedicated tender.', xPercent: 24, yPercent: 68 },
      { id: 'h2', title: 'Villa Cimbrone Gardens', description: 'The Terrace of Infinity hanging 1,200ft above the azure sea.', xPercent: 72, yPercent: 35 },
      { id: 'h3', title: 'Capri Faraglioni View', description: 'Iconic limestone sea stacks carved by millenniums of tides.', xPercent: 50, yPercent: 48 },
    ],
    coordinates: { lat: 40.6281, lng: 14.4850 },
    mapRegion: 'Southern Italy / Mediterranean',
    inclusions: [
      '6 nights in 5-star cliffside suites (Le Sirenuse / Hotel Santa Caterina)',
      'Full-day private Riva yacht charter with skipper & Champagne',
      'Daily Mediterranean gourmet breakfast & 3 Michelin-starred dinners',
      'Private Mercedes Benz S-Class transfers throughout the coast',
      'Exclusive access to private Ravello clifftop gardens & cellar',
      'Dedicated AuraVoyage 24/7 bilingual on-call concierge',
      'Certified 100% gold-standard carbon offset contribution'
    ],
    exclusions: [
      'International flights to/from Naples or Rome',
      'Discretionary personal gratuities',
      'Travel and medical cancellation insurance'
    ],
    weather: {
      tempCelsius: 24,
      tempFahrenheit: 75,
      condition: 'Sunny & Coastal Breezes',
      bestMonths: 'May to June, September to October',
      rainfallAvgMm: 22,
      uvIndex: 7,
      packingAdvice: 'Linen shirts, swim attire, boat deck shoes, polarised sunglasses, light evening cashmere wrap.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Private Transfer to Positano',
        description: 'Chauffeured scenic drive along the coastal cliffs. Settle into your panoramic cliffside suite, followed by welcome cocktails overlooking the pastel village cascades.',
        mealsIncluded: 'Welcome Dinner & Wine Pairing',
        accommodation: 'Le Sirenuse / Villa Franca (Positano)',
        highlights: ['Private coastal scenic transfer', 'Sunset terrace aperitivo', 'Welcome orientation with private host']
      },
      {
        day: 2,
        title: 'Private Riva Charter: Hidden Grottos & Capri Circumnavigation',
        description: 'Step aboard your handcrafted Riva yacht. Cruise past the legendary Faraglioni rocks, swim inside luminous sea caves, and enjoy lunch at a secluded seaside restaurant in Capri.',
        mealsIncluded: 'Breakfast, Seafood Lunch at La Fontelina, Champagne on deck',
        accommodation: 'Le Sirenuse (Positano)',
        highlights: ['Capri sea arches & Blue Grotto bypass', 'Swimming in secluded jade coves', 'La Fontelina beach club lunch']
      },
      {
        day: 3,
        title: 'Ancient Ravello & The Terrace of Infinity',
        description: 'Morning private transfer to high-altitude Ravello. Stroll through the romantic gardens of Villa Cimbrone and enjoy an exclusive limoncello masterclass in a historic cliffside orchard.',
        mealsIncluded: 'Breakfast, Private Orchard Lunch',
        accommodation: 'Hotel Santa Caterina (Amalfi)',
        highlights: ['Villa Cimbrone terrace views', 'Master artisan limoncello crafting', 'Sunset violin recital in Ravello gardens']
      },
      {
        day: 4,
        title: 'Artisan Path of the Gods & Amalfi Heritage',
        description: 'Guided gentle walk through historic lemon groves overlooking the sea, followed by a private tour of Amalfi’s 9th-century cathedral and ancient paper mills.',
        mealsIncluded: 'Breakfast, Farm-to-Table Lunch',
        accommodation: 'Hotel Santa Caterina (Amalfi)',
        highlights: ['Valley of the Mills heritage walk', 'Ancient Amalfi paper guild workshop', 'Evening dining in Cetara']
      },
      {
        day: 5,
        title: 'Capri Clifftops & Anacapri Villa San Michele',
        description: 'Fast hydrofoil to Capri for an overnight clifftop stay. Explore the quiet lanes of Anacapri and take the chairlift to Monte Solaro for 360° views across the Bay of Naples.',
        mealsIncluded: 'Breakfast, Tasting Menu Dinner',
        accommodation: 'Capri Palace Jumeirah (Anacapri)',
        highlights: ['Monte Solaro summit chairlift', 'Villa San Michele historic gardens', 'Private boutique artisan perfume workshop']
      },
      {
        day: 6,
        title: 'Ischia Thermal Springs & Island Vineyard',
        description: 'Private boat excursion to the volcanic sister island of Ischia. Relax in mineral thermal springs carved into sea cliffs and taste volcanic wines on Mount Epomeo slopes.',
        mealsIncluded: 'Breakfast, Vineyard Lunch, Farewell Gala Dinner',
        accommodation: 'Capri Palace Jumeirah (Anacapri)',
        highlights: ['Natural volcanic sea baths', 'Volcanic terroir wine tasting', 'Celebratory farewell dinner under pergola']
      },
      {
        day: 7,
        title: 'Arrivederci: Private Tender to Naples & Departure',
        description: 'Enjoy a leisurely breakfast on the terrace before your private speedboat transfer to Naples harbour or airport for your onward journey.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Final coastal views', 'VIP airport lounge access']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 3850,
        hotelGrade: '4-Star Superior Cliffside Boutique Hotels',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Shared small-group Riva catamaran cruise (max 10 guests)',
          'Daily buffet breakfast and 2 group dinners',
          'Shared luxury Mercedes Sprinter transfers',
          'Standard sea-view balcony rooms',
          'Digital itinerary & concierge support'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Most Popular',
        pricePerPersonUSD: 5200,
        hotelGrade: '5-Star Luxury (Le Sirenuse & Santa Caterina)',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Full-day private Riva yacht with captain & prosecco',
          'Daily gourmet breakfast, 3 Michelin-starred dinners',
          'Private Mercedes S-Class chauffeured transfers',
          'Deluxe Junior Suites with private sea terrace',
          'Dedicated 24/7 private concierge & luggage courier'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Ultimate Bespoke',
        pricePerPersonUSD: 7900,
        hotelGrade: 'Presidential Cliffside Villas with Private Pool',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Unlimited private 50ft luxury motor yacht at your disposal',
          'Private helicopter transfer Naples ⇄ Capri helipad',
          'All meals included with private Michelin-chef in-villa dining',
          'Master suites with heated private infinity plunge pools',
          'Personal security & private butler throughout stay'
        ]
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Eleanor & Marcus Vance',
        location: 'London, UK',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'May 2026',
        comment: 'The private Riva cruise to Capri was the absolute highlight of our 15th anniversary. Everything was seamlessly arranged by AuraVoyage down to the chilled vintage Champagne.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 38
      },
      {
        id: 'r2',
        author: 'Dr. Julian Thorne',
        location: 'Boston, USA',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'September 2025',
        comment: 'Flawless pacing. The hotels were exceptional, and bypassing the typical tourist queues with private tender access transformed the entire experience.',
        travelerType: 'Solo Explorer',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 24
      }
    ],
    featured: true
  },
  {
    id: 'kyoto-japanese-alps',
    slug: 'kyoto-japanese-alps-heritage',
    name: 'Kyoto & Japanese Alps Heritage',
    country: 'Japan',
    continent: 'Asia',
    style: 'Cultural Heritage',
    durationDays: 9,
    durationNights: 8,
    basePriceUSD: 4400,
    originalPriceUSD: 4950,
    dynamicBadge: '🔥 3 spots left for Autumn foliage',
    carbonCO2eTons: 0.52,
    rating: 4.98,
    reviewCount: 168,
    shortDescription: 'Centuries-old ryokans with cedar onsen, private Zen master sessions, first-class Shinkansen, and alpine mountain villages.',
    overview: 'Immerse yourself in Japan’s timeless aesthetic philosophies. From the moss-carpeted bamboo groves of Kyoto and private morning meditations in hidden sub-temples, to centuries-old wooden post towns in the Kiso Valley and soothing open-air thermal springs framed by the Northern Alps.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h4', title: 'Arashiyama Bamboo Sanctuary', description: 'Towering green stalks rustling in the morning mountain breeze.', xPercent: 32, yPercent: 45 },
      { id: 'h5', title: 'Historic Machiya Courtyard', description: 'Traditional wooden townhouse garden with moss stones.', xPercent: 65, yPercent: 70 },
      { id: 'h6', title: 'Private Cedar Onsen', description: 'Natural mineral spring overlooking alpine autumn foliage.', xPercent: 80, yPercent: 40 },
    ],
    coordinates: { lat: 35.0116, lng: 135.7681 },
    mapRegion: 'Kansai & Chubu / Central Honshu',
    inclusions: [
      '8 nights in luxury ryokans & 5-star hotels (Aman Kyoto / Sowaka / Nishiyama Onsen)',
      'Gran Class / First-Class JR Shinkansen rail passes throughout',
      'Daily traditional multi-course Kaiseki dinners & breakfasts',
      'Private Zen abbot meditation session before public temple opening',
      'Exclusive Geiko & Maiko tea ceremony in private Gion ochaya',
      'Private sword-smithing and master pottery workshop',
      'Luggage forward service between destinations'
    ],
    exclusions: [
      'International flights to Osaka (KIX) or Tokyo (HND/NRT)',
      'Personal purchases and alcoholic beverages outside dinners',
      'Passport / visa fees'
    ],
    weather: {
      tempCelsius: 19,
      tempFahrenheit: 66,
      condition: 'Crisp & Clear Mountain Air',
      bestMonths: 'March to May (Sakura), October to November (Koyo)',
      rainfallAvgMm: 35,
      uvIndex: 5,
      packingAdvice: 'Layered breathable clothing, slip-on shoes for temple visits, warm evening jacket for alpine elevations.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto & Evening Lantern Walk in Gion',
        description: 'Private chauffeur from Kansai or Kyoto station to your luxury machiya. Dusk walk through the preserved stone lanes of Gion with an architectural historian.',
        mealsIncluded: 'Welcome Kaiseki Dinner',
        accommodation: 'Sowaka Luxury Machiya (Kyoto)',
        highlights: ['Gion heritage preservation walk', 'First multi-course seasonal Kaiseki', 'Traditional Hinoki cypress bath']
      },
      {
        day: 2,
        title: 'Private Dawn at Tenryu-ji & Arashiyama Bamboo',
        description: 'Early access to UNESCO Tenryu-ji gardens before crowds arrive. Private tea ceremony with a Zen master followed by a quiet wooden boat ride down the Hozu River.',
        mealsIncluded: 'Breakfast, Temple Shojin Ryori Lunch',
        accommodation: 'Sowaka Luxury Machiya (Kyoto)',
        highlights: ['Crowd-free bamboo grove experience', 'Private Zen meditation with head priest', 'Punt boat ride on scenic river']
      },
      {
        day: 3,
        title: 'Exclusive Maiko Tea Encounter & Nishiki Market',
        description: 'Curated culinary journey through Nishiki Market with a celebrity chef. In the evening, enter a historic private teahouse for an exclusive encounter with an apprentice geiko.',
        mealsIncluded: 'Breakfast, Market Tasting, Private Teahouse Dinner',
        accommodation: 'Aman Kyoto (Takagamine)',
        highlights: ['Centuries-old kitchen purveyors tour', 'Private Geiko performance & conversation', 'Forest pavilion stay']
      },
      {
        day: 4,
        title: 'Bullet Train to Kiso Valley & Magome to Tsumago Hike',
        description: 'First-class rail to the Nakasendo trail. Walk along the historic stone path linking preserved Edo-period post towns framed by lush cedar forests.',
        mealsIncluded: 'Breakfast, Village Lunch, Forest Feast',
        accommodation: 'Takimi no Ie Historic Ryokan',
        highlights: ['Edo-era stone trail walking', 'Ancient post town preservation', 'Wild mountain herbs and river trout cuisine']
      },
      {
        day: 5,
        title: 'Takayama Mountain Old Town & Hida Beef Feast',
        description: 'Travel through the alpine pass to Takayama. Visit preserved sake breweries, century-old merchant houses, and enjoy an authentic Hida beef charcoal barbecue.',
        mealsIncluded: 'Breakfast, Sake Tasting, Hida Beef Dinner',
        accommodation: 'Wanosato Ryokan (Takayama)',
        highlights: ['Sake brewery tasting flight', 'Gassho-zukuri farmhouse architecture', 'Open hearth fire storytelling']
      },
      {
        day: 6,
        title: 'Hakuba Alpine Peaks & Open-Air Onsen Retreat',
        description: 'Ascend to the majestic Japanese Alps. Check into a legendary hot-spring sanctuary where thermal waters flow directly into cedar tubs facing snow-dusted peaks.',
        mealsIncluded: 'Breakfast, Mountain Banquet Dinner',
        accommodation: 'Nishiyama Onsen Keiunkan (Oldest Onsen Hotel)',
        highlights: ['Ancient 1,300-year hot spring water', 'Alpine panoramic cable car', 'Stargazing from natural outdoor onsen']
      },
      {
        day: 7,
        title: 'Shirakawa-go UNESCO Village & Artisan Craftsmanship',
        description: 'Explore the steep thatched farmhouses of Shirakawa-go. Meet local master woodcarvers and paper artisans preserving traditional washi techniques.',
        mealsIncluded: 'Breakfast, Artisan Lunch, Mountain Dinner',
        accommodation: 'Nishiyama Onsen Keiunkan',
        highlights: ['UNESCO fairy-tale village', 'Handmade washi paper workshop', 'Forest bathing mindfulness walk']
      },
      {
        day: 8,
        title: 'Return to Tokyo via Shinkansen & Farewell Omakase',
        description: 'High-speed Gran Class Shinkansen back to Tokyo. Check into your skyline tower suite and celebrate with an exclusive 18-course sushi omakase with a master chef.',
        mealsIncluded: 'Breakfast, Master Chef Omakase Dinner',
        accommodation: 'Aman Tokyo (Otemachi)',
        highlights: ['First-class bullet train journey', 'Master sushi omakase counter experience', 'Panoramic skyline cocktails']
      },
      {
        day: 9,
        title: 'Sayonara: Private Airport Transfer & Departure',
        description: 'Final breakfast overlooking the Imperial Palace gardens before your private limousine transfer to Haneda or Narita International Airport.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Imperial Palace panorama', 'Private VIP limousine airport transfer']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 4400,
        hotelGrade: '4-Star Modern Ryokan & Boutique City Hotels',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Ordinary-car JR Shinkansen rail passes',
          'Daily traditional breakfast, 4 Kaiseki dinners',
          'Shared expert cultural guide',
          'Standard Japanese tatami & western hybrid rooms',
          'Luggage transport between 2 cities'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Top Rated',
        pricePerPersonUSD: 6100,
        hotelGrade: '5-Star Traditional Ryokans with Private Onsen',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Gran Class / Green Class Shinkansen private seating',
          'All daily breakfasts and all gourmet Kaiseki dinners',
          'Private licensed historian guide and private van',
          'Suites featuring private open-air cedar onsen tubs',
          'Private Geiko tea ceremony and master Zen meditation'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Imperial Reserve',
        pricePerPersonUSD: 9400,
        hotelGrade: 'Exclusive Heritage Villas & Aman Suites',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Private chartered luxury helicopter between mountain valleys',
          'Full buyout access of historic 200-year-old mountain retreat',
          'Personal tea master, calligrapher, and private sushi chef',
          'Corner skyline suites at Aman Tokyo with Fuji views',
          'Dedicated 24/7 bilingual concierge and private driver'
        ]
      }
    ],
    reviews: [
      {
        id: 'r3',
        author: 'Sophia Chen',
        location: 'San Francisco, USA',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'October 2025',
        comment: 'The morning meditation at the private sub-temple in Arashiyama changed my perspective on life. Unmatched access and attention to cultural etiquette.',
        travelerType: 'Solo Explorer',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 52
      },
      {
        id: 'r4',
        author: 'Alexander & Claire Dubois',
        location: 'Geneva, Switzerland',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'April 2026',
        comment: 'Every ryokan had a private cedar onsen overlooking wild blooming cherry blossoms. Food was works of art. Truly a once-in-a-lifetime trip.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 41
      }
    ],
    featured: true
  },
  {
    id: 'serengeti-great-migration',
    slug: 'serengeti-ngorongoro-great-migration',
    name: 'Serengeti & Ngorongoro Great Migration',
    country: 'Tanzania',
    continent: 'Africa',
    style: 'Wildlife Safari',
    durationDays: 8,
    durationNights: 7,
    basePriceUSD: 6200,
    originalPriceUSD: 6900,
    dynamicBadge: '⚡ High Migration Season Available',
    carbonCO2eTons: 0.85,
    rating: 4.99,
    reviewCount: 114,
    shortDescription: 'Canvas luxury under starlight, sunrise hot air balloon over millions of wildebeest, and private 4x4 safaris with master Maasai trackers.',
    overview: 'Experience the primeval drama of the African wilderness in ultimate style. Follow the thunderous hooves of two million wildebeest and zebras across the golden plains of the Serengeti, descend into the lost world of Ngorongoro Crater, and sip sundowners beside a crackling acacia campfire as lions roar in the distance.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h7', title: 'Serengeti Endless Plains', description: 'Vast golden savannah supporting the greatest land mammal migration on Earth.', xPercent: 25, yPercent: 40 },
      { id: 'h8', title: 'Safari Campfire Boma', description: 'Traditional open fire for evening storytelling under southern constellations.', xPercent: 60, yPercent: 75 },
      { id: 'h9', title: 'Mara River Crossing Point', description: 'Dramatic crossing where massive herds encounter waiting Nile crocodiles.', xPercent: 85, yPercent: 55 },
    ],
    coordinates: { lat: -2.3333, lng: 34.8333 },
    mapRegion: 'Northern Tanzania / East Africa',
    inclusions: [
      '7 nights in premier mobile luxury tented camps (Singita Grumeti / &Beyond)',
      'All chartered bush flights between Arusha, Serengeti, and Lake Manyara',
      'Sunrise Hot Air Balloon safari with Champagne bush breakfast',
      'Custom open-sided 4x4 Land Cruiser with private naturalist & Maasai tracker',
      'All national park conservation & concession fees included',
      'All gourmet meals, vintage wines, craft spirits, and laundry service',
      'Support for local anti-poaching canine unit & community school'
    ],
    exclusions: [
      'International flights to/from Kilimanjaro (JRO)',
      'Tanzania tourist visa',
      'Yellow fever vaccination / personal medications'
    ],
    weather: {
      tempCelsius: 27,
      tempFahrenheit: 81,
      condition: 'Warm Sun & Crisp Starry Nights',
      bestMonths: 'July to October (River Crossings), Jan to March (Calving)',
      rainfallAvgMm: 15,
      uvIndex: 9,
      packingAdvice: 'Neutral safari khaki/olive colors, warm fleece for dawn drives, binoculars, wide-brim hat, telephoto camera lens.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro to Arusha Coffee Estate',
        description: 'VIP meet-and-assist upon arrival. Chauffeur to a historic colonial coffee plantation nestled at the foot of Mount Meru for rest and safari briefing.',
        mealsIncluded: 'Dinner & Estate Wines',
        accommodation: 'Arusha Coffee Lodge by Elewana',
        highlights: ['Private arrival reception', 'Coffee estate plantation walk', 'Pre-safari naturalist briefing']
      },
      {
        day: 2,
        title: 'Bush Flight to Central Serengeti & Afternoon Game Drive',
        description: 'Scenic flight over the Great Rift Valley into the heart of Serengeti. Afternoon tracking of resident leopard prides and cheetah coalitions on the Seronera plains.',
        mealsIncluded: 'All meals & bush sundowner drinks',
        accommodation: 'Singita Faru Faru / Sayari Camp',
        highlights: ['Bush flight over the Rift Valley', 'First sightings of the Big Five', 'Sunset gin & tonics in the bush']
      },
      {
        day: 3,
        title: 'Sunrise Hot Air Balloon & Mara River Herd Tracking',
        description: 'Float silently above the plains at dawn as thousands of animals stir below. Land for a five-star white-linen Champagne breakfast cooked in the wild.',
        mealsIncluded: 'All meals & Champagne breakfast',
        accommodation: 'Singita Faru Faru / Sayari Camp',
        highlights: ['Dawn hot air balloon ascension', 'Champagne bush breakfast in the wild', 'Tracking big cat hunts']
      },
      {
        day: 4,
        title: 'Full Day in Northern Serengeti: The River Crossings',
        description: 'Immerse in the apex of the Great Migration. Witness wildebeest herds gathering on the precipice of the Mara River before launching into the water.',
        mealsIncluded: 'Gourmet Picnic Lunch & Camp Dinner',
        accommodation: 'Sayari Mobile Tented Camp',
        highlights: ['Spectacular river crossing drama', 'Picnic under giant fig trees', 'Night sounds around canvas suites']
      },
      {
        day: 5,
        title: 'Maasai Cultural Exchange & Bush Walk',
        description: 'Join Maasai elders for an authentic walking safari through private concessions, discovering traditional medicinal flora, animal tracks, and ancient folklore.',
        mealsIncluded: 'All meals & premium bar',
        accommodation: 'Sayari Mobile Tented Camp',
        highlights: ['Foot safari with armed rangers', 'Maasai boma cultural celebration', 'Star-gazing with high-powered telescope']
      },
      {
        day: 6,
        title: 'Fly to Ngorongoro Crater Rim',
        description: 'Charter flight to Manyara airstrip, then ascend through misty cloud forests to the rim of the Ngorongoro Caldera. Evening drinks overlooking the vast sunken caldera.',
        mealsIncluded: 'All meals & South African cellar reserve',
        accommodation: '&Beyond Ngorongoro Crater Lodge',
        highlights: ['Crater rim panoramic suite views', 'Chandelier-lit luxury suites', 'Private butler service']
      },
      {
        day: 7,
        title: 'Descent to the Crater Floor & Rhino Sanctuary',
        description: 'Early morning descent 2,000 feet into the intact volcanic caldera. Search for endangered black rhinos, giant tuskers, and thousands of flamingos on Lake Magadi.',
        mealsIncluded: 'Bush Picnic Lunch & Farewell Gala',
        accommodation: '&Beyond Ngorongoro Crater Lodge',
        highlights: ['Black rhino tracking', 'Flock of pink flamingos on salt lake', 'Celebratory campfire feast']
      },
      {
        day: 8,
        title: 'Return Flight to Kilimanjaro & Onward Connection',
        description: 'Final morning panoramic breakfast before your private flight back to Kilimanjaro International Airport with day-room access before your home flight.',
        mealsIncluded: 'Breakfast & Airport Lounge access',
        accommodation: 'Departure',
        highlights: ['Aerial views of Mount Kilimanjaro', 'VIP airport departure lounge']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 6200,
        hotelGrade: '4-Star Luxury Safari Tented Camps',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Shared open 4x4 safari vehicles (guaranteed window seat)',
          'All park entry and transit fees',
          'All meals and local beer/wine in camp',
          'Internal bush flights on scheduled safari carriers',
          'Expert professional Tanzanian naturalist guide'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Premier Choice',
        pricePerPersonUSD: 8500,
        hotelGrade: '5-Star Ultra-Luxury Canvas (Singita / &Beyond)',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Private 4x4 Land Cruiser with top-tier private guide & tracker',
          'Hot Air Balloon flight with Champagne bush breakfast included',
          'All premium cellar wines, single malts, and French Champagne',
          'Private bush dinners and lantern-lit boma barbecues',
          'Private charter flights between all airstrips'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Private Safari Reserve',
        pricePerPersonUSD: 12800,
        hotelGrade: 'Exclusive Private Safari Villa with Helipad',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Exclusive buyout of Singita Serengeti House private villa',
          'Private helicopter for aerial wildlife spotting and transfers',
          'Personal private chef, butler, and field guides dedicated 24/7',
          'Custom night game drives with thermal optics equipment',
          'Philanthropic wildlife conservation experience with head biologists'
        ]
      }
    ],
    reviews: [
      {
        id: 'r5',
        author: 'Robert & Victoria Sterling',
        location: 'Melbourne, Australia',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'August 2025',
        comment: 'Words cannot describe witnessing 50,000 wildebeest crossing the Mara River while our tracker predicted every movement. The Singita camps are the height of civilization in the wild.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 63
      },
      {
        id: 'r6',
        author: 'Elena Rostova',
        location: 'Toronto, Canada',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'February 2026',
        comment: 'We saw the Big Five on day two! The hot air balloon at sunrise over the Serengeti followed by a champagne breakfast in the grass was pure magic.',
        travelerType: 'Family',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 37
      }
    ],
    featured: true
  },
  {
    id: 'swiss-alps-glacier-express',
    slug: 'swiss-alps-glacier-express-grand-tour',
    name: 'Swiss Alps & Glacier Express Grand Tour',
    country: 'Switzerland',
    continent: 'Europe',
    style: 'Alpine & Glaciers',
    durationDays: 7,
    durationNights: 6,
    basePriceUSD: 4950,
    originalPriceUSD: 5400,
    dynamicBadge: '⚡ Early Winter & Autumn Savings',
    carbonCO2eTons: 0.38,
    rating: 4.97,
    reviewCount: 96,
    shortDescription: 'Zermatt Matterhorn panoramas, Glacier Express Excellence Class over 291 viaducts, thermal spas, and summit fondue feasts.',
    overview: 'Traverse the dramatic alpine spine of Europe in supreme comfort. Travel on the legendary Glacier Express in Excellence Class across deep gorges and icy passes, gaze at the jagged pyramid of the Matterhorn from your private chalet balcony, and unwind in world-renowned thermal baths surrounded by snow-draped firs.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h10', title: 'Matterhorn Peak Vista', description: 'Iconic 4,478m pyramid peak glowing golden at sunrise.', xPercent: 55, yPercent: 28 },
      { id: 'h11', title: 'Landwasser Viaduct', description: 'Legendary 65m high curved limestone railway bridge.', xPercent: 28, yPercent: 62 },
      { id: 'h12', title: 'Alpine Thermal Infinity Spa', description: 'Heated outdoor mineral pools facing snow-covered pine forests.', xPercent: 82, yPercent: 72 },
    ],
    coordinates: { lat: 45.9765, lng: 7.7491 },
    mapRegion: 'Valais & Graubünden / Swiss Alps',
    inclusions: [
      '6 nights in 5-star alpine palaces (The Omnia Zermatt / Badrutt’s Palace St. Moritz)',
      'Glacier Express Excellence Class with 5-course gourmet regional wine pairing',
      'Swiss First-Class Rail Pass with unlimited scenic mountain cable cars',
      'Private Gornergrat summit train excursion and glacier walk',
      'Access to private thermal mineral spas and saunas daily',
      'Luggage door-to-door courier service between mountain resorts',
      'Private cheese fondue & raclette masterclass with mountain cheesemaker'
    ],
    exclusions: [
      'International flights to Zurich (ZRH) or Geneva (GVA)',
      'Ski equipment rental and ski pass upgrades',
      'Personal spa treatment packages'
    ],
    weather: {
      tempCelsius: 14,
      tempFahrenheit: 57,
      condition: 'Pristine Alpine Sunshine',
      bestMonths: 'June to September (Hiking), Dec to April (Winter Wonderland)',
      rainfallAvgMm: 28,
      uvIndex: 6,
      packingAdvice: 'Layered thermal performance gear, sturdy hiking/snow boots, high-protection sunglasses, elegant evening attire.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & First-Class Rail to Zermatt',
        description: 'First-class rail through Lake Geneva and the Rhone Valley into car-free Zermatt. Electric taxi transfer to your cliff-side lodge overlooking the Matterhorn.',
        mealsIncluded: 'Welcome Alpine Dinner & Swiss Wine',
        accommodation: 'The Omnia / Cervo Mountain Resort (Zermatt)',
        highlights: ['Car-free alpine village arrival', 'Sunset glow on the Matterhorn', 'Welcome fireside cocktail']
      },
      {
        day: 2,
        title: 'Gornergrat Cogwheel Railway & Glacier Reflection Walk',
        description: 'Ascend Europe’s highest open-air cogwheel railway to 3,089m. Walk to Riffelsee to photograph the iconic Matterhorn reflection in still alpine water.',
        mealsIncluded: 'Breakfast, Mountain Hut Lunch',
        accommodation: 'The Omnia (Zermatt)',
        highlights: ['Historic 1898 cogwheel rail ascent', 'Riffelsee mirror lake photo stop', 'Private fondue dinner at 2,500m']
      },
      {
        day: 3,
        title: 'Matterhorn Glacier Paradise & Ice Palace',
        description: 'Take the highest 3S cableway in the world to 3,883m. Enter natural glacier ice tunnels with sculpted ice art and enjoy panoramic views reaching Mont Blanc.',
        mealsIncluded: 'Breakfast, Alpine Terrace Lunch',
        accommodation: 'The Omnia (Zermatt)',
        highlights: ['Highest cableway station in the Alps', 'Sub-glacial ice sculpture palace', 'Alpine botanical tea tasting']
      },
      {
        day: 4,
        title: 'Glacier Express: Excellence Class to St. Moritz',
        description: 'Board the “slowest express train in the world” in Excellence Class. Guaranteed window seat, personal concierge, 5-course gourmet menu, and panoramic glass ceilings across 291 bridges.',
        mealsIncluded: 'Breakfast, 5-Course Rail Lunch with Wine, Dinner',
        accommodation: 'Badrutt’s Palace Hotel (St. Moritz)',
        highlights: ['Excellence Class private lounge car', 'Landwasser Viaduct crossing', 'Oberalp Pass summit at 2,033m']
      },
      {
        day: 5,
        title: 'St. Moritz Glamour & Diavolezza Mountain Panorama',
        description: 'Explore legendary St. Moritz lake and village. Cable car to Diavolezza for a close view of the Morteratsch Glacier and Bernina massif peaks.',
        mealsIncluded: 'Breakfast, Engadine Valley Lunch, Fine Dining',
        accommodation: 'Badrutt’s Palace Hotel (St. Moritz)',
        highlights: ['St. Moritz lakeside walk', 'Diavolezza glacier view terrace', 'Historic King’s Club evening cocktail']
      },
      {
        day: 6,
        title: 'Engadine Village Heritage & Private Cheese Masterclass',
        description: 'Visit the postcard-perfect painted sgraffito houses of Zuoz. Join a master cheesemaker to craft traditional Gruyère and Engadine mountain cheese.',
        mealsIncluded: 'Breakfast, Artisanal Cheese Feast, Farewell Dinner',
        accommodation: 'Badrutt’s Palace Hotel (St. Moritz)',
        highlights: ['Sgraffito architectural tour', 'Hands-on cheese crafting session', 'Celebratory gala dinner in the Palace']
      },
      {
        day: 7,
        title: 'Bernina Scenic Rail to Zurich & Departure',
        description: 'Scenic first-class descent through the UNESCO Albula pass back to Zurich airport or city center for your onward flight.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Albula spiral railway tunnels', 'Zurich airport VIP lounge access']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 4950,
        hotelGrade: '4-Star Superior Alpine Design Hotels',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'First-Class Swiss Travel Rail Pass',
          'Glacier Express 1st-Class panoramic seat reservation',
          'Daily buffet breakfast and 2 alpine dinners',
          'Mountain cable car excursions included',
          'Digital audio guide & route map'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Excellence Class',
        pricePerPersonUSD: 6800,
        hotelGrade: '5-Star Historic Alpine Palaces',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Glacier Express guaranteed Excellence Class ticket & 5 courses',
          'Matterhorn-view suites in Zermatt and lake-view in St. Moritz',
          'Private mountain guides for walks and glacier tours',
          'All breakfasts, 4 gourmet dinners including Michelin stars',
          'Full thermal spa access and luggage courier service'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Chalet Royale',
        pricePerPersonUSD: 10500,
        hotelGrade: 'Private Luxury Chalet with Private Staff',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Private helicopter tour circling the summit of the Matterhorn',
          'Exclusive chalet buyout with private chef, driver, and ski host',
          'Unlimited vintage Champagne and bespoke alpine cellar pairings',
          'Private evening cable car ascent for exclusive summit stargazing',
          'Direct luxury limousine transfer to Zurich / Geneva airport'
        ]
      }
    ],
    reviews: [
      {
        id: 'r7',
        author: 'Henri & Camille Laurent',
        location: 'Paris, France',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'July 2026',
        comment: 'Excellence Class on the Glacier Express is the ultimate train journey on Earth. Sitting by the panoramic window while being served five gourmet courses was sheer bliss.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 45
      }
    ],
    featured: true
  },
  {
    id: 'santorini-cyclades-catamaran',
    slug: 'santorini-cyclades-private-catamaran',
    name: 'Santorini & Cyclades Private Catamaran',
    country: 'Greece',
    continent: 'Europe',
    style: 'Coastal & Yacht',
    durationDays: 6,
    durationNights: 5,
    basePriceUSD: 3450,
    originalPriceUSD: 3950,
    dynamicBadge: '🔥 Only 2 suites left for June',
    carbonCO2eTons: 0.42,
    rating: 4.95,
    reviewCount: 129,
    shortDescription: 'Sunset caldera sailing on a 50ft catamaran, whitewashed Oia cliff caves with infinity pools, and Assyrtiko wine tastings.',
    overview: 'Witness the world’s most celebrated sunset from the azure waters of the flooded caldera. Stay in an authentic whitewashed cave suite carved into the volcanic cliffs of Oia, sail across to uninhabited Cycladic islands, dive into thermal volcanic springs, and indulge in fresh Aegean seafood under starry skies.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h13', title: 'Oia Clifftop Windmills', description: 'Famous whitewashed mills catching the golden evening Mediterranean light.', xPercent: 30, yPercent: 42 },
      { id: 'h14', title: 'Nea Kameni Volcanic Crater', description: 'Active volcanic islet in the center of the flooded caldera.', xPercent: 62, yPercent: 58 },
      { id: 'h15', title: 'Private Plunge Pool', description: 'Infinity plunge pool carved into the caldera cliff face.', xPercent: 78, yPercent: 68 },
    ],
    coordinates: { lat: 36.3932, lng: 25.4615 },
    mapRegion: 'Cyclades Islands / Aegean Sea',
    inclusions: [
      '5 nights in luxury cliffside cave suites (Canaves Oia / Grace Hotel Santorini)',
      'Full-day private 50ft luxury catamaran cruise with BBQ & open bar',
      'Sunset wine tasting of ancient Assyrtiko vines in volcanic soil',
      'Private helicopter or Mercedes airport/port transfers',
      'Daily champagne breakfast on private cliff terrace',
      'Guided private tour of prehistoric Akrotiri archaeological ruins'
    ],
    exclusions: [
      'International flights to Athens (ATH) or Santorini (JTR)',
      'Personal shopping and optional yacht water sports',
      'Gratuities for private skippers'
    ],
    weather: {
      tempCelsius: 26,
      tempFahrenheit: 79,
      condition: 'Warm Sun & Meltemi Sea Breezes',
      bestMonths: 'May to October',
      rainfallAvgMm: 8,
      uvIndex: 8,
      packingAdvice: 'White linen, comfortable flat shoes for cobblestone stairs, swimwear, sun hat, UV sunglasses.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini & Check-in to Oia Cliff Suite',
        description: 'Chauffeured arrival to Oia. Check into your cave suite with an infinity plunge pool overlooking the volcanic caldera. Evening welcome dinner on a private cliffside terrace.',
        mealsIncluded: 'Welcome Cocktail & Dinner',
        accommodation: 'Canaves Oia Epitome / Grace Hotel',
        highlights: ['Caldera infinity pool check-in', 'Sunset welcome cocktails', 'First views of Oia’s whitewashed beauty']
      },
      {
        day: 2,
        title: 'Caldera Private Catamaran Cruise & Volcanic Springs',
        description: 'Step onto your private 50ft catamaran. Swim in the warm sulfuric hot springs of Nea Kameni, snorkel off Red Beach, and watch the sunset from the water with fresh grilled seafood.',
        mealsIncluded: 'Breakfast, Catamaran BBQ Lunch, Sunset Drinks',
        accommodation: 'Canaves Oia Epitome',
        highlights: ['Thermal volcanic springs swim', 'Fresh grilled lobster on board', 'Iconic sunset viewed from the sea']
      },
      {
        day: 3,
        title: 'Prehistoric Akrotiri & Volcanic Wine Terroir',
        description: 'Private archaeologist tour of Akrotiri, the 3,600-year-old Minoan town preserved in ash. Afterwards, visit two cliff-hanging wineries to taste dry volcanic Assyrtiko.',
        mealsIncluded: 'Breakfast, Winery Tasting Lunch',
        accommodation: 'Canaves Oia Epitome',
        highlights: ['Ancient Minoan ruins exploration', 'Volcanic basket-pruned vines tasting', 'Sunset dinner in Megalochori']
      },
      {
        day: 4,
        title: 'Ios or Folegandros Day Yacht Escape',
        description: 'Sail away from the main crowds to the untouched neighboring island of Folegandros. Explore pristine beaches, a cliff-top church, and dine in a quiet whitewashed village square.',
        mealsIncluded: 'Breakfast, Island Taverna Lunch',
        accommodation: 'Grace Hotel (Imerovigli)',
        highlights: ['Off-the-beaten-path Cycladic island', 'Uncrowded turquoise swimming bays', 'Traditional goat cheese and honey pastry']
      },
      {
        day: 5,
        title: 'Imerovigli Clifftop Hike & Sunset Gala',
        description: 'Scenic cliffside walk along the crater rim connecting Imerovigli to Fira with breathtaking drop-offs. In the evening, enjoy a private 6-course farewell gala dinner.',
        mealsIncluded: 'Breakfast, Farewell Degustation Dinner',
        accommodation: 'Grace Hotel (Imerovigli)',
        highlights: ['Skaros Rock cliff trail', 'Spa wellness massage overlooking sea', 'Private degustation dinner with Aegean views']
      },
      {
        day: 6,
        title: 'Kalimera: Morning Plunge & Departure',
        description: 'Final breakfast on your terrace before your private VIP transfer to Santorini Airport or Ferry Port.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Final morning swim', 'VIP transfer service']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 3450,
        hotelGrade: '4-Star Caldera View Boutique Cave Suites',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Shared semi-private sunset catamaran cruise',
          'Daily breakfast on terrace',
          'Winery tour and tasting flight',
          'Airport transfers by luxury van',
          'Digital itinerary guide'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Sunset Favorite',
        pricePerPersonUSD: 4900,
        hotelGrade: '5-Star Clifftop Hotel with Private Plunge Pool',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Entirely private 50ft catamaran charter with crew',
          'Suites with private heated caldera plunge pools',
          'Private archaeologist guide for Akrotiri',
          'Private Mercedes van transfers',
          'All breakfasts and 3 gourmet cliffside dinners'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Aegean Majesty',
        pricePerPersonUSD: 7600,
        hotelGrade: 'Private 3-Bedroom Clifftop Villa with Infinity Pool',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Private helicopter transfer Athens ⇄ Santorini',
          'Overnight luxury motor yacht charter around Cyclades',
          'Dedicated private chef and butler for all meals in villa',
          'Guaranteed front-row private terrace for sunset fireworks',
          '24/7 dedicated Mercedes S-Class at your disposal'
        ]
      }
    ],
    reviews: [
      {
        id: 'r8',
        author: 'Liam & Maya Patel',
        location: 'London, UK',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'June 2026',
        comment: 'Staying in Oia with our own private heated plunge pool watching the sunset without crowds was heaven. The catamaran day with freshly caught seafood was unforgettable.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 33
      }
    ],
    featured: true
  },
  {
    id: 'patagonia-glaciers-trek',
    slug: 'patagonia-glaciers-torres-del-paine',
    name: 'Patagonia Glaciers & Torres del Paine',
    country: 'Chile & Argentina',
    continent: 'Americas',
    style: 'Alpine & Glaciers',
    durationDays: 10,
    durationNights: 9,
    basePriceUSD: 5800,
    originalPriceUSD: 6400,
    dynamicBadge: '⚡ Includes Grey Glacier Ice Trek',
    carbonCO2eTons: 0.72,
    rating: 4.97,
    reviewCount: 88,
    shortDescription: 'Granite spires of Torres del Paine, Perito Moreno glacier ice trekking, luxury eco-domes, and authentic gaucho asados.',
    overview: 'Journey to the dramatic end of the earth where windswept pampas meet towering granite spires and turquoise glacier lagoons. Trek on ancient blue ice, stay in sustainable luxury geodesic domes facing the Horns of Paine, track wild pumas with conservation biologists, and feast on spit-roasted Patagonian lamb under pristine southern skies.',
    heroImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h16', title: 'Cuernos del Paine', description: 'Iconic two-toned sedimentary and granite mountain horns.', xPercent: 35, yPercent: 32 },
      { id: 'h17', title: 'Grey Glacier Ice Field', description: 'Massive blue ice tongue descending into iceberg-dotted lake.', xPercent: 70, yPercent: 48 },
      { id: 'h18', title: 'Gaucho Estancia Grounds', description: 'Historic sheep ranching homestead with open fire spit.', xPercent: 20, yPercent: 75 },
    ],
    coordinates: { lat: -51.2532, lng: -72.8814 },
    mapRegion: 'Patagonia / Southern Andes',
    inclusions: [
      '9 nights in premier luxury eco-lodges (Tierra Patagonia / Explora / Awasi)',
      'Guided ice trek on Grey Glacier with crampons and ice axes',
      'Private 4x4 vehicles and expert naturalist guides throughout',
      'All meals, Malbec/Carménère wines, and open premium bar',
      'Scenic catamaran crossing of Lake Pehoe',
      'Authentic estancia horseback ride and traditional gaucho barbecue',
      'All national park permits and carbon offset reforestation tree planting'
    ],
    exclusions: [
      'International flights to Santiago (SCL) or Buenos Aires (EZE)',
      'Personal trekking boots and high-altitude gear',
      'Visa fees if applicable'
    ],
    weather: {
      tempCelsius: 13,
      tempFahrenheit: 55,
      condition: 'Dynamic Mountain Weather & Fresh Winds',
      bestMonths: 'November to March (Austral Summer)',
      rainfallAvgMm: 38,
      uvIndex: 6,
      packingAdvice: 'Windproof Gore-Tex shell, thermal base layers, sturdy waterproof hiking boots, UV lip balm, neck gaiter.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Punta Arenas & Scenic Drive to Torres del Paine',
        description: 'Chauffeured transit across the Patagonian steppe. Spot guanacos, rheas, and Andean condors before reaching your architectural luxury lodge overlooking Lake Sarmiento.',
        mealsIncluded: 'Dinner & Chilean Fine Wine',
        accommodation: 'Tierra Patagonia Luxury Lodge',
        highlights: ['Patagonian steppe crossing', 'Guanaco herds wildlife spotting', 'Architectural lodge panoramic view']
      },
      {
        day: 2,
        title: 'Base of the Towers Epic Trek',
        description: 'Hike through native lenga beech forests and boulder fields to the glacial amphitheater directly beneath the three iconic sheer granite towers of Paine.',
        mealsIncluded: 'Breakfast, Trail Gourmet Picnic, Lodge Dinner',
        accommodation: 'Tierra Patagonia Luxury Lodge',
        highlights: ['Trekking to the base of the Towers', 'Glacial cirque lagoon reflection', 'Evening hot tub soak facing Lake Sarmiento']
      },
      {
        day: 3,
        title: 'Lake Pehoe Catamaran & French Valley Amphitheater',
        description: 'Catamaran across turquoise Lake Pehoe into French Valley. Watch hanging glaciers calve thunderously while surrounded by a 360-degree crown of jagged granite peaks.',
        mealsIncluded: 'Breakfast, Trail Lunch, 4-Course Dinner',
        accommodation: 'Tierra Patagonia Luxury Lodge',
        highlights: ['Lake Pehoe catamaran crossing', 'French Valley hanging glaciers', 'Sound of thunderous ice avalanches at safe distance']
      },
      {
        day: 4,
        title: 'Grey Glacier Ice Hike & Iceberg Navigation',
        description: 'Boat ride past giant electric-blue icebergs to Grey Glacier. Strap on crampons with expert mountain guides to explore deep crevasses and natural ice caves.',
        mealsIncluded: 'Breakfast, Glacier Picnic, Dinner with Whisky over Glacier Ice',
        accommodation: 'Explora Torres del Paine',
        highlights: ['Walking on millennial glacier ice', 'Sipping 12-year single malt over glacier ice', 'Catamaran cruise past icebergs']
      },
      {
        day: 5,
        title: 'Puma Tracking Safari with Conservation Biologist',
        description: 'Dawn expedition to Laguna Amarga with specialized trackers using high-magnification spotting scopes to observe wild pumas in their natural habitat.',
        mealsIncluded: 'Breakfast, Field Lunch, Dinner',
        accommodation: 'Explora Torres del Paine',
        highlights: ['Wild puma observation', 'Birdwatching Andean condor nesting sites', 'Conservation discussion with field biologists']
      },
      {
        day: 6,
        title: 'Border Crossing to Argentina & El Calafate',
        description: 'Cross the dramatic Patagonian border into Argentine Santa Cruz province. Settle into a historic working estancia on the edge of Lake Argentino.',
        mealsIncluded: 'Breakfast, Argentine Asado Dinner & Malbec',
        accommodation: 'Eolo Luxury Relais & Châteaux (El Calafate)',
        highlights: ['Trans-Andean border crossing', 'Infinite pampas horizon', 'Traditional whole-lamb spit roast']
      },
      {
        day: 7,
        title: 'Perito Moreno Glacier Walkways & Ice Boat Safari',
        description: 'Visit the world’s most accessible advancing glacier. Walk along wooden catwalks facing the 200ft-high ice wall as colossal icebergs crash into Lake Argentino.',
        mealsIncluded: 'Breakfast, Glacial Balcony Lunch, Dinner',
        accommodation: 'Eolo Luxury Relais & Châteaux',
        highlights: ['Perito Moreno front-row catwalks', 'Safari nautico boat approach to ice wall', 'Spectacular calving events']
      },
      {
        day: 8,
        title: 'Estancia Gaucho Tradition & Horseback Trail',
        description: 'Ride Criollo horses alongside authentic Argentine gauchos across wild ridges, followed by mate tea tasting and an afternoon relaxing in the panoramic spa.',
        mealsIncluded: 'Breakfast, Gaucho BBQ, Fine Dining Dinner',
        accommodation: 'Eolo Luxury Relais & Châteaux',
        highlights: ['Gaucho horsemanship display', 'Criollo horse riding through valleys', 'Sunset cocktail overlooking Lake Argentino']
      },
      {
        day: 9,
        title: 'Upsala Glacier Navigation & Estancia Cristina',
        description: 'Private catamaran navigation through the icebergs of the Northern Canal to historic Estancia Cristina, surrounded by glaciers and fossil canyons.',
        mealsIncluded: 'Breakfast, Historic Estancia Lunch, Farewell Dinner',
        accommodation: 'Eolo Luxury Relais & Châteaux',
        highlights: ['Upsala ice field navigation', 'Fossil canyon 4x4 expedition', 'Celebratory Argentine wine pairing gala']
      },
      {
        day: 10,
        title: 'Farewell Patagonia: Flight from El Calafate',
        description: 'Morning breakfast with views of the snow-capped Andes before transfer to El Calafate airport for connection to Buenos Aires.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Final mountain breakfast', 'Private airport transfer']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 5800,
        hotelGrade: '4-Star Eco Lodges & Historic Estancias',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Shared group excursions with certified guides',
          'All park entrance fees and transfers',
          'Daily breakfast, trail lunches, 5 dinners',
          'Grey Glacier navigation ticket',
          'Cross-border logistics support'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Explorer Choice',
        pricePerPersonUSD: 7800,
        hotelGrade: '5-Star Relais & Châteaux Lodges (Tierra / Eolo)',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Grey Glacier ice hike with all crampon gear included',
          'Private 4x4 vehicle with dedicated naturalist guide',
          'All meals and unlimited Chilean/Argentine fine wines',
          'Panoramic mountain-view suites in all properties',
          'Puma tracking safari with spotting scopes'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Awasi Private Reserve',
        pricePerPersonUSD: 11900,
        hotelGrade: 'Awasi Patagonia Private Villas with Dedicated Guide',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Individual private luxury villa with wood-burning fireplace & hot tub',
          'Dedicated private 4x4 and private guide assigned solely to your villa',
          'Private helicopter flight over the Southern Patagonian Ice Field',
          'Chef-tailored meals with rare vintage Argentine and Chilean reserves',
          'Direct VIP border crossing expedited services'
        ]
      }
    ],
    reviews: [
      {
        id: 'r9',
        author: 'David & Karen O’Connor',
        location: 'Dublin, Ireland',
        avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'January 2026',
        comment: 'Trekking on Grey Glacier with crampons, followed by sipping single malt chilled by glacier ice, was exhilarating. Tierra Patagonia was one of the most stunning hotels we have ever seen.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 49
      }
    ],
    featured: false
  },
  {
    id: 'bali-komodo-yacht',
    slug: 'bali-komodo-dragons-luxury-cruise',
    name: 'Bali & Komodo Dragons Luxury Cruise',
    country: 'Indonesia',
    continent: 'Asia',
    style: 'Coastal & Yacht',
    durationDays: 8,
    durationNights: 7,
    basePriceUSD: 3650,
    originalPriceUSD: 4100,
    dynamicBadge: '⚡ Handcrafted Wooden Phinisi Yacht',
    carbonCO2eTons: 0.48,
    rating: 4.96,
    reviewCount: 104,
    shortDescription: 'Private Phinisi wooden schooner through Komodo National Park, pink sand beaches, manta ray dives, and Ubud jungle sanctuaries.',
    overview: 'Combine the tranquil spiritual luxury of Bali’s emerald rice terraces with an unforgettable expedition aboard a handcrafted teak Phinisi yacht. Sail through the mystical islands of Komodo, swim alongside graceful giant manta rays, walk among prehistoric Komodo dragons, and gaze at pink coral sands contrasting with turquoise waters.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h19', title: 'Padar Island Summit', description: 'Iconic panoramic viewpoint showing three distinct colored bays.', xPercent: 48, yPercent: 30 },
      { id: 'h20', title: 'Komodo Pink Sand Beach', description: 'Crushed red organ pipe coral creating ethereal blush pink shoreline.', xPercent: 22, yPercent: 65 },
      { id: 'h21', title: 'Ubud River Ravine Pool', description: 'Tiered infinity pool suspended above sacred jungle rainforest canopy.', xPercent: 75, yPercent: 70 },
    ],
    coordinates: { lat: -8.5432, lng: 119.4932 },
    mapRegion: 'Lesser Sunda Islands / Indonesia',
    inclusions: [
      '4 nights in luxury Ubud pool villa (Mandapa, a Ritz-Carlton Reserve)',
      '3 nights private charter aboard handcrafted teak Phinisi yacht',
      'All meals on yacht prepared by private onboard chef',
      'Snorkeling & dive gear with certified PADI divemaster',
      'Guided ranger trek on Rinca & Komodo to encounter dragons',
      'Private water blessings at sacred Tirta Empul spring temple',
      'Domestic charter flights Bali ⇄ Labuan Bajo'
    ],
    exclusions: [
      'International flights to Denpasar, Bali (DPS)',
      'Scuba dive equipment rental if diving (snorkeling included)',
      'Indonesian tourist visa upon arrival'
    ],
    weather: {
      tempCelsius: 29,
      tempFahrenheit: 84,
      condition: 'Tropical Sun & Crystal Waters',
      bestMonths: 'April to October (Dry Season)',
      rainfallAvgMm: 18,
      uvIndex: 10,
      packingAdvice: 'Light linen, reef-safe sunscreen, polarized sunglasses, swimwear, slip-resistant boat sandals.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali & Ubud Jungle Sanctuary',
        description: 'Private chauffeur from Denpasar airport to your riverfront villa in Ubud. Traditional Balinese flower offering and relaxing welcome massage.',
        mealsIncluded: 'Welcome Dinner by Ayung River',
        accommodation: 'Mandapa, a Ritz-Carlton Reserve (Ubud)',
        highlights: ['Private riverfront villa check-in', 'Balinese welcome blessing', 'Acoustic gamelan dinner']
      },
      {
        day: 2,
        title: 'Sacred Water Blessing & Organic Herbal Walk',
        description: 'Private morning purification ceremony at Sebatu holy spring temple. Afternoon walk through lush organic rice terraces with a holistic herbalist.',
        mealsIncluded: 'Breakfast, Farm-to-Table Lunch, Dinner',
        accommodation: 'Mandapa Reserve (Ubud)',
        highlights: ['Sacred Melukat water purification', 'Jatiluwih UNESCO rice terraces', 'Spa treatment with jungle sounds']
      },
      {
        day: 3,
        title: 'Culinary Masterclass & Artisan Silversmithing',
        description: 'Morning market visit with an indigenous chef to harvest ingredients for a private cooking masterclass. Afternoon visit to master Celuk silversmiths.',
        mealsIncluded: 'Breakfast, Cooking Feast, Dinner',
        accommodation: 'Mandapa Reserve (Ubud)',
        highlights: ['Hands-on Balinese culinary masterclass', 'Private artisan silver jewelry making', 'Sunset cocktail over jungle ravine']
      },
      {
        day: 4,
        title: 'Fly to Flores & Embark Phinisi Luxury Yacht',
        description: 'Flight to Labuan Bajo and board your handcrafted teak yacht. Set sail into Komodo National Park as sails unfurl against the blue horizon.',
        mealsIncluded: 'All meals, tropical cocktails on deck',
        accommodation: 'Private Teak Phinisi Yacht Suite',
        highlights: ['Embarking traditional wooden schooner', 'Sunset cruise past volcanic islands', 'Dining under equatorial stars']
      },
      {
        day: 5,
        title: 'Sunrise on Padar Island & Pink Beach Snorkel',
        description: 'Dawn trek to the summit of Padar Island for an iconic 3-bay panoramic vista. Cruise to Pink Beach to snorkel over pristine kaleidoscopic coral gardens.',
        mealsIncluded: 'All meals & beach barbecue',
        accommodation: 'Private Teak Phinisi Yacht Suite',
        highlights: ['Padar summit sunrise panoramic photos', 'Pink coral beach swimming', 'Sea turtles and clownfish snorkeling']
      },
      {
        day: 6,
        title: 'Komodo Dragons & Manta Point Drift Dive',
        description: 'Morning ranger-led trek on Komodo Island to track prehistoric dragons in their natural habitat. Afternoon drift snorkel with giant reef manta rays.',
        mealsIncluded: 'All meals & seafood grill',
        accommodation: 'Private Teak Phinisi Yacht Suite',
        highlights: ['Encountering giant Komodo dragons', 'Swimming alongside 4-meter manta rays', 'Thousands of flying foxes at sunset']
      },
      {
        day: 7,
        title: 'Disembark & Fly to Uluwatu Clifftops',
        description: 'Disembark at Labuan Bajo and fly back to Bali. Check into your clifftop villa in Uluwatu hanging 250 feet above the Indian Ocean breakers.',
        mealsIncluded: 'Breakfast, Clifftop Seafood Gala Dinner',
        accommodation: 'Bvlgari Resort Bali / Alila Villas Uluwatu',
        highlights: ['Oceanfront villa infinity pool', 'Uluwatu temple fire dance private viewing', 'Cliffside farewell seafood feast']
      },
      {
        day: 8,
        title: 'Farewell Indonesia & Private Airport Chauffeur',
        description: 'Final breakfast overlooking the Indian Ocean before your private transfer to Denpasar International Airport.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Final morning infinity pool swim', 'VIP airport lounge access']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 3650,
        hotelGrade: '4-Star Jungle Villa & Boutique Phinisi',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'Shared boutique Phinisi cruise (air-conditioned cabin)',
          'Daily breakfast and all meals on boat',
          'Guided dragon trek and snorkeling equipment',
          'Domestic flights Bali ⇄ Flores included',
          'Private ground transfers in Bali'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Top Islander',
        pricePerPersonUSD: 5400,
        hotelGrade: '5-Star Pool Villas (Mandapa & Bvlgari)',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Master cabin on premier Phinisi yacht with private balcony',
          'Private speed tender and dedicated divemaster',
          'All gourmet meals and free-flow wine and spirits on boat',
          'Private plunge pool villas in Ubud and Uluwatu',
          'Sacred temple water blessing ceremony included'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Private Yacht Buyout',
        pricePerPersonUSD: 8900,
        hotelGrade: 'Full Private Phinisi Yacht Buyout',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Exclusive yacht buyout with crew of 12 at your complete command',
          'Custom sailing itinerary through remote uninhabited atolls',
          'Private helicopter transfers between Bali and Flores resorts',
          'Onboard masseuse, private sommelier, and underwater photographer',
          'Presidential 2-bedroom villa at Mandapa Reserve'
        ]
      }
    ],
    reviews: [
      {
        id: 'r10',
        author: 'Jessica & Tariq Mansoor',
        location: 'Dubai, UAE',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'May 2026',
        comment: 'Swimming alongside six manta rays in Komodo with our private guide was deeply spiritual. The combination of quiet Ubud jungle and private yacht sailing was perfection.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 29
      }
    ],
    featured: false
  },
  {
    id: 'banff-canadian-rockies',
    slug: 'banff-lake-louise-canadian-rockies',
    name: 'Banff & Lake Louise Canadian Rockies',
    country: 'Canada',
    continent: 'Americas',
    style: 'Alpine & Glaciers',
    durationDays: 6,
    durationNights: 5,
    basePriceUSD: 3100,
    originalPriceUSD: 3500,
    dynamicBadge: '⚡ Glacial Waters & Heli-Hiking',
    carbonCO2eTons: 0.40,
    rating: 4.94,
    reviewCount: 92,
    shortDescription: 'Turquoise glacial lakes of Moraine & Louise, private helicopter hiking in pristine wilderness, and historic mountain châteaux.',
    overview: 'Witness nature’s grandeur in the rugged Canadian Rockies. Stay in historic châteaux on the edge of emerald glacier-fed lakes, take a private helicopter into untracked alpine meadows, paddle wooden canoes at sunrise before the crowds, and soak in steaming outdoor mineral pools surrounded by snowcapped peaks.',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramaImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=2000&q=80',
    panoramaHotspots: [
      { id: 'h22', title: 'Moraine Lake Valley of the Ten Peaks', description: 'Vibrant turquoise glacial waters reflecting ten 3,000m sheer rocky summits.', xPercent: 52, yPercent: 40 },
      { id: 'h23', title: 'Fairmont Chateau Lake Louise', description: 'Iconic historic castle hotel sitting right on the shore of Lake Louise.', xPercent: 28, yPercent: 62 },
      { id: 'h24', title: 'Athabasca Glacier Tongue', description: 'Massive toe of the Columbia Icefield spanning the Continental Divide.', xPercent: 78, yPercent: 45 },
    ],
    coordinates: { lat: 51.1784, lng: -115.5708 },
    mapRegion: 'Alberta / Canadian Rockies',
    inclusions: [
      '5 nights in luxury mountain suites (Fairmont Banff Springs & Chateau Lake Louise)',
      'Private helicopter excursion to pristine alpine ridge meadows',
      'Private sunrise cedar canoe rental on Moraine Lake before opening',
      'Columbia Icefield all-terrain glacier rover tour',
      'All national park conservation passes and priority lake shuttle access',
      'Daily mountain buffet breakfasts & 3 fine dining dinners with Okanagan wines'
    ],
    exclusions: [
      'Flights to/from Calgary International Airport (YYC)',
      'Canada eTA or visitor visa',
      'Personal winter ski or snowshoe rental'
    ],
    weather: {
      tempCelsius: 17,
      tempFahrenheit: 63,
      condition: 'Crisp Mountain Breeze & Pine Forest Air',
      bestMonths: 'June to September (Lakes & Hiking), Dec to April (Powder Snow)',
      rainfallAvgMm: 24,
      uvIndex: 6,
      packingAdvice: 'Layered fleece, waterproof trail shoes, windbreaker jacket, camera with polarizing filter, sunglasses.',
    },
    itinerary: [
      {
        day: 1,
        title: 'Calgary to Banff: The Castle in the Rockies',
        description: 'Chauffeured scenic drive through the foothills into Banff National Park. Check into Fairmont Banff Springs, affectionately known as Canada’s Castle in the Rockies.',
        mealsIncluded: 'Welcome Mountain Dinner',
        accommodation: 'Fairmont Banff Springs (Banff)',
        highlights: ['Scenic Bow Valley drive', 'Historic château grand lobby check-in', 'Fireside cocktail lounge']
      },
      {
        day: 2,
        title: 'Heli-Hiking Pristine Alpine Ridges',
        description: 'Board a private helicopter from Canmore into isolated high-altitude meadows. Hike across alpine ridge lines surrounded by hundreds of untamed peaks.',
        mealsIncluded: 'Breakfast, Mountain Ridge Picnic, Dinner',
        accommodation: 'Fairmont Banff Springs (Banff)',
        highlights: ['Private helicopter mountain flight', 'Hike where no trails exist', 'Gourmet charcuterie picnic at 2,400m']
      },
      {
        day: 3,
        title: 'Scenic Bow Valley Parkway & Fairmont Chateau Lake Louise',
        description: 'Drive along the wildlife-rich Bow Valley Parkway to Lake Louise. Check into your lakefront suite with direct views of Victoria Glacier.',
        mealsIncluded: 'Breakfast, Afternoon Tea, Fine Dining Dinner',
        accommodation: 'Fairmont Chateau Lake Louise',
        highlights: ['Grizzly and elk wildlife spotting', 'Traditional British afternoon tea overlooking turquoise lake', 'Sunset stroll along shoreline']
      },
      {
        day: 4,
        title: 'Dawn Canoe on Moraine Lake & Lake Agnes Teahouse',
        description: 'VIP early access to Moraine Lake before public roads open. Paddle a cedar canoe across mirror-flat waters reflecting the Valley of the Ten Peaks.',
        mealsIncluded: 'Breakfast, Teahouse Lunch, Dinner',
        accommodation: 'Fairmont Chateau Lake Louise',
        highlights: ['Crowd-free sunrise on Moraine Lake', 'Canoeing under ten soaring peaks', 'Hike to the historic 1901 Lake Agnes Teahouse']
      },
      {
        day: 5,
        title: 'Icefields Parkway & Athabasca Glacier Walk',
        description: 'Travel North America’s most scenic alpine highway. Step onto the 1,000ft-thick ice of Athabasca Glacier on a specialized all-terrain ice explorer.',
        mealsIncluded: 'Breakfast, Glacier View Lunch, Farewell Banquet',
        accommodation: 'Fairmont Chateau Lake Louise',
        highlights: ['Icefields Parkway waterfall stops', 'Walking on ancient continental divide glacier', 'Farewell Alberta prime beef and Okanagan wine dinner']
      },
      {
        day: 6,
        title: 'Banff Gondola & Chauffeur to Calgary',
        description: 'Morning ride on the Banff Gondola to the summit of Sulphur Mountain for a 360-degree panorama of six mountain ranges before transfer to Calgary Airport.',
        mealsIncluded: 'Breakfast',
        accommodation: 'Departure',
        highlights: ['Sulphur Mountain summit boardwalk', 'Private luxury transfer to Calgary Airport']
      }
    ],
    tiers: [
      {
        name: 'Classic Expedition',
        pricePerPersonUSD: 3100,
        hotelGrade: '4-Star Mountain Lodges',
        groupType: 'Small Group (Max 12)',
        includedFeatures: [
          'First-class motorcoach transfers and park shuttles',
          'Columbia Icefield explorer tour ticket',
          'Daily breakfast and 2 group dinners',
          'Moraine Lake shuttle reservation',
          'Experienced Canadian mountain guide'
        ]
      },
      {
        name: 'Signature Luxury',
        badge: 'Chateau Collection',
        pricePerPersonUSD: 4600,
        hotelGrade: '5-Star Fairmont Heritage Suites',
        groupType: 'Private Group (Max 6)',
        includedFeatures: [
          'Lake-view suites at Fairmont Chateau Lake Louise & Banff Springs',
          'Private helicopter hiking flight with mountain guide',
          'Private canoe rental on Moraine Lake at sunrise',
          'Private chauffeured luxury SUV throughout trip',
          'All breakfasts and 3 fine dining dinners'
        ]
      },
      {
        name: 'Ultra-Luxe VIP',
        badge: 'Rocky Mountain Royale',
        pricePerPersonUSD: 7200,
        hotelGrade: 'Gold Floor Executive Suites at Fairmont',
        groupType: 'Private VIP Concierge',
        includedFeatures: [
          'Fairmont Gold Floor access with private concierge lounge and honors bar',
          'Twin-engine private helicopter transfers direct from Calgary Airport',
          'Exclusive sunrise photoshoot and private mountaintop champagne breakfast',
          'Private chef multi-course dinner paired with library vintage wines',
          'All spa treatments and private lake excursions included'
        ]
      }
    ],
    reviews: [
      {
        id: 'r11',
        author: 'Daniel & Sarah Miller',
        location: 'Chicago, USA',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'July 2026',
        comment: 'Canoeing on Moraine Lake at 6am with mist rising and zero other people was the most peaceful moment of our lives. The Fairmont suites were outstanding.',
        travelerType: 'Couple',
        tripTaken: 'Signature Luxury Tier',
        helpfulCount: 36
      }
    ],
    featured: false
  }
];
