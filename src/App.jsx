import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Privatepolicy from './Pages/Privatepolicy';
import Page404 from './Pages/Page404';
import Singleproduct from './Pages/Singleproduct';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
import { CartProvider } from './Context/CartContext';
import AppProvider from './Context/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import ForgotPassword from './Pages/ForgotPasswork';
import { LikedProvider } from './Context/LikedContext';
import LikedItems from './Pages/LikedItems';
import "swiper/css/bundle"

const App = () => {
  return (
    <>
      <AppProvider>
        <LikedProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/faq' element={<Faq />} />
                  <Route path='/privatepolicy' element={<Privatepolicy />} />
                  <Route path='/singleproduct/:id' element={<Singleproduct />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/likeditems' element={<LikedItems />} />
                  <Route path='/product' element={<Product />} />
                  <Route path='/checkout' element={<Checkout />} />
                </Route>
                <Route path='*' element={<Page404 />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/forgetpassword' element={<ForgotPassword />} />
              </Routes>
              <ToastContainer />
            </BrowserRouter>
          </CartProvider>
        </LikedProvider>
      </AppProvider>
    </>
  );
};

export default App;
