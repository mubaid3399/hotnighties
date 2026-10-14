import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, FileText, Mail, Phone } from 'lucide-react';
import useSEO from '../utils/useSEO';

const PrivacyPolicy = () => {
  useSEO({
    title: 'Privacy Policy',
    description: 'We are dedicated to safeguarding your personal details and guaranteeing absolute discretion for all your orders across Pakistan.',
    canonical: 'https://hotnighties.pk/privacy',
  });

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20 pt-8 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Clean Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#501524] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
            We are dedicated to safeguarding your personal details and guaranteeing absolute discretion for all your orders.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#501524]/10 text-[#501524] flex items-center justify-center flex-shrink-0">
            <EyeOff size={26} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              Complete Confidentiality Guaranteed
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              At Hotnighties, we understand that shopping for intimate apparel requires trust and privacy. We treat your personal data, order details, and contact numbers with strict confidentiality. We never sell, rent, or trade your personal information.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          
          {/* Information We Collect */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
              When you place an order or interact with our website, we only collect essential details needed to fulfill your order safely:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-5">
              <li><strong>Contact Information:</strong> Full name, active phone / WhatsApp number, and delivery address.</li>
              <li><strong>Order Details:</strong> Products selected, sizes, colors, and order quantity.</li>
              <li><strong>Payment Information:</strong> Preferred payment method (Cash on Delivery or bank transfer receipt for verification). We never store sensitive banking credentials.</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
              Your information is exclusively used for:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-5">
              <li>Processing and delivering your parcel through our trusted courier network.</li>
              <li>Sending order confirmation and delivery status updates via WhatsApp or SMS.</li>
              <li>Providing dedicated customer assistance and handling sizing consultations.</li>
            </ul>
          </div>

          {/* Discreet Shipping Privacy */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#501524]" size={20} />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">3. Discreet Packaging Commitment</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              To protect your privacy at your doorstep, all packages are shipped in generic, opaque courier bags or unbranded brown boxes. External airway bills and shipping stickers do not disclose product names or intimate apparel references.
            </p>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">4. Questions & Privacy Inquiries</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              If you have any questions regarding your privacy, or if you would like your stored contact information removed from our customer database, feel free to reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#501524]" />
                <span className="font-semibold">Email:</span> Help@hotnighties.pk
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#501524]" />
                <span className="font-semibold">WhatsApp:</span> 0306 5363744
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Last updated: October 2026 &bull; Hotnighties Pakistan
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;