import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import data from '../../Data/data'; // Ensure the path to your data is correct
import fallbackImg from '../../Images/Header_img/Second/Adil.jpeg'; // Add a fallback image
import WomenSkeleton from '../Skeleton/WomenSkeleton';

const NichePage = () => {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    const totalItems = data.productData.length;
    const startIndex = Math.max(0, Math.floor(totalItems / 2) - 10);
    const endIndex = startIndex + 20;
    const middleItems = data.productData.slice(startIndex, endIndex);

    setWomen(middleItems);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time = setInterval(() => {
      setIsLoading(false);
    }, 2000)
    return () => clearInterval(time)
  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  },[])

  return (
    isLoading ? <WomenSkeleton /> : (
    <div className='flex flex-col items-center'>
      <div className='text-center mb-6'>
        <h2 className='text-[30px] uppercase text-gray-900/90 my-6'>Niche Perfume</h2>
        <hr className='border-black w-[15em] mx-auto' />
      </div>
      <div className='flex flex-wrap justify-center'>
        {women.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center h-[22em] w-[12em] text-center mx-8 my-8'>
            <Link to={`/collection/women/product/${item.id}`}>
              <img
                src={item.image && item.image.src ? item.image.src : fallbackImg}
                alt={item.image && item.image.alt ? item.image.alt : "Product Image"}
                className='h-48 w-48 cursor-pointer'
              />
              <h2 className='p-2'>{item.title.slice(1, 30)}</h2>
              <span className='py-2'>{item.rating}</span>
            </Link>
            <div className='flex justify-center items-center gap-2'>
              <p className='line-through'>{item.variants[0].compare_at_price || "1180"}</p>
              <p>{item.variants[0].price || "1000"}</p>
            </div>
            <p className='text-red-400 text-sm'>
              {isNaN(item.variants[0].compare_at_price - item.variants[0].price) ? "10.00" : ((item.variants[0].compare_at_price - item.variants[0].price) / item.variants[0].compare_at_price * 100).toFixed(2)}% off
            </p>
          </div>
        ))}
      </div>
    </div>
    )
  );
};

export default NichePage;
