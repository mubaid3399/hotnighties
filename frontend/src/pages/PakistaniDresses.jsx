import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle, ShieldCheck, Heart, Layers } from 'lucide-react';
import useSEO from '../utils/useSEO';

const PakistaniDresses = () => {
  useSEO({
    title: 'Pakistani Dresses & Bridal Trousseau | Hotnighties',
    description: 'Explore our exclusive collection of luxury bridal nightwear, silk robes, and traditional Pakistani trousseau sleepwear with discreet delivery.',
    canonical: 'https://hotnighties.pk/pakistani-dresses',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Pakistani Dresses</span>
      </nav>

      {/* Hero Showcase Card */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50/30 rounded-3xl p-8 sm:p-12 md:p-16 border border-pink-100 shadow-xs mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#501524]/10 text-[#501524] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles size={14} /> Bridal & Luxury Loungewear
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#501524] tracking-tight mb-4">
          Pakistani Trousseau & Dresses
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Crafted with exquisite embroidery, plush fabrics, and royal designs. Our Pakistani bridal sleepwear and trousseau gowns bring timeless tradition and modern sensuality together.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20am%20interested%20in%20Pakistani%20Bridal%20Dresses%20and%20Trousseau."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            <MessageCircle size={18} /> Inquire via WhatsApp
          </a>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#501524] hover:bg-[#6b1d31] text-white text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            Browse Full Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Featured Suggestions Grid */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Related Wedding & Bridal Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            to="/collections/wedding-nighty"
            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#501524]/30 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-pink-50 text-[#501524] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="font-bold text-gray-900 text-base group-hover:text-[#501524] transition-colors mb-2">
              Wedding Nighties
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Silky, romantic styles crafted specifically for wedding nights and honeymoons.
            </p>
            <span className="text-xs font-bold text-[#501524] flex items-center gap-1 group-hover:underline">
              View Collection <ArrowRight size={12} />
            </span>
          </Link>

          <Link
            to="/collections/bridal-bra"
            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#501524]/30 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-pink-50 text-[#501524] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart size={28} />
            </div>
            <h3 className="font-bold text-gray-900 text-base group-hover:text-[#501524] transition-colors mb-2">
              Bridal Bras
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Delicate lace, push-up cups, and supportive fancy bras for traditional bridal dresses.
            </p>
            <span className="text-xs font-bold text-[#501524] flex items-center gap-1 group-hover:underline">
              View Collection <ArrowRight size={12} />
            </span>
          </Link>

          <Link
            to="/collections/ladies-gown"
            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#501524]/30 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-pink-50 text-[#501524] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layers size={28} />
            </div>
            <h3 className="font-bold text-gray-900 text-base group-hover:text-[#501524] transition-colors mb-2">
              Ladies Gowns
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Flowing floor-length satin kimonos and robe bundles for sophisticated lounging.
            </p>
            <span className="text-xs font-bold text-[#501524] flex items-center gap-1 group-hover:underline">
              View Collection <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </div>

      {/* Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-8 border-t border-gray-100">
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <ShieldCheck className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">100% Discreet Packaging</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Plain, confidential parcel delivery.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <Heart className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Finest Fabrics</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Premium silk, lace, and breathable cotton.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <Layers className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Nationwide Delivery</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Cash on Delivery all over Pakistan.</p>
        </div>
      </div>
    </div>
  );
};

export default PakistaniDresses;
