import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFormData } from '../../../utils/api';
import { toast } from 'react-toastify';
import ProductListingImageUpload from '../Shop/components/ImageUploadForm';
import ProductListingVideoUpload from '../Shop/components/VideoUploadFormUplod';
import ProductListingDetails from '../Shop/components/ProductListingDetails';
import Loading from '../../components/Loading';

const ProductUploadForm = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (product) =>
      postFormData({ url: 'Product/Create-Product', data: product }),

    onSuccess: () => {
      toast.success('Product successfully saved');
      queryClient.invalidateQueries(['shop']);
      queryClient.invalidateQueries(['products'])
      

      navigate('/product')
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
  };



  if(isPending) return <Loading/>


  return (
    <div className="product-listing-section container pt-5" style={{margin:'auto'}}>
      <div className="shop-heading mb-3 my-3 pt-5">
        <h2 className="mb-2">Upload Item</h2>        
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
      </div>
      <div className="justify-between m-2 shop-buttons mt-5 pt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button text='Upload' handleClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ProductUploadForm;


