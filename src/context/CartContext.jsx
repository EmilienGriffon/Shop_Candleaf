import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      newCart[existingProductIndex].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }
    setCart(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  const updateQuantity = (productId, quantity) => {
    const newCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + (price * quantity);
    }, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
