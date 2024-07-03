import React from "react";
import "./header.css"


export default function MiddleEstern({ onMouseEnter, onMouseLeave }) {
  return (
    <div className="h-screen w-auto bg-white relative shadow-md top-[8em] flex"
    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-16 px-[26em] py-16">
        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[12px] font-semibold text-gray-800">
          MIDDLE EASTERN PERFUME
          </h2>

          <ul>
  <li>Abdul Samad Al Qurashi</li>
  <li>Ahmed Al Maghribi</li>
  <li>Ajmal</li>
  <li>Al Haramain</li>
  <li>Al Rehab</li>
  <li>Arabian Oud</li>
  <li>Anfar</li>
  <li>Afnan</li>
  <li>Armaf</li>
  <li>Ajyad</li>
  <li>Adyan</li>
  <li>Ard Al Oud</li>
  <li>Birra</li>
  <li>Estiara</li>
  <li>Flavia Marble</li>
  <li>Hamidi</li>
  <li>Ibraheem Al Qurashi</li>
  <li>IKOS</li>
  <li>Khalis</li>
  <li>Lattafa</li>

</ul>

        </div>

        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[12px] font-semibold text-gray-800">
            ATTAR OIL
          </h2>
          <ul>
  <li>Afnan Attar</li>
  <li>Ahmed Al Maghribi Attar</li>
  <li>Ajmal Attar</li>
  <li>Al Aswad</li>
  <li>Al Saud</li>
  <li>Al Haramain</li>
  <li>Anfar</li>
  <li>Armaf</li>
  <li>Asreh Perfumes</li>
  <li>Birra Attar</li>
  <li>FridayCharm</li>
  <li>Khalis</li>
  <li>Naseem Attar</li>
  <li>Premium Attar</li>
  <li>Rasasi</li>
  <li>Swiss Arabian</li>
  <li>Empty Attar Bottle</li>
  <li>Faisal Abdul Rehman</li>
</ul>

        </div>
      </div>
    </div>
  );
}
