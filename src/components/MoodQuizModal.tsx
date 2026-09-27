import React, { useState } from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { Destination } from '../types/travel';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Check, 
  RotateCcw, 
  Star, 
  Compass, 
  Sun, 
  Mountain, 
  Palmtree, 
  Flame 
} from 'lucide-react';

export const MoodQuizModal: React.FC = () => {
  const { 
    isMoodQuizOpen, 
    setIsMoodQuizOpen, 
    formatPrice, 
    setSelectedDestinationModal 
  } = useTravel();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    landscape: '',
    pace: '',
    companions: '',
    investment: '',
  });

  const [topMatches, setTopMatches] = useState<{ destination: Destination; matchScore: number; reason: string }[] | null>(null);

  if (!isMoodQuizOpen) return null;

  const questions = [
    {
      id: 'landscape',
      title: 'What visual landscape stirs your wanderlust right now?',
      subtitle: 'Choose the horizon you wish to wake up to.',
      options: [
        { id: 'sea', label: 'Azure Sea & Sun-Drenched Cliffs', icon: 'Sun', desc: 'Mediterranean waters, private catamarans, coastal dining' },
        { id: 'mountain', label: 'Glacier Peaks & Alpine Meadows', icon: 'Mountain', desc: 'Snowcapped peaks, panoramic trains, pristine crisp air' },
        { id: 'culture', label: 'Ancient Temples & Zen Sanctuaries', icon: 'Palmtree', desc: 'Historic ryokans, tea masters, stone gardens, culture' },
        { id: 'wildlife', label: 'Untamed Savannah & Endless Plains', icon: 'Flame', desc: 'Great migration, starlit tented camps, big cats' },
      ]
    },
    {
      id: 'pace',
      title: 'What cadence describes your ideal travel rhythm?',
      subtitle: 'How would you like your days to unfold?',
      options: [
        { id: 'relaxed', label: 'Slow & Indulgent', desc: 'Late terrace breakfasts, thermal spas, private yacht lounges' },
        { id: 'immersive', label: 'Deep Cultural Immersion', desc: 'Private historians, master workshops, artisan dining' },
        { id: 'adventure', label: 'Active & Exhilarating', desc: 'Glacier ice-trekking, heli-hiking, 4x4 wildlife tracking' },
      ]
    },
    {
      id: 'companions',
      title: 'Who are you embarking on this journey with?',
      subtitle: 'We tailor privacy, room layouts, and group dynamics.',
      options: [
        { id: 'couple', label: 'Couple / Romantic Celebration', desc: 'Secluded suites, candlelit dinners, private charters' },
        { id: 'solo', label: 'Solo Explorer', desc: 'Introspective luxury, seamless transfers, mindful moments' },
        { id: 'friends', label: 'Friends Group (4+ travelers)', desc: 'Spacious villas, private catamarans, shared feasts' },
        { id: 'family', label: 'Multi-Generational Family', desc: 'Engaging naturalist guides, flexible pacing, kid-safe stays' },
      ]
    },
    {
      id: 'investment',
      title: 'What is your preferred investment per traveler?',
      subtitle: 'All packages include private lodgings, guidance, and offsets.',
      options: [
        { id: 'classic', label: 'Essential Luxury ($3,000 - $4,500)', desc: '4-star boutique lodgings, scenic rail, small-group sailing' },
        { id: 'signature', label: 'Signature 5-Star ($4,500 - $6,500)', desc: 'Premier cliffside suites, private Riva/4x4, Michelin dining' },
        { id: 'ultraluxe', label: 'Ultra-Luxe Bespoke ($6,500+)', desc: 'Helicopter charters, private villa buyouts, dedicated butler' },
      ]
    }
  ];

  const handleSelectOption = (qId: string, optId: string) => {
    const updated = { ...answers, [qId]: optId };
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateMatches(updated);
    }
  };

  const calculateMatches = (finalAnswers: typeof answers) => {
    // Scoring logic based on answers
    const scored = SAMPLE_DESTINATIONS.map((dest) => {
      let score = 75; // baseline

      // Landscape affinity
      if (finalAnswers.landscape === 'sea' && (dest.style === 'Coastal & Yacht' || dest.country === 'Italy' || dest.country === 'Greece')) {
        score += 20;
      }
      if (finalAnswers.landscape === 'mountain' && (dest.style === 'Alpine & Glaciers' || dest.country === 'Switzerland' || dest.country === 'Canada')) {
        score += 20;
      }
      if (finalAnswers.landscape === 'culture' && (dest.style === 'Cultural Heritage' || dest.country === 'Japan')) {
        score += 24;
      }
      if (finalAnswers.landscape === 'wildlife' && (dest.style === 'Wildlife Safari' || dest.country === 'Tanzania' || dest.country === 'Indonesia')) {
        score += 22;
      }

      // Pace affinity
      if (finalAnswers.pace === 'relaxed' && (dest.style === 'Coastal & Yacht' || dest.id.includes('santorini') || dest.id.includes('amalfi'))) {
        score += 10;
      }
      if (finalAnswers.pace === 'adventure' && (dest.id.includes('patagonia') || dest.id.includes('serengeti') || dest.id.includes('banff'))) {
        score += 10;
      }
      if (finalAnswers.pace === 'immersive' && dest.country === 'Japan') {
        score += 12;
      }

      // Budget fit
      if (finalAnswers.investment === 'classic' && dest.basePriceUSD <= 4200) {
        score += 8;
      } else if (finalAnswers.investment === 'signature' && dest.basePriceUSD > 3800 && dest.basePriceUSD <= 6000) {
        score += 8;
      } else if (finalAnswers.investment === 'ultraluxe' && dest.basePriceUSD > 5000) {
        score += 8;
      }

      // Clamp match score between 88% and 99%
      const finalScore = Math.min(99, Math.max(88, score));
      
      let reason = 'Matches your desired landscape and curated pacing.';
      if (dest.id.includes('amalfi')) reason = 'Private Riva yacht cruising and cliffside suites match your Mediterranean vision.';
      if (dest.id.includes('kyoto')) reason = 'Authentic ryokans with cedar onsen and tea masters fulfill your cultural longing.';
      if (dest.id.includes('serengeti')) reason = 'Hot air balloon safaris and luxury canvas pavilions align with your wildlife aspiration.';
      if (dest.id.includes('swiss')) reason = 'Panoramic Glacier Express and Matterhorn vistas provide ultimate alpine serenity.';
      if (dest.id.includes('santorini')) reason = 'Private caldera catamaran and cliffside plunge pools are idyllic for your rhythm.';
      if (dest.id.includes('patagonia')) reason = 'Grey Glacier ice trekking and gaucho estancias bring exhilarating raw beauty.';
      if (dest.id.includes('bali')) reason = 'Teak Phinisi yacht sailing and sacred river sanctuaries offer tranquil wellness.';
      if (dest.id.includes('banff')) reason = 'Turquoise glacier lakes and private heli-hiking match your alpine yearning.';

      return {
        destination: dest,
        matchScore: finalScore,
        reason,
      };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);
    setTopMatches(scored.slice(0, 3));
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({ landscape: '', pace: '', companions: '', investment: '' });
    setTopMatches(null);
  };

  const openDestination = (dest: Destination) => {
    setIsMoodQuizOpen(false);
    setSelectedDestinationModal(dest);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={() => setIsMoodQuizOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 text-stone-900 dark:text-stone-100"
      >
        
        {/* Close Button */}
        <button
          onClick={() => setIsMoodQuizOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content: Questions or Results */}
        {!topMatches ? (
          <div>
            {/* Quiz Header & Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Destination Vibe Finder</span>
                </span>
                <span>Question {currentStep + 1} of {questions.length}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-4">
                {questions[currentStep].title}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentStep].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(questions[currentStep].id, opt.id)}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-500 hover:bg-amber-500/5 dark:hover:bg-amber-500/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <div className="font-display text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                      {opt.label}
                    </div>
                    {opt.desc && (
                      <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                        {opt.desc}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>

            {/* Back button */}
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-6 text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-semibold cursor-pointer"
              >
                ← Previous Question
              </button>
            )}
          </div>
        ) : (
          /* Results View: Top 3 Matches */
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Check className="w-3.5 h-3.5" />
                <span>Your Ideal Matches Are Ready</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Your Curated Expeditions
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 max-w-md mx-auto">
                Based on your preference for {answers.landscape} and {answers.pace} pacing, here are your top 3 matches:
              </p>
            </div>

            <div className="space-y-3">
              {topMatches.map((match, idx) => (
                <div
                  key={match.destination.id}
                  onClick={() => openDestination(match.destination)}
                  className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-500 bg-white dark:bg-stone-800/60 transition-all cursor-pointer flex gap-4 items-center group shadow-sm hover:shadow-md"
                >
                  <img
                    src={match.destination.heroImage}
                    alt={match.destination.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        {match.destination.country}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        {match.matchScore}% Match
                      </span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 truncate mt-0.5">
                      {match.destination.name}
                    </h4>

                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">
                      {match.reason}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        From {formatPrice(match.destination.basePriceUSD)}
                      </span>
                      <span className="text-amber-600 dark:text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={restartQuiz}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Vibe Quiz</span>
              </button>

              <button
                onClick={() => setIsMoodQuizOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Browse All Expeditions
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
