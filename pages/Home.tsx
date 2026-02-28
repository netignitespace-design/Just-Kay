import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredCouches = PRODUCTS.filter(p => p.category === 'couch').slice(0, 2);
  const featuredCushions = PRODUCTS.filter(p => p.category === 'cushion').slice(0, 2);
  const featured = [...featuredCouches, ...featuredCushions];

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop" 
          alt="Modern minimalist living room" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl drop-shadow-sm">
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 tracking-tight text-white drop-shadow-md">
              Comfort, Curated.
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-stone-50 drop-shadow-md">
              Discover the perfect balance of form and function. Minimalist couches and artisanal cushions designed for the modern home.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-white text-stone-900 px-8 py-3 rounded-none font-medium text-sm tracking-wider hover:bg-stone-100 transition-colors shadow-lg"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Couch Banner */}
            <div className="relative h-96 group overflow-hidden cursor-pointer">
                <Link to="/shop?category=couch">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" alt="Couches" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl font-serif mb-2">Couches</h2>
                        <span className="flex items-center gap-2 text-sm font-medium border-b border-transparent group-hover:border-white w-fit pb-0.5 transition-all">
                            View Range <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
            {/* Cushion Banner */}
            <div className="relative h-96 group overflow-hidden cursor-pointer">
                <Link to="/shop?category=cushion">
                    <img src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop" alt="Cushions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl font-serif mb-2">Cushions</h2>
                        <span className="flex items-center gap-2 text-sm font-medium border-b border-transparent group-hover:border-white w-fit pb-0.5 transition-all">
                            Shop Accessories <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-stone-900">Featured Additions</h2>
            <Link to="/shop" className="text-stone-600 hover:text-stone-900 text-sm border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
            {featured.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Value Props */}
      <div className="bg-stone-100 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="font-serif text-xl mb-3 text-stone-900">Sustainable Materials</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">We source responsibly, using FSC-certified wood and organic fabrics whenever possible.</p>
                </div>
                <div>
                    <h3 className="font-serif text-xl mb-3 text-stone-900">Artisan Craftsmanship</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">Each piece is hand-finished by skilled artisans who care about the details.</p>
                </div>
                <div>
                    <h3 className="font-serif text-xl mb-3 text-stone-900">Design Consultation</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">Use our AI assistant or chat with an expert to find the perfect match for your home.</p>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};