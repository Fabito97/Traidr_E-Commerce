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
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const SignUp = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  console.log("Client Id:", clientId);

  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [referralSource, setReferralSource] = useState('');

  const { mutate: authenticateUser } = useMutation({
    mutationFn: ({url, data}) => postData({ url, data }),

    onSuccess: (data) => {
      console.log(data);

      if (data?.token) {
        localStorage.setItem('userToken', data.token);
        toast.success('Login successful');
        navigate('/userloggedin')
      } else {
        toast.success("Registration successful");
        navigate('/login');
      }
    },

    onError: (error) => {
      toast.error(`Authentication failed:  ${error.message || 'Something went wrong'}`);
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { userName, email, password, referralSource };
    authenticateUser({url: "Account/sign-up", data: user});
    setEmail('');
    setUserName('');
    setReferralSource(0);
    setPassword('');
  };

  const handleGoogleSuccess = (response) => {
    console.log(response.credential);
    const tokenData = { token: response.credential };
    
    authenticateUser({url: "Account/GoogleAuth", data: tokenData});
  };

  const handleGoogleError = (error) => {
    toast.error(error.message || "Unable to verify Gmail account")
  }

  return (
    <AuthContainer>
      <img src={logo} alt="Traidr logo" className="logo" />
      <h2>Create an Account</h2>
      <form className="form">
        <input
          value={userName}
          type="text"
          placeholder="UserName"
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
        <div className="text-left mt-1" style={{ fontSize: '12px' }}>
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
        </div>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            text="Sign in with Google"
          />
        </GoogleOAuthProvider>
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
