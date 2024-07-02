import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import data from '../../Data/data'; // Ensure the path to your data is correct
import fallbackImg from '../../Images/Header_img/Second/Adil.jpeg'; // Add a fallback image

const WomenList = () => {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    setWomen(data.productData);  
  }, []);

  return (
    <div className='flex flex-wrap justify-center'>
      {women.map((item, index) => (
        <div key={index} className='flex flex-col items-center justify-center h-[22em] w-[12em] text-center mx-4 my-8'>
          <Link to={`/collection/women/product/${item.id}`}>
            <img
              src={item.image && item.image.src ? item.image.src : fallbackImg}
              alt={item.image && item.image.alt ? item.image.alt : "Product Image"}
              className='h-48 w-48 cursor-pointer'
            />
            <h2 className='p-2'>{item.title.slice(1,30)}</h2>
            <span className='py-2'>{item.rating}</span>
          </Link>
          <div className='flex justify-center items-center gap-2'>
            <p className='line-through'>{item.variants[0].compare_at_price || "1180"}</p>
            <p>{item.variants[0].price || "1000"}</p>
          </div>
          <p className='text-red-400 text-sm'>
            { NaN ? "10.00" : ((item.variants[0].compare_at_price - item.variants[0].price) / item.variants[0].compare_at_price * 100).toFixed(2)}% off
          </p>
        </div>
      ))}
    </div>
  );
};

export default WomenList;
