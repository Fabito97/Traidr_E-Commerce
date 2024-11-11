import { FaCamera, FaVideo } from 'react-icons/fa';
import FormGroup from '../../components/FormGroup';
import ProductListingImageUpload from './components/ImageUploadForm';
import ProductListingVideoUpload from './components/VideoUploadFormUplod';
import ProductListingDetails from './components/ProductListingDetails';
import ProductListingShipping from './components/ProductListingShipping';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postFormData } from '../../../utils/api';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const ProductListing = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState(1);
  const [shippingFee, setShippingFee] = useState('');
  const [shippingServices, setShippingServices] = useState('');

  const navigate = useNavigate();

  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (product) =>
      postFormData({ url: 'Product/Create-Product', data: product }),

    onSuccess: (data) => {
      console.log(data);
      toast.success('Product successfully saved');
      navigate('/shop-business-info');
    },

    

    onError: (error) => {
      toast.error(`Failed to save: ${error.message}`);
    },

    
  });

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImageFiles(selectedFiles);
  };

  const handleVideoChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setVideoFiles(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('ProductName', productName);
    formData.append('Category', category);
    formData.append('Description', description);
    formData.append('Price', Number(price));
    // formData.append('Price', +price);
    // formData.append('deliveryTime', deliveryTime);
    // formData.append('shippingFee', shippingFee);
    // formData.append('shippingServices', shippingServices);

    // Append each image and video file to the FormData
    imageFiles.forEach((file) => formData.append('ProductImages', file));
    // videoFiles.forEach((file) => formData.append('productVideos', file));

    console.log(productName);
    createProduct(formData);

    // Reset all fields after successful submission
    // setProductName('');
    // setCategory('');
    // setDescription('');
    // setImageFiles([]);
    // setVideoFiles([]);
    // setDeliveryTime(1);
    // setShippingFee('');
    // setShippingServices('');
  };

  if (isPending) return <Loading/>


  return (
    <div className="product-listing-section">
      <div className="shop-heading mb-3 mt-5 my-3">
        <h2 className="mb-2 mt-5">Creating a listing</h2>
        <p className="mb-5">
          Add some photos and details about your item. Fill out what you can for
          now--you'll be able to edit this later.
        </p>
      </div>
      <div>
        <ProductListingImageUpload
          handleChange={handleImageChange}
          images={imageFiles}
        />
        {/* <ProductListingVideoUpload handleChange={handleVideoChange} /> */}
        <ProductListingDetails
          setDescription={setDescription}
          setProductName={setProductName}
          setCategory={setCategory}
          setPrice={setPrice}
          description={description}
          category={category}
          productName={productName}
          price={price}
        />
        <ProductListingShipping
          setDeliveryTime={setDeliveryTime}
          setShippingFee={setShippingFee}
          setShippingServices={setShippingServices}
          deliveryTime={deliveryTime}
          shippingFee={shippingFee}
          shippingServices={shippingServices}
        />
      </div>
      <div className="justify-between m-2 shop-buttons mt-5 pt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button handleClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ProductListing;
