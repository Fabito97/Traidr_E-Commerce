// src/components/SignUp.js
import React from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg'; // Replace with your logo path
import google from '../../assets/Auth_assets/Google.svg';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Create an Account</h2>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <select>
          <option>How did you hear about us?</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Twitter</option>
        </select>
        <button className="google-signin"><img src={google} alt="Google logo" className="google-logo"/>Sign in with Google</button>
        <button onClick={() => navigate('/userloggedin')} type="submit" className="signup-btn">Sign Up</button>
      </form>
      <p className='a-btn'>Already have an account? <a href="/login">Log In here</a></p>
    </AuthContainer>
  );
};

export default SignUp;
