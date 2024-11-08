import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { currency, updateCartItemQuantity } from '../../../utils/cartUtils';
import { QueryClient } from '@tanstack/react-query';


const CartItem = ({ item, deleteCart, updateCart }) => {
console.log("See me" , item);
  return (
    <div
      style={{ borderBottom: '1px solid #ddd' }}
      className="cart-items pb-3 mt-4 mb-4 justify-between align-start"
    >
      <div className="cart-item flex pb-1">
        <div className="image-card">
          <div
            style={{
              width: '200px',
              fontSize: '12px',
              height: '150px',
              border: '1px solid #ddd',
              background: '#f9f9f9',
              borderRadius: '10px',
            }}
            className="border overflow-hidden flex-center"
          >
            <img width={100} src={item.image || item.image} alt="" />
          </div>
        </div>

        <div className="description">
          <h3 className="mb-1">{item.name} </h3>
          <p className="faint mb-1" style={{ fontSize: '14px', width: '100%' }}>
            {item.description}
          </p>
          <span className="text-aux">{currency}{item.price}</span>
          <span className="text-aux"> - {currency}{item.price * item.quantity}</span>
        </div>
      </div>

      <div className="flex-column align-center p-2">
        <div className="qty-btn flex align-center">
          <Button text="-" handleClick={() => updateCart(item.id, item.quantity - 1)}  className={item.quantity === 1 ? "disabled" : ''}/>
          <span className="p-1">{item.quantity}</span>
          
          <Button text="+"  handleClick={() => updateCart(item.id, item.quantity + 1)}/>
        </div>

        <Button
          text="Remove"
          background="#fff"
          color="#E04F16"
          style={{ border: 'none', background: 'none' }}
          handleClick={() => deleteCart(item.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
