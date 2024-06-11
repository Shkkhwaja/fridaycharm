import React from 'react';
import Men from '../../../Images/Header_img/Second/Men.webp';
import Women from '../../../Images/Header_img/Second/Women.webp';
import NewArrival from '../../../Images/Header_img/Second/New-Arrivals.webp';
import {Link} from 'react-router-dom'

export default function SecondPage() {
  return (
    <>
    <div className='w-full h-screen p-8 flex items-center justify-center'>
      <div className='flex flex-col md:flex-row md:flex-nowrap flex-wrap  h-auto w-auto gap-10 justify-center items-center'>
        <div className='flex flex-col items-center'>
        <Link to={'collection/women'}>  <img src={Women} alt="Women" className='w-full md:h-[35em] md:w-[35em] shadow-md transform transition-transform duration-500 hover:scale-105' /></Link>
          <span className='my-2'>For Her</span>
        </div>
        <div className='flex flex-col items-center'>
          <img src={Men} alt="Men" className='w-full md:h-[35em] md:w-[35em] shadow-md transform transition-transform duration-500 hover:scale-105' />
          <span className='my-2'>For Him</span>
        </div>
      </div>
    </div>

<img src={NewArrival} alt="new Arrival" className='my-10'/>

    </>
    
  );
}
