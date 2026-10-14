import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import useSEO from '../utils/useSEO';

const FAQ = () => {
  useSEO({
    title: 'Frequently Asked Questions',
    description: 'Find answers to frequently asked questions about Hotnighties discreet packaging, courier delivery times, Cash on Delivery, sizing, and exchanges in Pakistan.',
    canonical: 'https://hotnighties.pk/faq',
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'orders', label: 'Orders & Delivery', icon: Truck },
    { id: 'discreet', label: 'Discreet Packaging', icon: ShieldCheck },
    { id: 'returns', label: 'Returns & Exchanges', icon: RefreshCw },
  ];

  const faqs = [
    {
      category: 'discreet',
      question: 'Is your packaging 100% discreet and private?',
      answer: 'Yes, absolutely. We prioritize your privacy above all else. All orders are packed in completely plain, unbranded boxes or tamper-evident courier flyer bags with no product descriptions or lingerie branding on the exterior. The delivery rider will not know what is inside.'
    },
    {
      category: 'orders',
      question: 'How long will delivery take?',
      answer: 'For Karachi deliveries, orders typically arrive within 1 to 2 business days. For other cities across Pakistan (Lahore, Islamabad, Rawalpindi, Peshawar, Faisalabad, etc.), delivery takes 2 to 4 business days via reliable courier partners.'
    },
    {
      category: 'orders',
      question: 'Do you offer Cash on Delivery (COD)?',
      answer: 'Yes, Cash on Delivery (COD) is available for all destinations across Pakistan. You can pay the courier rider in cash once your parcel arrives.'
    },
    {
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'Simply browse our collections, select your desired size and color, click "Add to Cart", and proceed to Checkout. You can place your order through the website checkout or instantly confirm via WhatsApp.'
    },
    {
      category: 'returns',
      question: 'Can I return or exchange intimate sleepwear?',
      answer: 'For hygiene and health safety reasons, intimate apparel, panties, and worn nighties cannot be returned once opened or tried on. However, if you received a defective, damaged, or incorrect item, please notify us within 48 hours of delivery and we will exchange it immediately.'
    },
    {
      category: 'returns',
      question: 'What if I received a damaged or wrong product?',
      answer: 'We inspect every item before dispatch. In the rare event you receive a damaged or incorrect product, contact us on WhatsApp with photos within 48 hours of receiving the parcel, and our team will arrange a free replacement.'
    },
    {
      category: 'orders',
      question: 'How do I choose the correct size?',
      answer: 'Each product page includes detailed size specifications, fabric elasticity details, and measurements. If you are unsure between two sizes, feel free to message our customer care team on WhatsApp (0306 5363744) for personalized sizing advice.'
    },
    {
      category: 'discreet',
      question: 'What name will appear on the delivery label?',
      answer: 'The parcel will only show standard logistical sender details without mentioning "Hotnighties" or any intimate apparel keywords, ensuring total confidentiality from dispatch to your doorstep.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20 pt-8 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Clean Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">FAQ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#501524] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
            Find quick answers to common questions about our discreet shipping, order tracking, sizing, and store policies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-2xs border border-gray-200/70 p-2 flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#501524] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all duration-200 hover:border-gray-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#501524] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown size={15} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Box */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#501524]/10 text-[#501524] flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Still have questions?</h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Our support team is available on WhatsApp to assist you immediately.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#501524] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#3a0f1a] transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={15} /> Chat with Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
