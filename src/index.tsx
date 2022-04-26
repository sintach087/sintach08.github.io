import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      {/* <Route path="*" element={<Navigate to="home" />} /> */}
    </Routes>
  </BrowserRouter>
);
