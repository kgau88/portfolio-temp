import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">[Your Name]</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Me</NavLink></li>
        <li><NavLink to="/experience" className={({isActive}) => isActive ? 'active' : ''}>Experience</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
