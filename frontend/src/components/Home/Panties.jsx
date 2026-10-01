import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import ProductCard from '../product/ProductCard'

const Panties = () => {
  const { products } = useContext(ShopContext)

  // Filter for panties
  const panties = products 
    ? products.filter(item => 
        item.type === "panty" || 
        item.type === "panties" ||
        (item.subcategory && (item.subcategory.toLowerCase().includes("panty") || item.subcategory.toLowerCase().includes("panties"))) ||
        (item.id && item.id.toLowerCase().includes("panty"))
      ).slice(0, 10)
    : []

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {panties.map((product) => (
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

export default Panties
