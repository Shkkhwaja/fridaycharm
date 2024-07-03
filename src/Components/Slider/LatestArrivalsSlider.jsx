import React, { useEffect, useState } from 'react';
import data from '../../Data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img from '../../Images/Header_img/Second/Adil.jpeg';

export default function LatestArrivalsSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulating fetching data, replace with actual data fetching logic
        setProducts(data.productData.slice(10,25)); // Assuming data is an array of objects
    }, []);

    useEffect(() => {
        console.log("Products: ", products);
    }, [products]);
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
                            <img src={product.image && product.image.src || img} className='h-[18em] w-auto' alt={`Slide ${product.id}`} />
                            <div className="lg:text-center mt-4">
                                <h3>{product.title}</h3>
                                <div className='flex items-center justify-center'>
                                    <span className="mr-2"><s>Rs. 460</s></span>
                                    <p>Price: {product.variants[0].price || "1000"}</p>
                                </div>
                                <p className='text-red-600'>Discount:  { NaN ? "10.00" : ((product.variants[0].compare_at_price - product.variants[0].price) / product.variants[0].compare_at_price * 100).toFixed(2)}% off</p>
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
