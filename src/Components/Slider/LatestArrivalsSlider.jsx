import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    ];

    return (
        <div className="my-10">
            <Swiper
                spaceBetween={50}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
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
                        <div className="slider-item">
                            <img src={product.image} alt={`Slide ${product.id}`} />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <p>Discount: {product.discount}% off</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
