import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import './Cart.css';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useMutation, useQuery } from '@tanstack/react-query';

import Loading from '../../components/Loading';
import { useCart } from '../../context/cartContext';
import { isUserLoggedIn } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const navigate = useNavigate();

  const loggedIn = isUserLoggedIn();


  const { cart, updateCartItemQuantity, deleteCartItem } = useCart();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (loggedIn === true) {
      navigate('/checkout');
    } else {
      navigate('/login');
      toast.info('Please login or signup before you proceed to checkout');
    }
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
          <Button text="Proceed to checkout" handleClick={handleCheckout} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
