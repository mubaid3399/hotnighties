import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldAlert, CheckCircle2, MessageCircle, AlertTriangle } from 'lucide-react';
import useSEO from '../utils/useSEO';

const ReturnsExchanges = () => {
  useSEO({
    title: 'Returns & Exchanges Policy',
    description: 'Read the Hotnighties intimate apparel hygiene policy and our 48-hour free exchange guarantee for damaged, defective, or incorrect items.',
    canonical: 'https://hotnighties.pk/returns',
  });

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20 pt-8 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Clean Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Returns & Exchanges</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#501524] tracking-tight">
            Returns & Exchanges Policy
          </h1>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Our fair and transparent policy regarding intimate apparel, hygiene standards, and exchange procedures.
          </p>
        </div>

        {/* Hygiene Alert Box */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-amber-200/90 shadow-xs mb-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                Hygiene & Sanitary Standards
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Due to the intimate nature of sleepwear, nighties, bodysuits, and lingerie, strict hygiene regulations apply. We are strictly committed to delivering 100% brand-new, unworn, and sanitized products to all our customers. As such, <strong>items that have been unsealed, worn, washed, or tried on cannot be returned or refunded</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* When We Exchange */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#501524]" size={20} />
              When is an Exchange Accepted?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
              We stand by our quality. We will gladly arrange a free replacement or exchange in the following situations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-900 block mb-1">Damaged or Defective Item</span>
                <p className="text-gray-600">Product has manufacturing tears, broken straps, or defective stitching upon unboxing.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-900 block mb-1">Incorrect Item or Size</span>
                <p className="text-gray-600">You received a different color, size, or style than what was placed in your confirmed order.</p>
              </div>
            </div>
          </div>

          {/* 3 Step Exchange Process */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-6">
              How to Request an Exchange (Within 48 Hours)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-[#501524] text-white flex items-center justify-center font-bold text-xs mb-3">
                  1
                </div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Notify Us</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Contact our WhatsApp support within 48 hours of parcel delivery.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-[#501524] text-white flex items-center justify-center font-bold text-xs mb-3">
                  2
                </div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Send Proof</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Share clear photos/videos of the parcel, delivery slip, and the defect.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-[#501524] text-white flex items-center justify-center font-bold text-xs mb-3">
                  3
                </div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Fast Replacement</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Once verified, our team will dispatch your replacement parcel promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Eligible Items */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-500" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">Non-Eligible for Return or Exchange</h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Items reported after 48 hours of parcel delivery.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Products that have been worn, washed, altered, or have missing price tags.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Change of mind after unsealing intimate apparel.
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Exchange CTA */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Need to initiate an exchange?</h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Message us on WhatsApp with your Order ID and photos.
            </p>
          </div>
          <a
            href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20want%20to%20request%20an%20exchange%20for%20my%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#501524] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#3a0f1a] transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={15} /> Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default ReturnsExchanges;
