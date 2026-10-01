import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const { products } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  
  const [showFilter, setShowFilter] = useState(false);

  // Extract unique categories and subcategories from products data
  const uniqueCategories = [...new Set(products.map(item => item.category))].filter(Boolean);
  const uniqueSubcategories = [...new Set(products.map(item => item.subcategory))].filter(Boolean);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory));
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
      
      {/* =======================================
          Sidebar Filter Section
      ======================================== */}
      <div className="w-full md:w-64 flex-shrink-0">
        {/* Mobile Filter Toggle & Header */}
        <div 
          className="flex items-center justify-between mb-4 cursor-pointer md:cursor-default"
          onClick={() => window.innerWidth < 768 && setShowFilter(!showFilter)}
        >
          <h2 className="text-xl font-bold text-gray-900">FILTERS</h2>
          <button className="md:hidden flex items-center justify-center p-1 text-gray-500 transition-colors hover:text-gray-900">
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className={`md:block ${showFilter ? '' : 'hidden'}`}>
          {/* Categories */}
          <div className="border-b border-gray-200 py-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Categories</h3>
            <div className="flex flex-col gap-3">
              {uniqueCategories.map((cat, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    value={cat}
                    onChange={toggleCategory}
                    className="w-4 h-4 text-[#501524] bg-gray-100 border-gray-300 rounded focus:ring-[#501524] cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* SubCategories */}
          <div className="py-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Types</h3>
            <div className="flex flex-col gap-3">
              {uniqueSubcategories.map((sub, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    value={sub}
                    onChange={toggleSubCategory}
                    className="w-4 h-4 text-[#501524] bg-gray-100 border-gray-300 rounded focus:ring-[#501524] cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {sub}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =======================================
          Main Product Grid Section
      ======================================== */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            ALL COLLECTIONS
          </h2>
          <span className="text-sm text-gray-500">
            Showing {filterProducts.length} Results
          </span>
        </div>

        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filterProducts.map((item, index) => (
              <ProductCard
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.discountedPrice}
              />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Shop;