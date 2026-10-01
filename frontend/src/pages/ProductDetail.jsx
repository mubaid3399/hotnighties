import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);
  
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('M');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Find the current product
    const product = products.find(p => p.id === id);
    
    if (product) {
      setProductData(product);
      
      // Find related products (same subcategory, exclude current)
      const related = products.filter(p => p.subcategory === product.subcategory && p.id !== product.id);
      setRelatedProducts(related.slice(0, 4));
    }
  }, [id, products]);

  // Scroll to top when loading new product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!productData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
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
            Detailed Info Tabs (Usecase, FAQs, Quality, Reviews)
        ========================================== */}
        <div className="mt-20">
          <div className="flex flex-wrap border-b border-gray-200 gap-8">
            {['description', 'usecase', 'quality', 'reviews', 'faqs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                  activeTab === tab ? 'text-[#501524]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab === 'description' ? 'Description' : tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#501524]"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="py-8 min-h-[200px]">
            {activeTab === 'description' && (
              <div className="text-gray-600 leading-relaxed text-sm max-w-3xl">
                {productData.description}
              </div>
            )}
            
            {activeTab === 'usecase' && (
              <div className="text-gray-600 leading-relaxed text-sm max-w-3xl space-y-4">
                <p><strong>Everyday Comfort:</strong> Designed to move with you throughout your day seamlessly.</p>
                <p><strong>Lounge & Sleep:</strong> The perfect companion for a relaxing evening at home, combining breathable fabrics with an elegant aesthetic.</p>
                <p><strong>Special Occasions:</strong> Gives you that hidden boost of confidence when wearing your favorite dress or outfit.</p>
              </div>
            )}
            
            {activeTab === 'quality' && (
              <div className="text-gray-600 leading-relaxed text-sm max-w-3xl space-y-4">
                <p>At Hotnighties, quality is our top priority. This product is crafted using premium, skin-friendly fabrics that ensure durability and softness.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fade-resistant dyes to keep colors vibrant wash after wash.</li>
                  <li>Reinforced stitching at critical stress points for longevity.</li>
                  <li>Breathable, hypoallergenic material suited for sensitive skin.</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="text-gray-600 text-sm max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">4.9 / 5</span>
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <span className="text-gray-500 ml-2">(24 reviews)</span>
                </div>
                <div className="border-b border-gray-100 py-4">
                  <p className="font-bold text-gray-900">Sarah M.</p>
                  <p className="text-xs text-gray-400 mb-2">Verified Buyer</p>
                  <p>"Absolutely love this! The fit is perfect and the material feels incredibly luxurious. Highly recommend!"</p>
                </div>
                <div className="border-b border-gray-100 py-4">
                  <p className="font-bold text-gray-900">Aisha K.</p>
                  <p className="text-xs text-gray-400 mb-2">Verified Buyer</p>
                  <p>"So comfortable I forget I have it on. Will definitely be buying in more colors."</p>
                </div>
              </div>
            )}
            
            {activeTab === 'faqs' && (
              <div className="text-gray-600 text-sm max-w-3xl space-y-6">
                <div>
                  <p className="font-bold text-gray-900 mb-1">How do I wash this item?</p>
                  <p>We recommend hand washing in cold water or machine washing on a delicate cycle in a lingerie bag. Do not tumble dry.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Is this true to size?</p>
                  <p>Yes! Our products are designed to fit true to size. Please refer to our size guide for specific measurements.</p>
                </div>
              </div>
            )}
          </div>
        </div>

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
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.discountedPrice}
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