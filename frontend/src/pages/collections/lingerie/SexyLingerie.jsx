import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/ShopContext';
import ProductCard from '../../../components/product/ProductCard';
import useSEO from '../../../utils/useSEO';

import { categoriesWithImages } from '../../../assets/categoriesData';

const SexyLingerie = () => {
  useSEO({
    title: 'Sexy Lingerie Collection | Hotnighties',
    description: 'Explore our sensual, seductive, and elegant sexy lingerie collection.',
    canonical: 'https://hotnighties.pk/collections/sexy-lingerie',
  });

  const { products } = useContext(ShopContext);
  const lingerieCategories = categoriesWithImages.filter((c) => c.group === 'lingerie');

  // Match products belonging to lingerie or sleepwear
  const categoryProducts = products?.filter(
    (item) => item.category?.toLowerCase().includes('lingerie') || item.type?.toLowerCase().includes('lingerie')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Sexy Lingerie</span>
      </nav>

      {/* Hero Banner */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          Sexy Lingerie
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Discover sensual, alluring, and exquisitely crafted lingerie designed to enhance your confidence and celebrate feminine beauty.
        </p>
      </div>

      {/* Lingerie Categories Grid (Images and Titles Only) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Lingerie Subcategories
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            {lingerieCategories.length} Categories
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {lingerieCategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/collections/${sub.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg hover:border-[#501524]/20 transition-all duration-300 flex flex-col text-center"
            >
              <div className="w-full aspect-square overflow-hidden bg-gray-50">
                <img
                  src={sub.image}
                  alt={sub.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <div className="p-2 sm:p-2.5 flex-1 flex items-center justify-center">
                <h3 className="text-xs font-bold text-gray-800 group-hover:text-[#501524] transition-colors line-clamp-1">
                  {sub.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Product Grid or Placeholder */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ALL LINGERIE PIECES
        </h2>
        <span className="text-sm text-gray-500">
          {categoryProducts.length} Results
        </span>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryProducts.map((item, index) => (
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
        <div className="text-center py-16 bg-pink-50/50 rounded-2xl border border-pink-100">
          <p className="text-lg font-medium text-gray-700 mb-2">Curating New Arrivals</p>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Our latest sexy lingerie styles are currently being photographed. Check out our subcategories or browse all nighties!
          </p>
          <Link
            to="/nighties"
            className="inline-block bg-[#501524] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
          >
            Explore Nighties & Sleepwear
          </Link>
        </div>
      )}
    </div>
  );
};

export default SexyLingerie;
