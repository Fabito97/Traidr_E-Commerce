// src/components/SignUp.js
import React, { useState } from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../utils/api.js';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [referralSource, setReferralSource] = useState('');

  const { mutate: signupUser } = useMutation({
    mutationFn: (user) => postData({ url: 'Account/sign-up', data: user }),

    onSuccess: (data) => {
      console.log(data);
      toast.success('Registration successful');
      navigate('/login');
    },

    onError: (error) => {
      toast.error(`signup failed:  ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { userName, email, password, referralSource };
    signupUser(user);
    setEmail('');
    setUserName('');
    setReferralSource(0);
    setPassword('');
  };

  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Create an Account</h2>
      <form className="form">
        <input
          value={userName}
          type="text"
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>How did you hear about us?</label>
        <select
          value={referralSource}
          onChange={(e) => setReferralSource(Number(e.target.value))}
        >
          <option value={0}>Facebook</option>
          <option value={1}>Youtube</option>
          <option value={2}>Instagram</option>
          <option value={3}>Linkedin</option>
          <option value={4}>Friend</option>
          <option value={5}>Others</option>
        </select>
        <button className="google-signin">
          <img src={google} alt="Google logo" className="google-logo" />
          Sign in with Google
        </button>
        <button onClick={handleSubmit} type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
      <p className="a-btn">
        Already have an account? <a href="/login">Log In here</a>
      </p>
    </AuthContainer>
  );
};

export default SignUp;
