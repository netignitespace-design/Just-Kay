import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full overflow-hidden">
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
              Discover the perfect balance of form and function. Custom furniture, precise foam cutting, and artisanal cushions designed for your home.
            </p>
            <Link 
              to="/services" 
              className="inline-block bg-white text-stone-900 px-8 py-3 rounded-none font-medium text-sm tracking-wider hover:bg-stone-100 transition-colors shadow-lg"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Furniture Banner */}
            <div className="relative h-80 group overflow-hidden cursor-pointer">
                <Link to="/services">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop" alt="Custom Furniture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl font-serif mb-2">Custom Furniture</h2>
                        <span className="flex items-center gap-2 text-sm font-medium border-b border-transparent group-hover:border-white w-fit pb-0.5 transition-all">
                            View Offerings <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
            {/* Re-Upholstery Banner */}
            <div className="relative h-80 group overflow-hidden cursor-pointer">
                <Link to="/services">
                    <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop" alt="Re-upholstery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-3xl font-serif mb-2">Re-Upholstery</h2>
                        <span className="flex items-center gap-2 text-sm font-medium border-b border-transparent group-hover:border-white w-fit pb-0.5 transition-all">
                            Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
      </div>

      {/* Featured Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-stone-900">Our Expertise</h2>
            <Link to="/services" className="text-stone-600 hover:text-stone-900 text-sm border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors">View All Services</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featured.map(product => (
                <div key={product.id} className="group">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-stone-200 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm line-clamp-3">{product.description}</p>
                </div>
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
                    <h3 className="font-serif text-xl mb-3 text-stone-900">Expert Advice</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-3">Chat with an expert on WhatsApp to find the perfect matching fabric, foam density, and finish for your space.</p>
                    <a
                      href="https://wa.me/27605011521?text=Hi,%20I'm%20interested%20in%20your%20services%20and%20would%20like%20some%20advice."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium border-b border-stone-900 pb-0.5 hover:text-stone-600 transition-colors"
                    >
                      Start a WhatsApp Chat
                    </a>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};