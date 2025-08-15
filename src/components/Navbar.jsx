import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/trueyouteller.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="True YouTeller" className="navbar-brand-logo" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
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
          <li className="nav-item">
            <NavLink to="/feedback" className="nav-links" onClick={closeMobileMenu}>
              Feedback
            </NavLink>
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