import React, { useEffect } from 'react';
import MainSlider from '../Slider/MainSlider';
import SecondPage from './SecondPage/SecondPage';
import LatestArrivals from './SecondPage/LatestArrivals';
import JustAdded from './JustAddedBrand/JustAdded';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const renderToLogin = () => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.length === 0) {
        console.log("Change");
        const timer = setTimeout(() => {
          navigate('/login');
        }, 8000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
      } else {
        console.log("Not change");
      }
    };

    renderToLogin();
  }, [navigate]);

  return (
    <>
      <MainSlider />
      <SecondPage />
      <LatestArrivals />
      <JustAdded />
    </>
  );
}
