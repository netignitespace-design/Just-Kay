import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartSidebar: React.FC = () => {
  const { items, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full flex flex-col bg-stone-50 shadow-xl transform transition-transform">
          
          <div className="flex items-center justify-between px-6 py-6 border-b border-stone-200">
            <h2 className="text-xl font-serif font-medium text-stone-900">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-2">
                   <ShoppingBagIcon />
                </div>
                <p className="text-stone-500">Your cart is empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-stone-900 underline underline-offset-4 hover:text-stone-600"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.selectedColor}`} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-stone-900">
                          <h3>
                            <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">R {(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <p className="mt-1 text-sm text-stone-500">{item.category} | {item.selectedColor}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-stone-300 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedColor, -1)}
                            className="p-1 hover:bg-stone-100 text-stone-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-2 font-medium text-stone-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedColor, 1)}
                            className="p-1 hover:bg-stone-100 text-stone-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.selectedColor)}
                          className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-stone-200 px-6 py-6 bg-stone-100">
              <div className="flex justify-between text-base font-medium text-stone-900 mb-4">
                <p>Subtotal</p>
                <p>R {cartTotal.toLocaleString()}</p>
              </div>
              <p className="mt-0.5 text-sm text-stone-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                className="w-full flex items-center justify-center rounded-none bg-stone-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-stone-800 transition-colors"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
)