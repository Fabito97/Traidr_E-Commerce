import React, { createContext, useEffect, useState } from 'react';
import { AddToCart, getCartItems } from '../../utils/cartUtils';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartItems());

  useEffect(() => {
    AddToCart(cart);
  }, [cart]);

  const addItemToCart = (newItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === newItem.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('About to save', prevCart);
      return [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const deleteCartItem = (productId) => {
    try {
      setCart((prevCart) => {
        const remainingCart = prevCart.filter((item) => item.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(remainingCart));
        return remainingCart;
      });
      
    } catch (error) {
      console.error('Error deleting item quantity:', error);
      return;
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart, updateCartItemQuantity, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
