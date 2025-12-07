// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// You might be importing AppRouter, or just App
import AppRouter from './router/AppRouter.jsx'; 
import './styles/global.css'; 
import App from './App.jsx';

// 🚨 IMPORT BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🚨 This is the fix: Wrap your root component with <BrowserRouter> */}
    <BrowserRouter>
      {/* Assuming AppRouter is where your routes are defined */}
      <AppRouter /> 
    </BrowserRouter>
  </React.StrictMode>,
);