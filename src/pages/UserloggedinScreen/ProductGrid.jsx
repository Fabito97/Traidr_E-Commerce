import { products } from './UserloggedinScreen';

export const ProductGrid = () => {
  return (
    <section className="mt-5 w-100 product-grid-section">
      <SearchSortBar />
      <h1 className="p-2 m-0">Trending Sales</h1>
      <div className="product-grid p-2 ">
        <div className="grid-md">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h4 className="flex align-center justify-between">
        {product.name} <button className="like-button">❤️</button>
      </h4>
      <p className="text-left">{product.price}</p>
    </div>
  );
};

export const SearchSortBar = () => {
  return (
    <div className="search-sort-bar mb-1">
      <input
        style={{ width: '70%' }}
        type="text"
        placeholder="Search for item..."
      />
      <button>Sort By</button>
    </div>
  );
};