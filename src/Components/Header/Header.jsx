import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Search } from 'lucide-react';
import { SquareUser ,ShoppingCart } from 'lucide-react';
import "./header.css"


import logo from '../../Images/Header_img/logo.webp'
import Designer from './Designer';
import Niche from './Niche';
import MiddleEstern from './MiddleEstern';
import Deodorant from './Deodorant';
import HomeFragrance from './HomeFragrance';
import BathAndBodyCare from './BathAndBodyCare';
import Minianture from './Minianture';




export default function Header() {

  const [showDesigner, setShowDesigner] = useState(false);
  const [showNiche, setShowNiche] = useState(false);
  const [showMiddleEastern, setShowMiddleEastern] = useState(false);
  const [showDeodorant, setShowDeodorant] = useState(false);
  const [showHomeFragrance, setShowHomeFragrance] = useState(false);
  const [showBathAndBodyCare, setShowBathAndBodyCare] = useState(false);
  const [showMiniature, setShowMiniature] = useState(false);



  return (
    <div>
<nav className='h-6 bg-black'>
  <div className='text-white text-[11px] flex gap-6 py-1 mx-8 tracking-widest font-thin	'>
    <h2>Track Your order</h2>
    <h2>Download Mobile App</h2>
  </div>
  <div className='flex gap-1 absolute right-10 top-1'>
<Instagram size={18} stroke="white" />
<Facebook size={18} stroke="white" />
<Youtube size={18} stroke="white" />
<Twitter size={18} stroke="white" />
  </div>

  <div className='h-[9em] bg-black py-4 px-8 -mt-1 flex flex-wrap justify-between'>
    <Search size={25} stroke="white" />
    <img src={logo} className="h-14"/>
    <div className='flex gap-6'>
    <SquareUser size={25} stroke="white"/>
    <ShoppingCart size={25} stroke="white"/>
    </div>
    
    <ul className='custom-ul text-white text-[14px] uppercase flex mx-28 py-6'>
            <li>home</li>
            <li
              onMouseEnter={() => setShowDesigner(true)}
              onMouseLeave={() => setShowDesigner(false)}
            >
              designer perfume
            </li>
            <li
              onMouseEnter={() => setShowNiche(true)}
              onMouseLeave={() => setShowNiche(false)}
            >niche perfumes</li>
            <li
              onMouseEnter={() => setShowMiddleEastern(true)}
              onMouseLeave={() => setShowMiddleEastern(false)}
            >middle eastern</li>
            <li
              onMouseEnter={() => setShowDeodorant(true)}
              onMouseLeave={() => setShowDeodorant(false)}
            >deodorant</li>
            <li
              onMouseEnter={() => setShowHomeFragrance(true)}
              onMouseLeave={() => setShowHomeFragrance(false)}
            >home fragrance</li>
            <li
              onMouseEnter={() => setShowBathAndBodyCare(true)}
              onMouseLeave={() => setShowBathAndBodyCare(false)}
            >bath & body care</li>
            <li
              onMouseEnter={() => setShowMiniature(true)}
              onMouseLeave={() => setShowMiniature(false)}
            >minianture</li>
          </ul>
    
  </div>
</nav>
{showDesigner && <Designer />}
{showNiche && <Niche />}
{showMiddleEastern && <MiddleEstern />}
{showDeodorant && <Deodorant />}
{showHomeFragrance && <HomeFragrance />}
{showBathAndBodyCare && <BathAndBodyCare />}
{showMiniature && <Minianture />}

    </div>
  )
}
