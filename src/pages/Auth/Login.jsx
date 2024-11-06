// src/components/Login.js
import React, { useState } from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';
import { useNavigate } from 'react-router-dom';
import { getData, postData } from '../../../utils/api.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: logInUser } = useMutation({
    mutationFn: (user) => postData({ url: 'Account/login', data: user }),
    onSuccess: (data) => {
      console.log(data);
      
      if (data && data.token) {
        localStorage.setItem('userToken', data.token);
        toast.success('Log in successful');

        navigate('/userloggedin')
      }
    },

    onError: (error) => {
      toast.error(`Login failed:  ${error.message || "Invalid credentials"}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    logInUser(user);
    setEmail('')
    setPassword('')
  };
  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Welcome back to Traidr</h2>
      <form className="form">
        <input
          value={email}
          type="text"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
        <button className="google-signin">
          <img src={google} alt="Google logo" className="google-logo" />
          Sign in with Google
        </button>
        <button onClick={handleSubmit} type="submit" className="login-btn">
          Log In
        </button>
      </form>
      <p className="a-btn">
        Don't have an account? <a href="/signup">Sign Up here</a>
      </p>
    </AuthContainer>
  );
};

export default Login;
