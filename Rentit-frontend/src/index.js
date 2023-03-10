import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home/home';
import ErrorPage from './pages/errorPage/errorPage';
import Rent from './pages/rent/rent';
import Login from './pages/login/login';
import ItemDetail from './pages/itemDetail/itemDetai';
import Profile from './pages/profile/profile';
import Test from './pages/testPage/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={<Profile />} />
      <Route path='rent' element={<Rent />} />
      <Route path='ItemDetail' element={<ItemDetail />} />
      <Route path='test' element={<Test />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
