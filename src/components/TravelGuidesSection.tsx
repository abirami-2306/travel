import React from 'react';
import { SAMPLE_TRAVEL_GUIDES } from '../data/travelGuides';
import { useTravel } from '../context/TravelContext';
import { TravelGuide } from '../types/travel';
import { BookOpen, ArrowRight, Clock, Calendar, X, Sparkles } from 'lucide-react';

export const TravelGuidesSection: React.FC = () => {
  const { activeGuideModal, setActiveGuideModal } = useTravel();

  return (
    <section id="travel-guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Voyager Journal</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            Curated Field Guides
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl">
            Insider essays, etiquette reflections, and secret viewpoints written by resident curators and expedition captains.
          </p>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SAMPLE_TRAVEL_GUIDES.map((guide) => (
          <div
            key={guide.id}
            onClick={() => setActiveGuideModal(guide)}
            className="group flex flex-col bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200/90 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-stone-200 text-[10px] px-2 py-0.5 rounded font-medium">
                {guide.destination}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-2">
                  <span>{guide.readingTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{guide.publishDate}</span>
                </div>

                <h3 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-2 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={guide.author.avatar}
                    alt={guide.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-[11px] font-medium text-stone-600 dark:text-stone-300 truncate max-w-[100px]">
                    {guide.author.name}
                  </span>
                </div>

                <span className="text-amber-600 dark:text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guide Detail Modal */}
      {activeGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setActiveGuideModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 text-stone-900 dark:text-stone-100 max-h-[90vh] overflow-y-auto space-y-6"
          >
            <button
              onClick={() => setActiveGuideModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
              aria-label="Close Guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {activeGuideModal.destination} · {activeGuideModal.readingTime}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 leading-tight">
                {activeGuideModal.title}
              </h2>
              <div className="flex items-center gap-3 mt-3 text-xs text-stone-500">
                <img
                  src={activeGuideModal.author.avatar}
                  alt={activeGuideModal.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-stone-800 dark:text-stone-200">{activeGuideModal.author.name}</div>
                  <div>{activeGuideModal.author.role}</div>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
              <img
                src={activeGuideModal.image}
                alt={activeGuideModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light">
              {activeGuideModal.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {activeGuideModal.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-stone-500">#{tag}</span>
                ))}
              </div>

              <button
                onClick={() => setActiveGuideModal(null)}
                className="px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
