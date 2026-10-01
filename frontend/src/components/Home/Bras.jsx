import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductCard from '../product/ProductCard'

const Bras = () => {
  const { products } = useContext(ShopContext)

  // Filter for bras
  // Depending on how asset.js defines it, we'll check type, subcategory, or id
  const bras = products 
    ? products.filter(item => 
        item.type === "bra" || 
        (item.subcategory && item.subcategory.toLowerCase().includes("bra")) ||
        (item.id && item.id.toLowerCase().includes("bra"))
      ).slice(0, 10)
    : []

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {bras.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.discountedPrice || product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Bras
