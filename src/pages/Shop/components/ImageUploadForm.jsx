import { FaCamera } from "react-icons/fa6";
import FormGroup from "../../../components/FormGroup";
import ProductCard from "../../../components/ProductCard";

const ProductListingImageUpload = ({handleChange, images}) => {
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
        {images.length > 0 && images.map((img, i) => (
          <div key={i}><img src={URL.createObjectURL(img)} alt="" /></div>
        ))}

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
            multiple
            accept="image/*"
            id="imageUpload"
            onChange={handleChange}
          />
        </FormGroup>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductListingImageUpload