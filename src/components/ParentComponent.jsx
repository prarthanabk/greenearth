import React, { useState } from 'react';
import { CartContext } from './CartContext';
import CartPage from './CartPage';
import Checkout from './Checkout';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      <CartPage />
      <Checkout />
    </CartContext.Provider>
  );
};

export default ParentComponent;
