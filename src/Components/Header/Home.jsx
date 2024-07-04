import React, { useEffect, useState } from 'react';
import MainSlider from '../Slider/MainSlider';
import SecondPage from './SecondPage/SecondPage';
import LatestArrivals from './SecondPage/LatestArrivals';
import JustAdded from './JustAddedBrand/JustAdded';
import { useNavigate } from 'react-router-dom';
import HomeMainSkeleton from '../../Components/Skeleton/HomeMainSkeleton'


export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  },[])

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const renderToLogin = () => {
  //     const users = JSON.parse(localStorage.getItem('users')) || [];
  //     if (users.length === 0) {
  //       console.log("Change");
  //       const timer = setTimeout(() => {
  //         navigate('/login');
  //       }, 8000);

  //       // Cleanup function to clear the timeout
  //       return () => clearTimeout(timer);
  //     } else {
  //       console.log("Not change");
  //     }
  //   };

  //   renderToLogin();
  // }, [navigate]);

  const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
const time = setTimeout(() => {
  setIsLoading(false)
},2000)
return () => clearTimeout(time) 
},[])

  return (
    isLoading ? (
  <HomeMainSkeleton />
        ) : (

    <>
      <MainSlider />
      <SecondPage />
      <LatestArrivals />
      <JustAdded />
    </>
    )
  );
}
