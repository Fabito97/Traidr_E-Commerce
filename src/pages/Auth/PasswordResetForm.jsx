// src/components/Login.js
import React, { useState } from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../../../utils/api.js';
import { toast } from 'react-toastify';

const PasswordResetForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const navigate = useNavigate()

  const { mutate: resetPassword } = useMutation({
    mutationFn: (password) =>
      postData({ url: 'Account/reset-password', data: password }),
    onSuccess: (data) => {
      toast.info(data.message);
      navigate('/login')
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const resetParams = { email, token, newPassword: password };

    resetPassword(resetParams);
  };

  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Welcome back to Traidr</h2>
      <div className="wrapper">
        <form className="form">
          <label htmlFor="Password" id="Password">
            Password
          </label>
          <input
            type="Password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="ComfirmPassword">Comfirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="**********"
          />
          <button type="submit" className="login-btn" onClick={handleSubmit}>
            Send reset instructions
          </button>
        </form>
      </div>
      <p className="a-btn">
        Go back to <a href="/signup">Sign in</a>
      </p>
    </AuthContainer>
  );
};

export default PasswordResetForm;
