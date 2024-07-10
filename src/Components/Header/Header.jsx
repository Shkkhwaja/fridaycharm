import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [tabOpen, setTabOpen] = useState("");
  const tabsBodyRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const users = JSON.parse(localStorage.getItem('currentUser')) || [];

  const data = [
    { label: "HOME", value: "home", desc: "", path: "/" },
    { label: "DESIGNER PERFUME", value: "designer-perfume", desc: <Designer />, path: "/page/designer" },
    { label: "NICHE PERFUME", value: "niche-perfumes", desc: <Niche />, path: "/page/niche" },
    { label: "MIDDLE EASTERN", value: "middle-eastern", desc: <MiddleEstern />, path: "/page/middleestern" },
    { label: "DEODORANT", value: "deodorant", desc: <Deodorant />, path: "/page/deodorant" },
    { label: "HOME FRAGRANCE", value: "home-fragrance", desc: <HomeFragrance />, path: "/page/homefragrance" },
    { label: "BATH & BODY CARE", value: "bath-body-care", desc: <BathAndBodyCare />, path: "/page/bathandbodycare" },
    { label: "MINIATURE", value: "miniature", desc: <Minianture />, path: "/page/minianture" }
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

  const loginRedirect = () => {
   if(users.length === 0){ navigate('/login')} 
   else{
    navigate('/account')
   }
  };

  const handleTabClick = (value, path) => {
    if (value === "home") {
      setTabOpen("");
      setActiveTab(value);
      navigate('/');
    } else if (tabOpen === value) {
      setTabOpen("");
      setActiveTab(value);
      navigate(path);
    } else {
      setTabOpen(value);
      setActiveTab(value);
      navigate(path);
    }
  };

  const handleClickOutside = (event) => {
    if (tabsBodyRef.current && !tabsBodyRef.current.contains(event.target)) {
      setTabOpen("");
    }
  };

  useEffect(() => {
    if (tabsBodyRef.current) {
      const height = tabOpen ? `${tabsBodyRef.current.scrollHeight}px` : "0px";
      tabsBodyRef.current.style.height = height;
    }
  }, [tabOpen]);

  useEffect(() => {
    setActiveTab("home");
    setTabOpen("");
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className='h-[4em] md:h-[9em] bg-black py-4 px-9 -mt-1 flex flex-wrap justify-between'>
          {!isMobileMenuOpen ? (
            <Menu size={25} stroke="white" className='md:hidden -ml-2 cursor-pointer' onClick={toggleMobileMenu} />
          ) : (
            <X size={25} stroke="white" className='md:hidden -ml-2 cursor-pointer' onClick={toggleMobileMenu} />
          )}
          <Search onClick={handleSearchModal} size={25} className='relative left-[13.5em] md:left-2 cursor-pointer' stroke="white" />
          <img src={logo} className="h-10 mr-14 -mt-1 md:h-12" alt="Logo" />
          <div className='flex gap-6'>
            <div className='relative hidden md:block'>
              <SquareUser size={25} className='cursor-pointer' stroke="white" onClick={loginRedirect} />
              <div className={`${users.length === 0 ? 'hidden' : 'block'} absolute -top-1 -right-1 bg-red-700 rounded-full w-3 h-3 flex items-center justify-center text-black text-[12px] border-2 border-white`} />
            </div>
            <div className="relative">
              <ShoppingCart onClick={handleCart} size={25} stroke="white" className="-mr-2 cursor-pointer" />
              <div className="absolute -top-3 -right-3 bg-white rounded-full w-4 h-4 flex items-center justify-center text-black text-[12px] border border-white">
                {totalItems}
              </div>
            </div>
          </div>
          <Tabs value={activeTab} className="w-full bg-transparent mt-6 hidden md:block">
            <TabsHeader
              className="rounded-none border-b border-white bg-transparent p-2"
              indicatorProps={{
                className:
                  "bg-white border-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value, path }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handleTabClick(value, path)}
                  className={`text-[13px] tracking-wide ${activeTab === value ? 'text-black' : 'text-white'}`}
                  style={{ color: activeTab === value ? '#000000' : '#ffffff' }}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody ref={tabsBodyRef} className="w-full overflow-hidden relative transition-height duration-300">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className={`w-full ${tabOpen === value || value === "home" ? 'relative bottom-[8em]' : 'h-0 overflow-hidden'}`}>
                  {tabOpen === value && desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden bg-black text-white text-[14px] uppercase flex flex-col text-center absolute w-full z-30'>
            {data.map(({ label, value, path }) => (
              <div key={value} className='py-2 cursor-pointer' onClick={() => handleTabClick(value, path)}>
                {label}
              </div>
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
