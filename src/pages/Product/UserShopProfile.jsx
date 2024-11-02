import { useRef, useState } from 'react';
import Button from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import ImageUpload from './ImageUpload';

const UserShopProfile = () => {
  const [inputClass, setInputClass] = useState('display-none');
  const inputRef = useRef(null);

  const handleInputDisplay = () => {
    setInputClass('display-block');
    setTimeout(() => inputRef.current.focus());
  };

  return (
    <div className="shop-profile flex align-center mt-3 pt-3 pb-5">
        <ImageUpload />
        <div>
          <h3>Emress Ki Stores</h3>
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
        </div>
      </div>
  )
}

export default UserShopProfile