import React from 'react';
import '../styles/global.css';
import BottomNav from '../components/shared/bottomNav';

const Home = () => {
  return (
    <div className="min-h-screen relative bg-white flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to your special memory app!</h2>
      {/* Other content */}
      <BottomNav />
    </div>
  );
};

export default Home;