// src/components/AuthContainer.js
import React from 'react';
import './AuthContainer.css'; // Style file for layout

const AuthContainer = ({ children }) => {
  return (
    <div className="auth-background">
      <div className="auth-form-container">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
