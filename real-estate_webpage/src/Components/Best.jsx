import React from 'react'
import chooseImg from '../assets/choose-thumb-1.jpg'

const Best = () => {
  return (
    <>
      <div className='best w-full h-auto lg:h-[600px] flex items-center justify-center px-4 sm:px-6 md:px-0 mt-[30px] lg:mt-0'>
        <div className='subBest w-full max-w-[1200px] h-auto lg:h-[453px] flex flex-col lg:flex-row-reverse justify-between items-center gap-10'>


          <div className='bestCont w-full max-w-[483px] h-auto text-center lg:text-left'>
            <div
              className='bestText w-[140px] sm:w-[160px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center mx-auto lg:mx-0'
              data-aos="fade-up"
            >
              <p className='text-[13px] sm:text-[14px] uppercase text-[#333]'>why choose us</p>
            </div>
            <p
              className='text-[26px] sm:text-[32px] md:text-[48px] font-semibold leading-[34px] sm:leading-[42px] md:leading-[54px] pt-[18px]'
              data-aos="fade-up"
            >
              Why we are best in Real-Estate market?
            </p>
            <p
              className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] sm:leading-[21px] pt-[40px] sm:pt-[60px] md:pt-[120px]'
              data-aos="fade-up"
            >
              With our unmatched expertise, personalized service, and deep knowledge <br className='hidden sm:block' />
              of the real estate market, we make your home buying or selling experience <br className='hidden sm:block' />
              seamless and stress-free. Our dedicated team of professionals listens to <br className='hidden sm:block' />
              your needs, provides tailored.
            </p>
            <button
              className='w-[120px] sm:w-[135px] h-[42px] sm:h-[48px] bg-[#000] rounded-[10px] mt-[24px] sm:mt-[30px] text-[#fff] text-[14px] hover:bg-black/80 transition-all duration-200'
              data-aos="fade-up"
            >
              Contact us
            </button>
          </div>
          <div className='bestImg w-full max-w-[540px] h-auto' data-aos="fade-up">
            <img src={chooseImg} className='rounded-[20px] w-full h-full object-cover' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Best
