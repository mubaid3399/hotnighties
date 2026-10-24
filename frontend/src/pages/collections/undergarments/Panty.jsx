import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/ShopContext';
import ProductCard from '../../../components/product/ProductCard';
import useSEO from '../../../utils/useSEO';

const Panty = () => {
  useSEO({
    title: 'Panties Collection | Hotnighties',
    description: 'Cotton panties, seamless briefs, lace thongs, bikini panties, and hipster cuts with discreet delivery.',
    canonical: 'https://hotnighties.pk/collections/ladies-panty',
  });

  const { products } = useContext(ShopContext);
  const pantyProducts = products?.filter(
    (item) =>
      item.type === 'panty' ||
      item.subcategory?.toLowerCase().includes('pantie') ||
      item.subcategory?.toLowerCase().includes('thong') ||
      item.subcategory?.toLowerCase().includes('brief') ||
      item.title?.toLowerCase().includes('pantie') ||
      item.title?.toLowerCase().includes('panty')
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        <span>/</span>
        <Link to="/collections/ladies-undergarments" className="hover:text-[#501524]">Ladies Undergarments</Link>
        <span>/</span>
        <span className="text-[#501524] font-medium">Panties</span>
      </nav>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          Panties Collection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          From invisible seamless thongs to breathable everyday cotton briefs and sultry lace cheekies.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          ALL PANTIES
        </h2>
        <span className="text-sm text-gray-500 font-semibold bg-[#501524]/10 text-[#501524] px-3 py-1 rounded-full">
          {pantyProducts.length} Results
        </span>
      </div>

      {pantyProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {pantyProducts.map((item, index) => (
            <ProductCard
              key={item.id || index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.discountedPrice}
              oldPrice={item.actualPrice}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-pink-50/50 rounded-2xl border border-pink-100">
          <p className="text-lg font-medium text-gray-700 mb-2">No panties found</p>
          <Link
            to="/shop"
            className="inline-block bg-[#501524] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
          >
            Explore All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Panty;
