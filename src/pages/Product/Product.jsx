import './Product.css';

import { useEffect, useState } from 'react';
import UserShopProfile from './UserShopProfile';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShopData} from '../../../utils/api';
import ProductUploadForm from './ProductUploadForm';
import { currency } from '../../../utils/cartUtils';

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  // const [form, setForm] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ['shop'],
    queryFn: () => getShopData(`Shop/shop-inventories`),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });

  // Update products state when data changes
  useEffect(() => {
    if (data?.products?.$values) {
      setProducts(data.products.$values);

      const productImages = products.map((product) =>
        console.log(product.images.$values)
      );
      setImages(productImages);
    }
  }, [data]);

  // Show loading or error states as needed
  if (isLoading) return <p>Loading shop data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="p-4 container product-section">
      <UserShopProfile data={data} />

      <div className='flex justify-between'>

        {/* {form ? (
          <ProductUploadForm setForm={setForm} />
        ) : ( */}
          <>
              <h2 className="mt-5 pt-2">Your products</h2>
              <Button
                className={'mt-5'}
                text="Upload new item"
                handleClick={() => navigate('/product-upload')}
                
              />
          </>
            {/* )} */}
      </div>


      <div className="p-3 border mt-3 border-radius">
        <div className=" flex justify-between w-100 p-2 border-b">
          <h4>images</h4>
          <h4>Name</h4>
          <h4>Description</h4>
          <h4>Prices</h4>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ height: '200px', borderBottom: '1px #ddd solid' }}
            className="flex justify-between align-center text-center inventory"
          >
            <div
              className="border border-radius flex-center p-1"
              style={{ width: '10%' }}
            >
              <img width={100} src={product.images.$values[0]} alt="" />
            </div>
            <span className="text-center">{product.name}</span>
            <small>{product.description}</small>
            <small>{currency}{product.price.toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
