import React, { useState } from 'react';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white py-8 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 text-[12px] md:mb-0">
          <h3 className="text-[15px] font-bold font-sans">Asreh International</h3>
          <p className="mt-2 text-gray-400">Office No.406, Simlim Square, above RBL Bank, lamington Road, Grant Road East, Mumbai 400007</p>
          <p className="mt-2 text-gray-400">Contact Us: Mon to Sat - 11am - 7.30pm</p>
          <p className="mt-2 text-gray-400">Product query-8070-177-188</p>
          <p className="mt-2 text-gray-400">Order query-98-3355-6611</p>
          <p className="mt-2 text-gray-400">E Mail Us: care@fridaycharm.com</p>
        </div>
        
        <div className="mb-4 text-[12px] md:mb-0">
          <h3 className="text-[15px] font-bold font-sans md:cursor-pointer" onClick={() => toggleSection('legal')}>Legal</h3>
          <ul className={`mt-2 md:block ${activeSection === 'legal' ? 'block' : 'hidden'}`}>
            <li className="mt-2 text-gray-400">About Us</li>
            <li className="mt-2 text-gray-400">Contact Us</li>
            <li className="mt-2 text-gray-400">Cancellation and Refund Policy</li>
            <li className="mt-2 text-gray-400">Shipping Information</li>
            <li className="mt-2 text-gray-400">Privacy policy</li>
            <li className="mt-2 text-gray-400">Terms of service</li>
          </ul>
        </div>
        
        <div className="mb-4 text-[12px] md:mb-0">
          <h3 className="text-[15px] font-bold font-sans md:cursor-pointer" onClick={() => toggleSection('customerCare')}>Customer Care</h3>
          <ul className={`mt-2 md:block ${activeSection === 'customerCare' ? 'block' : 'hidden'}`}>
            <li className="mt-2 text-gray-400">Register-Create Account</li>
            <li className="mt-2 text-gray-400">Login-My Account</li>
            <li className="mt-2 text-gray-400">Download Our Mobile App</li>
            <li className="mt-2 text-gray-400">Track Your Order</li>
            <li className="mt-2 text-gray-400">Product Reviews</li>
            <li className="mt-2 text-gray-400">Discount Coupons</li>
            <li className="mt-2 text-gray-400">Contact Us</li>
            <li className="mt-2 text-gray-400">Blog Post</li>
            <li className="mt-2 text-gray-400">Sitemap</li>
            <li className="mt-2 text-gray-400">FAQS</li>
          </ul>
        </div>
        
        <div className="mb-4 md:mb-0">
          <h3 className="text-[15px] font-bold font-sans md:cursor-pointer" onClick={() => toggleSection('mainMenu')}>Main Menu</h3>
          <ul className={`mt-2 text-[12px] md:block ${activeSection === 'mainMenu' ? 'block' : 'hidden'}`}>
            <li className="mt-2 text-gray-400">Home</li>
            <li className="mt-2 text-gray-400">Designer Perfume</li>
            <li className="mt-2 text-gray-400">Niche Perfumes</li>
            <li className="mt-2 text-gray-400">Middle Eastern</li>
            <li className="mt-2 text-gray-400">Deodorant</li>
            <li className="mt-2 text-gray-400">Home Fragrance</li>
            <li className="mt-2 text-gray-400">Bath & Body Care</li>
            <li className="mt-2 text-gray-400">Miniature</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p className="mt-2 text-white">© 2024 FridayCharm.com</p>
      </div>
    </footer>
  );
};

export default Footer;
