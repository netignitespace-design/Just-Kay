import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-stone-100">Foam & Decor</h3>
            <p className="text-sm leading-relaxed">
              Curating comfort for the modern home. Sustainable materials, timeless designs, and an obsession with quality.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-stone-100 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/shop" className="hover:text-stone-100 transition-colors">Our Collection</a></li>
              <li><a href="#/about" className="hover:text-stone-100 transition-colors">Our Story</a></li>
              <li><a href="#/contact" className="hover:text-stone-100 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-stone-100 transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-stone-100 mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-stone-600" />
                <span>Witkoppen Road, Sandton, Gauteng, 2191, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-stone-600" />
                <span>hello@foamanddecor.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-stone-600" />
                <span>+27 60 501 1521</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-stone-100 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Foam & Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};