import React from 'react'
import MainSlider from '../Slider/MainSlider'
import SecondPage from './SecondPage/SecondPage'
import LatestArrivals from './SecondPage/LatestArrivals'
import JustAdded from './JustAddedBrand/JustAdded'

export default function Home() {
  return (
    <>
    <MainSlider />
    <SecondPage />
    <LatestArrivals />
    <JustAdded />
    </>
  )
}
