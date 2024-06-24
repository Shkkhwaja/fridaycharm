import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import img from '../../Images/Header_img/Second/Adil.jpeg';
import data from '../../Data/Women.json';

const WomenList = () => {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    setWomen(data);  
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>
      {women.map((item, index) => (
        <div key={index} className='flex flex-col items-center justify-center h-[22em] w-[12em] text-center mx-4 my-8'>
          <Link to='/product'>
            <img
              src={item.imgSrc || img}
              alt="waiting"
              className='h-48 cursor-pointer'
            />
          </Link>
          <h2 className='p-2'>{item.title}</h2>
          <span className='py-2'>{item.rating}</span>
          <div className='flex justify-center items-center gap-2'>
            <p className='line-through'>{item.originalPrice}</p>
            <p>{item.discountedPrice}</p>
          </div>
          <p className='text-red-400 text-sm'>{item.savings}</p>
        </div>
      ))}
    </div>
  );
};

export default WomenList;
