import React from 'react'
import LatestArrivalsSlider from '../../Slider/LatestArrivalsSlider'
import bestSeller from '../../../Images/Header_img/Second/Best-Seller.webp'
import bestForMenWomen from '../../../Images/Header_img/Second/Best-perfume-men-women.webp'
import hotTrendingBrands from '../../../Images/Header_img/Second/Hot-Trending-Brands.webp'
import videoOne from '../../../Images/Header_img/Second/videos/videoOne.mp4'
import onlineStore from '../../../Images/Header_img/Second/onlineStore.webp'

export default function LatestArrivals() {
  return (
    <div className='h-auto w-full'>
        <h2 className='text-center text-[30.6px] text-gray-900'>Latest Arrivals</h2>
        <div className='flex justify-center align-middle'>
        <button type="button" className="py-2 px-3 my-2 text-[14px] border rounded-3xl border-black ">
    VIEW ALL
</button>
</div>
      <LatestArrivalsSlider />


{/* BEST SELLER */}


<img src={bestSeller} alt="best seller" className='mt-20' />
<img src={bestForMenWomen} alt="best seller for men and women" className='' />
<img src={hotTrendingBrands} alt="hot trending brand" />
<video 
                className="your-custom-class" 
                data-type="mp4" 
                src={videoOne} 
                loop 
                muted 
                playsInline 
                autoPlay
            />

<img src={onlineStore} alt="not visible" />   
         
    </div>
  )
}
