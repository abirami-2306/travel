import React, { useState, useRef, useEffect } from 'react';
import { useTravel } from '../context/TravelContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Compass, 
  Bot, 
  User, 
  ArrowRight, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  recommendedDestId?: string;
}

export const TravelAssistantChat: React.FC = () => {
  const { 
    setSelectedDestinationModal,
    travelDates,
    travelerCount,
    maxBudgetUSD
  } = useTravel();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'Greetings. I am Aura, your personal travel concierge at AuraVoyage. Whether you seek the optimal season for Kyoto cherry blossoms, a secluded catamaran cruise in the Cyclades, or a custom migration safari, I am at your service. How may I inspire your next journey?',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Best time to visit Kyoto?',
    'Romantic 7-day trip under $4,000',
    'Serengeti migration timing?',
    'Compare Amalfi vs Santorini',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const detectPackageMatch = (text: string): string | undefined => {
    const lower = text.toLowerCase();
    if (lower.includes('amalfi') || lower.includes('capri') || lower.includes('riva')) return 'amalfi-capri-yacht';
    if (lower.includes('kyoto') || lower.includes('onsen') || lower.includes('japan')) return 'kyoto-japanese-alps';
    if (lower.includes('serengeti') || lower.includes('safari') || lower.includes('migration') || lower.includes('tanzania')) return 'serengeti-great-migration';
    if (lower.includes('swiss') || lower.includes('matterhorn') || lower.includes('glacier express')) return 'swiss-alps-glacier-express';
    if (lower.includes('santorini') || lower.includes('oia') || lower.includes('caldera')) return 'santorini-cyclades-catamaran';
    if (lower.includes('patagonia') || lower.includes('torres del paine')) return 'patagonia-glaciers-trek';
    if (lower.includes('bali') || lower.includes('komodo')) return 'bali-komodo-yacht';
    if (lower.includes('banff') || lower.includes('lake louise')) return 'banff-canadian-rockies';
    return undefined;
  };

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text,
          })),
          budget: `$${maxBudgetUSD}`,
          travelers: travelerCount,
          travelDates,
        }),
      });

      if (!response.ok) {
        throw new Error('API response was not ok');
      }

      const data = await response.json();
      const replyText = data.reply || 'I would be delighted to assist in tailoring your bespoke expedition.';
      const recommendedDestId = detectPackageMatch(replyText) || detectPackageMatch(textToSend);

      const aiMsg: ChatMessage = {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedDestId,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.warn('Using client concierge fallback:', err);
      // Resilient luxury response fallback
      const replyText = getClientFallback(textToSend);
      const recommendedDestId = detectPackageMatch(replyText) || detectPackageMatch(textToSend);

      const aiMsg: ChatMessage = {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedDestId,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const getClientFallback = (prompt: string): string => {
    const p = prompt.toLowerCase();
    if (p.includes('kyoto') || p.includes('japan')) {
      return `Kyoto and the Japanese Alps are breathtaking during late March to mid-April for cherry blossoms, and throughout November for deep crimson maple foliage. Our **Kyoto & Japanese Alps Heritage** package includes private ryokans with cedar onsens and a private master tea ceremony.`;
    }
    if (p.includes('bali')) {
      return `Bali and Komodo enjoy optimal sailing conditions between May and September with dry, balmy days. Our **Bali & Komodo Dragons Luxury Cruise** combines an Ubud riverfront villa with a handcrafted teak Phinisi yacht expedition.`;
    }
    if (p.includes('amalfi') || p.includes('santorini')) {
      return `Both are Mediterranean masterpieces! Amalfi offers lush lemon groves and private Riva yacht cruising along towering cliffs, while Santorini offers iconic caldera cave suites with sunset infinity pools. For sailing lovers, Amalfi Coast & Capri is unmatched.`;
    }
    if (p.includes('serengeti') || p.includes('safari')) {
      return `For the Great Migration river crossings, July through October in the Northern Serengeti is prime. For baby wildebeest calving and intense predator activity, January through March in the southern plains is extraordinary.`;
    }
    return `Every AuraVoyage expedition includes private VIP transfers, 5-star lodgings, dedicated naturalists/historians, and 100% verified carbon offset contributions. What destination or landscape would you love to explore?`;
  };

  const handleOpenPackage = (destId: string) => {
    const d = SAMPLE_DESTINATIONS.find((item) => item.id === destId);
    if (d) {
      setSelectedDestinationModal(d);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'm-init',
        sender: 'ai',
        text: 'Conversation reset. How may I assist you with your travel aspirations today?',
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-teal-900 hover:bg-teal-800 text-amber-400 shadow-2xl border border-amber-400/30 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
          aria-label="Open AI Travel Concierge Chat"
          title="Chat with Aura - AI Travel Concierge"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <Sparkles className="w-6 h-6 animate-pulse" />
              {/* Pulse ripple ring */}
              <span className="absolute -inset-1 rounded-full bg-amber-400/20 animate-ping pointer-events-none" />
            </>
          )}

          {!isOpen && (
            <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-stone-900 text-stone-100 text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg border border-stone-800 pointer-events-none">
              Aura · AI Concierge
            </span>
          )}
        </button>
      </div>

      {/* Slide-Up Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-40 w-[calc(100vw-32px)] sm:w-[420px] max-h-[620px] h-[80vh] bg-stone-50 dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden animate-fade-in text-stone-900 dark:text-stone-100">
          
          {/* Header */}
          <div className="px-5 py-4 bg-teal-950 text-white flex items-center justify-between border-b border-teal-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-bold">Aura Travel Concierge</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-teal-200/80">Powered by Gemini 3.8 Flash</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-teal-300 hover:text-white hover:bg-teal-900 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-teal-300 hover:text-white hover:bg-teal-900 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-4 py-2 bg-stone-100 dark:bg-stone-950/60 border-b border-stone-200 dark:border-stone-800 overflow-x-auto flex items-center gap-1.5 text-[11px] font-medium no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(p)}
                className="px-2.5 py-1 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-amber-500 hover:text-amber-600 transition-all whitespace-nowrap cursor-pointer text-stone-700 dark:text-stone-300"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    A
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-teal-800 text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-bl-none border border-stone-200/80 dark:border-stone-700/80 shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Interactive Package Recommendation Card */}
                  {msg.recommendedDestId && (
                    <div className="mt-3 pt-2.5 border-t border-stone-200 dark:border-stone-700">
                      {(() => {
                        const rec = SAMPLE_DESTINATIONS.find((d) => d.id === msg.recommendedDestId);
                        if (!rec) return null;
                        return (
                          <div
                            onClick={() => handleOpenPackage(rec.id)}
                            className="flex items-center gap-2 p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-300/50 dark:border-amber-600/50 cursor-pointer transition-all"
                          >
                            <img src={rec.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <div className="flex-1 min-w-0 text-left">
                              <div className="font-bold text-stone-900 dark:text-stone-100 text-[11px] truncate">
                                {rec.name}
                              </div>
                              <div className="text-[10px] text-amber-700 dark:text-amber-400">
                                {rec.durationDays} Days · From ${rec.basePriceUSD}
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-teal-200' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-stone-500">
                <div className="w-7 h-7 rounded-full bg-teal-900 text-amber-300 flex items-center justify-center shrink-0 text-xs font-bold">
                  A
                </div>
                <div className="bg-white dark:bg-stone-800 p-3 rounded-2xl border border-stone-200 dark:border-stone-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-stone-400 ml-1">Aura is consulting global routes...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="p-3 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask Aura anything about destinations, seasons, or budgets..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder:text-stone-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white disabled:opacity-40 transition-all cursor-pointer shadow-sm"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
