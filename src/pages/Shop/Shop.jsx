import { useState } from 'react';
import Button from '../../components/Button';
import BusinessInfoForm from './BusinessInfoForm';
import ProductListing from './ProductListingSection';
import './Shop.css';
import ShopForm from './ShopForm';
import ShopOpeningSection from './ShopOpeningSection';
import ShopProgressBar from './ShopProgressBar';
import ShopSecurity from './ShopSecurity';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [toggle, setToggle] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  
  const handleToggle = () => {
    toggle >= 4 ? navigate('/product'):
    setToggle(toggle + 1)
  }

  return (
    <section className="container pt-4 pb-4 shop">
      
      <ShopProgressBar toggle={toggle}/>

      {toggle === 1 && <ShopOpeningSection />}
      {toggle === 2 && <ProductListing />}
      {toggle === 3 && <BusinessInfoForm />}
      {toggle === 4 && <ShopSecurity />}

     
      <div className="justify-between m-2 shop-buttons mt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button handleClick={handleToggle}/>
      </div>
    </section>
  );
};


export default Shop;


