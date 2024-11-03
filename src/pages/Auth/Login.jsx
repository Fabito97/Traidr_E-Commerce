// src/components/Login.js
import React from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Welcome back to Traidr</h2>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <button className="google-signin"><img src={google} alt="Google logo" className="google-logo"/>Sign in with Google</button>
        <button onClick={() => navigate('/userloggedin')} type="submit" className="login-btn">Log In</button>
      </form>
      <p className='a-btn'>Don't have an account? <a href="/signup">Sign Up here</a></p>
    </AuthContainer>
  );
};

export default Login;