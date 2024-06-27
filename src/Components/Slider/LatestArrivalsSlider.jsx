import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img from '../../Images/Header_img/Second/Adil.jpeg';

export default function LatestArrivalsSlider() {
    const products = [
        { id: 1, image: img, name: 'Product 1', price: 20, discount: 5 },
        { id: 2, image: img, name: 'Product 2', price: 30, discount: 10 },
        { id: 3, image: img, name: 'Product 3', price: 25, discount: 8 },
        { id: 4, image: img, name: 'Product 4', price: 40, discount: 12 },
        { id: 5, image: img, name: 'Product 5', price: 35, discount: 15 },
        { id: 6, image: img, name: 'Product 6', price: 22, discount: 6 },
        { id: 7, image: img, name: 'Product 7', price: 33, discount: 9 },
        { id: 8, image: img, name: 'Product 8', price: 28, discount: 7 },
        { id: 9, image: img, name: 'Product 9', price: 45, discount: 14 },
        { id: 10, image: img, name: 'Product 10', price: 38, discount: 11 },
        { id: 11, image: img, name: 'Product 11', price: 29, discount: 10 },
        { id: 12, image: img, name: 'Product 12', price: 27, discount: 8 },
        { id: 13, image: img, name: 'Product 13', price: 32, discount: 10 },
        { id: 14, image: img, name: 'Product 14', price: 24, discount: 6 },
        { id: 15, image: img, name: 'Product 15', price: 31, discount: 9 },
    ];

    return (
        <div className="my-10">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                navigation
                autoplay={{ delay: 2000 }}

                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.5,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                    },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="flex flex-col items-center justify-center text-center">
                            <img src={product.image} alt={`Slide ${product.id}`} />
                            <div className="lg:text-center mt-4">
                                <h3>{product.name}</h3>
                                <div className='flex items-center justify-center'>
                                    <span className="mr-2"><s>Rs. 460</s></span>
                                    <p>Price: ${product.price}</p>
                                </div>
                                <p className='text-red-600'>Discount: {product.discount}% off</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="flex justify-center items-center h-full">
                        <button className="px-4 py-2 my-28 bg-black text-white uppercase">View All</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
