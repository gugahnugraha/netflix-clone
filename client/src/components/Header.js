import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          Netflix Clone
        </Link>
        <div className="nav-links">
          <Link to="/movies">Movies</Link>
          <Link to="/tv-shows">TV Shows</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
