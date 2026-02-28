import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div className="relative py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">The Foam & Decor Story</h1>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">
                Founded on the belief that your home should be your sanctuary.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200" 
                    alt="Artisan interior detail" 
                    className="rounded-sm shadow-xl"
                />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-serif text-stone-900">Craftsmanship First</h2>
                <p className="text-stone-600 leading-relaxed">
                    We started Foam & Decor because we were tired of "fast furniture" that looked good for a month and then fell apart. We wanted to create pieces that age beautifully, using materials that feel as good as they look.
                </p>
                <p className="text-stone-600 leading-relaxed">
                    Our couches are built with solid hardwood frames and our cushions are sewn from premium organic fabrics. Every stitch matters.
                </p>
                <div className="pt-4">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">Sustainability</h3>
                    <p className="text-stone-600 leading-relaxed">
                        We are committed to reducing our footprint. From our packaging to our production partners, we prioritize eco-friendly practices at every step.
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Team/Quote Section */}
      <div className="bg-stone-900 text-stone-100 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                "Design isn't just about how it looks, it's about how it makes you feel when you walk through the door after a long day."
            </blockquote>
            <cite className="not-italic text-stone-400 font-medium tracking-wide">- Sarah & James, Founders</cite>
        </div>
      </div>
    </div>
  );
};