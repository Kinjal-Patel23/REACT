import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const Cart = () => {
  const [show, setShow] = useState(true); // Default true so it's visible

  const closeBtn = () => {
    setShow(false); // Hide cart when close clicked
  };

  return (
    <>
      <Navbar />

      {show && (
        <div className='cart w-full min-h-[500px] flex items-center justify-center bg-white px-4'>

        <div className='subCart w-full max-w-[700px] h-auto border border-black p-4 sm:p-6 relative'>
          <button
            className='absolute top-4 right-4 text-[20px] font-bold text-[#333]'
            onClick={closeBtn}
          >
            <i className="ri-close-line"></i>
          </button>
          <h2 className='text-[24px] sm:text-[32px] font-semibold text-[#111] mb-4 text-center sm:text-left'>
            Your Cart
          </h2>
          <div className='bg-[#f8f8f8] text-center py-8 sm:py-[35px] mb-6 rounded-md'>
            <p className='text-[#333] text-[15px] sm:text-[16px]'>No items found.</p>
          </div>
          <button className='w-full bg-black text-white py-2 text-[14px] font-semibold rounded-sm hover:bg-black/80 transition-all duration-200'>
            Shop Now
          </button>
      
        </div>
      
      </div>
      
      )}
    </>
  )
}

export default Cart
