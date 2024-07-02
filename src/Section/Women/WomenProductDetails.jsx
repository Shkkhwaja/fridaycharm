import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import imgMain from '../../Images/Header_img/Second/Adil.jpeg';
import AddToCard from './AddToCart';
import data from '../../Data/data'; // Ensure the path to your data is correct

const WomenProductDetails = () => {
  const { womId } = useParams();
  const [product, setProduct] = useState(null);
  const [showAddToCard, setShowAddToCard] = useState(false);
  const navigate = useNavigate();
  const { addItem } = useCart();

  useEffect(() => {
    const productId = parseInt(womId);
    const productDataMain = data.productData.find(item => item.id === productId);
    setProduct(productDataMain);
  }, [womId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Function to extract number in ml from title
  const extractMlFromTitle = (title) => {
    const regex = /(\d+)\s*ml/i;
    const match = title.match(regex);
    return match ? match[1] : '100'; 
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.variants[0].price,
      img: product.image.src || imgMain,
      size: extractMlFromTitle(product.title),
    };
    addItem(item);
    setShowAddToCard(true);
  };

  const handleBuyItNow = () => {
    navigate('/login');
  };

  const handleCloseDrawer = () => {
    setShowAddToCard(false);
  };

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <img
        src={product.image.src || imgMain}
        alt="product img"
        className='md:w-auto max-h-[16em] md:max-h-[30em] object-contain mx-4 my-10 md:my-0'
      />

      <div className='flex-1 flex flex-col mx-5 text-center md:text-left '>
        <h2 className='text-3xl font-bold text-center md:text-left mt-4 md:mt-4 mx-4'>
          {product.title}
        </h2>
        <p className='mx-5 mt-5 text-indigo-800 font-bold'>{product.product_type}</p>
        <span className='mx-4 mt-2'>{product.rating}</span>
        <div className='flex gap-3 my-4 font-thin md:mx-4'>
          <p className='line-through'>{product.variants[0].compare_at_price || "1180"}</p>
          <p>{product.variants[0].price || "1000"}</p>
          <p className='text-red-400 text-sm'>
            {isNaN(product.variants[0].compare_at_price) ? "10.00" : ((product.variants[0].compare_at_price - product.variants[0].price) / product.variants[0].compare_at_price * 100).toFixed(2)}% off
          </p>
        </div>
        <p className='mx-4 -mt-4'>Tax included. Shipping calculated at checkout.</p>
        <hr className="w-full border-black my-6 h-6 md:h-4" />

        <div className='-mt-6 '>
          <h2 className='uppercase font-normal text-black tracking-widest text-[16px]'>size</h2>
          <button className="border-black border-2 px-2 py-1 text-[14px] tracking-wider">
            {extractMlFromTitle(product.title)} ml
          </button>
        </div>

        <div className='my-6 grid grid-rows-5 gap-1 font-extralight'>
          <p>100% Authentic & Genuine Products</p>
          <p>Free Delivery in 3 to 5 Days</p>
          <p>Easy Returns & Exchange</p>
          <p>Free Gifts With Every Order</p>
          <p>Low stock - 7 items left</p>
        </div>

        <button
          className="border-2 border-black p-2 rounded-full text-[20px] uppercase tracking-widest my-1"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="border-2 border-black p-2 rounded-full text-[20px] uppercase tracking-widest my-1 bg-black text-white"
          onClick={handleBuyItNow}
        >
          Buy It Now
        </button>
        {showAddToCard && <AddToCard onClose={handleCloseDrawer} />}

        <marquee className='my-4 mx-2 text-[15px] text-black tracking-wide' scrollamount="10" scrolldelay="50">GET Rs.300/- DISCOUNT ON ORDER ABOVE Rs.3500/- USE PROMO : WELCOME10</marquee>

        <div className='grid md:grid-rows-3 gap-3 md:gap-2 my-2 md:my-8 mx-4'>
          <h2 className='text-center tracking-widest text-black font-semibold my-1 md:my-3'>DESCRIPTION</h2>
          <p className='md:text-[14px] text-gray-900'>Khamrah by Lattafa is a warm spicy and sweet fragrance for men. Opening notes of khamrah are Cognac. Middle Notes are Tonka Bean, Cinnamon and Oak. Base notes are Vanilla, Praline and Sandalwood</p>
          <p className='md:text-[14px] text-gray-900'>Lattafa khamrah comes in 100 ml EDP (eau de perfum) version with a beautiful bottle presentation. Best using time of khamrah is in winter and fall nights</p>
        </div>
      </div>
    </div>
  );
};

export default WomenProductDetails;
