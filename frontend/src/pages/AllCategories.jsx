import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, ArrowRight, ShieldCheck, Heart, Layers, X, Flame } from 'lucide-react';
import useSEO from '../utils/useSEO';
import { categoriesWithImages, CATEGORY_GROUPS } from '../assets/categoriesData';

const AllCategories = () => {
  useSEO({
    title: 'Curated Collections & All 67 Categories | Hotnighties',
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

  // Featured departments to highlight
  const featuredDepartments = useMemo(() => {
    return [
      {
        title: 'Sexy Lingerie',
        path: '/collections/sexy-lingerie',
        tag: 'Intimate & Sensual',
        desc: 'Sensual lace babydolls, provocative bodystockings, and luxury bikinis.',
        file: 'Sexy-Lingerie-Online-Shopping-in-Pakistan-2_result_large.webp'
      },
      {
        title: 'Ladies Nightwear',
        path: '/collections/ladies-nightwear',
        tag: 'Silk & Satin Sleepwear',
        desc: 'Bridal nighty sets, flowing silk gowns, relaxed pajamas, and kimonos.',
        file: 'Ladies-Nightwear-Sleepwear-Nighty-Online-Shopping-in-Pakistan_result_large.webp'
      },
      {
        title: 'Ladies Undergarments',
        path: '/collections/ladies-undergarments',
        tag: 'Comfort & Contour Support',
        desc: 'Wireless, push-up, minimizer bras, matching sets, and cotton panties.',
        file: 'Undergarments-NN-02_large.webp'
      }
    ];
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Editorial Banner */}
      <div className="bg-gradient-to-b from-[#501524]/5 via-pink-50/20 to-white pt-8 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#501524] font-semibold">Collections</span>
          </nav>

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
              Curated <span className="">Collections</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Explore our full catalog of 67 intimate, sleepwear, and everyday support collections. Browse by department or find your exact desired style below.
            </p>

            {/* Sleek Search Bar */}
            <div className="max-w-lg mx-auto relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 67 collections (e.g. Bridal, Silk, Push-Up)..."
                className="w-full pl-11 pr-10 py-3.5 bg-white rounded-full text-sm border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#501524]/20 focus:border-[#501524] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-700 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Pills (Clean Wrapping - No Ugly Scrollbar) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1">
              {CATEGORY_GROUPS.map((group) => {
                const isActive = activeFilter === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => setActiveFilter(group.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${isActive
                      ? 'bg-[#501524] text-white shadow-md shadow-[#501524]/25 scale-102 ring-2 ring-[#501524]/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-[#501524] border border-gray-200/90 hover:border-[#501524]/30 shadow-xs'
                      }`}
                  >
                    <span>{group.label}</span>
                    <span
                      className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                      {group.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Featured Flagship Department Hubs (Visible when viewing All or Collections) */}
        {!searchQuery && (activeFilter === 'all' || activeFilter === 'collections') && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Flame className="text-[#501524]" size={20} />
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Flagship Departments
                </h2>
              </div>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Primary Categories
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredDepartments.map((dept) => {
                const match = categoriesWithImages.find((c) => c.title.toLowerCase() === dept.title.toLowerCase()) || {};
                const img = match.image;
                return (
                  <Link
                    key={dept.title}
                    to={dept.path}
                    className="group relative rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-900 flex flex-col justify-end h-72 p-6"
                  >
                    {/* Background Image with Dark Vignette */}
                    {img && (
                      <img
                        src={img}
                        alt={dept.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-70 group-hover:opacity-80"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="inline-block text-[11px] font-bold text-pink-300 uppercase tracking-widest mb-1.5">
                        {dept.tag}
                      </span>
                      <h3 className="text-2xl font-black text-white tracking-tight mb-2 group-hover:text-pink-100 transition-colors">
                        {dept.title}
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                        {dept.desc}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                        Explore Department <ArrowRight size={14} className="text-pink-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Directory Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {activeFilter === 'all' ? 'All Collections Directory' : `${CATEGORY_GROUPS.find(g => g.id === activeFilter)?.label || 'Collections'}`}
            </h2>
            <p className="text-xs text-gray-500">
              Showing <span className="font-bold text-[#501524]">{filteredCategories.length}</span> collections
            </p>
          </div>

          {(activeFilter !== 'all' || searchQuery) && (
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

        {/* 67 Categories Grid - Clean, Large & Professional Image Artwork */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.slug}`}
                className="group relative rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#501524]/20 hover:-translate-y-2 transition-all duration-300 bg-white aspect-square block"
              >
                {/* Category Artwork Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#501524] px-4 py-2 rounded-full shadow-lg">
                    Explore Collection <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-md mx-auto my-12">
            <div className="w-14 h-14 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mx-auto mb-4">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Collections Found</h3>
            <p className="text-gray-500 text-sm mb-6">
              We couldn&apos;t find any collection matching &quot;{searchQuery}&quot;. Try a broader term like &quot;Lace&quot;, &quot;Bra&quot;, or &quot;Nighty&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#501524] text-white text-xs font-semibold hover:bg-[#6b1d31] transition-all cursor-pointer shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Brand Guarantees */}
        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs text-[#501524] flex items-center justify-center mb-3">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">100% Discreet Packaging</h4>
            <p className="text-gray-500 text-xs mt-1">Shipped in plain tamper-evident flyers with total privacy.</p>
          </div>
          <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs text-[#501524] flex items-center justify-center mb-3">
              <Heart size={22} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Finest Fabrics & Fit</h4>
            <p className="text-gray-500 text-xs mt-1">Soft silks, scalloped lace, and breathable contour stretch.</p>
          </div>
          <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs text-[#501524] flex items-center justify-center mb-3">
              <Layers size={22} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Nationwide Delivery</h4>
            <p className="text-gray-500 text-xs mt-1">Fast Cash on Delivery across all cities in Pakistan.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllCategories;
