import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js'
import Home from './pages/Home/Home.js'
import SignIn from './pages/SignIn/SignIn.js'
import User from './pages/User/User.js'
import Footer from './components/Footer/Footer.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/User' element={<User />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);