import React from 'react';
import { PRODUCTS } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 pb-6 border-b border-stone-200">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Our Services & Offerings</h1>
          <p className="text-stone-600 text-lg max-w-2xl">
            From bespoke furniture pieces to custom curtains, foam cutting, and full re-upholstery, 
            we provide tailored solutions for your home.
          </p>
        </div>

        <div className="space-y-24">
          {['service', 'furniture', 'headboard', 'curtains', 'couch', 'cushion', 'foam'].map(category => {
            const items = PRODUCTS.filter(p => p.category === category);
            if (items.length === 0) return null;
            
            const categoryNames: Record<string, string> = {
              'service': 'Specialized Services',
              'furniture': 'Custom Furniture',
              'headboard': 'Bespoke Headboards',
              'curtains': 'Curtains & Blinds',
              'couch': 'Couches & Sofas',
              'cushion': 'Cushions & Pillows',
              'foam': 'Foam & Inserts'
            };

            return (
              <div key={category} className="scroll-mt-24" id={category}>
                <h2 className="text-3xl font-serif text-stone-900 mb-8">{categoryNames[category]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {items.map(item => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="aspect-video w-full overflow-hidden rounded-md bg-stone-200 mb-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-stone-900 mb-2">{item.name}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">{item.description}</p>
                      <div className="inline-flex items-center text-sm font-medium border-b border-stone-900 pb-0.5">
                        Enquire Now
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
