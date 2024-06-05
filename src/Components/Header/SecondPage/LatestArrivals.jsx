import React from 'react'
import LatestArrivalsSlider from '../../Slider/LatestArrivalsSlider'

export default function LatestArrivals() {
  return (
    <div>
        <h2 className='text-center text-[30.6px] text-gray-900'>Latest Arrivals</h2>
        <div className='flex justify-center align-middle'>
        <button type="button" className="py-2 px-3 my-2 text-[14px] border rounded-3xl border-black ">
    VIEW ALL
</button>
</div>
      <LatestArrivalsSlider />

    </div>
  )
}
