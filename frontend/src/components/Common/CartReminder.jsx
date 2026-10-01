import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { gsap } from 'gsap';

const CartReminder = () => {
  const { cartItems, products, isCartOpen, setIsCartOpen } = useContext(ShopContext);
  const location = useLocation();
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const cartItemIds = Object.keys(cartItems);
  const hasItems = cartItemIds.length > 0;
  // Don't show if they are on checkout, or if the cart sidebar is currently open
  const isVisible = hasItems && !isCartOpen && location.pathname !== '/checkout';

  // GSAP Spring Animation every 2 seconds (Left-Right Wiggle)
  useEffect(() => {
    let interval;
    if (isVisible && buttonRef.current) {
      interval = setInterval(() => {
        gsap.fromTo(buttonRef.current, 
          { x: -15 },
          { x: 0, duration: 1, ease: "elastic.out(1.5, 0.2)" }
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  // Entrance / Exit animation for the reminder itself
  useEffect(() => {
    if (isVisible && containerRef.current) {
      gsap.to(containerRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    } else if (containerRef.current) {
      gsap.to(containerRef.current, { y: 100, opacity: 0, duration: 0.5, ease: "power3.in" });
    }
  }, [isVisible]);

  if (!hasItems) return null;

  // Get the last item's ID (the keys might not guarantee order, but it works for picking one)
  const lastAddedId = cartItemIds[cartItemIds.length - 1];
  const displayProduct = products.find(p => p.id === lastAddedId);

  if (!displayProduct) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[45] translate-y-[100px] opacity-0 pointer-events-none"
    >
      {/* Wrapper to re-enable pointer events only on the actual element */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-md p-1.5 pr-2 rounded-full shadow-[0_10px_40px_rgb(0,0,0,0.15)] border border-gray-200 w-[92vw] max-w-[380px]">
        {/* Product Image */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
          <img src={displayProduct.image} alt="Cart item" className="w-full h-full object-cover" />
        </div>
        
        {/* Product Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
          <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider">In your cart</p>
          <p className="text-[11px] sm:text-[13px] font-semibold text-gray-900 truncate pr-1">
            {displayProduct.title}
          </p>
        </div>

        {/* Checkout Action */}
        <button
          ref={buttonRef}
          onClick={() => setIsCartOpen(true)}
          className="flex-shrink-0 bg-[#501524] text-white text-[11px] sm:text-xs font-bold px-4 py-2 sm:py-2.5 rounded-full hover:bg-[#3a0f1a] transition-colors cursor-pointer shadow-lg"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartReminder;
