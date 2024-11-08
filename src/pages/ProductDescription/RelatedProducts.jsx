import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { currency } from '../../../utils/cartUtils';
import StarRating from '../../components/StarRating'

const RelatedProducts = ({relatedProducts}) => {
  console.log(relatedProducts);

  return (
    <>
       <div className="related-products mt-5">         
          <div className="productGrid grid">
            {relatedProducts?.map((product) => {
              return (
                <div  onClick={() => navigate(`/product-description/${product.id}`)}                
                  key={product.id}
                  className="productGrid_item "
                >
                  <div className="img-wrap">
                    <div className="product-img">
                      <img
                        className=""
                        src={product.images?.$values[0]}
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
    </>
  )
}

export default RelatedProducts