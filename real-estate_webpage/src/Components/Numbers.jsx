import React from 'react'

const Numbers = () => {
  return (
    <>
      <div className='numbers w-full lg:h-[640px] flex items-center justify-center'>
        <div className='subNumbers w-full lg:w-[1200px] h-auto lg:h-[524px] flex flex-wrap justify-center lg:justify-between'>
          <div className='numbersDetail w-full lg:w-[483px] h-auto lg:h-[252px] lg:sticky top-[100px] text-center lg:text-left px-4 sm:px-6 md:px-0 mt-[30px] lg:mt-0'>
            <div
              className='numbersText w-[140px] sm:w-[150px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center mx-auto lg:mx-0'
              data-aos="fade-up"
            >
              <p className='uppercase text-[13px] sm:text-[14px] text-[#333]'>some numbers</p>
            </div>
            <p
              className='text-[26px] sm:text-[32px] md:text-[48px] font-semibold leading-[34px] sm:leading-[42px] md:leading-[54px] pt-[20px]'
              data-aos="fade-up"
            >
              The numbers behind our success
            </p>
            <button
              className='w-[120px] sm:w-[135px] h-[42px] sm:h-[48px] bg-[#000] rounded-[10px] mt-[24px] sm:mt-[35px] text-[#fff] text-[14px] hover:bg-black/80 transition-all duration-200 mx-auto lg:mx-0'
              data-aos="fade-up"
            >
              Contact us
            </button>
          </div>
          <div className='numbersCard w-full lg:w-[556px] h-auto lg:h-[524px] flex flex-col justify-between gap-[20px] lg:gap-0 mt-[20px] lg:mt-0'>
            <div className='subNumbersCard w-full lg:w-[556px] h-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4' data-aos="fade-up">
              <div className='card w-full sm:w-[270px] h-auto border border-[#E8E8E8] bg-[#F7F7F7] rounded-[20px] p-5 m-[20px] lg:m-0'>
                <p className='text-[28px] sm:text-[36px] text-[#0c0407] font-semibold leading-[36px] sm:leading-[43px] tracking-wider'>200+</p>
                <p className='text-[14px] text-[#333] pt-[10px] font-semibold'>Properties</p>
                <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[25px]'>
                  Discover the key figures that <br />
                  highlight our impact in the real <br />
                  estate market. From satisfied <br />
                  clients to successful transactions
                </p>
              </div>
              <div className='card w-full sm:w-[270px] h-auto border border-[#E8E8E8] bg-[#F7F7F7] rounded-[20px] p-5 m-[20px] lg:m-0'>
                <p className='text-[28px] sm:text-[36px] text-[#0c0407] font-semibold leading-[36px] sm:leading-[43px] tracking-wider'>300+</p>
                <p className='text-[14px] text-[#333] pt-[10px] font-semibold'>Satisfied Users</p>
                <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[25px]'>
                  Take a closer look at the statistics <br />
                  that reflect our growth, success, <br />
                  and dedication to helping clients <br />
                  achieve their real estate goals.
                </p>
              </div>
            </div>
            <div className='subNumbersCard w-full lg:w-[556px] h-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4' data-aos="fade-up">
              <div className='card w-full sm:w-[270px] h-auto border border-[#E8E8E8] bg-[#F7F7F7] rounded-[20px] p-5 m-[20px] lg:m-0'>
                <p className='text-[28px] sm:text-[36px] text-[#0c0407] font-semibold leading-[36px] sm:leading-[43px] tracking-wider'>100%</p>
                <p className='text-[14px] text-[#333] pt-[10px] font-semibold'>Happy Clients</p>
                <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[25px]'>
                  From closed deals to client <br />
                  satisfaction ratings, our numbers <br />
                  showcase the impact we’ve made <br />
                  in the real estate industry
                </p>
              </div>
              <div className='card w-full sm:w-[270px] h-auto border border-[#E8E8E8] bg-[#F7F7F7] rounded-[20px] p-5 m-[20px] lg:m-0'>
                <p className='text-[28px] sm:text-[36px] text-[#0c0407] font-semibold leading-[36px] sm:leading-[43px] tracking-wider'>900K</p>
                <p className='text-[14px] text-[#333] pt-[10px] font-semibold'>Follower</p>
                <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[25px]'>
                  Explore the numbers behind our <br />
                  real estate success, showcasing <br />
                  the trust clients place in us and <br />
                  the results we consistently deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Numbers
