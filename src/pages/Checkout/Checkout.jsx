// src/components/Checkout.js
import React from 'react';
import { PaystackButton } from 'react-paystack';
import './Checkout.css'; // Add styles to match your design
import { useCart } from '../../context/cartContext';
import { currency, deleteCart } from '../../../utils/cartUtils';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const publicKey = 'pk_test_1ab12b997b556717c42ee94fa968bc34f08023f1'; // Replace with your Paystack public key
  const amount = 10000; // Amount in kobo (e.g., 10000 kobo = 100 NGN)
  const email = 'customer@example.com'; // Customer's email
  
  const { cart, deleteCart } = useCart();

  const navigate = useNavigate()


  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log('Payment successful', reference);
    navigate('/userloggedin');
    deleteCart();
    // Handle post-payment success here (e.g., redirect to a success page or display a success message)
  };

  const handlePaystackCloseAction = () => {
    console.log('Payment closed');
    // Handle the case where the user closes the Paystack modal
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: 'Order ID',
          variable_name: 'order_id',
          value: '123456789', // Optional: Replace with actual order ID if available
        },
      ],
    },
    publicKey,
    text: 'Proceed to Paystack',
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="flex-center z-screen">
      <div className="checkout-container">
        <h2 className="text-primary mb-2">Checkout</h2>
        <p>Please review your order before proceeding to payment.</p>
        <div className="order-summary pt-2">
          <p className="font-bold">
            Order Total: {currency}
            {getTotalPrice().toLocaleString()}
          </p>{' '}
          {/* Adjust according to actual total */}
          {/* Add more order details here if needed */}
        </div>
        <PaystackButton {...componentProps} className="paystack-button" onSuccess={handlePaystackSuccessAction}/>
      </div>
    </div>
  );
};

export default Checkout;
