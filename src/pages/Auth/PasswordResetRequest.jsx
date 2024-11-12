// src/components/Login.js
import React, { useState } from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../../../utils/api.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate()
  const {mutate: getResetLink} = useMutation({
    mutationFn: (email) => postData({url: "Account/request-password-reset", data: email}),
    onSuccess: (data) => {
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const userEmail = { email }
    getResetLink(userEmail)
  }

  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h3 className="mb-3">Reset your Password</h3>
      <p
        className="mb-3
       p-tag"
      >
        Enter your email below and we’ll send you <br /> instructions on how to
        reset your password.
      </p>
      <div className="wrapper">
        <form className="form">
          <label htmlFor="Password">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="BabalolaYu@gmail.com"
          />
          <button
            type="submit"
            className="login-btn"
            onClick={handleEmailSubmit}
          >
            Reset password
          </button>
        </form>
      </div>
    </AuthContainer>
  );
};

export default PasswordResetRequest;

{
  /* <div className="section-reset">
        <div className='reset-div'>
        <img src={logo} alt="Traidr logo" className="logo" />
      <h3>Reset your Password</h3>
      <p className='mb-2 p-tag'>Enter your email below and we’ll send you  <br /> instructions on how to reset your password.</p>
      <form className="form reset-form">
        <label htmlFor="email" className='text-left email-label'>Email Address</label>
        <input type="email" placeholder="BabalolaYu@gmail.com" />
        <button type="submit" className="login-btn">Send reset instructions</button>
      </form>
        </div>
      </div> */
}
