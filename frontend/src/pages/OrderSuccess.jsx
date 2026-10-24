import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MapPin, ShoppingBag, Package, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import useSEO from '../utils/useSEO';

const OrderSuccess = () => {
  useSEO({
    title: 'Order Confirmed | Hotnighties',
    description: 'Thank you for your order! Your parcel will be shipped in 100% plain and discreet packaging.',
    canonical: 'https://hotnighties.pk/order-success',
  });

  const location = useLocation();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // 1. Try order from location state (passed by checkout navigate)
    if (location.state?.order) {
      setOrder(location.state.order);
      return;
    }

    // 2. Try order from localStorage
    try {
      const saved = localStorage.getItem('lastOrder');
      if (saved) {
        setOrder(JSON.parse(saved));
      }
    } catch {
      // ignore parsing error
    }
  }, [location.state]);

  return (
    <div className="w-full bg-white pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <CheckCircle2 size={36} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Thank You for Your Order!
            </h1>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              We have received your order. It will be dispatched in <strong>100% plain, discreet packaging</strong> with zero external branding.
            </p>
          </div>

          {order ? (
            <div>
              {/* Order Meta Bar */}
              <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 sm:p-5 mb-8 text-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <span className="text-xs text-gray-500 block">Order Number</span>
                    <span className="font-bold text-[#501524]">{order.orderId}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Order Date</span>
                    <span className="font-semibold text-gray-800">{order.date || 'Today'}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-xs text-gray-500 block">Payment Method</span>
                    <span className="font-semibold text-gray-900 uppercase">
                      {order.paymentMethod === 'cod'
                        ? 'Cash on Delivery'
                        : order.paymentMethod === 'bank'
                        ? 'Bank Transfer'
                        : 'Credit / Debit Card'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-gray-600">
                  <div>
                    <p className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#501524]" /> Delivery Address:
                    </p>
                    <p>{order.customer?.name}</p>
                    <p>{order.customer?.address}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                      <Phone size={14} className="text-[#501524]" /> Contact Information:
                    </p>
                    <p>Phone: {order.customer?.phone}</p>
                    <p>Email: {order.customer?.email}</p>
                  </div>
                </div>
              </div>

              {/* Items Summary */}
              {order.items && order.items.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Purchased Items ({order.items.length})
                  </h3>
                  <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 flex items-center justify-between text-xs sm:text-sm bg-white">
                        <div className="flex items-center gap-3">
                          {item.product?.image && (
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="w-12 h-12 object-cover rounded-lg border border-gray-100"
                            />
                          )}
                          <div>
                            <p className="font-bold text-gray-900 line-clamp-1">{item.product?.title || 'Product'}</p>
                            <span className="text-gray-500">Size: {item.size} &bull; Qty: {item.quantity}</span>
                          </div>
                        </div>
                        <span className="font-bold text-gray-900">
                          Rs.{item.subtotal || item.unitPrice * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Financial Total */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-2xl flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-700">Total Amount Payable</span>
                    <span className="text-lg font-black text-[#501524]">
                      Rs.{order.pricing?.total || order.total || '0'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500 text-sm mb-4">
                Your order is confirmed. A customer representative will verify your order details shortly via WhatsApp.
              </p>
            </div>
          )}

          {/* Discreet Guarantee */}
          <div className="bg-pink-50/60 border border-pink-100 rounded-2xl p-4 flex items-center gap-3.5 text-xs sm:text-sm text-gray-700 mb-8">
            <ShieldCheck size={24} className="text-[#501524] flex-shrink-0" />
            <span>
              <strong>Zero-Brand Outer Box:</strong> The courier rider and exterior parcel label will only show logistic routing details, without any intimate wear references.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/shop"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#501524] text-white text-xs sm:text-sm font-semibold hover:bg-[#6b1d31] transition-all text-center shadow-sm"
            >
              Continue Shopping
            </Link>
            <a
              href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20just%20placed%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-all text-center shadow-sm flex items-center justify-center gap-2"
            >
              <Phone size={15} /> WhatsApp Order Support
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;