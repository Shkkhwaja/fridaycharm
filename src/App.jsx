import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Header/Home';
import Women from './Section/Women/Women';
import WomenProductDetails from './Section/Women/WomenProductDetails';
import { CartProvider } from "react-use-cart";


const App = () => {
  const location = useLocation();

  return (

    <AnimatePresence>
      <CartProvider>
    <Header />
    <Routes key={location.pathname} location={location}>
    <Route path='/' element={<Home />} />
    <Route path='/collection/women' element={<Women />} />
    <Route path='/collection/women/product/:womId' element={<WomenProductDetails />} />

    </Routes>
    <Footer />
    </CartProvider>
    </AnimatePresence>

  )
}

export default App
