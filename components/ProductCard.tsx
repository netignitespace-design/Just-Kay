import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-stone-200 lg:aspect-none lg:h-80 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 z-10"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
        </button>

        {/* Quick Add Button - Only show if price > 0 */}
        {product.price > 0 && (
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, product.colors[0]);
                }}
                className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full shadow-md text-stone-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white"
            >
                <Plus className="w-5 h-5" />
            </button>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-stone-900">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-stone-500">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        </div>
        <p className="text-sm font-medium text-stone-900">
            {product.price > 0 ? `R ${product.price.toLocaleString()}` : 'Custom Quote'}
        </p>
      </div>
      <div className="mt-2 flex gap-1">
        {product.colors.slice(0, 3).map(color => (
            <span key={color} className="text-[10px] text-stone-500 border border-stone-200 px-1.5 py-0.5 rounded-full">{color}</span>
        ))}
      </div>
    </div>
  );
};