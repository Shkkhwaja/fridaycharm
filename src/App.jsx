import React from 'react';
import Header from './Components/Header/Header';
import HeaderSlider from './Components/Slider/HeaderSlider';
import MainSlider from './Components/Slider/MainSlider';
import SecondPage from './Components/Header/SecondPage/SecondPage';
import LatestArrivals from './Components/Header/SecondPage/LatestArrivals';
import JustAdded from './Components/Header/JustAddedBrand/JustAdded';

export default function App() {
  return (
    <>
      <Header />
      <HeaderSlider />
      <MainSlider />
      <SecondPage />
      <LatestArrivals />
      <JustAdded />
    </>
  );
}
