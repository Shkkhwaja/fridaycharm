import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const AddToCard = ({ onClose }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose(); // Notify parent component (optional)
  };

  // Example array of product data
  const products = [
    {
      id: 1,
      imageUrl: "https://www.fridaycharm.com/cdn/shop/products/khamrah-main.jpg?v=1659797324&width=180",
      name: "Lattafa Khamrah Eau De Parfum For Unisex",
      size: "100ml",
      price: 2490.00 // Use numeric price for calculations
    },
    {
      id: 2,
      imageUrl: "https://www.fridaycharm.com/cdn/shop/products/khamrah-main.jpg?v=1659797324&width=180",
      name: "Lattafa Khamrah Eau De Parfum For Unisex",
      size: "100ml",
      price: 2490.00 // Use numeric price for calculations
    }
  ];

  // Calculate total price
  const total = products.reduce((acc, product) => acc + product.price, 0);

  // Ensure total is a number before using toFixed
  const formattedTotal = typeof total === 'number' ? total.toFixed(2) : '';

  return (
    <div className="bg-black">
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: '25px', letterSpacing: '4px', textAlign: 'left' }}>Cart</span>
            <span style={{ position: 'absolute', right: '20px', top: '20px' }}>
              <span style={{ color: 'white', fontSize: '25px', cursor: 'pointer' }} onClick={handleClose}>X</span>
            </span>
          </div>
        }
        onClose={handleClose}
        visible={open}
        style={{ backgroundColor: 'black' }}
        footer={
          <div>
            <hr />
            <div className="my-4 text-white flex justify-between">
              <span className="text-[16px]">Subtotal:</span>
              <span className="text-[16px]">Rs. {formattedTotal}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                onClick={handleClose}
                style={{
                  textTransform: 'uppercase',
                  padding: '20px 100px',
                  marginBottom: '1em',
                  backgroundColor: '#242321',
                  fontSize: '19px',
                  letterSpacing: '3px',
                  color: 'white',
                  border: '0px',
                  borderRadius: '50px'
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        }
      >
        <hr />
        {products.map((product) => (
          <div key={product.id} className='my-8 text-white grid grid-cols-2'>
            <img src={product.imageUrl} alt="Product" className='h-[9em] object-cover' />
            <div className='-ml-4'>
              <h2 className='mb-1 text-[16px]'>{product.name}</h2>
              <p className='text-[15px] font-semibold mb-2'>Size: <span className='font-normal text-[13px]'>{product.size}</span></p>
              <div className='flex gap-4 px-2 h-7 w-[5.5em] border-2 my-2'>
                <span className='cursor-pointer'>-</span> <span>1</span> <span className='cursor-pointer'>+</span>
              </div>
              <h2 className='text-right'>Rs. {product.price.toFixed(2)}</h2>
            </div>
          </div>
        ))}
      </Drawer>
    </div>
  );
};

export default AddToCard;
