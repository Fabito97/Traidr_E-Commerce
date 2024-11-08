import FormGroup from '../../../components/FormGroup';

const ProductListingDetails = ({
  setDescription,
  setProductName,
  setCategory,
  setPrice,
  description,
  productName,
  category,
  price,
}) => {
  const handlePriceChange = (e) => {
    const input = e.target.value.replace(/[^0-9.]/g, ''); // Restrict to numeric input
    setPrice(input);
  };


  return (
    <div className="m-3 mb-5 border p-5 product-listing">
      <div className="">
        <div>
          <h2 className="mb-1">Listing details</h2>
          <p className="mb-2 faint">Tell the world all about your items</p>
        </div>
        <form className="product-form">
          <FormGroup>
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Title</p> <br />
                <span className="faint">
                  Include keywords that buyers would use to search for your
                  item.
                </span>
              </label>
              <input
                className="ml-2"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Description</p> <br />
                <span className="faint">
                  Type a two- or three-word description of your item to get
                  category suggestions that will help more shoppers find it.
                </span>
              </label>
              <input
                className="ml-2"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Price</p> <br />
                <span className="faint">
                  How much does your product cost
                </span>
              </label>
              <input
                className="ml-2"
                type="text"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Category</p> <br />
                <span className="faint">
                  Start with a brief overview that describes your item’s finest
                  features. Shoppers will only see the first few lines of your
                  description at first, so make it count!
                </span>
              </label>
              <input
                className="ml-2"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default ProductListingDetails;
