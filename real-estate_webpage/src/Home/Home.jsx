import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import HeroSection from '../Components/Herosection'
import proImg1 from '../assets/properties-thumb-1.jpg'
import proImg2 from '../assets/properties-thumb-2.jpg'
import proImg3 from '../assets/properties-thumb-3.jpg'
import proImg4 from '../assets/properties-thumb-4.jpg'
import proImg5 from '../assets/properties-thumb-5.jpg'
import proImg6 from '../assets/properties-thumb-6.jpg'
import aboutImg from '../assets/about-thumb-1.jpg'
import categoryImg1 from '../assets/categories-thumb-3.jpg'
import categoryImg2 from '../assets/categories-thumb-2.jpg'
import categoryImg3 from '../assets/categories-thumb-1.jpg'
import Process from '../Components/Process'
import agentImg1 from '../assets/agents-thumb-1.jpg'
import agentImg2 from '../assets/agents-thumb-2.jpg'
import agentImg3 from '../assets/agents-thumb-3.jpg'
import agentImg4 from '../assets/agents-thumb-4.jpg'
import agentImg5 from '../assets/agents-thumb-5.jpg'
import agentImg6 from '../assets/agents-thumb-6.jpg'
import agentImg7 from '../assets/agents-thumb-7.jpg'
import agentImg8 from '../assets/agents-thumb-8.jpg'
import agentImg9 from '../assets/agents-thumb-9.jpg'
import agentImg10 from '../assets/agents-thumb-10.jpg'
import Testimonial from '../Components/Testimonial'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog'
import Numbers from '../Components/Numbers'
import Best from '../Components/Best'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSection />

      <div className='properties w-full min-h-[1200px] py-8 md:py-12 lg:h-[1200px] flex justify-center'>
        <div className='subProperties w-full max-w-[1200px] px-4 md:px-6 h-auto lg:h-[1200px] flex flex-col justify-around'>
          <div className='propertiesTtl w-full lg:w-[1200px] h-[110px] flex flex-col items-center justify-between mb-[20px] lg:mb-0]'>
            <div className='propertiesTtlDiv w-[180px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
              <p className='uppercase text-[14px] text-[#333] tracking-tighter'>recent properties</p>
            </div>
            <p className='text-[32px] md:text-[48px] font-semibold leading-[40px] md:leading-[50px] text-center' data-aos="fade-up">Featured properties</p>
          </div>
          <div className='propertiesCont w-full lg:w-[1200px] h-auto lg:h-[862px] flex flex-col justify-between space-y-8 lg:space-y-0'>
            <div className='subPropertiesCont w-full lg:w-[1200px] h-auto lg:h-[411px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0' data-aos="fade-up">
              <div className='sunset w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="sunsetImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg1}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[160px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Rent</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 400 / month</p>
                    </div>
                  </div>
                </div>

                <div className='sunsetCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Sunset luxury villa</p>

                  <div className='sunsetLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>12273 Dream Avenue, New York</p>
                  </div>

                  <div className='sunsetDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>1490 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='parkview w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="parkviewImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg2}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[190px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Sell</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 50,000</p>
                    </div>
                  </div>
                </div>
                <div className='parkviewCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Parkview estates</p>

                  <div className='parkviewLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>2972 Westheimer Rd. Santa Ana, Illinois</p>
                  </div>

                  <div className='parkviewDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>2370 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>4</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='residences w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="residencesImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg3}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[160px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Rent</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 200 / month</p>
                    </div>
                  </div>
                </div>
                <div className='residencesCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Cedar grove residences</p>
                  <div className='residencesLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>8502 Preston Rd. Inglewood, Maine</p>
                  </div>
                  <div className='sresidencesDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>1300 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='subPropertiesCont w-full lg:w-[1200px] h-auto lg:h-[411px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0' data-aos="fade-up">
              <div className='lakeside w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="lakesideImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg4}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[190px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Sell</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 32,000</p>
                    </div>
                  </div>
                </div>
                <div className='lakesideCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Lakeside manor</p>

                  <div className='lakesideLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>2464 Royal Ln. Mesa, New Jersey</p>
                  </div>

                  <div className='lakesideDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>700 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>1</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='oceanfront w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="oceanfrontImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg5}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[160px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Rent</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 520 / month</p>
                    </div>
                  </div>
                </div>
                <div className='oceanfrontCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Oceanfront oasis</p>
                  <div className='oceanfrontLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>6391 Elgin St. Celina, Delaware</p>
                  </div>

                  <div className='oceanfrontDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>1500 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='skyline w-[373px] h-[411px] max-[420px]:w-[320px] max-[420px]:h-auto flex flex-col justify-between'>
                <div className="skylineImg w-[373px] h-[300px] max-[420px]:w-[320px] max-[420px]:h-[220px] rounded-[20px] relative overflow-hidden group">
                  <img
                    src={proImg6}
                    className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    alt="Sunset"
                  />
                  <div className="relative w-[373px] max-[420px]:w-[320px] h-[60px] z-10 flex items-center justify-center gap-[160px] max-[420px]:gap-[100px]">
                    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>Rent</p>
                    </div>
                    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                      <p className='text-[14px]'>$ 360 / month</p>
                    </div>
                  </div>
                </div>
                <div className='skylineCont w-[373px] max-[420px]:w-[320px] h-[99px] flex flex-col justify-between'>
                  <p className='text-[20px] leading-[22px] cursor-pointer'>Skyline tower</p>
                  <div className='skylineLocation w-full h-[20px] flex items-center'>
                    <i class="ri-map-pin-2-line"></i>
                    <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>2715 Ash Dr. San Jose, South Dakota</p>
                  </div>

                  <div className='skylineDetail w-full h-auto flex flex-wrap gap-[4px]'>
                    <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-drag-move-2-fill"></i>
                      <p className='text-[14px]'>1250 sqft</p>
                    </div>
                    <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-hotel-bed-line"></i>
                      <p className='text-[14px]'>3</p>
                    </div>
                    <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="fa-solid fa-bath"></i>
                      <p className='text-[14px]'>2</p>
                    </div>
                    <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                      <i class="ri-car-line"></i>
                      <p className='text-[14px]'>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='exploreBtn w-full lg:w-[1200px] h-[48px] flex justify-center mt-8 lg:mt-0' data-aos="fade-up">
            <Link to="/Exploreall">
            <button className='w-[135px] h-[48px] bg-black rounded-[10px] text-[#fff] font-semibold cursor-pointer hover:bg-black/80 transition-all duration-200'>
              Explore all
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='about w-full h-auto lg:h-[600px] flex items-center justify-center px-4 sm:px-6 md:px-10'>
        <div className='subAbout w-full max-w-[1200px] h-auto lg:h-[455px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0'>
          <div className='aboutCont w-full lg:w-[483px] h-auto lg:h-[455px] text-center lg:text-left'>
            <div className='aboutText w-[110px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center mx-auto lg:mx-0' data-aos="fade-up">
              <p className='uppercase text-[14px] text-[#333]'>about us</p>
            </div>
            <p className='aboutTtl text-[32px] sm:text-[36px] lg:text-[48px] font-semibold pt-[18px] leading-[40px] sm:leading-[44px] lg:leading-[54px]' data-aos="fade-up">
              The ideal way to find your dream home
            </p>
            <p className='text-[14px] text-[#333] leading-[21px] pt-[24px] lg:pt-[120px]' data-aos="fade-up">
              Wake up to the sound of waves and the smell of salt air in one of our <br className="hidden sm:block" />
              stunning coastal homes. Perfect for those seeking a serene escape, <br className="hidden sm:block" />
              these properties offer unmatched ocean views and direct beach safe neighborhoods, and nearby schools access.
            </p>
            <button className='w-[135px] h-[48px] bg-[#000] rounded-[10px] mt-[32px] text-[#fff] font-semibold hover:bg-black/80 transition-all duration-200 mx-auto lg:mx-0' data-aos="fade-up">
              Read more
            </button>
          </div>
          <div className='aboutImg w-full lg:w-[540px] h-auto lg:h-[455px]' data-aos="fade-up">
            <img src={aboutImg} className='rounded-[22px] w-full h-full object-cover' />
          </div>
        </div>
      </div>

      <div className='categories w-full h-auto lg:h-[760px] flex items-center justify-center px-4 sm:px-6 md:px-10 mt-[20px] lg:mt-0'>
        <div className='subCategories w-full lg:w-[1200px] h-auto lg:h-[645px] flex flex-col justify-between items-center'>
          <div className='categoriesText w-full lg:w-[500px] h-auto lg:h-[164px] flex flex-col justify-between items-center mb-[20px] lg:mb-0'>
            <div className='w-[210px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center mx-auto lg:mx-0' data-aos="fade-up">
              <p className='uppercase text-[14px] text-[#333]'>property categories</p>
            </div>
            <p className='aboutTtl text-[32px] sm:text-[36px] lg:text-[48px] text-center font-semibold pt-[18px] leading-[40px] sm:leading-[44px] lg:leading-[54px]' data-aos="fade-up">Start your journey to your ideal property</p>
          </div>
          <div className='categoriesCont w-full lg:w-[1200px] h-auto lg:h-[442px] flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-0' data-aos="fade-up">
            <div className='subCategoriesCont w-full max-w-[373px] h-auto flex flex-col justify-between items-center px-4 sm:px-6 md:px-0'>
              <div className='categoriesImg w-full h-[250px] sm:h-[300px] rounded-[20px] relative overflow-hidden group'>
                <img
                  src={categoryImg1}
                  className='w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
              </div>
              <div className='categoriesDetail w-full max-w-[335px] h-auto pt-[20px] text-center'>
                <p className='text-[20px] sm:text-[24px] leading-[24px]'>Eco-Friendly Homes</p>
                <p className='text-[14px] text-[#333] leading-[21px] pt-[8px]'>
                  Sustainable living in eco-friendly homes equipped with cutting-edge green technologies.
                </p>
                <button className='w-[110px] h-[42px] border border-[#E0E0E0] mt-[12px] text-[14px] rounded-[10px]'>
                  Explore Now
                </button>
              </div>
            </div>
            <div className='subCategoriesCont w-full max-w-[373px] h-auto flex flex-col justify-between items-center px-4 sm:px-6 md:px-0'>
              <div className='categoriesImg w-full h-[250px] sm:h-[300px] rounded-[20px] relative overflow-hidden group'>
                <img
                  src={categoryImg2}
                  className='w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
              </div>
              <div className='categoriesDetail w-full max-w-[335px] h-auto pt-[20px] text-center'>
                <p className='text-[20px] sm:text-[24px] leading-[24px]'>Commercial Properties</p>
                <p className='text-[14px] text-[#333] leading-[21px] pt-[8px]'>
                  Commercial buildings intended to provide visitors with comfort and convenience.
                </p>
                <button className='w-[110px] h-[42px] border border-[#E0E0E0] mt-[12px] text-[14px] rounded-[10px]'>
                  Explore Now
                </button>
              </div>
            </div>
            <div className='subCategoriesCont w-full max-w-[373px] h-auto flex flex-col justify-between items-center px-4 sm:px-6 md:px-0'>
              <div className='categoriesImg w-full h-[250px] sm:h-[300px] rounded-[20px] relative overflow-hidden group'>
                <img
                  src={categoryImg3}
                  className='w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
              </div>
              <div className='categoriesDetail w-full max-w-[335px] h-auto pt-[20px] text-center'>
                <p className='text-[20px] sm:text-[24px] leading-[24px]'>Luxury Properties</p>
                <p className='text-[14px] text-[#333] leading-[21px] pt-[8px]'>
                  Elegant life in opulent mansions and estates equipped with the best conveniences.
                </p>
                <button className='w-[110px] h-[42px] border border-[#E0E0E0] mt-[12px] text-[14px] rounded-[10px]'>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Best />

      <Numbers />

      <Process />

      <div className='agents w-full h-auto lg:h-[740px] flex flex-col items-center justify-center gap-[30px]'>
        <div className='agentsTtl w-full max-w-[1200px] h-auto lg:h-[110px] flex flex-col justify-between items-center px-4 text-center mx-auto mt-[20px] lg:mt-0'>
          <div className='agentsText w-[125px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
            <p className='text-[14px] text-[#333] uppercase'>our agents</p>
          </div>
          <p className='text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-[46px] sm:leading-[50px] lg:leading-[54px] mt-4' data-aos="fade-up">
            Our expert agents
          </p>
        </div>

        <div className='agentsImgs w-full h-auto lg:h-[460px] overflow-hidden relative' data-aos="fade-up">
          <div className="scroll-track flex animate-scroll-custom min-w-[3700px] gap-[30px]">
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg1} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Bryce Jones</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Client relations manager</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg2} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Dentista Aguilda</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Luxury property expert</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg3} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Agustín trabajo</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Lead property advisor</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg4} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Cristela Estilista</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Senior real estate consultant</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg5} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Denya Contadora</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Real estate investment specialist</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg6} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Alday Banamex</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Residential sales consultant</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg7} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Encarna Homie</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Commercial property agent</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg8} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Uziel Renta</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Property management specialist</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg9} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Valerie Ahorro</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Listing agent</p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[420px] sm:h-[400px] md:h-[440px] lg:h-[460px] shrink-0 flex flex-col justify-between">
              <div className='agentsImg w-full h-[360px] sm:h-[340px] md:h-[375px] lg:h-[395px] rounded-[20px] overflow-hidden'>
                <img src={agentImg10} className='rounded-[20px] w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
              </div>
              <div className='agentsName w-full h-[54px]'>
                <p className='text-[20px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[27px]'>Maestra Yazmin</p>
                <p className='text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#333] pt-[5px]'>Investment property consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial/>

      <Blog/>

      <Faq/>

      <Footer/>
    </>
  )
}

export default Home
