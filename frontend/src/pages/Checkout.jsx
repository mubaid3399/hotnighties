import { useState, useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Truck, 
  CreditCard, 
  Banknote, 
  CheckCircle2, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Gift, 
  Copy, 
  Check, 
  ShoppingBag, 
  Phone, 
  MapPin,
  Package
} from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import { notify } from '../utils/toast';

const CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Abbottabad',
  'Other'
];

const VALID_COUPONS = {
  'WELCOME10': { type: 'percent', value: 10, label: '10% Off Welcome Discount' },
  'HOTVIP': { type: 'percent', value: 15, label: '15% Off VIP Member Discount' },
  'FREESHIP': { type: 'shipping', value: 100, label: 'Free Shipping Discount' },
};

const Checkout = () => {
  const { 
    products, 
    currency, 
    delivery_fee, 
    cartItems, 
    updateQuantity, 
    clearCart,
    addToCart 
  } = useContext(ShopContext);

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: 'Karachi',
    postalCode: '',
    notes: '',
    saveInfo: true,
    subscribeNewsletter: true,
  });

  const [formErrors, setFormErrors] = useState({});
  const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard' | 'express'
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' | 'bank' | 'card'
  const [giftWrapping, setGiftWrapping] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(null);
  const [copiedBankInfo, setCopiedBankInfo] = useState(false);

  // Card details state
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: ''
  });

  // Convert cartItems object to an enriched array
  const cartList = useMemo(() => {
    const list = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const qty = cartItems[itemId][size];
        if (qty > 0) {
          const product = products.find((p) => p.id === itemId);
          if (product) {
            const price = Number(product.discountedPrice || product.price || 0);
            list.push({
              id: itemId,
              size,
              quantity: qty,
              product,
              unitPrice: price,
              subtotal: price * qty,
            });
          }
        }
      }
    }
    return list;
  }, [cartItems, products]);

  // Financial Calculations
  const rawSubtotal = useMemo(() => {
    return cartList.reduce((acc, item) => acc + item.subtotal, 0);
  }, [cartList]);

  // Free shipping threshold at Rs. 3,500
  const isFreeShippingQualified = rawSubtotal >= 3500;
  
  const baseShippingCost = useMemo(() => {
    if (isFreeShippingQualified) return 0;
    if (appliedCoupon?.type === 'shipping') return 0;
    if (shippingMethod === 'express') return 250;
    return delivery_fee || 150;
  }, [isFreeShippingQualified, appliedCoupon, shippingMethod, delivery_fee]);

  // Discount calculation
  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === 'percent') {
      return Math.round((rawSubtotal * appliedCoupon.value) / 100);
    }
    return 0;
  }, [appliedCoupon, rawSubtotal]);

  const giftWrapCost = giftWrapping ? 199 : 0;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + baseShippingCost + giftWrapCost);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
      setCardData(prev => ({ ...prev, cardNumber: formatted }));
      return;
    }
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      let formatted = cleaned;
      if (cleaned.length >= 3) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
      }
      setCardData(prev => ({ ...prev, expiry: formatted }));
      return;
    }
    if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      setCardData(prev => ({ ...prev, cvv: cleaned }));
      return;
    }
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (!cleanCode) return;

    if (VALID_COUPONS[cleanCode]) {
      setAppliedCoupon({
        code: cleanCode,
        ...VALID_COUPONS[cleanCode]
      });
      notify(`Coupon "${cleanCode}" applied!`, 'success');
    } else {
      notify('Invalid promo code. Try "WELCOME10" or "FREESHIP"', 'error');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    notify('Coupon removed', 'remove');
  };

  const copyBankDetails = () => {
    const text = "Bank: Meezan Bank Ltd\nAccount Title: Hotnighties Official\nAccount #: 01020304050607\nIBAN: PK64MEZN0001020304050607\nRaast ID: 03001234567";
    navigator.clipboard.writeText(text);
    setCopiedBankInfo(true);
    notify("Bank details copied to clipboard!", 'success');
    setTimeout(() => setCopiedBankInfo(false), 2500);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errors.phone = 'Please provide a valid phone number (10+ digits)';
    }
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.address.trim()) {
      errors.address = 'Street address is required';
    }
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (paymentMethod === 'card') {
      if (!cardData.cardNumber || cardData.cardNumber.replace(/\s/g, '').length < 16) {
        errors.cardNumber = 'Valid 16-digit card number required';
      }
      if (!cardData.cardHolder.trim()) {
        errors.cardHolder = 'Cardholder name required';
      }
      if (!cardData.expiry || cardData.expiry.length < 5) {
        errors.expiry = 'MM/YY required';
      }
      if (!cardData.cvv || cardData.cvv.length < 3) {
        errors.cvv = 'CVV required';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      notify('Please complete all required fields', 'error');
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderNumber = `HN-${Math.floor(100000 + Math.random() * 900000)}`;
      const completedOrderData = {
        orderId: orderNumber,
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.address}${formData.apartment ? ', ' + formData.apartment : ''}, ${formData.city}`,
        },
        items: cartList,
        pricing: {
          subtotal: rawSubtotal,
          shipping: baseShippingCost,
          discount: discountAmount,
          giftWrap: giftWrapCost,
          total: grandTotal,
          currency,
        },
        paymentMethod,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      };

      try {
        localStorage.setItem('lastOrder', JSON.stringify(completedOrderData));
      } catch (err) {
        console.error(err);
      }

      clearCart();
      setIsSubmitting(false);
      setOrderCompleted(completedOrderData);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      notify('Your order has been placed successfully!', 'success');
    }, 1000);
  };

  // ========================================================
  // 1. ORDER SUCCESS CONFIRMATION VIEW
  // ========================================================
  if (orderCompleted) {
    return (
      <div className="w-full bg-white pb-20 pt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border border-gray-200 rounded p-6 sm:p-10">
            {/* Top Icon & Heading */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 size={36} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Thank You for Your Order!
              </h1>
              <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                We have received your order. It will be dispatched in 100% plain, discreet packaging.
              </p>
            </div>

            {/* Order Reference Box */}
            <div className="bg-gray-50 border border-gray-200 rounded p-4 sm:p-5 mb-8 text-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs text-gray-500 block">Order Number</span>
                  <span className="font-bold text-gray-900">{orderCompleted.orderId}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Date</span>
                  <span className="font-semibold text-gray-800">{orderCompleted.date}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs text-gray-500 block">Payment Method</span>
                  <span className="font-semibold text-[#501524] uppercase">
                    {orderCompleted.paymentMethod === 'cod' ? 'Cash on Delivery' : orderCompleted.paymentMethod === 'bank' ? 'Bank Transfer' : 'Card'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#501524]" /> Delivery Address:
                  </p>
                  <p>{orderCompleted.customer.name}</p>
                  <p>{orderCompleted.customer.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-[#501524]" /> Contact:
                  </p>
                  <p>{orderCompleted.customer.phone}</p>
                  <p>{orderCompleted.customer.email}</p>
                </div>
              </div>
            </div>

            {/* Items Ordered */}
            <div className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                Items Ordered ({orderCompleted.items.length})
              </h2>
              <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
                {orderCompleted.items.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.product.image} 
                        alt={item.product.title} 
                        className="w-12 h-16 object-cover rounded bg-gray-50 border border-gray-100"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">{item.product.title}</p>
                        <p className="text-xs text-gray-500">Size: {item.size} × Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-gray-900">
                      {orderCompleted.pricing.currency}{item.subtotal.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Breakdown */}
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">{orderCompleted.pricing.currency}{orderCompleted.pricing.subtotal.toFixed(2)}</span>
              </div>
              {orderCompleted.pricing.discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Coupon Discount</span>
                  <span>-{orderCompleted.pricing.currency}{orderCompleted.pricing.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-semibold text-gray-900">
                  {orderCompleted.pricing.shipping === 0 ? 'FREE' : `${orderCompleted.pricing.currency}${orderCompleted.pricing.shipping.toFixed(2)}`}
                </span>
              </div>
              {orderCompleted.pricing.giftWrap > 0 && (
                <div className="flex justify-between">
                  <span>Gift Box & Wrapping</span>
                  <span className="font-semibold text-gray-900">{orderCompleted.pricing.currency}{orderCompleted.pricing.giftWrap.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-[#501524] pt-3 border-t border-gray-200">
                <span>Total Paid</span>
                <span>{orderCompleted.pricing.currency}{orderCompleted.pricing.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Discreet Packaging Notice */}
            <div className="p-3.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600 flex items-start gap-2.5 mb-6">
              <Package size={18} className="text-[#501524] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Discreet Packaging Guarantee:</strong> Your parcel will arrive in a plain, opaque box or mailer. There is no mention of intimate apparel on the outside label.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="flex-1 bg-[#501524] hover:bg-[#3a0f1a] text-white text-center py-3.5 font-semibold rounded text-sm transition-colors cursor-pointer"
              >
                Continue Shopping
              </Link>
              <a
                href={`https://wa.me/923065363744?text=Hi%20Hotnighties%2C%20I%20placed%20order%20${orderCompleted.orderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 hover:border-[#501524] hover:text-[#501524] text-gray-700 text-center py-3.5 font-semibold rounded text-sm transition-colors"
              >
                WhatsApp Updates
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ========================================================
  // 2. EMPTY CART VIEW
  // ========================================================
  if (cartList.length === 0) {
    const recommendedProducts = products.slice(0, 4);

    return (
      <div className="w-full bg-white pb-20 pt-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mb-4 text-[#501524]">
            <ShoppingBag size={28} strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            You don't have any items in your cart to checkout.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#501524] hover:bg-[#3a0f1a] text-white px-8 py-3.5 font-semibold rounded text-sm transition-colors cursor-pointer"
          >
            Shop All Collections
          </Link>

          {/* Quick Add Section */}
          {recommendedProducts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-200 text-left">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">
                Featured Products
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recommendedProducts.map((prod) => (
                  <div key={prod.id} className="border border-gray-200 rounded p-3 flex flex-col justify-between">
                    <div>
                      <div className="aspect-[4/5] bg-gray-50 rounded overflow-hidden mb-2">
                        <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-xs text-gray-700 font-medium line-clamp-1">{prod.title}</p>
                      <p className="text-xs font-bold text-[#501524] mt-1">
                        {currency}{(prod.discountedPrice || prod.price).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(prod.id, 'M')}
                      className="mt-3 w-full py-1.5 bg-gray-100 hover:bg-[#501524] hover:text-white text-gray-800 text-xs font-semibold rounded transition-colors cursor-pointer"
                    >
                      + Quick Add (M)
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ========================================================
  // 3. MAIN CHECKOUT WORKFLOW VIEW
  // ========================================================
  return (
    <div className="w-full bg-white pb-20 pt-8 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link to="/" className="hover:text-[#501524]">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#501524]">Shop</Link>
            <span>/</span>
            <span className="text-[#501524] font-medium">Checkout</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Checkout
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <span className="flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1">
                <Lock size={12} className="text-[#501524]" /> 256-Bit SSL Secured
              </span>
              <span className="flex items-center gap-1.5 border border-gray-200 rounded px-2.5 py-1">
                <Package size={12} className="text-[#501524]" /> 100% Discreet Packaging
              </span>
            </div>
          </div>
        </div>

        {/* Free Shipping Progress Alert */}
        {rawSubtotal < 3500 ? (
          <div className="mb-8 border border-gray-200 rounded p-3.5 bg-gray-50 flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2 text-gray-700">
              <Truck size={16} className="text-[#501524] flex-shrink-0" />
              <span>
                Add <strong className="text-[#501524]">{currency}{(3500 - rawSubtotal).toFixed(2)}</strong> more to get <strong>FREE Standard Delivery</strong>!
              </span>
            </div>
            <Link to="/shop" className="font-semibold text-[#501524] hover:underline">
              Continue Shopping &rarr;
            </Link>
          </div>
        ) : (
          <div className="mb-8 border border-emerald-200 rounded p-3.5 bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>You qualify for <strong>FREE Delivery</strong> on this order!</span>
          </div>
        )}

        {/* Two-Column Checkout Form */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================
              LEFT COLUMN: CONTACT, ADDRESS & PAYMENT (7 COLS)
          ======================================================== */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Contact Information */}
            <div className="border border-gray-200 rounded p-6">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-4">
                1. Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="checkout-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="checkout-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sara@example.com"
                    className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors`}
                  />
                  {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="checkout-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0300 1234567"
                    className={`w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors`}
                  />
                  <p className="text-xs text-gray-400 mt-1">For delivery confirmation and rider contact.</p>
                  {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs text-gray-600">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#501524] focus:ring-[#501524]"
                    />
                    <span>Email me special offers, secret discounts, and new arrivals.</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div className="border border-gray-200 rounded p-6">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-4">
                2. Shipping Address
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkout-firstname" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="checkout-firstname"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className={`w-full border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors`}
                    />
                    {formErrors.firstName && <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="checkout-lastname" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="checkout-lastname"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className={`w-full border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors`}
                    />
                    {formErrors.lastName && <p className="text-xs text-red-500 mt-1">{formErrors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address & House / Flat # *
                  </label>
                  <input
                    type="text"
                    id="checkout-address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House/Apartment #, Street, Block, Area"
                    className={`w-full border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors`}
                  />
                  {formErrors.address && <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkout-city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <select
                      id="checkout-city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors bg-white cursor-pointer"
                    >
                      {CITIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="checkout-postal" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code (Optional)
                    </label>
                    <input
                      type="text"
                      id="checkout-postal"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="e.g. 75500"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    id="checkout-notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Call before delivery, or leave with front desk."
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. Shipping Method */}
            <div className="border border-gray-200 rounded p-6">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-4">
                3. Delivery Method
              </h2>

              <div className="space-y-3">
                {/* Standard Shipping */}
                <label 
                  className={`flex items-center justify-between p-3.5 rounded border cursor-pointer transition-colors ${
                    shippingMethod === 'standard' 
                      ? 'border-[#501524] bg-[#501524]/5' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="w-4 h-4 text-[#501524] focus:ring-[#501524]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Standard Delivery (Discreet Flyer)</p>
                      <p className="text-xs text-gray-500">2 - 4 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {isFreeShippingQualified || appliedCoupon?.type === 'shipping' ? (
                      <span className="text-emerald-600 font-bold uppercase">Free</span>
                    ) : (
                      `${currency}${(delivery_fee || 150).toFixed(2)}`
                    )}
                  </span>
                </label>

                {/* Priority Express Shipping */}
                <label 
                  className={`flex items-center justify-between p-3.5 rounded border cursor-pointer transition-colors ${
                    shippingMethod === 'express' 
                      ? 'border-[#501524] bg-[#501524]/5' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="w-4 h-4 text-[#501524] focus:ring-[#501524]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Priority Express Air</p>
                      <p className="text-xs text-gray-500">1 - 2 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{currency}250.00</span>
                </label>
              </div>

              {/* Gift Wrap Addon */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <label 
                  className={`flex items-start justify-between p-3.5 rounded border cursor-pointer transition-colors ${
                    giftWrapping ? 'border-[#501524] bg-[#501524]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={giftWrapping}
                      onChange={(e) => setGiftWrapping(e.target.checked)}
                      className="w-4 h-4 text-[#501524] focus:ring-[#501524] mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                        <Gift size={14} className="text-[#501524]" />
                        Luxury Gift Box & Scented Tissue Wrap
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Includes matte gift box, burgundy ribbon, and an unmarked confidential package.
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#501524]">+{currency}199.00</span>
                </label>
              </div>
            </div>

            {/* 4. Payment Method */}
            <div className="border border-gray-200 rounded p-6">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-4">
                4. Payment Method
              </h2>

              <div className="space-y-3">
                {/* Cash On Delivery (COD) */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded border cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'border-[#501524] bg-[#501524]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="w-4 h-4 text-[#501524] focus:ring-[#501524]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <Banknote size={16} className="text-[#501524]" />
                          Cash on Delivery (COD)
                        </p>
                        <p className="text-xs text-gray-500">Pay cash upon parcel arrival at your doorstep</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Standard
                    </span>
                  </div>

                  {paymentMethod === 'cod' && (
                    <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 space-y-1">
                      <p>• Please have the exact payment ready for the delivery rider.</p>
                      <p>• No advance deposit is required.</p>
                    </div>
                  )}
                </div>

                {/* Bank Transfer / Raast / EasyPaisa */}
                <div 
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-3.5 rounded border cursor-pointer transition-colors ${
                    paymentMethod === 'bank' ? 'border-[#501524] bg-[#501524]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="w-4 h-4 text-[#501524] focus:ring-[#501524]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Direct Bank Transfer / Raast / EasyPaisa
                      </p>
                      <p className="text-xs text-gray-500">Meezan Bank, EasyPaisa, JazzCash, Raast Pay</p>
                    </div>
                  </div>

                  {paymentMethod === 'bank' && (
                    <div className="mt-3 pt-3 border-t border-gray-200 bg-white p-3 rounded text-xs space-y-2">
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200">
                        <div className="space-y-0.5">
                          <p className="text-gray-500">Bank: <strong className="text-gray-900">Meezan Bank Ltd</strong></p>
                          <p className="text-gray-500">Title: <strong className="text-gray-900">Hotnighties Official</strong></p>
                          <p className="text-gray-500">IBAN: <strong className="text-gray-900 font-mono">PK64MEZN0001020304050607</strong></p>
                          <p className="text-gray-500">Raast ID: <strong className="text-gray-900 font-mono">03001234567</strong></p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyBankDetails();
                          }}
                          className="flex items-center gap-1 px-2.5 py-1.5 bg-[#501524] text-white rounded text-xs font-semibold hover:bg-[#3a0f1a] transition-colors cursor-pointer"
                        >
                          {copiedBankInfo ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedBankInfo ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="text-gray-500">
                        Transfer the grand total and share the screenshot via WhatsApp at{' '}
                        <a
                          href="https://wa.me/923065363744?text=Hi%20Hotnighties%2C%20here%20is%20my%20bank%20transfer%20receipt"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-[#501524] hover:text-[#3a0f1a]"
                        >
                          0306 5363744
                        </a>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Credit / Debit Card */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded border cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-[#501524] bg-[#501524]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="w-4 h-4 text-[#501524] focus:ring-[#501524]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <CreditCard size={16} className="text-[#501524]" />
                          Credit / Debit Card
                        </p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, UnionPay</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-[10px] font-semibold text-gray-500">
                      <span className="border border-gray-200 px-1 rounded">VISA</span>
                      <span className="border border-gray-200 px-1 rounded">MC</span>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="mt-3 pt-3 border-t border-gray-200 bg-white p-3 rounded space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={cardData.cardHolder}
                          onChange={handleCardInputChange}
                          placeholder="Name as printed on card"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524]"
                        />
                        {formErrors.cardHolder && <p className="text-xs text-red-500 mt-1">{formErrors.cardHolder}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={cardData.cardNumber}
                          onChange={handleCardInputChange}
                          placeholder="0000 0000 0000 0000"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#501524]"
                        />
                        {formErrors.cardNumber && <p className="text-xs text-red-500 mt-1">{formErrors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={cardData.expiry}
                            onChange={handleCardInputChange}
                            placeholder="MM/YY"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#501524]"
                          />
                          {formErrors.expiry && <p className="text-xs text-red-500 mt-1">{formErrors.expiry}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="password"
                            name="cvv"
                            value={cardData.cvv}
                            onChange={handleCardInputChange}
                            placeholder="•••"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#501524]"
                          />
                          {formErrors.cvv && <p className="text-xs text-red-500 mt-1">{formErrors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>


          {/* ========================================================
              RIGHT COLUMN: ORDER SUMMARY & CHECKOUT BUTTON (5 COLS)
          ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            <div className="border border-gray-200 rounded p-6 bg-white">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                  Order Summary
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  {cartList.reduce((acc, it) => acc + it.quantity, 0)} Items
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto pr-1 my-3">
                {cartList.map((item, idx) => (
                  <div key={`${item.id}-${item.size}-${idx}`} className="py-3 flex gap-3">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      className="w-14 h-18 object-cover rounded bg-gray-50 border border-gray-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1">
                          {item.product.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Size: <span className="font-semibold text-gray-800">{item.size}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-200 rounded">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                          >
                            <Minus size={11} />
                          </button>
                          <span className="px-2 text-xs font-semibold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
                          >
                            <Plus size={11} />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-gray-900">
                            {currency}{item.subtotal.toFixed(2)}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.size, 0)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="pt-3 border-t border-gray-200">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-2.5 rounded text-xs text-emerald-800">
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-emerald-600" />
                      <div>
                        <p className="font-bold">{appliedCoupon.code}</p>
                        <p className="text-[11px] text-emerald-700">{appliedCoupon.label}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-xs font-semibold text-red-500 hover:text-red-700 underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Coupon code"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-xs font-medium uppercase tracking-wider focus:outline-none focus:border-[#501524]"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="bg-gray-900 hover:bg-[#501524] text-white px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Apply
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Available: <strong className="text-gray-600">WELCOME10</strong> (10% off) or <strong className="text-gray-600">FREESHIP</strong>
                    </p>
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">{currency}{rawSubtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount</span>
                    <span>-{currency}{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-semibold text-gray-900">
                    {baseShippingCost === 0 ? (
                      <span className="text-emerald-600 font-bold uppercase">Free</span>
                    ) : (
                      `${currency}${baseShippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                {giftWrapping && (
                  <div className="flex justify-between">
                    <span>Gift Packaging</span>
                    <span className="font-semibold text-gray-900">+{currency}{giftWrapCost.toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-gray-200 flex items-baseline justify-between">
                  <span className="text-base font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-[#501524]">
                    {currency}{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Place Order CTA */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#501524] hover:bg-[#3a0f1a] text-white py-3.5 px-6 font-semibold rounded text-sm tracking-wide transition-colors cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? 'Processing Order...' : `Place Order • ${currency}${grandTotal.toFixed(2)}`}
                </button>
              </div>

              {/* Discreet Guarantee */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-500 text-center">
                <Package size={13} className="text-[#501524]" />
                <span>100% Plain Unbranded Packaging</span>
              </div>

            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Checkout;
