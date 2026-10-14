import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/ShopContext';
import ProductCard from '../../../components/product/ProductCard';
import useSEO from '../../../utils/useSEO';

const LegStocking = () => {
  useSEO({
    title: 'Leg Stockings & Thigh Highs | Hotnighties',
    description: 'Sensual thigh high leg stockings, lace tops, stay-ups, and sheer hosiery.',
    canonical: 'https://hotnighties.pk/collections/leg-stocking',
  });

  const { products } = useContext(ShopContext);
  const stockingProducts = products?.filter(
    (item) => item.title?.toLowerCase().includes('leg stocking') || item.title?.toLowerCase().includes('thigh high')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <Link to="/collections/sexy-lingerie" className="hover:text-[#501524]">Sexy Lingerie</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Leg Stocking</span>
      </nav>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          Leg Stockings & Thigh Highs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Elegance from hip to toe. Beautiful sheer, lace-top, and fishnet leg stockings.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          LEG STOCKINGS
        </h2>
        <span className="text-sm text-gray-500">
          {stockingProducts.length} Results
        </span>
      </div>

      {stockingProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {stockingProducts.map((item, index) => (
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
          <p className="text-lg font-medium text-gray-700 mb-2">New Leg Stocking Styles Coming Soon</p>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Pair your look with our panty and lingerie collections in the meantime!
          </p>
          <Link
            to="/panties"
            className="inline-block bg-[#501524] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
          >
            Explore Panties
          </Link>
        </div>
      )}
    </div>
  );
};

export default LegStocking;
