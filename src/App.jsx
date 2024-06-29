import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Header/Home';
import Women from './Section/Women/Women';
import WomenProductDetails from './Section/Women/WomenProductDetails';
import { CartProvider } from "react-use-cart";
import Login from './Components/Forms/Login'
import Forgot from './Components/Forms/Forgot'
import Register from './Components/Forms/Register'


const App = () => {
  const location = useLocation();

  return (

    <AnimatePresence>
      <CartProvider>
    <Header />
    <Routes key={location.pathname} location={location}>
    <Route path='/' element={<Home />} />
    <Route path='/collection/women' element={<Women />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgot/password' element={<Forgot />} />
    <Route path='/collection/women/product/:womId' element={<WomenProductDetails />} />
    </Routes>
    <Footer />
    </CartProvider>
    </AnimatePresence>

  )
}

export default App
