import React from "react";
import "./header.css"


export default function Minianture({ onMouseEnter, onMouseLeave }) {
  return (
    <div>
      <div>
        <div className="h-[11.5em] w-[15em] py-4 px-3 mx-[67.4em] bg-white shadow-lg relative top-[8em] flex leading-8 text-gray-800 "
            onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            >
          <ul>
            <li>Designer Perfume</li>
            <li>Niche Perfume Vials</li>
            <li>Designer Perfume </li>
            <li>Niche Perfume </li>
            <li>Mini Travel Set</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
