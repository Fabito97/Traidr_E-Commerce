import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import ImageUpload from './ImageUpload';
import FormGroup from '../../components/FormGroup';

const UserShopProfile = ({ data }) => {
  const [shopProfile, setShopProfile] = useState('');
  const [inputClass, setInputClass] = useState('display-none');
  const inputRef = useRef(null);

  const handleInputDisplay = () => {
    setInputClass('display-block');
    setTimeout(() => inputRef.current.focus());
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setShopProfile(imageUrl);
    }
  };

  return (
    <div className="shop-profile flex align-center mt-3 pt-3">
      {shopProfile ? (
        <div
          className="h-100 border flex-center"
          style={{ height: '300px', borderRadius: '10px', background:'#ddd' }}
        >
          <img width={200} src={shopProfile} alt="" />
        </div>
      ) : (
        <div     
        className="border p-2 flex justify-center image-upload-card"
        style={{ width: '200px', height: '240px' }}
      >
        <FormGroup className={'flex-column'}>
          <label htmlFor="shopImageUpload" className="mb-1">
            <FiPlus style={{ fontSize: '4rem', marginLeft: '5px' }} />
            <br />
            <small>Add a Photo</small>
          </label>
          <input
            className="display-none"
            type="file"
            accept="image/*"
            id="shopImageUpload"
            onChange={handleProfileImage}
          />
        </FormGroup>
      </div>
      )}
      <div>
        <h3 className="text-primary">{data?.shopName}</h3>

        {data?.description ? (
          data.description
        ) : (
          <span className="cursor-pointer" onClick={handleInputDisplay}>
            <label
              className={inputClass === 'display-block' ? 'display-none' : ''}
              htmlFor="description"
            >
              <FiPlus />
            </label>
            <input
              ref={inputRef}
              type="text"
              id="description"
              className={inputClass}
            />
            {inputClass === 'display-block' ? (
              <Button text="Add" className={'pr-2 pl-2'} />
            ) : (
              ''
            )}

            <small
              className={inputClass === 'display-block' ? 'display-none' : ''}
            >
              Add a short Description
            </small>
          </span>
        )}
      </div>
    </div>
  );
};

export default UserShopProfile;
