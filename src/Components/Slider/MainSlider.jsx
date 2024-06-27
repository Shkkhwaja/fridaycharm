import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../Images/Slider_img/img-1.webp'
import img2 from '../../Images/Slider_img/img-2.webp'
import img3 from '../../Images/Slider_img/img-3.webp'
import img4 from '../../Images/Slider_img/img-4.webp'
import img5 from '../../Images/Slider_img/img-5.webp'
import offer_img from '../../Images/Header_img/offer_img.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MainSlider() {
    return (
     <div >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }} 
        pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src={img4} alt="Slide 4" /></SwiperSlide>
          <SwiperSlide><img src={img5} alt="Slide 5" /></SwiperSlide>
        </Swiper>
       
      <div>
        <img src={offer_img} alt="not" />
      </div>

      </div>

      );
}
