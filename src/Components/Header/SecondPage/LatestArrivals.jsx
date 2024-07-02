import React, {useState, useEffect} from 'react'
import LatestArrivalsSlider from '../../Slider/LatestArrivalsSlider'
import bestSeller from '../../../Images/Header_img/Second/Best-Seller.webp'
import bestSellerMob from '../../../Images/Header_img/Second/05_BEST-SELLER-Mob.webp'
import bestForMenWomen from '../../../Images/Header_img/Second/Best-perfume-men-women.webp'
import bestForMenWomenMob from '../../../Images/Header_img/Second/06_DESIGNER-VS-NICHE-MOB.webp'
import hotTrendingBrands from '../../../Images/Header_img/Second/Hot-Trending-Brands.webp'
import hotTrendingBrandsMob from '../../../Images/Header_img/Second/07_Hot-Trending-Brands-Mob.webp'
import videoOne from '../../../Images/Header_img/Second/videos/videoOne.mp4'
import onlineStore from '../../../Images/Header_img/Second/onlineStore.webp'
import onlineStoreMob from '../../../Images/Header_img/Second/09_Arabian-Perfumes-Mob.webp'

export default function LatestArrivals() {


const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 789)
  }
  handleResize();

  window.addEventListener('resize',handleResize)

  return () => window.removeEventListener('resize', handleResize)
},[])

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


<img src={isMobile ? bestSellerMob : bestSeller} alt="best seller" className='mt-20  md:h-auto' />
<img src={isMobile ? bestForMenWomenMob : bestForMenWomen} alt="best seller for men and women" className=' md:h-auto' />
<img src={isMobile ? hotTrendingBrandsMob : hotTrendingBrands} alt="hot trending brand" className=' md:h-auto' />
<video  
                data-type="mp4" 
                src={videoOne} 
                loop 
                muted 
                playsInline 
                autoPlay
            />

<img src={isMobile ? onlineStoreMob : onlineStore} alt="not visible" className=' md:h-auto' />   
         
    </div>
  )
}
