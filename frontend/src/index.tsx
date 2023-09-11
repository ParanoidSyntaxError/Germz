import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import Home from './home-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
        <Route path='/metadata/:tokenId' element={
          <Navigate to={'/metadata/0.json'}/>
        }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);