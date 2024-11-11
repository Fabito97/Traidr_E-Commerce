// import { products } from './UserloggedinScreen';

import { FaCartShopping } from "react-icons/fa6";
import { currency } from "../../../utils/cartUtils";
import StarRating from "../../components/StarRating";
import { useNavigate } from "react-router-dom";

export const ProductGrid = ({ products, handleCart }) => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="p-2 m-0">Trending Sales</h1>
      <div className="product-grid p-2 ">
        <div className="grid-md">
        {products?.map((product) => {
              return (
                <div onClick={() => {
                  navigate(`/product-description/${product.id}`);
                  window.scrollTo(0, 0)
                }  
              }              
                  key={product.id}
                  className="productGrid_item "
                >
                  <div className="img-wrap flex-center overflow-hidden">
                    <div className="product-img">
                      <img
                        src={product.images.$values[0]}
                        alt={product.title}
                        width={200}
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
    </>
  );
};
