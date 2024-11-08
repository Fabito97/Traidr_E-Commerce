import { useState } from 'react';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../../../utils/api';
import { toast } from 'react-toastify';

const BusinessInfoForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const navigate = useNavigate();

  const { mutate: addAddress } = useMutation({
    mutationFn: (address) =>
      postData({ url: 'Address/add-address', data: address }),

    onSuccess: (data) => {
      console.log(data);
      toast.success('Shop successfully saved');
      navigate('/shop-security');
    },

    onError: (error) => {
      toast.error(`failed to save:  ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const address = { street, city, state };
    addAddress(address);
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
  };

  return (
    <>
      <div className="business-form-section border p-5 mt-5 mb-5">
        <div className="section-header mb-5">
          <h3 className="mb-2">Tell us more about your business</h3>
          <p className="faint">
            Tell the world all about your item and why they'll love it
          </p>
        </div>
        <div className="grid-bg">
          <div>
            <h3>Legal business address</h3>
            <p className="faint mt-1 w-70">
              Tell the world all about your item and why they'll love it.
            </p>
          </div>
          <form>
            <FormGroup label="Street Address" className={'mb-2'}>
              <input
                className="w-100 mt-1"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                />
            </FormGroup>
            <FormGroup label="City" className={'mb-2'}>
              <input
                className="w-100 mt-1"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </FormGroup>
            <FormGroup label="State" className={'mb-2'}>
              <input
                className="w-100 mt-1"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormGroup>
            <FormGroup label="Zip Code" className={'mb-2'}>
              <input
                className="w-50 d-block mt-1"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </FormGroup>
          </form>
        </div>
      </div>
      <div className="justify-between m-2 shop-buttons mt-5">
        <Button color="#E04F16" background="#fff" text="Cancel" />
        <Button handleClick={handleSubmit} />
      </div>
    </>
  );
};

export default BusinessInfoForm;
