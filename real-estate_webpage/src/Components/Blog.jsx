import React from 'react'
import blogImg1 from '../assets/blog-thumb-12.jpg'
import blogImg2 from '../assets/blog-thumb-11.jpg'
import blogImg3 from '../assets/blog-thumb-10.jpg'

const Blog = () => {
  return (
    <>
      <div className='blog w-full h-auto lg:h-[760px] flex items-center justify-center'>
        <div className='subBlog w-full lg:w-[1200px] h-auto lg:h-[608px] flex flex-col justify-between'>
          <div className='blogTtl w-full lg:w-[1200px] h-auto lg:h-[110px] flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between px-4 gap-4 lg:gap-0 text-center lg:text-left mt-[30px] lg:mt-0'>
            <div className='subBlogTtl w-full lg:w-[1063px] h-auto lg:h-[110px] flex flex-col justify-between items-center lg:items-start'>
              <div className='blogText w-[100px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
                <p className='text-[14px] uppercase text-[#333]'>articles</p>
              </div>
              <p className='text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] mt-4 lg:mt-0' data-aos="fade-up">
                Read our latest blogs
              </p>
            </div>

              <button className='blogBtn w-full sm:w-[160px] h-[48px] bg-[#000] font-semibold text-[#fff] rounded-[10px] hover:bg-black/80 transition-all duration-200' data-aos="fade-up">
                Explore All
              </button>
            
          </div>

          <div className='blogCont w-full lg:w-[1200px] h-auto flex flex-wrap justify-center lg:justify-between gap-[20px] px-4 lg:px-0 mt-[20px] lg:mt-0' data-aos="fade-up">
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg1}
                  className='w-full h-full rounded-[20px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer'
                />
              </div>
              <div className='blogCont w-full h-auto mt-4'>
                <p className='text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[27px] cursor-pointer'>
                  Here’s how to decorate your new home from scratch
                </p>
                <div className='w-full h-[20px] flex items-center flex-wrap mt-[12px] gap-x-[20px] gap-y-[6px]'>
                  <i className="ri-calendar-2-line"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>August 20, 2024</p>
                  <i className="ri-time-line ps-[30px]"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>14 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg2}
                  className='w-full h-full rounded-[20px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer'
                />
              </div>
              <div className='blogCont w-full h-auto mt-4'>
                <p className='text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[27px] cursor-pointer'>
                  Here’s how to decorate your new home from scratch
                </p>
                <div className='w-full h-[20px] flex items-center flex-wrap mt-[12px] gap-x-[20px] gap-y-[6px]'>
                  <i className="ri-calendar-2-line"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>August 20, 2024</p>
                  <i className="ri-time-line ps-[30px]"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>20 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg3}
                  className='w-full h-full rounded-[20px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer'
                />
              </div>
              <div className='blogCont w-full h-auto mt-4'>
                <p className='text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[27px] cursor-pointer'>
                  Here’s how to decorate your new home from scratch
                </p>
                <div className='w-full h-[20px] flex items-center flex-wrap mt-[12px] gap-x-[20px] gap-y-[6px]'>
                  <i className="ri-calendar-2-line"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>August 20, 2024</p>
                  <i className="ri-time-line ps-[30px]"></i>
                  <p className='text-[14px] text-[#333] ps-[5px]'>9 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
