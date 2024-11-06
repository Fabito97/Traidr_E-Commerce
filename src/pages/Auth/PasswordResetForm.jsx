// src/components/Login.js
import React from 'react';
import AuthContainer from './AuthContainer.jsx';
import './FormStyles.css';
import logo from '../../assets/Auth_assets/traidr.svg';
import google from '../../assets/Auth_assets/Google.svg';

const PasswordResetForm = () => {
  return (
    <AuthContainer>

      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Welcome back to Traidr</h2>
      <div className='wrapper'>
      <form className="form">
        <label htmlFor="Password" id='Password'>Password</label>
        <input type="Password" placeholder="**********" />
        <label htmlFor="ComfirmPassword">Comfirm Password</label>
        <input type="comfirmpassword" placeholder="**********" />
        <button type="submit" className="login-btn">Send reset instructions</button>
      </form>
      </div>
      <p className='a-btn'>Go back to <a href="/signup">Sign in</a></p>
    </AuthContainer>
  );
};

export default PasswordResetForm;