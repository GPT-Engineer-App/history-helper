import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <div className="space-x-4">
          <Link to="/figures" className="text-gray-300 hover:text-white">Figures</Link>
          <Link to="/timelines" className="text-gray-300 hover:text-white">Timelines</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;