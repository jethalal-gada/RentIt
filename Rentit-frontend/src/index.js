import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home/home';
import ErrorPage from './pages/errorPage/errorPage';
import Rent from './pages/rent/rent';
import Login from './pages/login/login';
import ItemDetails from './pages/itemDetail/itemDetails';
// import Profile from './pages/profile/profile';
import { AppProvider } from './authContext';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user' element={<Login />} />
        {/* <Route path='profile' element={<Profile />} /> */}
        <Route path='rent' element={<Rent />} />
        <Route path='ItemDetails' element={<ItemDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AppProvider>
  </BrowserRouter>
);
