import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import '../styles/AuthPages.css';

const SignInPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your journey</p>
        </div>
        <SignIn 
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/"
        />
      </div>
    </div>
  );
};

export default SignInPage;