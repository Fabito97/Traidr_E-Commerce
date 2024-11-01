import { ProductList } from './Helpers/ProductList';

const Products = () => {
  return (
    <>
      <div className="productSection p-4">
        <div className="products">
          <div className="products_h3">
            <h1 className="mb-3">Trending Sales</h1>
          </div>
          <div className="productGrid grid">
            {ProductList.map((product, key) => {
              return (
                <div key={key} className="productGrid_item ">
                  <div className="img-wrap">
                    <div className="product-img">
                      <img
                        className=""
                        src={product.imageUrl}
                        alt={product.title}
                      />
                    </div>
                  </div>
                  <div className="productGrid_item_description">
                    <h4 className="m-0">{product.title}</h4>
                    <p className="faint">{product.description}</p>

                    <div className="productGrid_item_price text-aux font-bold">
                      <p>{product.price}</p>
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
