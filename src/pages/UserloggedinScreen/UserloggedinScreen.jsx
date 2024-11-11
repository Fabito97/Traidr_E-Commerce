import './UserloggedinScreen.css';
import fryers from './images/fryer.jpg';
import blender from './images/blender.jpg';
import fruitblender from './images/binatone.jpg';
import alarm from './images/alarm.jpg';
import clipper from './images/clipper.jpg';
import kettle from './images/electrickettle.jpg';
import gamingtv from './images/hpomen.jpg';
import iphone from './images/iphone.jpg';
import nexxus from './images/nexxustv.jpg';
import portablemonitor from './images/portablemonitor.jpg';
import royaltv from './images/royaltv.jpg';
import runningshoe from './images/runningshoe.jpg';
import runningsneaker from './images/runningsneaker.jpg';
import sonixtv from './images/sonixtv.jpg';
import tv from './images/tv.jpg';
import { ProductGrid } from './ProductGrid';
import { SearchSortBar } from './SearchSortBar';
import { Sidebar } from './Sidebar';
import { useCart } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../utils/api';
import { useEffect, useState } from 'react';

export const products = [
  { name: 'Fryer', price: 'N50,000', image: fryers },
  { name: 'Blender', price: 'N80,000', image: blender },
  { name: 'Fruit Blender', price: 'N90,000', image: fruitblender },
  { name: 'Portable Alarm', price: 'N100,000', image: alarm },
  { name: 'Clipper', price: 'N30,000', image: clipper },
  { name: 'Kettle', price: 'N35,000', image: kettle },
  { name: 'Gaming TV', price: 'N35,000', image: gamingtv },
  { name: 'Iphone', price: 'N350,000,000', image: iphone },
  { name: 'Nexus TV', price: 'N340,000,000', image: nexxus },
  { name: 'Portable Monitor', price: 'N280,000', image: portablemonitor },
  { name: 'Royal TV', price: 'N450,000', image: royaltv },
  { name: 'Running Shoe', price: 'N90,000', image: runningshoe },
  { name: 'Running Sneakers', price: 'N720,000', image: runningsneaker },
  { name: 'Sonix TV', price: 'N500,000', image: sonixtv },
  { name: 'TV', price: 'N280,000', image: tv },

  // Add more products with dummy data
];

const UserloggedinScreen = () => {
  const { addItemToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getData('Product'),
  });

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, [data]);

  const handleSearch = (e) => {
    

    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    console.log(searchValue);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
   
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products!</p>;

  const handleCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.images.$values[0],
    };
    console.log('Adding product to cart:', cartItem);

    addItemToCart(cartItem);
  };

  return (
    <div className="container">
      <div className="userloggedin-section ">
        <Sidebar
          setFilteredProducts={setFilteredProducts}
          products={products}
          setProducts={setProducts}
        />
        <section className="mt-5 w-100 product-grid-section">
          <SearchSortBar handleSearch={handleSearch} />
          <ProductGrid products={filteredProducts} handleCart={handleCart} />
        </section>
      </div>
    </div>
  );
};

export default UserloggedinScreen;
