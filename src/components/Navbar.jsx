import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/trueyouteller.png';
import { FaBrain, FaRobot, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="True YouTeller" className="navbar-brand-logo" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick} aria-label="Toggle menu">
          <div className={`hamburger ${click ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/personality-types" className="nav-links" onClick={closeMobileMenu}>
              Personality Types
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-links dropdown-toggle" onClick={closeMobileMenu}>
              Gamify ▼
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <NavLink to="/profile" className="dropdown-link" onClick={closeMobileMenu}>
                  🏆 My Profile
                </NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/leaderboard" className="dropdown-link" onClick={closeMobileMenu}>
                  📊 Leaderboard
                </NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/compare" className="dropdown-link" onClick={closeMobileMenu}>
                  🔄 Compare Friends
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown" ref={navRef}>
            <div 
              className="nav-links dropdown-toggle" 
              onClick={toggleDropdown}
              role="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Tools {dropdownOpen ? <FaChevronUp size={14} style={{ marginLeft: '4px' }} /> : <FaChevronDown size={14} style={{ marginLeft: '4px' }} />}
            </div>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <NavLink to="/mini-quiz" className="dropdown-link" onClick={closeMobileMenu}>
                  <FaBrain className="nav-icon" /> Quick Test
                </NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/ai-report" className="dropdown-link" onClick={closeMobileMenu}>
                  <FaRobot className="nav-icon" /> AI Insights
                </NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/feedback" className="dropdown-link" onClick={closeMobileMenu}>
                  Feedback
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 