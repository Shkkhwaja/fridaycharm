import React, {useState} from "react";
import "./header.css"


export default function Designer({ onMouseEnter, onMouseLeave }) {


  return (
    <div className="h-screen w-full bg-white shadow-md relative top-[8em] flex "
    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      <div className="uppercase text-[15px] p-8 -tracking-tight ">
        <h2 className="mt-2">MINIATURE</h2>
        <h2 className="mt-2">PERFUME GIFT SETS</h2>
        <h2 className="mt-3">TOP SELLING BRANDS</h2>
      </div>
      <div className="flex gap-10 px-6 py-16">
        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[14px] font-semibold text-gray-800">
            A - C
          </h2>
          <ul>
            <li>Abercrombie &amp; Fitch</li>
            <li>Antonio Banderas</li>
            <li>Aramis</li>
            <li>Ariana Grande</li>
            <li>Azzaro</li>
            <li>Banana Republic</li>
            <li>Bentley</li>
            <li>Billie Eilish</li>
            <li>Boucheron</li>
            <li>Bottega Veneta</li>
            <li>Britney Spears</li>
            <li>Burberry</li>
            <li>Bvlgari</li>
            <li>Calvin Klein</li>
            <li>Carolina Herrera</li>
            <li>Cartier</li>
            <li>Chanel</li>
            <li>Chloe</li>
            <li>Chopard</li>
            <li>Christian Dior</li>
            <li>Clinique</li>
            <li>Coach</li>
          </ul>
        </div>

        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[14px] font-semibold text-gray-800">
            D - H
          </h2>
          <ul>
            <li>David Beckham</li>
            <li>Davidoff</li>
            <li>Diesel</li>
            <li>Dkny</li>
            <li>Dolce &amp; Gabbana</li>
            <li>Dunhill</li>
            <li>Elie Saab</li>
            <li>Elizabeth Arden</li>
            <li>Escada</li>
            <li>Estee Lauder</li>
            <li>Etienne Aigner</li>
            <li>Eze</li>
            <li>Fcuk</li>
            <li>Ferrari</li>
            <li>Franck Olivier</li>
            <li>Geoffrey Beene</li>
            <li>Giorgio Armani</li>
            <li>Givenchy</li>
            <li>Gucci</li>
            <li>Guerlain</li>
            <li>Guess</li>

          </ul>
        </div>

        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[14px] font-semibold text-gray-800">
            I - N
          </h2>
          <ul>
            <li>Issey Miyake</li>
            <li>Jaguar</li>
            <li>Jean Paul Gaultier</li>
            <li>Jimmy Choo</li>
            <li>John Varvatos</li>
            <li>Joop</li>
            <li>Juicy Couture</li>
            <li>Kenneth Cole</li>
            <li>Kenzo</li>
            <li>Lacoste</li>
            <li>Lalique</li>
            <li>Lancome</li>
            <li>Lanvin</li>
            <li>Mancera</li>
            <li>Mercedes-Benz</li>
            <li>Mont Blanc</li>
            <li>Montale</li>
            <li>Narciso Rodriguez</li>
            <li>Nautica</li>
            <li>Nina Ricci</li>
          </ul>
        </div>

        <div className="h-[36em] w-[14em] px-4 text-gray-800 leading-6">
          <h2 className="relative -top-6 font-body text-[14px] font-semibold text-gray-800">
            P - Z
          </h2>
          <ul>
            <li>Paco Rabanne</li>
            <li>Police</li>
            <li>Prada</li>
            <li>Ralph Lauren</li>
            <li>Reyane Tradition</li>
            <li>Roberto Cavalli</li>
            <li>Rochas Moustache</li>
            <li>Salvatore Ferragamo</li>
            <li>Shakira</li>
            <li>St Dupont</li>
            <li>Thierry Mugler</li>
            <li>Tom Ford</li>
            <li>Tommy Hilfiger</li>
            <li>Trussardi</li>
            <li>United Colors of Benetton</li>
            <li>Valentino</li>
            <li>Versace</li>
            <li>Victoria's Secret</li>
            <li>Viktor &amp; Rolf</li>
            <li>Yves Saint Laurent</li>
            <li>Zadig &amp; Voltaire</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
