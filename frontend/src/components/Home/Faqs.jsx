import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import Tittle from '../Common/Tittle';

const faqsData = [
  {
    question: "Is your packaging discreet?",
    answer: "Absolutely. We understand the need for privacy. All Hotnighties orders are shipped in plain, unbranded packaging with no indication of the contents inside. Your secret is safe with us!"
  },
  {
    question: "How do I know my correct size?",
    answer: "We recommend checking our detailed Size Guide available on every product page. Since intimate wear fits differently depending on the style, we provide exact measurements for bust, waist, and hips to ensure you get the perfect fit."
  },
  {
    question: "What is your return policy for intimate wear?",
    answer: "For hygiene reasons, panties and certain intimate sets cannot be returned if the hygienic seal is broken. However, bras and nighties can be returned within 30 days of delivery, provided the tags are intact and they are completely unworn."
  },
  {
    question: "How should I wash and care for my Hotnighties?",
    answer: "To preserve our delicate fabrics like lace and satin, we strongly recommend hand washing in cold water with a gentle lingerie detergent. If you must use a machine, place the items in a mesh laundry bag on the delicate cycle and always air dry."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide! Shipping costs and delivery times vary depending on your location. You can view the exact shipping rate at checkout before completing your purchase."
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(iconRef.current, {
        rotate: 180,
        color: '#501524',
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        color: '#6b7280', // gray-500
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span className={`text-[15px] sm:text-base font-medium transition-colors duration-300 ${isOpen ? 'text-[#501524]' : 'text-gray-800 group-hover:text-[#501524]'}`}>
          {faq.question}
        </span>
        <div ref={iconRef} className="text-gray-500 ml-4 flex-shrink-0">
          <ChevronDown size={20} strokeWidth={2} />
        </div>
      </button>
      <div 
        ref={contentRef} 
        className="h-0 opacity-0 overflow-hidden"
      >
        <p className="pb-6 text-gray-500 text-sm sm:text-[15px] leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open the first FAQ by default

  const handleToggle = (index) => {
    // If clicking the currently open one, close it. Otherwise open the new one.
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tittle title="Frequently Asked Questions" />
        
        <div className="mt-10 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-4 sm:p-8">
          {faqsData.map((faq, index) => (
            <FaqItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
