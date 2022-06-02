/*****************************************************
 * MessageNet Connections Mobile v3
 * App bootstrapper
 * 
 * TODO: Re-work .js and .jsx file extensions as needed.
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App/App';
//import Client from './models/Client'; //STRIPPED OUT FOR PORTFOLIO REDACTION
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Get our injection point
const appInjectionNode = document.getElementById('root');

// Do the initial render
const root = createRoot(appInjectionNode);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TODO: migrate hardcoded strings to values.js 
            Also, need to review whether this is the best design pattern! */}
        <Route path="/" element={<App route="main" />} />
        <Route path="/about" element={<App route="about" />} />
        <Route path="/login" element={<App route="login" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);