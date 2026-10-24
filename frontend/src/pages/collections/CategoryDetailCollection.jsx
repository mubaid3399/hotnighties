import React, { useContext, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ShopContext } from '../../context/ShopContext';
import ProductCard from '../../components/product/ProductCard';
import useSEO from '../../utils/useSEO';
import { getCategoryBySlug } from '../../assets/categoriesData';

const CategoryDetailCollection = () => {
  const { categorySlug } = useParams();
  const { products } = useContext(ShopContext);

  const category = useMemo(() => {
    return getCategoryBySlug(categorySlug);
  }, [categorySlug]);

  const categoryTitle = category ? category.title : 'Category Collection';

  useSEO({
    title: `${categoryTitle} Online in Pakistan | Hotnighties`,
    description: category?.description || `Shop ${categoryTitle} in Pakistan with discreet packaging and Cash on Delivery.`,
    canonical: `https://hotnighties.pk/collections/${categorySlug}`,
  });

  // Parent department breadcrumb link based on category group
  const parentGroup = useMemo(() => {
    if (!category) return null;
    switch (category.group) {
      case 'bras':
      case 'panties':
        return { name: 'Ladies Undergarments', path: '/collections/ladies-undergarments' };
      case 'nightwear':
        return { name: 'Ladies Nightwear', path: '/collections/ladies-nightwear' };
      case 'lingerie':
        return { name: 'Sexy Lingerie', path: '/collections/sexy-lingerie' };
      case 'accessories':
        return { name: 'Accessories', path: '/accessories' };
      default:
        return null;
    }
  }, [category]);

  // Filter matching products by keywords & title
  const matchingProducts = useMemo(() => {
    if (!products || !category) return [];
    const keywords = category.keywords || [category.title.toLowerCase()];

    return products.filter((item) => {
      const titleLower = (item.title || '').toLowerCase();
      const typeLower = (item.type || '').toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      const subLower = (item.subcategory || '').toLowerCase();

      return keywords.some(
        (kw) =>
          titleLower.includes(kw) ||
          typeLower.includes(kw) ||
          catLower.includes(kw) ||
          subLower.includes(kw)
      );
    });
  }, [products, category]);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#501524] mb-3">Category Not Found</h1>
        <p className="text-gray-600 mb-8">
          The category you are looking for may have been moved or updated.
        </p>
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#501524] text-white font-medium hover:bg-[#6b1d31] transition-colors"
        >
          <ArrowLeft size={16} /> Return to All Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-[#501524]">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-[#501524]">Collections</Link>
        {parentGroup && (
          <>
            <span>/</span>
            <Link to={parentGroup.path} className="hover:text-[#501524]">{parentGroup.name}</Link>
          </>
        )}
        <span>/</span>
        <span className="text-[#501524] font-medium">{category.title}</span>
      </nav>

      {/* Centered Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#501524] mb-3">
          {category.title}
        </h1>
        {category.description && (
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {category.description}
          </p>
        )}
      </div>

      {/* Section Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">
          ALL {category.title.toUpperCase()}
        </h2>
        <span className="text-sm text-gray-500 font-semibold bg-[#501524]/10 text-[#501524] px-3 py-1 rounded-full">
          {matchingProducts.length} Results
        </span>
      </div>

      {/* Products Grid or Clean Empty State */}
      {matchingProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {matchingProducts.map((item, index) => (
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
        <div className="text-center py-16 bg-gray-50 rounded-2xl max-w-xl mx-auto p-8">
          <p className="text-gray-600 mb-4">
            No products found in this category right now.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#501524] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
          >
            Explore All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailCollection;
