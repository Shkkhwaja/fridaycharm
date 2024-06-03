import React from 'react'
import "./header.css"


export default function BathAndBodyCare({ onMouseEnter, onMouseLeave }) {
  return (
    <div>
          <div>
          <div className="h-[13.5em] w-[15.5em] py-4 px-3 mx-[57.6em] bg-white shadow-lg relative top-[8em] flex leading-8 text-gray-800"
              onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
              >
     <ul >
        <li>All Bath & Body Care</li>
        <li>Bodt Mist</li>
        <li>Body Lotion</li>
        <li>Mist+Lotion Combo</li>
        <li>Shaving Foam</li>
        <li>After Shave Lotion</li>
     </ul>
    </div>
    </div>
    </div>
  )
}
