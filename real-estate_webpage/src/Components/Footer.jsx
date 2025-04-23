import React from 'react'
import footerImg from '../assets/footer-thumb-2.png'
import footerLogo from '../assets/f_logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer w-full h-auto lg:h-[1160px] bg-[#0C0407] flex items-center justify-center'>
                <div className='subFooter w-full lg:w-[1200px] h-auto lg:h-[1023px] flex flex-col flex-wrap justify-between'>
                    <div className='contact w-full lg:w-[1200px] h-auto lg:h-[455px] flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-0'>
                        <div className='subContact w-full lg:w-[446px] h-auto lg:h-[455px] flex flex-col items-center lg:items-start text-center lg:text-left'>
                            <div className='contactText w-[100px] h-[36px] lg:w-[110px] lg:h-[40px] bg-[#241D1F] border-2 border-[#393335] rounded-[20px] flex items-center justify-center mt-6 lg:mt-0'>
                                <p className='text-[13px] lg:text-[14px] uppercase text-[#fff]'>contact</p>
                            </div>
                            <p className='text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-[#fff] leading-[34px] sm:leading-[42px] lg:leading-[54px] pt-[20px]'>
                                Want to contact with us?
                            </p>
                            <input type="text" placeholder='Name' className='w-full max-w-[375px] h-[36px] mt-[30px] border-b border-[#6D686A] text-[14px] font-semibold outline-0 text-[#fff] bg-transparent' />
                            <input type="email" placeholder='Email' className='w-full max-w-[375px] h-[36px] mt-[25px] border-b border-[#6D686A] text-[14px] font-semibold outline-0 text-[#fff] bg-transparent' />
                            <button className='w-[130px] h-[44px] bg-[#fff] rounded-[10px] mt-[35px]'>
                                <p className='font-semibold'>Book a call</p>
                            </button>
                        </div>
                        <div className='footerImg w-full lg:w-[954px] h-auto lg:h-[455px] mt-8 lg:mt-0 flex justify-center lg:justify-end overflow-hidden'>
                            <img src={footerImg} className='w-full lg:w-auto lg:h-full object-contain translate-x-0 lg:translate-x-[30px]' />
                        </div>
                    </div>

                    <div className='footerCont w-full lg:w-[1200px] h-auto lg:h-[418px] flex flex-col justify-between px-4 lg:px-0'>
                        <div className='subFooterCont w-full lg:w-[1200px] h-auto lg:h-[370px] border-b-2 border-[#241D20] flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 mt-[30px] lg:mt-0'>
                            <div className='realfy w-full lg:w-[305px] h-auto flex flex-col items-center lg:items-start text-center lg:text-left'>
                                <img src={footerLogo} alt="logo" />
                                <p className='text-[14px] text-[#fff] leading-[21px] pt-[22px]'>
                                    Lorem ipsum dolor sit amet consectetur. <br />
                                    Gravida elementum dolor semper felis pulvinar <br />
                                    feugiat risus adipiscing dictum.
                                </p>
                                <button className='w-[190px] h-[55px] border border-[#615C5E] rounded-[10px] text-[14px] text-[#fff] font-semibold mt-[30px]'>
                                    View More Templates
                                </button>
                            </div>
                            <div className='pages w-full lg:w-[91px] h-auto lg:h-[297px] flex flex-col items-center lg:items-start lg:justify-between text-center lg:text-left'>
                                <p className='text-[24px] text-[#fff] font-semibold'>Pages</p>
                                <a href="#" className='text-[14px] text-[#fff]'>Home</a>
                                <a href="#" className='text-[14px] text-[#fff]'>About</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Services</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Contact</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Realtor</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Privacy Policy</a>
                            </div>
                            <div className='cms w-full lg:w-[110px] h-auto lg:h-[297px] flex flex-col items-center lg:items-start lg:justify-between text-center lg:text-left'>
                                <p className='text-[24px] text-[#fff] font-semibold'>CMS</p>
                                <a href="#" className='text-[14px] text-[#fff]'>Properties</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Properties Single</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Blog</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Blog Single</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Agents</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Agents Single</a>
                            </div>
                            <div className='utility w-full lg:w-[130px] h-auto lg:h-[297px] flex flex-col items-center lg:items-start lg:justify-between text-center lg:text-left'>
                                <p className='text-[24px] text-[#fff] font-semibold'>Utility</p>
                                <a href="#" className='text-[14px] text-[#fff]'>Style guide</a>
                                <a href="#" className='text-[14px] text-[#fff]'>404 Page</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Password protected</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Licenses</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Changelog</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Terms & conditions</a>
                            </div>
                            <div className='social w-full lg:w-[72px] h-auto lg:h-[297px] flex flex-col items-center lg:items-start lg:justify-between text-center lg:text-left'>
                                <p className='text-[24px] text-[#fff] font-semibold'>Social</p>
                                <a href="#" className='text-[14px] text-[#fff]'>Facebook</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Instagram</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Twitter</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Linkedin</a>
                                <a href="#" className='text-[14px] text-[#fff]'>YouTube</a>
                                <a href="#" className='text-[14px] text-[#fff]'>Threads</a>
                            </div>
                        </div>
                        <div className='copyright w-full lg:w-[1200px] h-[24px] flex items-center justify-center mt-6'>
                            <p className='text-[#999] text-center'>©Realvy. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
