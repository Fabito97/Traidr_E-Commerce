// src/components/Checkout.js
import React from "react";
import { PaystackButton } from "react-paystack";
import "./Checkout.css"; // Add styles to match your design

const Checkout = () => {
  const publicKey = "pk_test_1ab12b997b556717c42ee94fa968bc34f08023f1"; // Replace with your Paystack public key
  const amount = 10000; // Amount in kobo (e.g., 10000 kobo = 100 NGN)
  const email = "customer@example.com"; // Customer's email

  const handlePaystackSuccessAction = (reference) => {
    console.log("Payment successful", reference);
    // Handle post-payment success here (e.g., redirect to a success page or display a success message)
  };

  const handlePaystackCloseAction = () => {
    console.log("Payment closed");
    // Handle the case where the user closes the Paystack modal
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Order ID",
          variable_name: "order_id",
          value: "123456789", // Optional: Replace with actual order ID if available
        },
      ],
    },
    publicKey,
    text: "Proceed to Paystack",
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="flex-center z-screen">
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Please review your order before proceeding to payment.</p>
      <div className="order-summary">
        <p>Order Total: ₦100.00</p> {/* Adjust according to actual total */}
        {/* Add more order details here if needed */}
      </div>
      <PaystackButton {...componentProps} className="paystack-button" />
    </div>
    </div>
  );
};

export default Checkout;
