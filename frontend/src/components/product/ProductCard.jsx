import React, { useRef, useContext, useState } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const ProductCard = ({
  id,
  image = 'https://via.placeholder.com/400x500',
  title = 'Product Title',
  price = 0,
}) => {
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const { addToCart } = useContext(ShopContext)
  const [added, setAdded] = useState(false)

  const handleMouseEnter = () => {
    // Only animate if the ref exists
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        autoAlpha: 1, // handles opacity and visibility
        duration: 0.35,
        ease: "power2.out"
      })
    }
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 15,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in"
      })
    }
  }

  // Format price nicely
  const displayPrice = typeof price === 'number' ? price : Number(price) || 0;

  return (
    <div 
      onClick={() => id && navigate(`/product/${id}`)}
      className="flex flex-col group cursor-pointer w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-3 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Quick Add Button (GSAP Animated) */}
        <div 
          ref={buttonRef} 
          className="absolute bottom-4 left-4 right-4 opacity-0 invisible translate-y-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (id) addToCart(id);
              setAdded(true);
              setTimeout(() => setAdded(false), 2000);
            }}
            className={`w-full py-2.5 text-[13px] font-semibold rounded cursor-pointer shadow-lg transition-colors duration-300 ${added ? 'bg-[#501524] text-white' : 'bg-white text-gray-900 hover:bg-[#501524] hover:text-white'}`}
          >
            {added ? "ADDED!" : "QUICK ADD"}
          </button>
        </div>
      </div>

      {/* Details (Clean, Centered) */}
      <div className="text-center px-1">
        <h3 className="text-[12px] sm:text-[13px] text-gray-500 line-clamp-1 leading-snug">
          {title}
        </h3>
        
        <p className="mt-1 text-[13px] sm:text-[14px] font-bold text-gray-800">
          Rs.{displayPrice.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ProductCard