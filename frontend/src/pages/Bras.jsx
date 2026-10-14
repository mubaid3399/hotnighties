import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';
import useSEO from '../utils/useSEO';

const Bras = () => {
  useSEO({
    title: 'Bras Collection | Hotnighties',
    description: 'Shop our comfortable and supportive collection of bras.',
    canonical: 'https://hotnighties.pk/bras',
  });

  const { products } = useContext(ShopContext);
  const categoryProducts = products.filter(item => item.type === 'bra');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-4">Bras</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect fit with our wide range of supportive, comfortable, and stylish bras designed for every body type.</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ALL BRAS
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

export default Bras;
