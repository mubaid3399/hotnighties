import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import useSEO from '../utils/useSEO';

const SizeGuide = () => {
  useSEO({
    title: 'Size Guide & Measurement Charts',
    description: 'Find your perfect fit with Hotnighties size charts for sleepwear, nighties, bras, and panties. Easy measurement instructions and WhatsApp sizing help.',
    canonical: 'https://hotnighties.pk/size-guide',
  });

  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  const nightySizes = [
    { size: 'S', bustIn: '32 - 34', waistIn: '25 - 27', hipsIn: '34 - 36', bustCm: '81 - 86', waistCm: '64 - 69', hipsCm: '86 - 91' },
    { size: 'M', bustIn: '34 - 36', waistIn: '28 - 30', hipsIn: '37 - 39', bustCm: '86 - 91', waistCm: '71 - 76', hipsCm: '94 - 99' },
    { size: 'L', bustIn: '36 - 38', waistIn: '30 - 32', hipsIn: '39 - 41', bustCm: '91 - 97', waistCm: '76 - 81', hipsCm: '99 - 104' },
    { size: 'XL', bustIn: '38 - 41', waistIn: '33 - 36', hipsIn: '42 - 44', bustCm: '97 - 104', waistCm: '84 - 91', hipsCm: '107 - 112' },
    { size: 'XXL', bustIn: '41 - 44', waistIn: '36 - 39', hipsIn: '45 - 48', bustCm: '104 - 112', waistCm: '91 - 99', hipsCm: '114 - 122' },
    { size: 'Free Size', bustIn: '32 - 40', waistIn: '26 - 36', hipsIn: '35 - 44', bustCm: '81 - 102', waistCm: '66 - 91', hipsCm: '89 - 112' },
  ];

  const braSizes = [
    { band: '32', underbustIn: '27 - 28', underbustCm: '68 - 72' },
    { band: '34', underbustIn: '29 - 30', underbustCm: '73 - 77' },
    { band: '36', underbustIn: '31 - 32', underbustCm: '78 - 82' },
    { band: '38', underbustIn: '33 - 34', underbustCm: '83 - 87' },
    { band: '40', underbustIn: '35 - 36', underbustCm: '88 - 92' },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20 pt-8 sm:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Clean Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#501524] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Size Guide</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#501524] tracking-tight">
                Size Guide
              </h1>
              <p className="text-gray-600 text-sm mt-1 max-w-xl leading-relaxed">
                Find your perfect comfortable fit. Use our detailed size charts below.
              </p>
            </div>

            {/* Inches / CM Toggle */}
            <div className="flex items-center bg-gray-200/80 p-1 rounded-lg w-fit self-start sm:self-auto">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  unit === 'inches' ? 'bg-[#501524] text-white shadow-xs' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  unit === 'cm' ? 'bg-[#501524] text-white shadow-xs' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Sleepwear & Nighties */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Ruler className="text-[#501524]" size={20} />
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Nighties, Robes &amp; Sleepwear Sizing
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70 text-gray-700 font-semibold">
                  <th className="py-3 px-4 rounded-l-lg">Size</th>
                  <th className="py-3 px-4">Bust ({unit === 'inches' ? 'in' : 'cm'})</th>
                  <th className="py-3 px-4">Waist ({unit === 'inches' ? 'in' : 'cm'})</th>
                  <th className="py-3 px-4 rounded-r-lg">Hips ({unit === 'inches' ? 'in' : 'cm'})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {nightySizes.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-gray-900">{row.size}</td>
                    <td className="py-3.5 px-4">{unit === 'inches' ? row.bustIn : row.bustCm}</td>
                    <td className="py-3.5 px-4">{unit === 'inches' ? row.waistIn : row.waistCm}</td>
                    <td className="py-3.5 px-4">{unit === 'inches' ? row.hipsIn : row.hipsCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            * Most satin chemises and lace baby-dolls feature adjustable back straps and elastic stretch fabrics for versatile fit.
          </p>
        </div>

        {/* Section 2: Bras & Bralettes */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="text-[#501524]" size={20} />
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Bra Band Sizing
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70 text-gray-700 font-semibold">
                  <th className="py-3 px-4 rounded-l-lg">Band Size</th>
                  <th className="py-3 px-4 rounded-r-lg">Underbust Measurement ({unit === 'inches' ? 'in' : 'cm'})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {braSizes.map((row) => (
                  <tr key={row.band} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-gray-900">{row.band}</td>
                    <td className="py-3.5 px-4">{unit === 'inches' ? row.underbustIn : row.underbustCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: How to Measure Tips */}
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200/80 shadow-xs mb-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
            How to Measure Correctly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs sm:text-sm text-gray-600">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">1. Bust</span>
              <p>Measure across the fullest part of your chest with your arms relaxed at your sides.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">2. Waist</span>
              <p>Measure around the natural narrowest part of your waist, keeping the tape comfortably loose.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">3. Hips</span>
              <p>Stand with feet together and measure around the fullest part of your hips and bottom.</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Personal Sizing Assistance Box */}
        <div className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#501524]/10 text-[#501524] flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Unsure about your size?</h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Our female sizing specialists can guide you on WhatsApp for complete peace of mind.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20Can%20you%20help%20me%20choose%20the%20right%20size%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#501524] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#3a0f1a] transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={15} /> WhatsApp Sizing Help
          </a>
        </div>

      </div>
    </div>
  );
};

export default SizeGuide;