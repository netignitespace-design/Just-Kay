import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { NAV_LINKS, LOGO_URL } from '../constants';

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <img src={LOGO_URL} alt="Foam & Decor Logo" className="h-12 w-auto object-contain" />
            <span className="font-serif text-2xl text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors">Foam & Decor</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-stone-900 border-b-2 border-stone-900' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            
            <Link 
              to="/wishlist"
              className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-800 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-800 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <Link 
              to="/wishlist"
              className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-800 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
             <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-800 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-500 hover:text-stone-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};