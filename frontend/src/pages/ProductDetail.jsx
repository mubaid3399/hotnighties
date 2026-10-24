import { useContext, useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';
import ProductArticle from '../components/product/ProductArticle';
import { getProductArticle } from '../data/articles';
import useSEO from '../utils/useSEO';

const ProductDetail = () => {
  const { id: slugOrId } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);
  
  const [size, setSize] = useState('M');

  const productData = useMemo(() => {
    return (products || []).find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
  }, [products, slugOrId]);

  // If user visits via raw ID (e.g., /product/newProduct18), seamlessly replace URL with SEO-friendly slug
  useEffect(() => {
    if (productData && productData.slug && slugOrId !== productData.slug) {
      navigate(`/product/${productData.slug}`, { replace: true });
    }
  }, [productData, slugOrId, navigate]);

  const article = useMemo(() => {
    return productData ? getProductArticle(productData) : null;
  }, [productData]);

  const relatedProducts = useMemo(() => {
    if (!productData) return [];
    return (products || [])
      .filter((p) => p.subcategory === productData.subcategory && p.id !== productData.id)
      .slice(0, 4);
  }, [products, productData]);

  // Generate Product and FAQPage JSON-LD Schema for Google Search Rich Results
  const seoSchema = useMemo(() => {
    if (!productData) return null;

    const canonicalSlug = productData.slug || productData.id;

    const productSchema = {
      '@type': 'Product',
      name: productData.title,
      description: productData.description,
      image: productData.image,
      sku: productData.id,
      brand: {
        '@type': 'Brand',
        name: 'Hotnighties'
      },
      offers: {
        '@type': 'Offer',
        price: productData.discountedPrice || productData.actualPrice,
        priceCurrency: 'PKR',
        availability: 'https://schema.org/InStock',
        url: `https://hotnighties.pk/product/${canonicalSlug}`,
        seller: {
          '@type': 'Organization',
          name: 'Hotnighties Pakistan'
        }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '26'
      }
    };

    const faqSchema = article?.faqs && article.faqs.length > 0 ? {
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    } : null;

    return faqSchema ? [productSchema, faqSchema] : productSchema;
  }, [productData, article]);

  // Rich meta description tailored to product & article
  const metaDescription = useMemo(() => {
    if (!productData) return 'Buy premium intimate sleepwear and innerwear in Pakistan with discreet packaging.';
    const sub = article?.subheadline ? ` - ${article.subheadline}` : '';
    const full = `${productData.title}${sub}. 100% discreet packaging & Cash on Delivery across Pakistan.`;
    return full.length > 160 ? `${full.slice(0, 157)}...` : full;
  }, [productData, article]);

  useSEO({
    title: productData ? `${productData.title} Online in Pakistan` : 'Product Details',
    description: metaDescription,
    image: productData?.image,
    canonical: `https://hotnighties.pk/product/${productData?.slug || slugOrId}`,
    keywords: productData ? [
      productData.title,
      productData.subcategory,
      productData.category,
      'Pakistan online shopping',
      'discreet packaging',
      'cash on delivery',
      'Hotnighties'
    ] : undefined,
    schema: seoSchema,
  });

  // Scroll to top when loading new product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!productData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-md">
          The intimate apparel item you are looking for may have been updated or is no longer available.
        </p>
        <Link
          to="/shop"
          className="px-6 py-2.5 rounded-full bg-[#501524] text-white text-sm font-semibold hover:bg-[#6b1d31] transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            Product Overview Section
        ========================================== */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Image */}
          <div className="flex-1">
            <div className="w-full aspect-[4/5] bg-gray-50 rounded overflow-hidden">
              <img 
                src={productData.image} 
                alt={productData.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Details */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {productData.title}
            </h1>
            
            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-[#501524]">
                {currency}{productData.discountedPrice}
              </span>
              {productData.actualPrice > productData.discountedPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {currency}{productData.actualPrice}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
              {productData.description}
            </p>
            
            {/* Sizing Selection */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-900 mb-3">Select Size</p>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSize(s)}
                    className={`w-10 h-10 border rounded flex items-center justify-center text-sm transition-colors cursor-pointer ${size === s ? 'border-[#501524] text-[#501524] font-bold' : 'border-gray-300 hover:border-[#501524] hover:text-[#501524]'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(productData.id, size)}
                className="flex-1 bg-[#501524] cursor-pointer text-white py-4 font-semibold rounded hover:bg-[#3a0f1a] transition-colors"
              >
                ADD TO CART
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded flex items-center justify-center hover:border-[#501524] hover:text-[#501524] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            
            {/* Meta */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2 text-sm text-gray-500">
              <p>Category: <span className="text-gray-900">{productData.category}</span></p>
              <p>Type: <span className="text-gray-900">{productData.subcategory}</span></p>
            </div>
          </div>
        </div>

        {/* =========================================
            Detailed Product Article, Why It's Better & FAQs Accordion
        ========================================== */}
        <ProductArticle product={productData} />

        {/* =========================================
            Related Products
        ========================================== */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((item, index) => (
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
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ProductDetail;