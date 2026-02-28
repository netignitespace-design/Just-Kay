import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedColor: string) => void;
  removeFromCart: (productId: string, selectedColor: string) => void;
  updateQuantity: (productId: string, selectedColor: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('foam_decor_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('foam_decor_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, selectedColor: string) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedColor === selectedColor);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedColor === selectedColor)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedColor }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedColor: string) => {
    setItems(prev => prev.filter(item => !(item.id === productId && item.selectedColor === selectedColor)));
  };

  const updateQuantity = (productId: string, selectedColor: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === productId && item.selectedColor === selectedColor) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};