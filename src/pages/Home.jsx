import React from 'react';
import '../styles/global.css';
import BottomNav from '../components/shared/bottomNav';
import VideoPreview from '../components/home/VideoPreview';
import BirthdayMessage from '../components/home/BirthdayMessage';

const Home = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center" style={{
    background: "linear-gradient(180deg, #FFFFFF 0%, #FFF6F9 35%, #FFF2F6 100%)"
  }}>
      {/* Other content */}
      <div className="w-full min-h-screen">
        <VideoPreview />
      </div>
      <BirthdayMessage />
      <BottomNav />
    </div>
  );
};

export default Home;