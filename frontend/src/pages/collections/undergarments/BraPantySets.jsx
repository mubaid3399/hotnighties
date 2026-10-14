import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/ShopContext';
import ProductCard from '../../../components/product/ProductCard';
import useSEO from '../../../utils/useSEO';

const BraPantySets = () => {
  useSEO({
    title: 'Bra and Panty Sets | Hotnighties',
    description: 'Matching lingerie sets, bra and panty pairs, and intimate co-ord sets.',
    canonical: 'https://hotnighties.pk/collections/bra-panty-sets',
  });

  const { products } = useContext(ShopContext);
  const setProducts = products?.filter(
    (item) => item.title?.toLowerCase().includes('set') && item.category?.toLowerCase().includes('innerwear')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <Link to="/collections/ladies-undergarments" className="hover:text-[#501524]">Ladies Undergarments</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Bra Panty Sets</span>
      </nav>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          Bra & Panty Sets
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Perfect harmony in fit and color. Coordinated matching bra and panty sets crafted from delicate lace and mesh.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ALL SETS
        </h2>
        <span className="text-sm text-gray-500">
          {setProducts.length} Results
        </span>
      </div>

      {setProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {setProducts.map((item, index) => (
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
          <p className="text-lg font-medium text-gray-700 mb-2">New Sets Coming Soon</p>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Browse our bras and panties separately or explore new lingerie arrivals.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/bras"
              className="inline-block bg-[#501524] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
            >
              Shop Bras
            </Link>
            <Link
              to="/panties"
              className="inline-block border border-[#501524] text-[#501524] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#501524] hover:text-white transition-colors"
            >
              Shop Panties
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BraPantySets;
