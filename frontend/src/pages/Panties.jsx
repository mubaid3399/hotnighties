import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';
import useSEO from '../utils/useSEO';

const Panties = () => {
  useSEO({
    title: 'Panties Collection | Hotnighties',
    description: 'Browse our collection of seamless, lace, and cotton panties.',
    canonical: 'https://hotnighties.pk/panties',
  });

  const { products } = useContext(ShopContext);
  const categoryProducts = products.filter(item => item.type === 'panty');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-4">Panties</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Upgrade your essentials with our premium collection of panties, offering everyday comfort and elegant lace designs.</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ALL PANTIES
        </h2>
        <span className="text-sm text-gray-500">
          {categoryProducts.length} Results
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categoryProducts.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.discountedPrice}
            oldPrice={item.actualPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Panties;
