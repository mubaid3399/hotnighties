import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const NewArrivals = () => {
  const { products } = useContext(ShopContext)

  // Grab 10 products for the New Arrivals section
  const newArrivals = products ? products.slice(0, 10) : []

  return (
    <div className="w-full mt-4">
      {/* Scrollable container for image-only cards */}
      <div className=".scrollbar-hide flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
        {newArrivals.map((product) => (
          <div 
            key={product.id} 
            className="snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[240px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[4/5] bg-gray-100 group overflow-hidden">
              <img 
                src={product.image} 
                alt="New Arrival" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrivals