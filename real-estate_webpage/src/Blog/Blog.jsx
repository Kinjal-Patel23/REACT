import React from 'react'
import Navbar from '../Components/Navbar'
import blogImg1 from '../assets/blog-thumb-12.jpg'
import blogImg2 from '../assets/blog-thumb-11.jpg'
import blogImg3 from '../assets/blog-thumb-10.jpg'
import blogImg4 from '../assets/blog-thumb-4.jpg'
import blogImg5 from '../assets/blog-thumb-5.jpg'
import blogImg6 from '../assets/blog-thumb-6.jpg'
import blogImg7 from '../assets/blog-thumb-7.jpg'
import blogImg8 from '../assets/blog-thumb-8.jpg'
import blogImg9 from '../assets/blog-thumb-9.jpg'
import blogImg10 from '../assets/blog-thumb-1.jpg'
import blogImg11 from '../assets/blog-thumb-2.jpg'
import blogImg12 from '../assets/blog-thumb-3.jpg'
import Footer from '../Components/Footer'


const Blog = () => {
  return (
    <>
      <Navbar />

      <div className='heroSection w-full h-[360px] flex flex-col items-center justify-center relative overflow-hidden px-4'>
        <div className='heroSectionText w-full max-w-[1200px] h-[44px] flex items-end justify-center'>
          <div className='subHeroSectionText w-[160px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center gap-[5px]' data-aos="fade-up">
            <i className="ri-home-5-line text-[19px]"></i>
            <p className='heroText text-[15px]'>ALL ARTICLES</p>
          </div>
        </div>
        <div className="mainTtl w-full max-w-[1200px] h-auto z-10 relative" data-aos="fade-up">
          <p className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[190px] uppercase font-semibold leading-[1.1] tracking-tighter text-center">
            blogs
          </p>
        </div>

      </div>


      <div className='blogCont w-full h-auto lg:h-[2100px] flex items-center justify-center mb-[20px] lg:mb-0'>
        <div className='subBlogCont w-full lg:w-[1200px] h-auto lg:h-[1955px] flex flex-col justify-between'>
          <div className='blogBox w-full lg:w-[1200px] h-auto lg:h-[458px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0 p-[20px] lg:p-0' data-aos="fade-up">
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
          <div className='blogBox w-full lg:w-[1200px] h-auto lg:h-[458px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0 p-[20px] lg:p-0' data-aos="fade-up">
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg4}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>11 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg5}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>2 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg6}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>2 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className='blogBox w-full lg:w-[1200px] h-auto lg:h-[458px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0 p-[20px] lg:p-0' data-aos="fade-up">
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg7}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>8 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg8}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>6 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg9}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>3 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className='blogBox w-full lg:w-[1200px] h-auto lg:h-[458px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0 p-[20px] lg:p-0' data-aos="fade-up">
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg10}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>7 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg11}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>2 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
            <div className='blogDetail w-full sm:w-[373px] h-auto flex flex-col justify-between'>
              <div className='blogImg w-full h-[250px] sm:h-[300px] rounded-[20px] overflow-hidden'>
                <img
                  src={blogImg12}
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
                  <p className='text-[14px] text-[#333] ps-[5px]'>4 min read</p>
                </div>
                <button className='w-[100px] h-[42px] text-[#333] border border-[#E0E0E0] text-[14px] mt-[15px] font-semibold rounded-[10px]'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Blog
