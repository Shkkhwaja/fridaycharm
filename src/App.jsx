import React from 'react';
import MainSlider from './Components/Slider/MainSlider';
import SecondPage from './Components/Header/SecondPage/SecondPage';
import LatestArrivals from './Components/Header/SecondPage/LatestArrivals';
import JustAdded from './Components/Header/JustAddedBrand/JustAdded';

export default function App() {
  return (
    <>
      <MainSlider />
      <SecondPage />
      <LatestArrivals />
      <JustAdded />
    </>
  );
}
