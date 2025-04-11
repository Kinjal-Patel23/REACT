import React from 'react'
import './Footer.css'
import blogImg from '../assets/image_1.webp'
import blogImg1 from '../assets/image_2.webp'


const Footer = () => {
  return (
    <>
        <footer>
            <div className='footer'>
                <div className='subFooter'>
                    <div className='about'>
                        <p className='aboutTtl'>About Us</p>
                        <p className='aboutCont'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='blog'>
                        <p className='blogTtl'>Recent Blog</p>
                        <div className='blog1'>
                            <div className='blogImg'>
                                <img src={blogImg}/>
                            </div>
                            <div className='blogImgCont'>
                                <p>Even the all-powerful Pointing has no control about</p>
                            </div>
                        </div>
                        <div className='blog1'>
                        <div className='blogImg'>
                                <img src={blogImg1}/>
                            </div>
                            <div className='blogImgCont'>
                                <p>Even the all-powerful Pointing has no control about</p>
                            </div>
                        </div>
                    </div>
                    <div className='footerServices'>
                        <p className='servicesTitle'>Services</p>
                        <div className='servicesLink'>
                            <a href="#">Cooked</a>
                            <a href="#">Deliver</a>
                            <a href="#">Quality Foods</a>
                            <a href="#">Mixed</a>
                        </div>
                    </div>
                    <div className='questions'>
                        <p>Have a Questions?</p>
                        <div className='contactQuestion'>
                            <i class="ri-phone-fill"></i>
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className='mailQuestion'>
                            <i class="ri-mail-fill"></i>
                            <p className='mailId'>info@yourdomain.com</p>
                        </div>
                    </div>
                </div>
                <div className='copyRight'>
                    <p>Copyright ©2025 All rights reserved | This template is made with <i class="ri-heart-fill"></i> by Colorlib</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
