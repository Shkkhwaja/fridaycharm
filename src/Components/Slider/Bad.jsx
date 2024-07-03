import React, {useState, useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import deoOne from '../../Images/Slider_img/14_Deo.webp'
import deoOneMob from '../../Images/Slider_img/14_Deo-Mob.webp'
import deoTwo from '../../Images/Slider_img/13_Deo-Sticks.webp'
import deoTwoMob from '../../Images/Slider_img/13_Deo-Sticks-Mob.webp'


export default function Bad() {

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
    <div>
              <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }} 
        pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={isMobile ? deoOneMob : deoOne} alt="Slide 1" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={isMobile ? deoTwoMob : deoTwo} alt="Slide 2" className="w-full" /></SwiperSlide>

        </Swiper>
    </div>
  )
}
