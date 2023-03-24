import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home/home';
import ErrorPage from './pages/errorPage/errorPage';
import Rent from './pages/rent/rent';
import Login from './pages/user/user';
import ItemDetail from './pages/itemDetail/itemDetai';
// import Profile from './pages/profile/profile';
import Test from './pages/testPage/test';
// import { AppProvider } from './authContext';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AppProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='user' element={<Login />} />
      {/* <Route path='profile' element={<Profile />} /> */}
      <Route path='rent' element={<Rent />} />
      <Route path='ItemDetail' element={<ItemDetail />} />
      <Route path='test' element={<Test />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  // </AppProvider>
);
