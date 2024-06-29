import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import SearchModal from './SearchModal';
import AddToCard from '../../Section/Women/AddToCart';
import { useCart } from "react-use-cart";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { totalItems } = useCart();
  const [activeTab, setActiveTab] = React.useState("home"); // Set initial active tab

  const data = [
    { label: "HOME", value: "home", desc: "" },
    { label: "DESIGNER PERFUME", value: "designer-perfume", desc: <Designer /> },
    { label: "NICHE PERFUMES", value: "niche-perfumes", desc: <Niche /> },
    { label: "MIDDLE EASTERN", value: "middle-eastern", desc: <MiddleEstern /> },
    { label: "DEODORANT", value: "deodorant", desc: <Deodorant /> },
    { label: "HOME FRAGRANCE", value: "home-fragrance", desc: <HomeFragrance /> },
    { label: "BATH & BODY CARE", value: "bath-body-care", desc: <BathAndBodyCare /> },
    { label: "MINIATURE", value: "miniature", desc: <Minianture /> }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleSearchClose = () => {
    setShowSearchModal(false);
  };

  const handleCart = () => {
    setShowCart(true);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  return (
    <div className="header-container">
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
          <img src={logo} className="h-10 mr-14 -mt-1 md:h-12" alt="Logo" />
          <div className='flex gap-6'>
           <Link to="/login"> <SquareUser size={25} className='hidden cursor-pointer md:block' stroke="white" /></Link>
            <div className="relative">
              <ShoppingCart
                onClick={handleCart}
                size={25}
                stroke="white"
                className="-mr-2 cursor-pointer"
              />
              <div className="absolute -top-3 -right-3 bg-white rounded-full w-4 h-4 flex items-center justify-center text-black text-[12px]">
                {totalItems}
              </div>
            </div>
          </div>
          <Tabs value={activeTab} className="w-full h-[4em] mt-6 hidden md:block">
            <TabsHeader
              className="rounded-none border-b border-white bg-transparent p-2"
              indicatorProps={{
                className:
                  "bg-white border-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => setActiveTab(value)}
                  className={`text-[13px] tracking-wide ${activeTab === value ? 'text-black' : 'text-white'}`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="w-full h-screen relative -top-[8em]">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="w-full h-full">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden bg-black text-white text-[14px] uppercase flex flex-col text-center absolute w-full z-30'>
            {data.map(({ label, value }) => (
              <Link to={`/${value}`} key={value} className='py-2'>{label}</Link>
            ))}
          </div>
        )}
      </nav>
      {showSearchModal && <SearchModal onClose={handleSearchClose} />}
      {showCart && <AddToCard onClose={handleCartClose} />}
      <HeaderSlider />
    </div>
  );
}
