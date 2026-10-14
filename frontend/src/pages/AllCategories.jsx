import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, ArrowRight, ShieldCheck, Heart, Layers } from 'lucide-react';
import useSEO from '../utils/useSEO';
import { categoriesWithImages, CATEGORY_GROUPS } from '../assets/categoriesData';

const AllCategories = () => {
  useSEO({
    title: 'All Categories & Collections (67) | Hotnighties',
    description: 'Explore our complete catalog of 67 curated categories including bras, bridal nighties, sexy lingerie, silk nightwear, panties, and accessories.',
    canonical: 'https://hotnighties.pk/collections',
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories by group and search query
  const filteredCategories = useMemo(() => {
    return categoriesWithImages.filter((cat) => {
      const matchesGroup = activeFilter === 'all' || cat.group === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cat.title.toLowerCase().includes(q) ||
        (cat.keywords && cat.keywords.some((k) => k.toLowerCase().includes(q)));
      return matchesGroup && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#501524]">Home</Link>
          <span>/</span>
          <span className="text-[#501524] font-medium">Collections</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#501524]/10 text-[#501524] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} /> Complete Store Directory
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#501524] tracking-tight mb-4">
            Explore All Collections
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Browse our full lineup of 67 intimate, sleepwear, and everyday support categories. Click any category to explore all available styles.
          </p>

          {/* Search Input Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 67 categories... (e.g. Bridal, Push-Up, Silk)"
              className="w-full pl-11 pr-4 py-3 bg-white rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#501524]/30 focus:border-[#501524] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORY_GROUPS.map((group) => {
              const isActive = activeFilter === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveFilter(group.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#501524] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {group.label} ({group.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter and Results Status */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200/70">
          <p className="text-sm font-semibold text-gray-700">
            Showing <span className="text-[#501524] font-bold">{filteredCategories.length}</span> of {categoriesWithImages.length} Categories
          </p>
          {activeFilter !== 'all' && (
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#501524] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 67 Categories Grid - Images and Title Only */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl hover:border-[#501524]/20 transition-all duration-300 flex flex-col"
              >
                {/* Category Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#501524]/90 px-3 py-1 rounded-full backdrop-blur-xs shadow-sm">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Category Title Only */}
                <div className="p-3.5 sm:p-4 text-center flex-1 flex items-center justify-center bg-white group-hover:bg-pink-50/30 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#501524] transition-colors text-xs sm:text-sm md:text-base leading-snug line-clamp-2">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-md mx-auto my-12">
            <p className="text-gray-500 text-sm mb-4">
              No categories found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#501524] text-white text-xs font-semibold hover:bg-[#6b1d31] transition-all cursor-pointer"
            >
              View All 67 Categories
            </button>
          </div>
        )}

        {/* Brand Guarantees */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100/70 text-[#501524] flex items-center justify-center mb-3">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">100% Discreet Packaging</h4>
            <p className="text-gray-500 text-xs mt-1">Plain box delivery with complete privacy guaranteed.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100/70 text-[#501524] flex items-center justify-center mb-3">
              <Heart size={24} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Finest Fabrics & Fit</h4>
            <p className="text-gray-500 text-xs mt-1">Soft silks, luxury lace, and skin-friendly breathable cotton.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100/70 text-[#501524] flex items-center justify-center mb-3">
              <Layers size={24} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Nationwide Delivery</h4>
            <p className="text-gray-500 text-xs mt-1">Fast cash on delivery across all cities in Pakistan.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllCategories;
