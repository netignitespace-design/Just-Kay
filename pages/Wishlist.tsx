import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-stone-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-stone-200">
          <Heart className="w-8 h-8 text-stone-900" />
          <h1 className="text-4xl font-serif text-stone-900">My Wishlist</h1>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <Heart className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Your wishlist is empty</h2>
            <p className="text-stone-500 mb-8">Save items you love to revisit later.</p>
            <Link 
              to="/shop" 
              className="inline-block bg-stone-900 text-white px-8 py-3 font-medium hover:bg-stone-800 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
