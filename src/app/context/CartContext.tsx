// app/context/CartContext.tsx

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { CartProduct, CartContextType } from '../types/cartContext';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: string | number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
