import { FaCartShopping } from 'react-icons/fa6';
import StarRating from '../../components/StarRating';
import { ProductList } from './Helpers/ProductList';
import { Children, createContext, useEffect, useState } from 'react';
import { AddToCart, currency, getCartItems } from '../../../utils/cartUtils';
import { getProducts } from '../../../utils/api';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cartContext';



const Products = () => {
  const {addItemToCart} = useCart()

  
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const handleCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.images.$values[0]
    }
    console.log("Adding product to cart:", cartItem);

   addItemToCart(cartItem)
  }
  
  return (
    <>
      <div className="productSection p-4">
        <div className="products">
          <div className="products_h3">
            <h1 className="mb-3">Trending Sales</h1>
          </div>
          <div className="productGrid grid-md">
            {data?.map((product) => {
              return (
                <div
                  to="/product"
                  key={product.id}
                  className="productGrid_item "
                >
                  <div className="img-wrap">
                    <div className="product-img">
                      <img
                        className=""
                        src={product.images.$values[0]}
                        alt={product.title}
                      />
                    </div>
                  </div>
                  <div className="productGrid_item_description">
                    <h4 className="m-0 flex justify-between">
                      {product.name}
                      <span>
                        <FaCartShopping
                          className="text-primary hover cursor-pointer"
                          onClick={() => handleCart(product)}
                        />
                      </span>
                    </h4>
                    <p className="faint">{product.description}</p>

                    <div className="flex justify-between productGrid_item_price text-aux font-bold">
                      <p>
                        {currency}
                        {product.price}
                      </p>
                      <StarRating className="text-light" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};



export default Products;
