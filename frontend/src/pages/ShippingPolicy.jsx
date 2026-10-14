import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck, AlertCircle } from 'lucide-react';
import useSEO from '../utils/useSEO';

const ShippingPolicy = () => {
  useSEO({
    title: 'Discreet Shipping & Delivery Policy',
    description: 'Learn about our 100% confidential and discreet delivery guarantee across Pakistan. Plain unbranded parcels, Cash on Delivery, and delivery timelines.',
    canonical: 'https://hotnighties.pk/shipping',
  });

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20 pt-8 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Clean Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Shipping Policy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#501524] tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Reliable, safe, and 100% confidential delivery right to your doorstep anywhere in Pakistan.
          </p>
        </div>

        {/* Discreet Packaging Guarantee Highlight */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#501524]/10 text-[#501524] flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              100% Discreet Packaging Guarantee
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We respect your personal privacy. Every parcel is dispatched in a plain, opaque, tamper-evident courier flyer. There is no mention of "Hotnighties", "lingerie", or "nightwear" on the label. Neither the courier rider nor anyone else will know what is inside.
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Timelines */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">Delivery Timelines</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-900 block mb-1">Karachi</span>
                <p className="text-gray-600">Delivered within <strong>1 to 2 business days</strong> after order confirmation.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-900 block mb-1">Rest of Pakistan</span>
                <p className="text-gray-600">Delivered within <strong>2 to 4 business days</strong> (Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, etc.).</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              * Note: Delays may occasionally occur during public holidays, extreme weather, or regional courier service interruptions.
            </p>
          </div>

          {/* Payment & Charges */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">Shipping Rates & Cash on Delivery</h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#501524] mt-1.5 flex-shrink-0"></span>
                <span><strong>Cash on Delivery (COD):</strong> Available for all cities across Pakistan. Pay cash directly to the rider upon parcel delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#501524] mt-1.5 flex-shrink-0"></span>
                <span><strong>Online Bank Transfer / JazzCash:</strong> Instant electronic payments accepted. Order confirmation is expedited upon sharing receipt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#501524] mt-1.5 flex-shrink-0"></span>
                <span><strong>Standard Delivery Fee:</strong> Flat nominal rate calculated transparently during checkout.</span>
              </li>
            </ul>
          </div>

          {/* Order Confirmation & Tracking */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">Order Confirmation & Tracking</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Once you place an order, our customer representative may contact you via WhatsApp or phone call to verify your address details before dispatch. Once dispatched, you will receive courier tracking information so you can follow your shipment's journey in real-time.
            </p>
            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-amber-700" />
              <span>Please ensure your provided phone number and address are complete and accurate to prevent courier delivery delays.</span>
            </div>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="mt-10 text-center text-xs sm:text-sm text-gray-600">
          Have an urgent delivery inquiry? Reach out directly via WhatsApp at{' '}
          <a href="https://wa.me/923065363744" className="font-semibold text-[#501524] hover:underline">
            0306 5363744
          </a>.
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
