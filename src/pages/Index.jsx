import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">History Learning Tool</h1>
        <p className="text-center">
          Welcome to the History Learning Tool. Navigate to different sections to start learning.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/figures" className="text-blue-500 underline">Figures</Link>
          <Link to="/timelines" className="text-blue-500 underline">Timelines</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;