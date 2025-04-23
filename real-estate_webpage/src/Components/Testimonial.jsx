import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import testiImg1 from '../assets/testimonials-thumb-1.jpg'
import testiImg2 from '../assets/testimonials-thumb-2.jpg'
import testiImg3 from '../assets/testimonials-thumb-3.jpg'

const Testimonial = () => {
    return (
        <>
            <div className='testimonial w-full h-auto lg:h-[780px] flex items-center justify-center'>
                <div className='subTestimonial w-full h-auto lg:h-[630px] flex flex-col items-center justify-between'>
                    <div className='testimonialTtl w-full lg:w-[550px] h-auto lg:h-[164px] flex flex-col items-center justify-between px-4 mt-[30px] lg:mt-0 mb-[20px] lg:mb-0'>
                        <div className='testimonialText w-[120px] sm:w-[130px] md:w-[140px] h-[35px] sm:h-[38px] md:h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
                            <p className='text-[12px] sm:text-[13px] md:text-[14px] text-[#333] uppercase'>testimonials</p>
                        </div>
                        <p className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[54px] text-center mt-4' data-aos="fade-up">
                            Real stories from happy homeowners
                        </p>
                    </div>

                    <div className='testimonialCont w-full h-auto lg:h-[427px] flex flex-col items-center justify-between px-4'>
                        <Swiper data-aos="fade-up"
                            modules={[Navigation]}
                            slidesPerView={1.5}
                            spaceBetween={20}
                            centeredSlides={true}
                            pagination={{ clickable: false }}
                            speed={800}
                            navigation={{
                                prevEl: '.previous',
                                nextEl: '.next'
                            }}
                            className='h-auto w-full'
                        >
                            <SwiperSlide>
                                <div className='clientslider w-full max-w-[821px] h-auto lg:h-[339px] border border-[#E7E7E7] rounded-[25px] flex flex-col md:flex-row items-center justify-center md:justify-evenly p-4 md:p-6 lg:p-0'>
                                    <div className='clientDetail w-full md:w-[433px] h-auto'>
                                        <p className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#0c0407] font-semibold leading-[26px] md:leading-[27px] text-center md:text-left'>
                                            "Their attention to detail market expertise made all the difference."
                                        </p>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[14px] text-center md:text-left'>
                                            Their dedication and commitment to finding the right property <br />
                                            were evident throughout. I highly recommend their services to <br />
                                            anyone looking to buy or sell. I’m thrilled with my new investment <br />
                                            this new property!
                                        </p>
                                        <h1 className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#0c0407] pt-[18px] text-center md:text-left'>
                                            David Martinez
                                        </h1>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] pt-[4px] text-center md:text-left'>San Jose, South Dakota</p>
                                    </div>
                                    <div className='clientImg w-[140px] sm:w-[160px] md:w-[172px] h-[180px] sm:h-[200px] md:h-[217px] mt-6 md:mt-0'>
                                        <img src={testiImg1} className='rounded-[20px] w-full h-full object-cover' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='clientslider w-full max-w-[821px] h-auto lg:h-[339px] border border-[#E7E7E7] rounded-[25px] flex flex-col md:flex-row items-center justify-center md:justify-evenly p-4 md:p-6 lg:p-0'>
                                    <div className='clientDetail w-full md:w-[433px] h-auto'>
                                        <p className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#0c0407] font-semibold leading-[26px] md:leading-[27px] text-center md:text-left'>
                                            "An exceptional experience from start to finish!"
                                        </p>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[14px] text-center md:text-left'>
                                            From the first meeting to the closing, they were professional, <br />
                                            knowledgeable, and always available to answer our questions. I <br />
                                            couldn’t be happier with my new home! They listened to what I <br />
                                            was looking for and showed me properties needs perfectly.
                                        </p>
                                        <h1 className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#0c0407] pt-[18px] text-center md:text-left'>
                                            James Thompson
                                        </h1>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] pt-[4px] text-center md:text-left'>Dallas, Texas</p>
                                    </div>
                                    <div className='clientImg w-[140px] sm:w-[160px] md:w-[172px] h-[180px] sm:h-[200px] md:h-[217px] mt-6 md:mt-0'>
                                        <img src={testiImg2} className='rounded-[20px] w-full h-full object-cover' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='clientslider w-full max-w-[821px] h-auto lg:h-[339px] border border-[#E7E7E7] rounded-[25px] flex flex-col md:flex-row items-center justify-center md:justify-evenly p-4 md:p-6 lg:p-0'>
                                    <div className='clientDetail w-full md:w-[433px] h-auto'>
                                        <p className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#0c0407] font-semibold leading-[26px] md:leading-[27px] text-center md:text-left'>
                                            "Exceptional service and outstanding results."
                                        </p>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] leading-[20px] pt-[14px] text-center md:text-left'>
                                            The team’s marketing strategy and negotiation skills exceeded my <br />
                                            expectations. I couldn’t be more pleased with the outcome. I never<br />
                                            felt rushed or pressured, and they were always willing to go the <br />
                                            extra mile to find properties that matched my vision.
                                        </p>
                                        <h1 className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#0c0407] pt-[18px] text-center md:text-left'>
                                            Olivia Carter
                                        </h1>
                                        <p className='text-[13px] sm:text-[14px] text-[#333] pt-[4px] text-center md:text-left'>Boston, Florida</p>
                                    </div>
                                    <div className='clientImg w-[140px] sm:w-[160px] md:w-[172px] h-[180px] sm:h-[200px] md:h-[217px] mt-6 md:mt-0'>
                                        <img src={testiImg3} className='rounded-[20px] w-full h-full object-cover' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className='circle w-full mt-6 flex items-center justify-center gap-[20px]' data-aos="fade-up">
                            <div className='previous w-[48px] h-[48px] border border-[#CECECE] cursor-pointer rounded-full flex items-center justify-center hover:bg-black group transition-all duration-300'>
                                <i className="ri-arrow-left-line text-[#B3B3B3] text-[20px] group-hover:text-white transition-all duration-300"></i>
                            </div>
                            <div className='next w-[48px] h-[48px] border border-[#CECECE] cursor-pointer rounded-full flex items-center justify-center hover:bg-black group transition-all duration-300'>
                                <i className="ri-arrow-right-line text-[#B3B3B3] text-[20px] group-hover:text-white transition-all duration-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
