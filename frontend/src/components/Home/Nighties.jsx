import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductCard from '../product/ProductCard'

const Nighties = () => {
  const { products } = useContext(ShopContext)

  // Filter for nighties (Women's Sleepwear)
  const nighties = products 
    ? products.filter(item => item.category === "Women's Sleepwear").slice(0, 10)
    : []

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {nighties.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.subcategory || "Nighties"}
            price={product.discountedPrice}
            oldPrice={product.actualPrice}
          />
        ))}
      </div>
    </div>
  )
}

export default Nighties