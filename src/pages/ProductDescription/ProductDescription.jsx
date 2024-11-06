import { Link, useParams } from 'react-router-dom';
import './ProductDescription.css';
import image1 from '../../assets/image 22.png';
import image2 from '../../assets/image 23.png';
import image3 from '../../assets/image 24.png';
import profileImage from '../../assets/profile-image.png';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../utils/api';
import { currency } from '../../../utils/cartUtils';
import { useCart } from '../../context/cartContext';

const ProductDescription = () => {
  const { id } = useParams();
  const {addItemToCart} = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getData(`Product/${id}`),
  });


  if (isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product details.</p>;

  const productImages = data?.images.$values || []; // Ensure images array is defined
   
  console.log("I'm here", productImages);
 
  return (
    <div className="container p-5 product-decription">
      <div className="mt-2 mb-2">
        <Link className="mr-1 text-dark" to="/">
          Home /
        </Link>
        <Link className="mr-1 text-dark" to="/">
          Search /
        </Link>
        <Link className="mr-1 text-dark" to="/">
          Hens Red Blender sef
        </Link>
      </div>
      <div className="grid-bg-main mt-2">
        {productImages?.map((img) => ( 
          <div className="bg-light img-showcase">
            <img src={img} alt="" />
          </div>
         ))} 
      </div>

      <div className="mt-5 flex justify-between">
        <div className="">
          <small>3 Views in the last 2 minutes</small>
          <h2 className="mt-1 mb-1">{currency}{data.price.toLocaleString()}</h2>
          <p className="mt-1 mb-1">Wallphy Store</p>
          <h3 className="mt-1 mb-1">{data.name}</h3>
          <div className="flex align-center pb-3 pt-2">
            <small className="border p-1">Promoted</small>
            <small>Posted 2 mins ago</small>
            <small>Lagos, Gbagada</small>
          </div>

          <label htmlFor="colour">Select Color</label>
          <select className="w-100">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Blue</option>
          </select>
        </div>
        <div>
          <Button
            className={'cart-btn mb-5'}
            text="Add to Cart"
            background="#fff"
            color="#E04F16"
            handleClick={() => addItemToCart(data)}
          />
          <div className="flex-center">
            <div>
              <img
                style={{ borderRadius: '50%', width: '70px' }}
                src={profileImage}
                alt=""
              />
            </div>
            <div className="">
              <h2>Bankole Yufus</h2>
              <p className="pb-1">BankoleYufus@gmail.com</p>
              <Button
                text="Start chat"
                background="#fff"
                border="1px solid #27AE60"
                color="#27ae60"
              />
              <p className="pt-1">
                Contact: <span className="faint phone-1">090857575575</span>
                <span className="phone-2 faint"> 08065443355</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-2">{data.description}</h2>
        <p className="mb-3">Blender in Good condition</p>
        <div>
          <h2 className="mb-2">Shipping and return policies</h2>
          <p className="mb-2 faint">
            Order to be delivered on Tuesday 13, 2024
          </p>
          <p className="mb-2 faint">
            Return and exchanges accepted within 30 days
          </p>
          <p className="mb-2 faint">Free Shipping</p>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="mb-"> Reviews</h2>
        <div className="pt-2 pb-2 border-b">
          <p className="faint  mb-2">
            The quality is very good and the blender works
          </p>
          <div>
            <h5>Temitope Abosede</h5>
            <small className="faint">From Wallphy Store</small>
            <br />
            <small className="faint">12 July 2024</small>
          </div>
        </div>
        <div className="pt-2 pb-2 border-b">
          <p className="faint mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            commodi sapiente tenetur molestiae quis magnam hic ipsam soluta est
            earum?
          </p>
          <div>
            <h5>Temitope Abosede</h5>
            <small className="faint">From Wallphy Store</small>
            <br />
            <small className="faint">12 July 2024</small>
          </div>
        </div>
      </div>

      <div className="mt-5 p-3">
        <h2>Related Products</h2>
        <div className="pt-3 grid-md">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
