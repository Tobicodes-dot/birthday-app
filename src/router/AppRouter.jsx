// src/router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../pages/Loading.jsx';
import Home from '../pages/Home.jsx';
import Timeline from '../pages/Timeline.jsx';
import Letters from '../pages/Letters.jsx'
import Playlist from '../pages/Playlist.jsx';
// ... import other pages

const AppRouter = () => {
  return (
    <Routes>
      {/* Set Loading as the initial screen */}
      <Route path="/" element={<Loading />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/letters" element={<Letters />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  );
};

export default AppRouter;