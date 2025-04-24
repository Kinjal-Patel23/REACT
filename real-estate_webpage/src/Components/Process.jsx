import React from 'react'
import processImg1 from '../assets/process-thumb-1.jpg'
import processImg2 from '../assets/process-thumb-2.jpg'
import processImg3 from '../assets/process-thumb-3.jpg'

const Process = () => {

    return (
        <>
            <div className='process w-full h-auto lg:h-[1874px] flex items-center justify-center'>
                <div className='subProcess w-full lg:w-[1200px] h-auto lg:h-[1724px] flex flex-col items-center justify-between'>
                    <div className='processTtl w-full lg:w-[570px] h-auto lg:h-[164px] flex flex-col items-center justify-between px-4 text-center mt-[20px] lg:mt-0'>
                        <div className='processText w-[130px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
                            <p className='text-[13px] sm:text-[14px] uppercase text-[#333]'>our process</p>
                        </div>
                        <p className='text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[34px] sm:leading-[44px] md:leading-[48px] lg:leading-[54px] pt-4 sm:pt-6' data-aos="fade-up">
                            Find your dream house & follow our process
                        </p>
                    </div>
                    <div className='processCont w-full lg:w-[1200px] h-auto lg:h-[1500px]  flex flex-col lg:flex-row justify-between gap-10 px-4'>
                        <div className='subProcessCont w-full lg:w-[496px] flex flex-col gap-[80px]'>
                            <div  className='step1' data-aos="fade-up">
                                <div className='stepText w-[80px] h-[40px] mt-[40px] mx-auto lg:mx-0 bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center'>
                                    <p className='text-[13px] sm:text-[14px] uppercase text-[#333]'>step-1</p>
                                </div>
                                <p className='text-[24px] sm:text-[32px] lg:text-[48px] font-semibold leading-snug lg:leading-[51px] text-center lg:text-left pt-[20px]'>
                                    Look for your dream home in your local area today
                                </p>
                                <p className='text-[14px] text-[#333] leading-[21px] pt-[18px] text-center lg:text-left'>
                                    Explore a carefully curated selection of stunning homes near you that <br />
                                    perfectly match your unique lifestyle, preferences, and specific needs, <br />
                                    offering the ideal balance of comfort, style, luxury, and location. Each <br />
                                    property is handpicked to provide the perfect combination.
                                </p>
                                <div className='block lg:hidden mt-4'>
                                    <img src={processImg1} className="rounded-[20px] w-full h-auto" />
                                </div>
                            </div>
                            <div  className='step2' data-aos="fade-up">
                                <div className='stepText w-[80px] h-[40px] mt-[40px] mx-auto lg:mx-0 bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center'>
                                    <p className='text-[13px] sm:text-[14px] uppercase text-[#333]'>step-2</p>
                                </div>
                                <p className='text-[24px] sm:text-[32px] lg:text-[46px] font-semibold leading-snug lg:leading-[51px] text-center lg:text-left pt-[20px]'>
                                    Schedule a meeting with one of our agents
                                </p>
                                <p className='text-[14px] text-[#333] leading-[21px] pt-[18px] text-center lg:text-left'>
                                    Book a personalized meeting with one of our experienced agents to <br />
                                    thoroughly explore all your options, discuss your needs, and find the <br />
                                    perfect property that fits your lifestyle and budget.
                                </p>
                                <div className='block lg:hidden mt-4'>
                                    <img src={processImg2} className="rounded-[20px] w-full h-auto" />
                                </div>
                            </div>
                            <div  className='step3' data-aos="fade-up">
                                <div className='stepText w-[80px] h-[40px] mt-[40px] mx-auto lg:mx-0 bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center'>
                                    <p className='text-[13px] sm:text-[14px] uppercase text-[#333]'>step-3</p>
                                </div>
                                <p className='text-[24px] sm:text-[32px] lg:text-[48px] font-semibold leading-snug lg:leading-[51px] text-center lg:text-left pt-[20px]'>
                                    A month or less, get your ideal home
                                </p>
                                <p className='text-[14px] text-[#333] leading-[21px] pt-[18px] text-center lg:text-left'>
                                    Secure your dream home in a month or less with our expert assistance, <br />
                                    personalized guidance, and streamlined processes, ensuring a smooth, <br />
                                    stress-free, and successful journey tailored specifically to your needs and <br />
                                    preferences from start to finish.
                                </p>
                                <div className='block lg:hidden mt-4'>
                                    <img src={processImg3} className="rounded-[20px] w-full h-auto" />
                                </div>
                            </div>
                        </div>
                        <div className='processImg w-[540px] h-[450px] sticky top-[100px] hidden lg:block'>
                            <img src={processImg1} className="rounded-[20px] w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
