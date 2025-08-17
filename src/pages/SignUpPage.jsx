import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import '../styles/AuthPages.css';

const SignUpPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1 className="auth-title">Join True YouTeller</h1>
          <p className="auth-subtitle">Create your account to start your journey</p>
        </div>
        <SignUp 
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/"
        />
      </div>
    </div>
  );
};

export default SignUpPage;