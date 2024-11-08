import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import BusinessInfoForm from './BusinessInfoForm';
import ProductListing from './ProductListingSection';
import './Shop.css';
import ShopForm from './ShopForm';
import ShopOpeningSection from './ShopOpeningSection';
import ShopProgressBar from './ShopProgressBar';
import ShopSecurity from './ShopSecurity';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar';

const Shop = () => {
  const [toggle, setToggle] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/shop-opening') {
      setToggle(1);
    } else if (location.pathname === '/shop-product-listing') {
      setToggle(2);
    } else if (location.pathname === '/shop-business-info') {
      setToggle(3);
    } else if (location.pathname === '/shop-security') {
      setToggle(4);
    }
  }, [location.pathname]);

  // const handleToggle = () => {
  //   toggle >= 4 ? navigate('/product'):
  //   setToggle(toggle + 1)
  // }

  return (  
    <section>
        <NavBar/>
      <div className="container pt-4 pb-4 shop">
        
        <ShopProgressBar toggle={toggle}/>

        <Outlet/>

      </div>
     


    </section>
  );
};


export default Shop;


