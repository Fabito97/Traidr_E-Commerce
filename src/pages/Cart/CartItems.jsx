import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => setQuantity(quantity - 1);
  const handleQuantityAdd = () => setQuantity(quantity + 1);

  return (
    <div
      style={{ borderBottom: '1px solid #ddd' }}
      className="cart-items pb-3 mt-4 mb-4 justify-between align-start"
    >
      <div className="cart-item flex pb-1">
        <ProductCard className="display-none" border="none" />
        <div className="description">
          <h2 className="mb-1">Hens Red Blender Set</h2>
          <p className="faint mb-1" style={{ fontSize: '14px',width:'70%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, assumenda!
          </p>
          <span className="text-secondary">N30,000 Negotiable</span>
        </div>
      </div>
      <div className="flex-column align-center p-2">
        <div className="qty-btn flex align-center">
          <Button text="-" handleClick={handleQuantity} />
          <span className="p-1">{quantity}</span>
          <Button text="+" handleClick={handleQuantityAdd} />
        </div>
        <Button
          text="delete"
          background="#fff"
          color="#E04F16"
          style={{ border: 'none', background: 'none' }}
        />       
      </div>
    </div>
  );
};

export default CartItems;
