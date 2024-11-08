import { useState } from 'react';
import FormGroup from '../../components/FormGroup';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../../../utils/api';
import { toast } from 'react-toastify';

const ShopForm = () => {
  const [shopName, setShopName] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const { mutate: createShop } = useMutation({
    mutationFn: (shop) => postData({ url: 'Shop/add-shop', data: shop }),

    onSuccess: (data) => {
      console.log(data);
      toast.success('Shop successfully saved');
      navigate('/shop-product-listiong');
    },

    onError: (error) => {
      toast.error(`failed to save:  ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const shop = { shopName, category };
    createShop(shop);
    setShopName('');
    setCategory('');
  };

  return (
    <>
    <form className="shop-form grid-bg mb-5 ">
      <FormGroup label={'Name of Shop'} htmlFor="name">
        <input
        value={shopName}
          placeholder={'Empress Ki'}
          onChange={(e) => setShopName(e.target.value)}
        />
      </FormGroup>

      <FormGroup label={'Currency'} htmlFor="currency">
        <input placeholder={'NGN'} disabled />
      </FormGroup>

      <FormGroup label={'Category'} htmlFor="category">
        <select
        value={category}
          placeholder="select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Personal Care">Fashion</option>
        </select>
      </FormGroup>

    </form>
      <div className="justify-between m-2 shop-buttons mt-5 pt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button handleClick={handleSubmit} />
      </div>
    </>
  );
};

export default ShopForm;
