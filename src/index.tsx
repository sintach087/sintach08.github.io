import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Pages';
const NotFound = React.lazy(() => import('./Pages/NotFound'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route 
          path="*" 
          element={
            <React.Suspense fallback="Loading . . .">
              <NotFound />
            </React.Suspense>
          } 
        />
    </Routes>
  </BrowserRouter>
);
