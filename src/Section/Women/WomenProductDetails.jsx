import React from 'react';
import imgMain from '../../Images/Header_img/Second/Adil.jpeg';

const WomenProductDetails = () => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <img src={imgMain} alt="product img" className='w-full md:w-auto max-h-[28em] md:max-h-[36em] object-contain shadow-md mx-4 my-10 md:my-0' />

      <div className='flex-1 flex flex-col mx-5 '>
        <h2 className='text-3xl font-bold text-center md:text-left mt-4 md:mt-0 mx-4'>
          Lattafa Khamrah Eau De Parfum For Unisex
        </h2>
        <span className='mx-4 mt-4'>⭐⭐⭐⭐⭐(10)</span>
        <div className='flex gap-3 my-4 font-thin md:mx-4'>
          <p className='line-through'>Rs. 2500.00</p>
          <p>Rs. 2490.00</p>
          <p className='text-red-400 text-sm'>Save Rs. 10.00</p>
        </div>
        <p className='mx-4 -mt-4'>Tax included. Shipping calculated at checkout.</p>
        <hr className="w-full border-black my-6 h-6 md:h-4" />

      </div>

    </div>
  );
};

export default WomenProductDetails;
