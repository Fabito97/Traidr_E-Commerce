import { FaCartShopping } from 'react-icons/fa6';
import StarRating from '../../components/StarRating';
import {currency } from '../../../utils/cartUtils';
import { getData } from '../../../utils/api';
import { useQuery } from '@tanstack/react-query';
import { useCart } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';



const Products = () => {
  const {addItemToCart} = useCart()

  const navigate = useNavigate();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getData('Product'),
  });
  console.log(data);

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
                <div onClick={() => {
                  navigate(`/product-description/${product.id}`);
                  window.scrollTo(0, 0)
                }
              }                
                  key={product.id}
                  className="productGrid_item "
                >
                  <div className="img-wrap overflow-hidden">
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
                          onClick={(e) => {
                            e.stopPropagation(); 
                            handleCart(product);
                          }}
                        />
                      </span>
                    </h4>
                    <p className="faint">{product.description}</p>

                    <div className="flex justify-between productGrid_item_price text-aux font-bold">
                      <p>
                        {currency}
                        {product.price.toLocaleString()}
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
