import { FaCamera, FaPlus } from 'react-icons/fa';
import FormGroup from '../../components/FormGroup';
import './Product.css';

import { useRef, useState } from 'react';
import UserShopProfile from './UserShopProfile';
import ProductCard from '../../components/ProductCard';
import ImageUpload from './ImageUpload';
import Button from '../../components/Button';

const Product = () => {

  return (
    <div className="p-4 container product-section">
      <UserShopProfile />

      <div className="mt-2">
        <h2 className="mb-1">Upload Images</h2>
        <div className="border p-5 grid-p">
          <div className='mr-2 photo-upload-tip'>
            <h2 className="mb-1">Photos</h2>
            <p style={{fontSize:'12px'}} className="mb-2 faint">
              Add some aesthetic photos for your shop{' '}
            </p>
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
              <ProductCard />
              <ImageUpload />
            <div className='grid-bg'>
            </div>
        </div>
          <Button className={'mt-5'} text="Upload item" />
      </div>
    </div>
  );
};

export default Product;
