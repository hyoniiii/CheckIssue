import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
