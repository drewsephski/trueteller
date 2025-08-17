import { UserButton, useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-lg font-medium text-dark-navy" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default AuthWrapper;