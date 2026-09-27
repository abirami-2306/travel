import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI with key:', err);
  }
}

// AI Travel Assistant Endpoint
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, selectedDestination, budget, travelers, travelDates } = req.body;

    const userPrompt = messages && messages.length > 0
      ? messages[messages.length - 1].content
      : 'Hello! Can you help me find a luxury trip?';

    const systemInstruction = `You are "Aura", the elite Senior Travel Concierge for AuraVoyage — a high-end luxury and adventure travel curator (in the vein of Aman, National Geographic Expeditions, and Condé Nast Traveler).
You are warm, cultured, perceptive, and highly knowledgeable about global destinations, seasonal weather, culinary scenes, hidden gems, packing advice, and luxury pacing.

AuraVoyage signature packages currently offered:
1. "Amalfi Coast & Capri Yacht Odyssey" (Italy) - 7 Days / 6 Nights, from $3,850/person. Highlights: Private Riva yacht charter around Capri, cliffside Positano villa, Ravello private terrace dinner, limoncello grove tasting.
2. "Kyoto & Japanese Alps Heritage" (Japan) - 9 Days / 8 Nights, from $4,400/person. Highlights: Traditional luxury ryokan with private onsen, master tea ceremony in Arashiyama, Takayama morning market, bullet train first class.
3. "Serengeti & Ngorongoro Great Migration" (Tanzania) - 8 Days / 7 Nights, from $6,200/person. Highlights: Luxury tented camp under starlight, sunrise hot air balloon over the migration, private 4x4 Land Cruiser safari with expert naturalist guide.
4. "Swiss Alps & Glacier Express Grand Tour" (Switzerland) - 7 Days / 6 Nights, from $4,950/person. Highlights: Zermatt Matterhorn views, panoramic Glacier Express Excellence Class, alpine spa retreat, private fondue tasting on mountain summit.
5. "Santorini & Cyclades Private Catamaran" (Greece) - 6 Days / 5 Nights, from $3,450/person. Highlights: Sunset catamaran cruise around Oia caldera, clifftop cave suite with infinity plunge pool, Akrotiri archaeological tour.
6. "Patagonia Glaciers & Torres del Paine" (Chile & Argentina) - 10 Days / 9 Nights, from $5,800/person. Highlights: Grey Glacier ice trek, luxury yurt camp overlooking granite spires, gaucho barbecue & estancia horse ride, puma tracking.
7. "Bali & Komodo Dragons Luxury Cruise" (Indonesia) - 8 Days / 7 Nights, from $3,650/person. Highlights: Phinisi wooden schooner sailing, pink beach snorkelling, Ubud jungle sanctuary villa with private river pool.
8. "Banff & Lake Louise Canadian Rockies" (Canada) - 6 Days / 5 Nights, from $3,100/person. Highlights: Heli-hiking pristine alpine meadows, Fairmont Lake Louise stay, Moraine Lake private sunrise canoe, hot springs soak.

Current user context:
${selectedDestination ? `- Interested in destination: ${selectedDestination}` : ''}
${budget ? `- Budget preference: ${budget}` : ''}
${travelers ? `- Travelers count: ${travelers}` : ''}
${travelDates ? `- Travel dates/season: ${travelDates}` : ''}

Instructions:
- Keep responses elegant, structured, inspiring, and concise (2-4 brief paragraphs or clean bullet points).
- Recommend specific packages when relevant, mentioning key highlights, best travel months, and practical tips.
- Do not use markdown headers larger than h3. Keep text clear and evocative.
- Offer actionable advice on packing, optimal seasons, local etiquette, or itinerary adjustments.`;

    if (aiClient) {
      try {
        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: userPrompt,
          config: {
            systemInstruction,
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        });

        const reply = response.text || 'I would be delighted to assist you in planning your next extraordinary voyage.';
        return res.json({ reply, source: 'gemini' });
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, using luxury concierge fallback:', geminiError?.message);
      }
    }

    // Curated high-fidelity concierge fallback
    const fallbackReply = generateCuratedResponse(userPrompt, selectedDestination);
    return res.json({ reply: fallbackReply, source: 'concierge-expert' });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Failed to process concierge request' });
  }
});

function generateCuratedResponse(prompt: string, destination?: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('bali') || p.includes('indonesia')) {
    return `Bali and the Komodo archipelago are most sublime between **May and September**, during the dry season with balmy tropical breezes and crystal-clear waters.\n\nOur **Bali & Komodo Dragons Luxury Cruise** (8 Days from $3,650) pairs an Ubud jungle villa with a private hand-crafted Phinisi yacht expedition through Flores. For romantic escapes or wildlife lovers, it is an unbeatable blend of serene wellness and dramatic island discovery.`;
  }

  if (p.includes('kyoto') || p.includes('japan')) {
    return `Kyoto enchants in two distinct golden windows: **Late March to mid-April** for the ethereal cherry blossoms (*sakura*), and **November** for the fiery crimson Japanese maples (*koyo*).\n\nOur **Kyoto & Japanese Alps Heritage** package includes stays at authentic historic ryokans with open-air cedar onsens, private tea masters in Arashiyama, and first-class Shinkansen transfers. We recommend booking at least 4 months ahead for spring travel.`;
  }

  if (p.includes('amalfi') || p.includes('italy') || p.includes('positano')) {
    return `The ideal window for the Amalfi Coast is **May through June** or **September through October**, avoiding peak August crowds while enjoying warm Mediterranean waters and fragrant lemon groves.\n\nOur **Amalfi Coast & Capri Yacht Odyssey** provides private Riva speedboats to bypass coastal traffic and gives you privileged access to cliffside cliff-dwellings, secluded swimming coves, and sunset dining in Ravello.`;
  }

  if (p.includes('safari') || p.includes('serengeti') || p.includes('tanzania') || p.includes('africa')) {
    return `The Great Serengeti Migration is an awe-inspiring spectacle. **July to October** is prime for the dramatic Mara River crossings, while **January to March** offers the calving season in the Southern Serengeti with extraordinary predator action.\n\nOur **Serengeti & Ngorongoro Expedition** features boutique canvas pavilions, dawn hot-air ballooning, and custom 4x4 safaris with legendary local Maasai guides.`;
  }

  if (p.includes('swiss') || p.includes('alps') || p.includes('switzerland') || p.includes('ski') || p.includes('zermatt')) {
    return `For lush alpine wildflower meadows and hiking, visit **mid-June to September**. For world-class glacier skiing and cozy fondue evenings by the fire, **December through March** is perfection.\n\nOur **Swiss Alps & Glacier Express Grand Tour** includes Excellence Class carriage seating across 291 bridges, five-star alpine thermal spas, and private summit excursions overlooking the iconic Matterhorn.`;
  }

  if (p.includes('budget') || p.includes('cost') || p.includes('cheap') || p.includes('price')) {
    return `At AuraVoyage, our curated packages range from **$3,100 to $6,200 per traveler**, each including private luxury accommodations, expert local guides, daily breakfast and curated dining, dedicated ground transfers, and carbon offsets.\n\nTip: You can use our **Interactive Trip Planner** above to customize individual activities and lodging tiers to match your desired investment, or use the **Group Splitter** to share villa costs among companions!`;
  }

  if (p.includes('pack') || p.includes('luggage') || p.includes('bring')) {
    return `For luxury expeditions, we recommend:\n• Breathable linen & merino layers adaptable to changing elevations\n• High-SPF mineral sunscreen and polarised UV sunglasses\n• Slip-on footwear for temples/boats plus sturdy broken-in trail shoes\n• Universal travel adapters and portable battery packs\n\nEvery AuraVoyage guest receives a personalized day-by-day packing checklist 30 days before departure tailored to current meteorological forecasts.`;
  }

  return `Welcome to AuraVoyage! I would be delighted to help craft your next bespoke escape.\n\nWhether you are drawn to the sun-soaked cliffs of the **Amalfi Coast**, the ancient serenity of **Kyoto's bamboo groves**, an untamed **Serengeti safari**, or the crystalline peaks of the **Swiss Alps**, I can tailor every detail.\n\nTell me: what type of landscape inspires you most right now, and when are you thinking of traveling?`;
}

// Development server with Vite middleware
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AuraVoyage server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
