import { UserButton, useAuth } from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinkClasses = "px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md";
  const primaryButton = "bg-bright-orange text-white hover:bg-orange-600";
  const secondaryButton = "bg-white text-dark-navy border-2 border-dark-navy hover:border-bright-orange hover:text-bright-orange";

  return (
    <nav className={`w-full ${isHomePage ? 'absolute top-0' : 'bg-white shadow-sm'} z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-dark-navy">Trueteller</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link
                  to="/profile"
                  className={`${navLinkClasses} ${secondaryButton} flex items-center`}
                >
                  <span>Profile</span>
                </Link>
                <div className="ml-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/sign-in"
                  className={`${navLinkClasses} ${secondaryButton}`}
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className={`${navLinkClasses} ${primaryButton}`}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;