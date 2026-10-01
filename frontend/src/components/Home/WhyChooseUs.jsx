import React from 'react';
import { Feather, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Feather size={40} strokeWidth={1.5} />,
    title: "Premium Fabrics",
    description: "Experience the ultimate comfort with our carefully selected, ultra-soft, and breathable materials designed for your skin."
  },
  {
    icon: <Truck size={40} strokeWidth={1.5} />,
    title: "Discreet Delivery",
    description: "Fast, reliable, and completely private shipping directly to your doorstep. Your privacy is our top priority."
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    title: "Quality Guarantee",
    description: "Every piece is crafted to perfection, ensuring long-lasting wear, beautiful silhouettes, and a perfect fit."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#fdfafb] py-16 mt-16 border-t border-[#501524]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#501524] uppercase tracking-wider">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#501524] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            We believe in delivering more than just intimate wear. We deliver confidence, unparalleled comfort, and exceptional care.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#501524]/20 cursor-default"
            >
              {/* Icon Container with Hover Animation */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#501524]/10 text-[#501524] mb-6 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#501524] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#501524] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
