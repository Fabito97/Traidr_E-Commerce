import { Link, useParams } from 'react-router-dom';
import './ProductDescription.css';
import profileImage from '../../assets/profile-image.png';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../utils/api';
import { currency } from '../../../utils/cartUtils';
import { useCart } from '../../context/cartContext';
import { useState } from 'react';
import ReviewRating from './ReviewRating';
import { FaExchangeAlt, FaShippingFast } from 'react-icons/fa';
import { FaMessage, FaTruck } from 'react-icons/fa6';
import RelatedProducts from './RelatedProducts';

const ProductDescription = () => {
  const { id } = useParams();
  const { addItemToCart } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getData(`Product/${id}`),
  });
  console.log(data);
  const { data: relatedProducts } = useQuery({
    queryKey: ['relatedProducts', id],
    queryFn: () => getData(`Product/Category/${data.categoryId}`),
    enabled: !!id,
  });
  if (isLoading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product details.</p>;

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

  const productImages = data?.images.$values || [];
  const productElements = data?.productElements.$values || [];
  const reviews = data?.reviews.$values || [];
  const seller = data?.seller || [];



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
        {productImages?.map((img, i) => (
          <div key={i} className="bg-light img-showcase">
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-between">
        <div className="">
          <small>3 Views in the last 2 minutes</small>
          <h2 className="mt-1 mb-1">
            {currency}
            {data.price.toLocaleString()}
          </h2>
          <p className="mt-1 mb-1">{seller.shopName}</p>
          <h3 className="mt-1 mb-1">{data.name}</h3>
          <div className="flex align-center pb-3 pt-2">
            <small className="border p-1">Promoted</small>
            <small>Posted 2 mins ago</small>
            <small>Lagos, Gbagada</small>
          </div>

          {productElements.color && (
            <div>
              <label htmlFor="colour">Select Color</label>
              <select className="w-100">
                {productElements.map((ele, i) => (
                  <option key={i} value="red">
                    {ele.color}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div>
          <Button
            className={'cart-btn mb-5'}
            text={`Add to Cart`}
            background="#fff"
            color="#E04F16"
            handleClick={() => handleCart(data)}
          />
          <div className="flex-center">
            <div>
              <img
                width={200}
                style={{ borderRadius: '50%', width: '70px' }}
                src={profileImage}
                alt=""
              />
            </div>
            <div className="">
              <h2>{seller.userName}</h2>
              <p className="pb-1">{seller.email}</p>
              <Button
                text="Start chat"
                background="#fff"
                border="1px solid #27AE60"
                color="#27ae60"
              >
                <FaMessage />
              </Button>
              <p className="pt-1">
                Contact: <span className="faint phone-1">090857575575</span>
                <span className="phone-2 faint"> 08065443355</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-2">Item Description</h2>
        <p className="mb-3">{data.description}</p>
        <div>
          <h2 className="mb-2">Shipping and return policies</h2>
          <p className="mb-2 faint">
            <FaShippingFast /> Order to be delivered on Tuesday 13, 2024
          </p>
          <p className="mb-2 faint">
            <FaTruck /> Return and exchanges accepted within 30 days
          </p>
          <p className="mb-2 faint">
            <FaExchangeAlt /> Free Shipping
          </p>
        </div>
      </div>
      {!reviews.length ? (
        <h3>No Review</h3>
      ) : (
        <div className="mt-5">
          <h2 className="mb-"> Reviews</h2>
          {reviews?.map((review) => (
            <div className="pt-2 pb-2 border-b">
              <ReviewRating rating={review.rating} />
              <p className="faint  mb-2">{review.comment}</p>
              <div>
                <h5>{review.reviewer}</h5>
                <small className="faint">From {seller.shopName}</small>
                <br />
                <small className="faint">
                  {new Date(review.commentedAt).toLocaleString()}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5">
        <h2 className='pt-4'>Related Products</h2>
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDescription;
