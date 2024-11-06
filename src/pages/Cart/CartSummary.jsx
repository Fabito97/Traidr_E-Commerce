import React from 'react';
import { currency } from '../../../utils/cartUtils';

const CartSummary = ({ totalPrice }) => {
  const ShippingFee = 480;

  return (
    <div className="p-4 w-50 mb-3 cart-total">
      <h3 className="mb-2">Cart Totals</h3>
      <div className="justify-between pb-1 border-b">
        <p>Subtotal</p>
        <span>
          {currency}
          {totalPrice}.00
        </span>
      </div>
      <div className="justify-between pb-1 pt-1 border-b">
        <p>Shipping Fee</p>
        <span>
          {currency}
          {ShippingFee}.00
        </span>
      </div>
      <div className="justify-between font-bold pb-1 pt-1">
        <p>Total</p>
        <span>
          {currency}
          {totalPrice + ShippingFee}.00
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
