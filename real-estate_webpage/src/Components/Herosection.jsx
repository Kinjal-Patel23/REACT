import React, { useEffect } from 'react'
import Rellax from 'rellax';
import heroImage from '../assets/hero-thumb-1.png';

const Herosection = () => {

  useEffect (() => {
    new Rellax('.rellax');
  },[])
    
  

  return (
    <>
    <div className='w-full min-h-[600px] md:h-[940px] flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6'>
      <div className='w-full max-w-[1200px] flex items-end justify-center mb-8 md:mb-0'>
        <div className='w-auto px-6 h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center gap-[5px]'>
          <i className="ri-home-5-line text-base md:text-[19px]"></i>
          <p className='text-sm md:text-[15px] whitespace-nowrap'>BUY & SELL YOUR DREAM</p>
        </div>
      </div>
      <div className="w-full max-w-[1200px] relative z-10 py-6 md:py-0">
        <p className="text-center md:text-left text-5xl md:text-[120px] lg:text-[190px] uppercase font-semibold leading-tight md:leading-[220px] tracking-tighter">
          real-estate
        </p>
      </div>
      <div className="w-full h-[300px] md:h-[520px] z-20 mt-8 md:mt-0">
        <img
          src={heroImage}
          alt="hero"
          className="rellax w-full h-full object-contain"
          data-rellax-speed="2"
        />
      </div>
    </div>
    </>
  )
}

export default Herosection

