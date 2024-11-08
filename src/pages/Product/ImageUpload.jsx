import { FaCamera, FaPlus } from 'react-icons/fa';
import FormGroup from '../../components/FormGroup';
import './Product.css';
import { FiPlus } from 'react-icons/fi';

const ImageUpload = ({handleChange}) => {
  return (
    <div     
      className="border p-2 flex justify-center image-upload-card"
      style={{ width: '200px', height: '240px' }}
    >
      <FormGroup htmlFor="imageUpload" className={'flex-column'}>
        <label htmlFor="imageUpload" className="mb-1">
          <FiPlus style={{ fontSize: '4rem', marginLeft: '5px' }} />
          <br />
          <small>Add a Photo</small>
        </label>
        <input
          className="display-none"
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={handleChange}
        />
      </FormGroup>
    </div>
  );
};

export default ImageUpload;
