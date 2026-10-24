import React, { useState } from 'react';
import {
  Plus,
  X,
  Check,
  ShieldCheck,
  Sparkles,
  Heart,
  HelpCircle,
  Truck,
  Package,
  RefreshCw,
  Award,
  ChevronDown,
  Info
} from 'lucide-react';
import { getProductArticle } from '../../data/articles';

const ProductArticle = ({ product }) => {
  const article = getProductArticle(product);

  // State to track which FAQ items are open (allowing multiple or individual toggles)
  const [openFaqs, setOpenFaqs] = useState({ 0: true }); // First FAQ open by default

  if (!article) return null;

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="mt-16 pt-12 border-t border-gray-100 w-full">
      <div className="w-full">

        {/* ========================================================
            1. Editorial Headline & In-Depth Product Story
        ========================================================= */}
        <div className="text-left w-full mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            {article.headline}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            {article.subheadline}
          </p>
        </div>

        {/* Story Prose */}
        <div className="bg-gradient-to-br from-pink-50/40 via-white to-pink-50/20 rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-xs mb-14 w-full">
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            {article.story.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "font-medium text-gray-800" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Stat Highlights */}
          <div className="mt-8 pt-6 border-t border-pink-100/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-4 bg-white/80 rounded-xl border border-pink-100">
              <span className="block text-xl font-black text-[#501524]">100%</span>
              <span className="text-xs text-gray-500 font-medium">Discreet Packaging</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-pink-100">
              <span className="block text-xl font-black text-[#501524]">Cloud-Soft</span>
              <span className="text-xs text-gray-500 font-medium">Hypoallergenic Fabric</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-pink-100">
              <span className="block text-xl font-black text-[#501524]">Nationwide</span>
              <span className="text-xs text-gray-500 font-medium">Cash On Delivery</span>
            </div>
            <div className="p-4 bg-white/80 rounded-xl border border-pink-100">
              <span className="block text-xl font-black text-[#501524]">Easy</span>
              <span className="text-xs text-gray-500 font-medium">Size Exchange</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. Why This Product is Different & Better Than Others
        ========================================================= */}
        <div className="mb-16 w-full">
          <div className="text-left w-full mb-8">
            <span className="text-xs font-bold text-[#501524] uppercase tracking-widest block mb-1">
              Superior Craftsmanship
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Why This Piece is Different & Better
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl">
              We engineer our intimate pieces to outshine cheap alternatives in comfort, durability, and fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
            {article.whyBetter.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-[#501524]/20 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#501524] flex items-center justify-center shrink-0 mt-0.5">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. Side-by-Side Comparison: Hotnighties vs Generic
        ========================================================= */}
        {article.comparisonTable && (
          <div className="mb-16 w-full">
            <div className="text-left mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Hotnighties Quality vs. Generic Market Copies
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                See what makes an authentic Hotnighties piece worth the investment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
              {/* Hotnighties Column */}
              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-200">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm sm:text-base">Hotnighties Standard</h4>
                    <span className="text-[11px] text-emerald-700 font-semibold">Premium Authentic Experience</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {article.comparisonTable.hotnighties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900">
                      <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Generic Market Column */}
              <div className="bg-red-50/40 rounded-2xl p-6 border border-red-200/70 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-200">
                  <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <X size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-950 text-sm sm:text-base">Generic Market Alternatives</h4>
                    <span className="text-[11px] text-red-600 font-semibold">Cheap Copies & Bazaar Items</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {article.comparisonTable.generic.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-red-900">
                      <X size={16} className="text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            4. Styling Tips & Fabric Care Dual Cards
        =========================== ============================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Styling Guide */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Styling & Wearing Suggestions</h4>
                <span className="text-[11px] text-gray-500">How to get the most allure</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {article.stylingTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#501524] shrink-0 mt-2"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fabric Care */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Fabric Care & Longevity</h4>
                <span className="text-[11px] text-gray-500">Keep it looking brand-new</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {article.careGuide.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================
            5. Frequently Asked Questions (Interactive Accordion with Proper + / ✕ Toggle)
        ========================================================= */}
        <div className="mb-16 w-full">
          <div className="text-left w-full mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3.5 w-full">
            {article.faqs.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden w-full ${isOpen
                    ? 'bg-white border-[#501524]/30 shadow-md ring-1 ring-[#501524]/10'
                    : 'bg-white/80 border-gray-200/90 hover:border-gray-300 shadow-xs'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#501524] transition-colors">
                      {faq.question}
                    </span>

                    {/* Animated Opening and Closing Button with Plus and Cross (✕) */}
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? 'bg-[#501524] text-white rotate-90 shadow-xs'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#501524]/10 group-hover:text-[#501524]'
                        }`}
                    >
                      {isOpen ? (
                        <X size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {/* Expandable Answer Container */}
                  <div
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${isOpen ? 'max-h-96 pb-5 pt-1 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'
                      }`}
                  >
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            6. Privacy, Delivery & Customer Support Guarantee
        ========================================================= */}
        <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden w-full">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-pink-300">
                <Package size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-1">100% Discreet Packaging</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Plain, unbranded opaque flyer with zero intimate labels. Complete privacy guaranteed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-pink-300">
                <Truck size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-1">Cash on Delivery Across Pakistan</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Fast 2-4 working day dispatch to Karachi, Lahore, Islamabad, and all cities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-pink-300">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-1">Confidential Sizing Support</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Confused about cup or band size? Chat with our female stylists on WhatsApp for guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductArticle;
