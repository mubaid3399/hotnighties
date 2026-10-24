import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Layers } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';
import useSEO from '../utils/useSEO';
import { categoriesWithImages } from '../assets/categoriesData';

const Accessories = () => {
  useSEO({
    title: 'Intimate Accessories & Hosiery | Hotnighties',
    description: 'Shop intimate accessories, silicone nipple covers, tights, and socks with 100% discreet packaging across Pakistan.',
    canonical: 'https://hotnighties.pk/accessories',
  });

  const { products } = useContext(ShopContext);
  const accessoryCategories = categoriesWithImages.filter((c) => c.group === 'accessories');

  const accessoryProducts = products?.filter(
    (item) =>
      item.category?.toLowerCase().includes('accessories') ||
      item.subcategory?.toLowerCase().includes('sock') ||
      item.subcategory?.toLowerCase().includes('cover') ||
      item.subcategory?.toLowerCase().includes('tight') ||
      item.title?.toLowerCase().includes('nipple') ||
      item.title?.toLowerCase().includes('tight')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Accessories</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#501524]/10 text-[#501524] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={13} /> Essential Intimates
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#501524] mb-3">
          Accessories & Hosiery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          The finishing touches that complete your look. Browse reusable silicone nipple covers, stretch tights, and comfortable socks.
        </p>
      </div>

      {/* Accessories Categories Grid */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Featured Categories
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            {accessoryCategories.length} Categories
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {accessoryCategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/collections/${sub.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg hover:border-[#501524]/20 hover:-translate-y-1 transition-all duration-300 aspect-square block bg-white"
            >
              <img
                src={sub.image}
                alt={sub.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Product Grid / Notice */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            FEATURED ACCESSORIES
          </h2>
          <p className="text-xs text-gray-500">
            Intimate essentials & comfortable support accessories
          </p>
        </div>
        <Link
          to="/shop"
          className="text-xs sm:text-sm font-semibold text-[#501524] hover:underline"
        >
          View All Products in Shop →
        </Link>
      </div>

      {accessoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {accessoryProducts.slice(0, 8).map((item, index) => (
            <ProductCard
              key={item.id || index}
              id={item.id}
              slug={item.slug}
              image={item.image}
              title={item.title}
              price={item.discountedPrice}
              oldPrice={item.actualPrice}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-xs mb-16 max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-pink-100 text-[#501524] flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            New Accessories In Stock
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Nipple covers, stay-up thigh highs, and seamless footless tights are available upon request through our WhatsApp styling desk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20am%20looking%20for%20intimate%20accessories."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all shadow-sm"
            >
              Inquire on WhatsApp
            </a>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#501524] hover:bg-[#6b1d31] text-white text-sm font-semibold transition-all shadow-sm"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <ShieldCheck className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Discreet Packaging</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Plain outer parcel guaranteed.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <Heart className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Skin Safe Materials</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Hypoallergenic medical grade.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100">
          <Layers className="mx-auto text-[#501524] mb-2" size={24} />
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Cash on Delivery</h4>
          <p className="text-gray-500 text-[11px] mt-0.5">Nationwide delivery in Pakistan.</p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
