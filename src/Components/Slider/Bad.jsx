import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import deoOne from '../../Images/Slider_img/14_Deo.webp'
import deoTwo from '../../Images/Slider_img/13_Deo-Sticks.webp'


export default function Bad() {
  return (
    <div>
              <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }} 
        pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src={deoOne} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={deoTwo} alt="Slide 2" /></SwiperSlide>

        </Swiper>
    </div>
  )
}
