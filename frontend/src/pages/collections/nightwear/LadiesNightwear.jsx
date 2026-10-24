import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/ShopContext';
import ProductCard from '../../../components/product/ProductCard';
import useSEO from '../../../utils/useSEO';

import { categoriesWithImages } from '../../../assets/categoriesData';

const LadiesNightwear = () => {
  useSEO({
    title: 'Ladies Nightwear Collection | Hotnighties',
    description: 'Shop luxury satin nightwear, silk nighties, gowns, and pajama sets for women.',
    canonical: 'https://hotnighties.pk/collections/ladies-nightwear',
  });

  const { products } = useContext(ShopContext);
  const nightwearCategories = categoriesWithImages.filter((c) => c.group === 'nightwear');

  // Match products from sleepwear category
  const nightwearProducts = products?.filter(
    (item) => item.category?.toLowerCase().includes('sleepwear') || item.type?.toLowerCase().includes('night')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Ladies Nightwear</span>
      </nav>

      {/* Hero Banner */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          Ladies Nightwear
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Experience dreamlike luxury every night with our silky nighties, cozy loungewear sets, and elegant gowns.
        </p>
      </div>

      {/* Nightwear Categories Grid (Images and Titles Only) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Nightwear Categories
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            {nightwearCategories.length} Categories
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6">
          {nightwearCategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/collections/${sub.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg hover:border-[#501524]/20 hover:-translate-y-1 transition-all duration-300 aspect-square block bg-white"
            >
              <img
                src={sub.image}
                alt={sub.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            FEATURED NIGHTWEAR
          </h2>
          <p className="text-xs text-gray-500">
            Top customer favorites & relaxing sleepwear pieces
          </p>
        </div>
        <Link
          to="/shop"
          className="text-xs sm:text-sm font-semibold text-[#501524] hover:underline"
        >
          View All Products in Shop →
        </Link>
      </div>

      {nightwearProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {nightwearProducts.slice(0, 8).map((item, index) => (
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
          <p className="text-lg font-medium text-gray-700 mb-2">No items found</p>
          <Link
            to="/shop"
            className="inline-block bg-[#501524] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
          >
            Explore All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default LadiesNightwear;
