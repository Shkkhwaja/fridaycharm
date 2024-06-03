import React from 'react'
import "./header.css"


export default function HomeFragrance({ onMouseEnter, onMouseLeave }) {
  return (
    <div>
          <div className="h-[13.5em] w-[15.5em] py-4 px-3 mx-[48em] bg-white shadow-lg relative top-[8em] flex leading-8 text-gray-800"
              onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
              >
     <ul >
        <li>Top Selling in Home Fragrance</li>
        <li>Bakhoor Burner</li>
        <li>Fragrance Paste</li>
        <li>Fragrance Sticks</li>
        <li>Aroma Diffuser</li>
        <li>Aroma Candle</li>
     </ul>
    </div>
    </div>
  )
}
