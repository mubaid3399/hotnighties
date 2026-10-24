import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ProductCard from '../product/ProductCard';

const CategoryProductGrid = ({ filterFn, limit = 10 }) => {
  const { products } = useContext(ShopContext);

  const items = products ? products.filter(filterFn).slice(0, limit) : [];

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.discountedPrice || product.price}
            oldPrice={product.actualPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductGrid;
