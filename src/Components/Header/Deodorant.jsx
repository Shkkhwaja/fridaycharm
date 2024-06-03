import React from "react";
import "./header.css"

export default function Deodorant({ onMouseEnter, onMouseLeave }) {
  return (
    <div className="h-[13.5em] w-[15em] py-4 px-3 mx-[41.2em] bg-white shadow-lg relative top-[8em] flex leading-8 text-gray-800"
    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
     <ul >
        <li>Top Selling in Deodorant</li>
        <li>Top Branded Deodorants</li>
        <li>Top Branded Deodorant Stick</li>
        <li>Cosmo</li>
        <li>Swiss Arabian</li>
        <li>Rasasi</li>
     </ul>
    </div>
  );
}
