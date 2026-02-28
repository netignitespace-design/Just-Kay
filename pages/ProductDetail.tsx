import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ChevronRight, Check, Star, User, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  const isWishlisted = product ? isInWishlist(product.id) : false;

  const toggleWishlist = () => {
    if (!product) return;
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  // Review State
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', author: 'Sarah J.', rating: 5, date: '2023-10-15', comment: 'Absolutely love this! The fabric feels amazing and it fits perfectly in my living room.' },
    { id: '2', author: 'Michael B.', rating: 4, date: '2023-11-02', comment: 'Great quality, but shipping took a bit longer than expected. Worth the wait though.' }
  ]);
  
  const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;
    
    const review: Review = {
      id: Date.now().toString(),
      author: newReview.author || 'Anonymous',
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      comment: newReview.comment
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ author: '', rating: 5, comment: '' });
  };

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-stone-500">
            <span onClick={() => navigate('/')} className="cursor-pointer hover:text-stone-900">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span onClick={() => navigate('/shop')} className="cursor-pointer hover:text-stone-900">Shop</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-stone-900 font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start mb-24">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-stone-100 mb-8 lg:mb-0">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-serif font-medium text-stone-900 tracking-tight mb-4">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl text-stone-900">
                {product.price > 0 ? `R ${product.price.toLocaleString()}` : 'Custom Quote'}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-stone-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mt-8 border-t border-b border-stone-200 py-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    {product.dimensions && (
                        <div>
                            <span className="block font-medium text-stone-900">Dimensions</span>
                            <span className="block text-stone-500 mt-1">{product.dimensions}</span>
                        </div>
                    )}
                    {product.material && (
                         <div>
                            <span className="block font-medium text-stone-900">Material</span>
                            <span className="block text-stone-500 mt-1">{product.material}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-sm font-medium text-stone-900 mb-4">Color</h3>
                <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                                selectedColor === color ? 'ring ring-stone-900' : ''
                            }`}
                        >
                            <span id="color-label" className="sr-only">{color}</span>
                            <span 
                                aria-hidden="true" 
                                className="h-8 w-8 rounded-full border border-stone-200 border-opacity-10"
                                style={{ backgroundColor: getColorCode(color) }}
                            ></span>
                            {selectedColor === color && (
                                <span className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                                    <Check className={`w-4 h-4 ${isLightColor(color) ? 'text-stone-900' : 'text-white'}`} />
                                </span>
                            )}
                        </button>
                    ))}
                    <span className="ml-4 text-sm text-stone-600">{selectedColor}</span>
                </div>
            </div>

            <div className="mt-10 flex gap-4">
                {product.price > 0 ? (
                    <button
                        onClick={() => addToCart(product, selectedColor)}
                        className="flex-1 bg-stone-900 border border-transparent rounded-none py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/contact')}
                        className="flex-1 bg-stone-900 border border-transparent rounded-none py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
                    >
                        Contact for Quote
                    </button>
                )}
                
                <button
                    onClick={toggleWishlist}
                    className={`p-4 border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors ${isWishlisted ? 'text-red-500' : 'text-stone-400 hover:text-stone-600'}`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-stone-200 pt-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-12">Customer Reviews</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Reviews List */}
              <div className="lg:col-span-7 space-y-8">
                {reviews.length === 0 ? (
                  <p className="text-stone-500 italic">No reviews yet. Be the first to review!</p>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="border-b border-stone-200 pb-8 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <div className="bg-stone-200 p-2 rounded-full">
                              <User className="w-4 h-4 text-stone-600" />
                           </div>
                           <span className="font-medium text-stone-900">{review.author}</span>
                        </div>
                        <span className="text-sm text-stone-500">{review.date}</span>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-stone-900 fill-stone-900' : 'text-stone-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-stone-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Review Form */}
              <div className="lg:col-span-5">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 sticky top-24">
                  <h3 className="text-xl font-serif text-stone-900 mb-6">Write a Review</h3>
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Rating</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="focus:outline-none group"
                          >
                            <Star 
                              className={`w-6 h-6 transition-colors ${star <= newReview.rating ? 'text-stone-900 fill-stone-900' : 'text-stone-300 group-hover:text-stone-400'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="author"
                        value={newReview.author}
                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-300 rounded-md px-4 py-2 text-sm focus:ring-stone-500 focus:border-stone-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-stone-700 mb-1">Review</label>
                      <textarea
                        id="comment"
                        rows={4}
                        required
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-300 rounded-md px-4 py-2 text-sm focus:ring-stone-500 focus:border-stone-500"
                        placeholder="Share your thoughts..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-stone-900 text-white py-3 px-4 rounded-none hover:bg-stone-800 transition-colors font-medium"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
};

// Helper for demo colors
function getColorCode(name: string): string {
    const map: Record<string, string> = {
        'Cream': '#F5F5DC', 'Charcoal': '#36454F', 'Oatmeal': '#E0DCC8',
        'Rust': '#B7410E', 'Olive': '#808000', 'Sand': '#C2B280',
        'White': '#FFFFFF', 'Pearl Grey': '#EAE0C8', 'Terracotta': '#E2725B',
        'Sage': '#BCB88A', 'Midnight Blue': '#191970', 'Emerald': '#50C878',
        'Gold': '#FFD700', 'Natural/Black': '#F0EAD6', 'Brown/Cream': '#964B00',
        'Flax': '#EEDC9A', 'Slate': '#708090'
    };
    return map[name] || '#cccccc';
}

function isLightColor(name: string): boolean {
    const light = ['Cream', 'Oatmeal', 'Sand', 'White', 'Pearl Grey', 'Sage', 'Flax', 'Natural/Black'];
    return light.includes(name);
}