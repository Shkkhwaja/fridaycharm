import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HeaderSlider() {
  return (
    <div className='mt-12 md:mt-[9.5em] '>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }} 
        onSwiper={(swiper) => console.log(swiper)}
        
      >
        <SwiperSlide className='text-center text-xs cursor-grab	'><span className='font-bold'>FREE SHIPPING</span> -on all order over Rs 999/-</SwiperSlide>

        <SwiperSlide className='text-center text-xs cursor-grab	px-10'><span className='font-bold'>EASY-RETURNS</span> 3 Days Conditional Return on SEALED Products</SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
      <hr class="h-px mt-2 bg-black border-0 dark:bg-black"/>

    </div>
  );
}

export default HeaderSlider;
