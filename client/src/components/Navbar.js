import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-red-600 text-2xl font-bold">NETFLIX</Link>
        <div className="flex gap-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
          <Link to="/tv-shows" className="text-white hover:text-gray-300">TV Shows</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
