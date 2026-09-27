import { TravelGuide, CustomItineraryItem } from '../types/travel';

export const SAMPLE_TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: 'guide-kyoto-ryokans',
    title: 'The Hidden Ryokans of Kyoto: An Architectural & Sensory Journey',
    destination: 'Kyoto, Japan',
    readingTime: '6 min read',
    publishDate: 'September 2026',
    author: {
      name: 'Kenji Takahashi',
      role: 'Senior Heritage Curator',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Behind discreet cedar lattices and moss-covered stepping stones lie sanctuaries of quietude untouched by centuries of modernity.',
    content: [
      'To step into an authentic Kyoto ryokan is not merely to check into a hotel; it is to enter a living art form honed over four hundred years.',
      'The scent of fresh tatami reed, the murmur of spring water cascading into a stone basin, and the sliding of shoji paper screens creating shadows reminiscent of Junichiro Tanizaki’s "In Praise of Shadows".',
      'When reserving a ryokan, ask for a room featuring a private Hinoki cypress soaking tub facing an inner tsuboniwa courtyard. The temperature is naturally maintained at 41°C, infused with minerals that soothe muscles after exploring the bamboo paths of Sagano.',
      'Seasonal Kaiseki dining is served course by course in your room. Each dish reflects the micro-season — whether it is matsutake mushrooms steamed in clay teapots in autumn or tender bamboo shoots dusted with kinome leaves in early spring.'
    ],
    tags: ['Culture', 'Ryokans', 'Architecture', 'Culinary']
  },
  {
    id: 'guide-amalfi-sailing',
    title: 'Navigating the Amalfi Coast: Why You Should Only See It by Riva',
    destination: 'Amalfi Coast, Italy',
    readingTime: '5 min read',
    publishDate: 'August 2026',
    author: {
      name: 'Chiara Moretti',
      role: 'Mediterranean Maritime Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    excerpt: 'The serpentine coastal roads may be legendary, but the true spirit of Positano and Capri belongs to the azure waters below.',
    content: [
      'While buses and rental cars crawl along the Strada Statale 163 bumper-to-bumper, chartering a classic wooden Riva Aquarama allows you to slice through the crystalline waters of the Gulf of Salerno at 35 knots with the wind in your hair.',
      'Bypass the crowded public grottos by arriving at the Green Grotto at 11:30 AM when sunlight strikes the subterranean limestone shelf, turning the sea into an electric aquamarine pool.',
      'Your captain can moor directly at the dock of Lo Scoglio in Nerano or La Fontelina in Capri, where tables perched on sea rocks await with salt-crusted sea bass and chilled Falanghina.'
    ],
    tags: ['Yachting', 'Italy', 'Mediterranean', 'Luxury']
  },
  {
    id: 'guide-serengeti-conservation',
    title: 'The Modern Safari: How Luxury Tourism Fuels Serengeti Conservation',
    destination: 'Serengeti, Tanzania',
    readingTime: '7 min read',
    publishDate: 'July 2026',
    author: {
      name: 'Ezekiel Mollel',
      role: 'Head Naturalist & Conservationist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    excerpt: 'High-value, low-density travel is proving to be the most vital shield in preserving Africa’s greatest wildlife corridors.',
    content: [
      'Every night spent in a premier low-impact tented camp directly funds the salaries of anti-poaching canine units, drone surveillance teams, and indigenous Maasai land conservancies.',
      'By selecting camps that operate on 100% solar microgrids and ban single-use plastics, travelers ensure that the delicate ecosystem of the Grumeti River remains pristine for the next migration cycle.',
      'Beyond wildlife viewing, spending an afternoon walking with tribal elders to learn traditional navigation and medicinal plant knowledge provides sustainable economic independence to pastoralist communities.'
    ],
    tags: ['Wildlife', 'Sustainability', 'Safari', 'Conservation']
  },
  {
    id: 'guide-swiss-railways',
    title: 'Excellence on Rails: The Art of Swiss Panoramic Train Journeys',
    destination: 'Swiss Alps',
    readingTime: '4 min read',
    publishDate: 'June 2026',
    author: {
      name: 'Beatrix von Bergen',
      role: 'Alpine Journey Designer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why the Glacier Express and Bernina Express represent the pinnacle of slow, reflective luxury travel.',
    content: [
      'In an era obsessed with supersonic speed, the Glacier Express proudly takes eight hours to cover just 291 kilometers — and every minute is poetry.',
      'Excellence Class redefines railway hospitality: twenty luxurious lounge armchairs in a dedicated carriage, a private Glacier Bar, iPad infotainment, and a white-gloved multi-course culinary service paired with rare Swiss Valais wines.',
      'As you cross the 65-meter-high curved limestone arches of the Landwasser Viaduct, the world drops away, replaced by roaring torrents and pine-scented mountain air.'
    ],
    tags: ['Rail Travel', 'Alps', 'Switzerland', 'Gastronomy']
  }
];

export const BUILDER_HOTEL_OPTIONS: CustomItineraryItem[] = [
  {
    id: 'hotel-boutique',
    name: 'Boutique Heritage Haven',
    category: 'accommodation',
    priceUSD: 380,
    details: 'Charming 4-star boutique lodge or historic townhouse with gourmet breakfast and bespoke character.',
    iconName: 'Building'
  },
  {
    id: 'hotel-luxury-resort',
    name: '5-Star Cliffside / Lakefront Palace',
    category: 'accommodation',
    priceUSD: 720,
    details: 'Signature luxury resort suite with panoramic private terrace, infinity pool access, and butler service.',
    iconName: 'Crown'
  },
  {
    id: 'hotel-eco-lodge',
    name: 'Eco-Luxury Canvas Pavilion / Chalet',
    category: 'accommodation',
    priceUSD: 590,
    details: '100% solar-powered luxury architectural tent or mountain chalet immersed in virgin nature.',
    iconName: 'Leaf'
  },
  {
    id: 'hotel-presidential',
    name: 'Presidential Private Villa with Pool',
    category: 'accommodation',
    priceUSD: 1450,
    details: 'Exclusive multi-room private estate with private heated pool, personal chef, and chauffeur.',
    iconName: 'Sparkles'
  }
];

export const BUILDER_ACTIVITY_OPTIONS: CustomItineraryItem[] = [
  {
    id: 'act-yacht',
    name: 'Private Sunset Yacht / Catamaran Charter',
    category: 'activity',
    priceUSD: 450,
    details: '4-hour private cruise with captain, Champagne, swimming stops, and gourmet appetizers.',
    iconName: 'Ship'
  },
  {
    id: 'act-helicopter',
    name: 'Scenic Glacier / Mountain Helicopter Flight',
    category: 'activity',
    priceUSD: 550,
    details: 'Heli-flight over untamed mountain peaks with a 30-minute private ridge landing and alpine toast.',
    iconName: 'Plane'
  },
  {
    id: 'act-balloon',
    name: 'Sunrise Hot Air Balloon & Bush Breakfast',
    category: 'activity',
    priceUSD: 480,
    details: 'Dawn ascension above valleys or savannah followed by a 5-star outdoor white-linen breakfast.',
    iconName: 'Compass'
  },
  {
    id: 'act-michelin',
    name: 'Michelin-Starred Degustation & Wine Pairing',
    category: 'activity',
    priceUSD: 280,
    details: 'Multi-course tasting menu curated by a celebrated master chef with sommelier wine reserve.',
    iconName: 'Utensils'
  },
  {
    id: 'act-masterclass',
    name: 'Private Artisan Culinary / Craft Masterclass',
    category: 'activity',
    priceUSD: 190,
    details: 'Exclusive hands-on workshop with local master (wine, cheese, tea ceremony, or perfumery).',
    iconName: 'Sparkles'
  },
  {
    id: 'act-hiking',
    name: 'Private Guided Alpine / Nature Trek & Crampon Hike',
    category: 'activity',
    priceUSD: 220,
    details: 'Certified mountain guide with all technical gear, gourmet trail picnic, and wildlife tracking.',
    iconName: 'MapPin'
  }
];

export const BUILDER_TRANSPORT_OPTIONS: CustomItineraryItem[] = [
  {
    id: 'trans-chauffeur',
    name: 'Private Mercedes S-Class / V-Class Chauffeur',
    category: 'transport',
    priceUSD: 220,
    details: 'Dedicated luxury vehicle and English-speaking chauffeur on call throughout your journey.',
    iconName: 'Car'
  },
  {
    id: 'trans-first-rail',
    name: 'First-Class Scenic Rail & Panoramic Passes',
    category: 'transport',
    priceUSD: 160,
    details: 'First-class panoramic glass-roof railway seating with luggage forwarding between hotels.',
    iconName: 'Train'
  },
  {
    id: 'trans-safari-4x4',
    name: 'Custom Open-Sided 4x4 Safari Cruiser',
    category: 'transport',
    priceUSD: 260,
    details: 'Expedition Land Cruiser equipped with pop-up roof, camera mounts, inverter chargers, and fridge.',
    iconName: 'Shield'
  }
];
