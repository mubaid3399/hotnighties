import React from 'react';
import asset from '../assets/asset';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const About = () => {
  return (
    <div className="w-full bg-white pb-16">
      {/* =========================================
          Hero Banner
      ========================================== */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={asset.aboutImg} 
          alt="About Hotnighties" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-widest text-center px-4 drop-shadow-md">
            OUR STORY
          </h1>
        </div>
      </div>

      {/* =========================================
          Main Content Section
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#501524]">
              Empowering Women Through Elegance
            </h2>
            
            {/* Decorative Divider */}
            <div className="w-16 h-1 bg-[#501524] rounded-full"></div>
            
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
              At Hotnighties, we believe that true beauty starts from within—and the layer closest to your skin should make you feel nothing short of extraordinary. Founded with a passion for celebrating the female silhouette, we set out to create intimate apparel that bridges the gap between everyday comfort and irresistible allure.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
              We understand that every woman's body is unique. That is why our collections are thoughtfully curated to include inclusive sizing, premium breathable fabrics, and meticulously crafted designs. Whether you're slipping into one of our sensual lace nighties or lounging in our soft, supportive seamless bras, our goal is to empower you to feel confident, beautiful, and completely yourself.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
              Our commitment goes beyond just beautiful lingerie. We are dedicated to providing a seamless, discreet shopping experience with uncompromised quality. Welcome to Hotnighties—where comfort meets seduction.
            </p>
          </div>
          
          {/* Right: Secondary Image Collage */}
          <div className="flex-1 w-full relative max-w-lg lg:max-w-none mx-auto">
             <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={asset.aboutSecondaryImg} 
                  alt="Hotnighties Collection" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Brand color tint over the image to tie it in */}
                <div className="absolute inset-0 bg-[#501524]/10 mix-blend-multiply transition-opacity duration-300 hover:opacity-0"></div>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#501524] rounded-2xl -z-10 opacity-10 hidden sm:block"></div>
             <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#501524] rounded-2xl -z-10 hidden sm:block opacity-50"></div>
          </div>
        </div>
      </section>

      {/* =========================================
          Why Choose Us (Reused from Home)
      ========================================== */}
      {/* Reusing this section on the About page adds incredible value and trust */}
      <div className="mt-8">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;