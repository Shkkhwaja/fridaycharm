import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Twitter, Search, Menu, SquareUser, ShoppingCart, X } from 'lucide-react';
import './header.css';
import logo from '../../Images/Header_img/logo.webp';
import Designer from './Designer';
import Niche from './Niche';
import MiddleEstern from './MiddleEstern';
import Deodorant from './Deodorant';
import HomeFragrance from './HomeFragrance';
import BathAndBodyCare from './BathAndBodyCare';
import Minianture from './Minianture';
import HeaderSlider from '../Slider/HeaderSlider';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';
import AddToCard from '../../Section/Women/AddToCart';


export default function Header() {
  const [showDesigner, setShowDesigner] = useState(false);
  const [showNiche, setShowNiche] = useState(false);
  const [showMiddleEastern, setShowMiddleEastern] = useState(false);
  const [showDeodorant, setShowDeodorant] = useState(false);
  const [showHomeFragrance, setShowHomeFragrance] = useState(false);
  const [showBathAndBodyCare, setShowBathAndBodyCare] = useState(false);
  const [showMiniature, setShowMiniature] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCart, setShowCart] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  const handleSearchModal = () => {
    setShowSearchModal(true)
  }
  const handleSearchClose = () => {
    setShowSearchModal(false)

  }

  const handleCart = () => {
    setShowCart(true)
  }

  const handleCartClose = () => {
    setShowCart(false)
  }

  return (
    <div>
      <nav className='h-6 bg-black relative z-20'>
        <div className='text-white text-[11px] flex gap-6 py-1 mx-8 tracking-widest font-thin hidden md:flex'>
        <h2>Track Your order</h2>
          
          <h2>Download Mobile App</h2>
        </div>
        <div className='flex gap-1 absolute right-10 top-1 hidden md:flex'>
          <Instagram size={18} stroke="white" />
          <Facebook size={18} stroke="white" />
          <Youtube size={18} stroke="white" />
          <Twitter size={18} stroke="white" />
        </div>
        <div className='h-[4em] md:h-[9em] bg-black py-4 px-8 -mt-1 flex flex-wrap justify-between'>
          {!isMobileMenuOpen ? (
            <Menu size={25} stroke="white" className='md:hidden -ml-2 cursor-pointer' onClick={toggleMobileMenu} />
          ) : (
            <X size={25} stroke="white" className='md:hidden -ml-2 cursor-pointer' onClick={toggleMobileMenu} />
          )}
          <Search onClick={handleSearchModal} size={25} className='relative left-[13.5em] md:left-2 cursor-pointer' stroke="white" />
          <img src={logo} className="h-10 mr-14 -mt-1 md:h-12" />
          <div className='flex gap-6'>
            <SquareUser size={25} className='hidden md:block' stroke="white" />
            <ShoppingCart onClick={handleCart} size={25} stroke="white" className='-mr-2 cursor-pointer' />
          </div>
          <ul className='custom-ul text-white text-[14px] uppercase flex mx-28 py-6 hidden md:flex'>
            <li>home</li>
            <li onMouseEnter={() => setShowDesigner(true)} onMouseLeave={() => setShowDesigner(false)}>designer perfume</li>
            <li onMouseEnter={() => setShowNiche(true)} onMouseLeave={() => setShowNiche(false)}>niche perfumes</li>
            <li onMouseEnter={() => setShowMiddleEastern(true)} onMouseLeave={() => setShowMiddleEastern(false)}>middle eastern</li>
            <li onMouseEnter={() => setShowDeodorant(true)} onMouseLeave={() => setShowDeodorant(false)}>deodorant</li>
            <li onMouseEnter={() => setShowHomeFragrance(true)} onMouseLeave={() => setShowHomeFragrance(false)}>home fragrance</li>
            <li onMouseEnter={() => setShowBathAndBodyCare(true)} onMouseLeave={() => setShowBathAndBodyCare(false)}>bath & body care</li>
            <li onMouseEnter={() => setShowMiniature(true)} onMouseLeave={() => setShowMiniature(false)}>miniature</li>
          </ul>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden bg-black text-white text-[14px] uppercase flex flex-col text-center absolute w-full z-30'>
            <Link to={''} className='py-2'>home</Link>
            <a href="#designer" className='py-2'>designer perfume</a>
            <a href="#niche" className='py-2'>niche perfumes</a>
            <a href="#middle-eastern" className='py-2'>middle eastern</a>
            <a href="#deodorant" className='py-2'>deodorant</a>
            <a href="#home-fragrance" className='py-2'>home fragrance</a>
            <a href="#bath-and-body" className='py-2'>bath & body care</a>
            <a href="#miniature" className='py-2'>miniature</a>
          </div>
        )}
      </nav>
      {showDesigner && <Designer onMouseEnter={() => setShowDesigner(true)} onMouseLeave={() => setShowDesigner(false)} />}
      {showNiche && <Niche onMouseEnter={() => setShowNiche(true)} onMouseLeave={() => setShowNiche(false)} />}
      {showMiddleEastern && <MiddleEstern onMouseEnter={() => setShowMiddleEastern(true)} onMouseLeave={() => setShowMiddleEastern(false)} />}
      {showDeodorant && <Deodorant onMouseEnter={() => setShowDeodorant(true)} onMouseLeave={() => setShowDeodorant(false)} />}
      {showHomeFragrance && <HomeFragrance onMouseEnter={() => setShowHomeFragrance(true)} onMouseLeave={() => setShowHomeFragrance(false)} />}
      {showBathAndBodyCare && <BathAndBodyCare onMouseEnter={() => setShowBathAndBodyCare(true)} onMouseLeave={() => setShowBathAndBodyCare(false)} />}
      {showMiniature && <Minianture onMouseEnter={() => setShowMiniature(true)} onMouseLeave={() => setShowMiniature(false)} />}
        {showSearchModal &&  <SearchModal onClose={handleSearchClose}/>}
        {showCart && <AddToCard onClose={handleCartClose} />}
        
        <HeaderSlider />
    </div>
  );
}
