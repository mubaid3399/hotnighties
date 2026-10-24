import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import useSEO from '../utils/useSEO';

const Cart = () => {
  useSEO({
    title: 'Your Shopping Cart | Hotnighties',
    description: 'Review your intimate sleepwear and innerwear items before checking out with 100% discreet delivery and Cash on Delivery.',
    canonical: 'https://hotnighties.pk/cart',
  });

  const { products, cartItems, updateQuantity, getCartAmount, currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartList = [];
  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {
      const qty = cartItems[itemId][size];
      if (qty > 0) {
        const product = (products || []).find((p) => p.id === itemId);
        if (product) {
          cartList.push({
            id: itemId,
            size,
            quantity: qty,
            product,
            price: product.discountedPrice || product.price || 0,
            subtotal: (product.discountedPrice || product.price || 0) * qty,
          });
        }
      }
    }
  }

  const subtotal = getCartAmount();

  return (
    <div className="w-full bg-white pb-20 pt-8 sm:pt-10 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#501524]">Home</Link>
          <span>/</span>
          <span className="text-[#501524] font-medium">Shopping Cart</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">
          Shopping Cart ({cartList.length})
        </h1>

        {cartList.length === 0 ? (
          <div className="text-center py-20 bg-gray-50/50 rounded-3xl border border-gray-100 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-pink-50 text-[#501524] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Looks like you haven&apos;t added any intimate apparel to your bag yet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#501524] hover:bg-[#6b1d31] text-white text-sm font-semibold transition-all shadow-sm"
            >
              Start Shopping <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Cart Items List */}
            <div className="flex-1 divide-y divide-gray-100 border border-gray-200/80 rounded-2xl overflow-hidden bg-white shadow-2xs">
              {cartList.map((item, idx) => (
                <div key={`${item.id}-${item.size}-${idx}`} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Left: Product Thumbnail & Title */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-20 h-24 object-cover rounded-xl border border-gray-100 bg-gray-50 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2">
                        {item.product.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <span>Size: <strong className="text-gray-800 uppercase">{item.size}</strong></span>
                        <span>&bull;</span>
                        <span>Unit: <strong className="text-gray-800">{currency}{item.price}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Quantity Controls & Subtotal */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    
                    {/* Stepper */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="font-black text-[#501524] text-base sm:text-lg min-w-[80px] text-right">
                      {currency}{item.subtotal}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() => updateQuantity(item.id, item.size, 0)}
                      className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-[#FAFAFA] border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-2xs">
                <h2 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">{currency}{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-500 text-xs mt-0.5">Calculated at checkout</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-900 text-base">Estimated Total</span>
                  <span className="text-xl font-black text-[#501524]">{currency}{subtotal}</span>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-3.5 bg-[#501524] hover:bg-[#3a0f1a] text-white rounded-xl font-bold text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>

                <div className="mt-6 pt-5 border-t border-gray-200/80 flex items-center gap-2.5 text-xs text-gray-500">
                  <ShieldCheck size={18} className="text-[#501524] flex-shrink-0" />
                  <span>100% Discreet Packaging & Cash on Delivery available</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;