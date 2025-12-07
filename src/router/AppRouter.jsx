// src/router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../pages/Loading.jsx';
import Home from '../pages/Home.jsx';
// ... import other pages

const AppRouter = () => {
  return (
    <Routes>
      {/* Set Loading as the initial screen */}
      <Route path="/" element={<Loading />} /> 
      <Route path="/home" element={<Home />} />
      {/* ... other routes */}
    </Routes>
  );
};

export default AppRouter;