import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import Home from './pages/home';
import Soon from './pages/soon';
import About from './pages/about';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/visit' Component={Soon}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);