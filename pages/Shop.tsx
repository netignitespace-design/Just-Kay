import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && category !== 'all') {
      setActiveCategory(category);
      setFilteredProducts(PRODUCTS.filter(p => p.category === category));
    } else {
      setActiveCategory('all');
      setFilteredProducts(PRODUCTS);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-stone-200">
          <div>
            <h1 className="text-4xl font-serif text-stone-900 mb-2">Shop Collection</h1>
            <p className="text-stone-500 text-sm">Elevate your living space with our curated selection.</p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-sm text-stone-600 mr-2 flex-shrink-0">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => handleCategoryChange('all')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'all' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => handleCategoryChange('couch')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'couch' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Couches
                </button>
                <button 
                    onClick={() => handleCategoryChange('cushion')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'cushion' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Cushions
                </button>
                <button 
                    onClick={() => handleCategoryChange('foam')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'foam' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Foam & Inserts
                </button>
                <button 
                    onClick={() => handleCategoryChange('furniture')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'furniture' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Furniture
                </button>
                <button 
                    onClick={() => handleCategoryChange('headboard')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'headboard' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Headboards
                </button>
                <button 
                    onClick={() => handleCategoryChange('curtains')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'curtains' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Curtains & Blinds
                </button>
                <button 
                    onClick={() => handleCategoryChange('service')}
                    className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap ${activeCategory === 'service' ? 'bg-stone-900 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'}`}
                >
                    Services
                </button>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-stone-500 text-lg">No products found in this category.</p>
            <button 
                onClick={() => handleCategoryChange('all')}
                className="mt-4 text-stone-900 underline"
            >
                View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};