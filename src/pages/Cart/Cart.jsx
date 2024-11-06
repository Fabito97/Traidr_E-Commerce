import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import './Cart.css';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useMutation, useQuery } from '@tanstack/react-query';

import Loading from '../../components/Loading';
import { useCart } from '../../context/cartContext';

const Cart = () => {
  const { cart, setCart, updateCartItemQuantity, deleteCartItem } = useCart();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 
  return (
    <div style={{ minHeight: '90vh' }} className="p-5 container">
      <h2 className="m">Cart</h2>

      {cart.length !== 0 ? (
        cart.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            updateCart={updateCartItemQuantity}
            deleteCart={deleteCartItem}
          />
        ))
      ) : (
        <div className="flex-center p-5 h-screen-70">
          <h2>You have no item in your cart</h2>
        </div>
      )}
      {cart.length !== 0 ? (
        <>
          <CartSummary totalPrice={getTotalPrice()} />
          <Button text="Proceed to checkout" />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
