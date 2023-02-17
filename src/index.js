import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AppProvider } from './context.';
import './index.css';
import Home from './pages/home/home';
import ErrorPage from './pages/errorPage/errorPage';
import Rent from './pages/rent/rent';
import Login from './pages/login/login';
import ItemDetail from './pages/itemDetail/itemDetai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AppProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="rent" element={<Rent />} />
      <Route path="ItemDetail" element={<ItemDetail />} />
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="/form" element={<Form />} /> */}
    </Routes>
  </BrowserRouter>
  // </AppProvider>
);
