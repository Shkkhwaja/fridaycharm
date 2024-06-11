import React from 'react';
import img from '../../src/Images/Header_img/Second/Adil.jpeg';

const WomenList = () => {
  const boxes = [...Array(20)].map((_, i) => (
    <div key={i} className='flex flex-col items-center justify-center h-[22em]  w-[12em] text-center mx-4 my-8'>
      <img src={img} alt="waiting" className='h-48' />
      <h2 className='p-2'>Lattaf Khamrah Eau De parfume for unisex</h2>
      <span className='py-2'>⭐⭐⭐⭐⭐(29)</span>
      <div className='flex justify-center items-center gap-2'>
        <p className='line-through'>Rs. 2500.00</p> <p>Rs. 2,490.00</p>
      </div>
      <p className='text-red-400 text-sm'>Save Rs. 10.00</p>
    </div>
  ));

  return <div className='flex flex-wrap justify-center '>{boxes}</div>;
};

export default WomenList;
