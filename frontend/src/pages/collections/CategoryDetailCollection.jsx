import React, { useContext, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MessageCircle, ShieldCheck, Heart, Layers } from 'lucide-react';
import { ShopContext } from '../../context/ShopContext';
import ProductCard from '../../components/product/ProductCard';
import useSEO from '../../utils/useSEO';
import { getCategoryBySlug, categoriesWithImages } from '../../assets/categoriesData';

const CategoryDetailCollection = () => {
  const { categorySlug } = useParams();
  const { products } = useContext(ShopContext);

  const category = useMemo(() => {
    return getCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const categoryTitle = category ? category.title : 'Category Collection';

  useSEO({
    title: `${categoryTitle} Online in Pakistan | Hotnighties`,
    description: category?.description || `Shop ${categoryTitle} in Pakistan with discreet packaging and Cash on Delivery.`,
    canonical: `https://hotnighties.pk/collections/${categorySlug}`,
  });

  // Filter matching products by keywords & title
  const matchingProducts = useMemo(() => {
    if (!products || !category) return [];
    const keywords = category.keywords || [category.title.toLowerCase()];

    return products.filter((item) => {
      const titleLower = (item.title || '').toLowerCase();
      const typeLower = (item.type || '').toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      const subLower = (item.subcategory || '').toLowerCase();

      // Check if any keyword matches
      return keywords.some(
        (kw) =>
          titleLower.includes(kw) ||
          typeLower.includes(kw) ||
          catLower.includes(kw) ||
          subLower.includes(kw)
      );
    });
  }, [products, category]);

  // Related categories in the same group
  const relatedCategories = useMemo(() => {
    if (!category) return [];
    return categoriesWithImages
      .filter((c) => c.group === category.group && c.id !== category.id)
      .slice(0, 6);
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#501524] mb-3">Category Not Found</h1>
        <p className="text-gray-600 mb-8">
          The category you are looking for may have been moved or updated.
        </p>
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#501524] text-white font-medium hover:bg-[#6b1d31] transition-colors"
        >
          <ArrowLeft size={16} /> Return to All Categories
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Hotnighties! I am interested in ${category.title} collection. Do you have sizes or latest models available?`
  );
  const whatsappUrl = `https://wa.me/923198654877?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gray-50/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#501524]">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
          <span>/</span>
          <span className="text-[#501524] font-medium">{category.title}</span>
        </nav>

        {/* Hero Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row items-center gap-8">
          {/* Category Square Artwork */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#501524]/10 text-[#501524] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} /> {category.group.toUpperCase()} COLLECTION
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              {category.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              {category.description}
            </p>

            {/* Quick Guarantees & Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <MessageCircle size={16} /> Inquire via WhatsApp
              </a>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold transition-all"
              >
                <ArrowLeft size={14} /> All 67 Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              {category.title} Items
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Browse curated pieces available for order with 100% discreet delivery
            </p>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#501524] bg-[#501524]/10 px-3 py-1 rounded-full">
            {matchingProducts.length} Results
          </span>
        </div>

        {/* Products Grid or Empty State */}
        {matchingProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {matchingProducts.map((item, index) => (
              <ProductCard
                key={item.id || index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.discountedPrice}
                oldPrice={item.actualPrice}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm mb-16 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mx-auto mb-4">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Fresh {category.title} Pieces Coming In
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              New arrivals for this specific collection are being updated in our inventory. Contact our private styling desk on WhatsApp for instant catalogs, sizes, and custom orders.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle size={18} /> Request {category.title} on WhatsApp
              </a>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#501524] hover:bg-[#6b1d31] text-white text-sm font-semibold shadow-sm transition-all"
              >
                Browse Full Catalog
              </Link>
            </div>
          </div>
        )}

        {/* Related Categories Strip */}
        {relatedCategories.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
                More in {category.group.toUpperCase()}
              </h3>
              <Link
                to="/collections"
                className="text-xs sm:text-sm font-semibold text-[#501524] hover:underline"
              >
                View All Categories →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/collections/${rel.slug}`}
                  className="group bg-white rounded-2xl p-3 border border-gray-100 hover:border-[#501524]/20 hover:shadow-md transition-all text-center flex flex-col items-center"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-2 bg-gray-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-800 group-hover:text-[#501524] line-clamp-1">
                    {rel.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Guarantees */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mb-3">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">100% Discreet Packaging</h4>
            <p className="text-gray-500 text-xs mt-1">Plain box delivery with complete privacy guaranteed.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mb-3">
              <Heart size={24} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm">Finest Fabrics & Fit</h4>
            <p className="text-gray-500 text-xs mt-1">Soft silks, luxury lace, and skin-friendly breathable cotton.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mb-3">
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

export default CategoryDetailCollection;
