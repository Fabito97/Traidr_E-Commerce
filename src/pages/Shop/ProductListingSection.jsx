import { FaCamera, FaVideo } from 'react-icons/fa';
import FormGroup from '../../components/FormGroup';

const ProductListing = () => {
  return (
    <div className="product-listing-section">
      <div className="shop-heading mb-3 mt-5 my-3">
        <h2 className="mb-2 mt-5">Creating a listing</h2>
        <p className="mb-5">
          Add some photos and details about your item. Fill out what you can for
          now--you'll be edit this later.
        </p>
      </div>
      <div>
        <ProductListingImageUpload />
        <ProductListingVideoUpload />
        <ProductListingDetails />
        <ProductListingShipping />
      </div>
    </div>
  );
};

export default ProductListing;

const ProductListingImageUpload = () => {
  return (
    <div className="m-3 mb-5 border p-5 product-image">
      <div className="grid-bg">
        <div>
          <h2 className="mb-1">Photos</h2>
          <p className="mb-2 faint">Add some aesthetic photos for your shop </p>
          <div className="tips faint">
            <span className="pb-2">Tips:</span>
            <ul>
              <li>Use natural light and no flash</li>
              <li>Include a common object for scale.</li>
              <li>Show the item being held, worn, or used.</li>
              <li>Shoot against a clean, simple background.</li>
              <li>
                Add photos to your variations so buyers can see all their
                options.
              </li>
            </ul>
          </div>
        </div>

        <FormGroup htmlFor="imageUpload" label="">
          <label htmlFor="imageUpload" className="mb-1">
            <FaCamera
              style={{ fontSize: '6rem', marginTop: '-20px' }}
              className="mb-2"
            />
            <br />
            Add a Photo
          </label>
          <input
            className="display-none"
            type="file"
            accept="image/*"
            id="imageUpload"
          />
        </FormGroup>
      </div>
    </div>
  );
};

const ProductListingVideoUpload = () => {
  return (
    <div className="m-3 mb-5 border p-5 product-image">
      <div className="grid-bg">
        <div>
          <h2 className="mb-1">Videos</h2>
          <p className="mb-2 faint">Add some aesthetic Videos for your shop </p>
          <div className="tips faint">
            <span className="pb-2">Quick tips:</span>
            <ul>
              <li>
                Film wearable items on a model or show a functional item being
                used.
              </li>
              <li>
                Adjust your settings to record high resuolution Video--aim for
                1080p or higher.
              </li>
              <li>
                Crop your video after you upload it to get the right dimensions.
              </li>
            </ul>
          </div>
        </div>

        <FormGroup htmlFor="imageUpload" label="">
          <label htmlFor="imageUpload" className="mb-1">
            <FaVideo
              style={{ fontSize: '6rem', marginTop: '-30px' }}
              className="mb-1"
            />
            <br />
            Add a Video <br />
            <small className="pb-2 fainter">Max file size : 100mb</small>
          </label>
          <input
            className="display-none"
            type="file"
            accept="video/*"
            id="imageUpload"
          />
        </FormGroup>
      </div>
    </div>
  );
};

const ProductListingDetails = () => {
  return (
    <div className="m-3 mb-5 border p-5 product-listing">
      <div className="">
        <div>
          <h2 className="mb-1">Listing details</h2>
          <p className="mb-2 faint">Tell the world all about your items</p>
        </div>
        <form className="product-form">
          <FormGroup htmlFor="imageUpload">
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Title</p> <br />
                <span className="faint">
                  Incluse keywords that buyers would use to search for your
                  item.
                </span>
              </label>
              <input className="ml-2" type="text" />
            </div>
          </FormGroup>
          <FormGroup htmlFor="imageUpload">
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Description</p> <br />
                <span className="faint">
                  Type a two- or three-word description of your item to get
                  category suggestions that will help more shoppers find it.
                </span>
              </label>
              <input className="ml-2" type="text" />
            </div>
          </FormGroup>
          <FormGroup htmlFor="imageUpload">
            <div className="listing-upload">
              <label htmlFor="text">
                <p className="font-bold">Category</p> <br />
                <span className="faint">
                  Start with a brief overview that describes your item’s finest
                  features. Shoppers will only see the first few lines of your
                  description at first, so make it count!
                </span>
              </label>
              <input className="ml-2" type="text" />
            </div>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

const ProductListingShipping = () => {
  return (
    <div className="m-3 mb-5 border p-5 product-shipping">
      <div className="">
        <div className="pb-2">
          <h3 className="mb-1">Shipping</h3>
          <p className="faint">
            Give shoppers a clear expectations about delivery time and cost by
            making sure your shipping info is accurate, including the shipping
            profile and your order processing schedule. You can make updates any
            time in Shipping Settings
          </p>
        </div>

        <FormGroup htmlFor="imageUpload" label="Shipping Address">
          <input type="text" />
        </FormGroup>

        <FormGroup htmlFor="imageUpload" label="Shipping Prices">
          <input placeholder="NGN" type="text" />
        </FormGroup>

        <FormGroup htmlFor="imageUpload" label="Shipping Services">
          <input type="text" />
        </FormGroup>
      </div>
    </div>
  );
};
