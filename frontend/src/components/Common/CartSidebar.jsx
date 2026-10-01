import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { 
    products, 
    cartItems, 
    updateQuantity, 
    updateSize, 
    getCartAmount, 
    isCartOpen, 
    setIsCartOpen,
    currency 
  } = useContext(ShopContext);
  
  const navigate = useNavigate();

  // Helper to check if any item is missing a size
  const hasUnselectedSize = () => {
    for (const itemId in cartItems) {
      if (cartItems[itemId]['unselected']) {
        return true;
      }
    }
    return false;
  };

  const handleCheckout = () => {
    if (hasUnselectedSize()) {
      alert("Please select a size for all items before checking out.");
      return;
    }
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const cartData = [];
  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        cartData.push({
          id: items,
          size: item,
          quantity: cartItems[items][item]
        });
      }
    }
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[100] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 tracking-wide uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-60">
              <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <p className="text-gray-500 font-medium">Your basket is empty</p>
            </div>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find(p => p.id === item.id);
              if (!productData) return null;

              return (
                <div key={index} className="flex gap-4 group">
                  {/* Image */}
                  <div className="w-24 h-32 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
                    <img 
                      src={productData.image} 
                      alt={productData.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 pr-4">{productData.title}</h3>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, 0)}
                          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      </div>
                      <p className="text-sm font-bold text-[#501524] mt-1">{currency}{productData.discountedPrice}</p>
                    </div>

                    <div className="space-y-3">
                      {/* Size Selector (If Unselected) */}
                      {item.size === 'unselected' ? (
                        <div className="flex gap-1.5">
                          {['S', 'M', 'L', 'XL'].map(s => (
                            <button
                              key={s}
                              onClick={() => updateSize(item.id, item.size, s)}
                              className="px-2 py-1 text-xs border border-red-300 text-red-500 rounded hover:bg-red-50 transition-colors cursor-pointer"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500">Size: <span className="font-semibold text-gray-900">{item.size}</span></p>
                      )}

                      {/* Quantity Controller */}
                      <div className="flex items-center border border-gray-200 rounded w-fit">
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >-</button>
                        <span className="w-7 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer (Subtotal & Checkout) */}
        {cartData.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">{currency}{getCartAmount()}</span>
            </div>
            
            {hasUnselectedSize() && (
              <p className="text-xs text-red-500 mb-3 font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Please select sizes for all items to proceed.
              </p>
            )}

            <button 
              onClick={handleCheckout}
              disabled={hasUnselectedSize()}
              className={`w-full py-4 text-sm font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                hasUnselectedSize() 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-[#501524] text-white hover:bg-[#3a0f1a]'
              }`}
            >
              Secure Checkout
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">Shipping & taxes calculated at checkout</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
