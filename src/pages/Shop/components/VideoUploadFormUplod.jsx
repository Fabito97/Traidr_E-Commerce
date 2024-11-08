import { FaVideo } from 'react-icons/fa6';
import FormGroup from '../../../components/FormGroup';
import Button from '../../../components/Button';

const ProductListingVideoUpload = ({handleChange}) => {
  return (
    <>
      <div className="m-3 mb-5 border p-5 product-image">
        <div className="grid-bg">
          <div>
            <h2 className="mb-1">Videos</h2>
            <p className="mb-2 faint">
              Add some aesthetic Videos for your shop{' '}
            </p>
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
                  Crop your video after you upload it to get the right
                  dimensions.
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
             accept="video/*" // Ensures only video files can be selected
             id="videoUpload"
             onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
      
    </>
  );
};

export default ProductListingVideoUpload;
