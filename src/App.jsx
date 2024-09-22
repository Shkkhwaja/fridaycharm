import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import CheckOut from './Section/Women/CheckOut';
import DeodorantPage from './Components/HeaderPages/DeodorantPage';
import NichePage from './Components/HeaderPages/NichePage';
import MiddleEsternPage from './Components/HeaderPages/MiddleEsternPage';
import DesignerPage from './Components/HeaderPages/DesignerPage';
import HomeFragrancePage from './Components/HeaderPages/HomeFragrancePage';
import BathAndBodyCarePage from './Components/HeaderPages/BathAndBodyCarePage';
import MinianturePage from './Components/HeaderPages/MinianturePage';
import Profile from './Components/Profile/Profile';
import {auth} from "../src/Firebase/Firebase"


const App = () => {
  const location = useLocation();



  return (

    <AnimatePresence>
      <CartProvider>
    <Header />
    <Routes key={location.pathname} location={location}>
    <Route path='/' element={<Home />} />
    <Route path='/collection/women' element={<Women />} />
    <Route path='/login' element={ <Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgot/password' element={<Forgot />} />
    <Route path='/collection/women/product/:womId' element={<WomenProductDetails />} />
    <Route path='/checkout' element={<CheckOut />} />
    <Route path='page/designer' element={<DesignerPage />} />
    <Route path='page/niche' element={<NichePage />} />
    <Route path='page/middleestern' element={<MiddleEsternPage />} />
    <Route path='page/deodorant' element={<DeodorantPage />} />
    <Route path='page/homefragrance' element={<HomeFragrancePage />} />
    <Route path='page/bathandbodycare' element={<BathAndBodyCarePage />} />
    <Route path='page/minianture' element={<MinianturePage />} />
    <Route path='/profile' element={<Profile />} />
    
    </Routes>
    
    
    <Footer />
    </CartProvider>
    </AnimatePresence>

  )
}

export default App
