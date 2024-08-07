import React from 'react';
import Men from '../../../Images/Header_img/Second/Men.webp';
import Women from '../../../Images/Header_img/Second/Women.webp';
import NewArrival from '../../../Images/Header_img/Second/New-Arrivals.webp';
import NewArrivalMob from '../../../Images/Header_img/Second/New-Arrivals-Mob.webp';
import {Link, useNavigate} from 'react-router-dom'

export default function SecondPage() {
  const navigate = useNavigate();

const  handlearrival  = () => {
    navigate('/page/minianture')
}


  return (
    <>
    <div className='w-full h-screen p-8 flex items-center justify-center'>
      <div className='flex flex-col md:flex-row md:flex-nowrap flex-wrap  h-auto w-auto gap-10 justify-center items-center'>
        <div className='flex flex-col items-center'>
        <Link to={'collection/women'}> 
         <img src={Women} alt="Women" className='w-full md:h-[35em] md:w-[35em] shadow-md transform transition-transform duration-500 hover:scale-105' /></Link>
          <span className='my-2'>For Women</span>
        </div>
        <div className='flex flex-col items-center'>
          <Link to={'collection/men'}>
          <img src={Men} alt="Men" className='w-full md:h-[35em] md:w-[35em] shadow-md transform transition-transform duration-500 hover:scale-105' /></Link>
          <span className='my-2'>For Men</span>
        </div>
      </div>
    </div>

    <img src={NewArrival} alt="new Arrival" onClick={handlearrival} className='my-10  hidden cursor-pointer md:block'/>
<img src={NewArrivalMob} alt="new Arrival" onClick={handlearrival} className='my-10 w-full md:hidden'/>


    </>
    
  );
}
