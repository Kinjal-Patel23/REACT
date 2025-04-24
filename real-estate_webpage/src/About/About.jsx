import React, { useEffect } from 'react'
import Rellax from 'rellax';
import Navbar from '../Components/Navbar'
import aboutImg from '../assets/about-banner-1.jpg'
import missionImg from '../assets/mission-thumb-1.jpg'
import missionIcon from '../assets/mission-icon-6.svg'
import Testimonial from '../Components/Testimonial'
import Blog from '../Components/Blog'
import Numbers from '../Components/Numbers'
import Best from '../Components/Best'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const About = () => {

  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  return (
    <>
      <Navbar />

      <div className='heroSection w-full h-auto lg:h-[940px] flex flex-col items-center justify-center relative overflow-hidden px-4 lg:px-0'>
        <div className='heroSectionText w-full lg:w-[1200px] h-[44px] flex items-end justify-center'>
          <div className='subHeroSectionText w-[160px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center gap-[5px]' data-aos="fade-up">
            <i className="ri-home-5-line text-[19px]"></i>
            <p className='heroText text-[15px] font-semibold'>WHO WE ARE</p>
          </div>
        </div>
        <div className="mainTtl w-full lg:w-[1200px] h-auto lg:h-[220px] z-10 relative text-center" data-aos="fade-up">
          <p className="text-[50px] lg:text-[190px] uppercase font-semibold leading-[60px] lg:leading-[220px] tracking-tighter">
            about us
          </p>
        </div>
        <div className="heroSectionImg w-full lg:w-[1200px] h-auto lg:h-[600px] z-20 rounded-[20px]" data-aos="fade-up">
          <img
            src={aboutImg}
            alt="hero"
            className="rellax w-full h-full object-contain transition-transform duration-300 ease-in-out rounded-[20px]"
            data-rellax-speed='3'
          />
        </div>
      </div>

      <div className='mission w-full h-auto lg:h-[700px] flex items-center justify-center px-4 lg:px-0'>
        <div className='subMission w-full lg:w-[1200px] h-auto lg:h-[550px] flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10'>
          <div className='missionImg w-full lg:w-[540px] h-auto lg:h-[500px]' data-aos="fade-up">
            <img src={missionImg} className='rounded-[20px] w-full h-full object-cover' />
          </div>
          <div className='missionCont w-full lg:w-[483px] h-auto lg:h-[550px] text-center lg:text-left flex flex-col items-center lg:items-start'>
            <div className='missionText w-[140px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
              <p className='text-[14px] uppercase text-[#333]'>our missions</p>
            </div>
            <p className='text-[32px] lg:text-[48px] font-semibold leading-[40px] lg:leading-[54px] pt-[20px]' data-aos="fade-up">
              Our commitment to your success
            </p>

            <p className='text-[14px] text-[#333] leading-[21px] pt-[30px] lg:pt-[130px] max-w-[90%] lg:max-w-full' data-aos="fade-up">
              We are committed to environmental responsibility and incorporate sustainable practices in real estate wherever possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-[25px] w-full" data-aos="fade-up">
              {[
                "Exceed client expectations",
                "Provide tailored solutions",
                "Empower informed decisions",
                "Ensure financial transparency",
                "Innovate for efficiency",
                "Foster collaboration"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <i className="ri-checkbox-blank-circle-fill text-[#333] text-[7px] mt-[5px]"></i>
                  <span className='text-[14px] text-[#333] font-semibold leading-[18px]'>{point}</span>
                </div>
              ))}
            </div>
            <button className='contactBtn w-[135px] h-[48px] bg-[#000] text-[#fff] rounded-[10px] font-semibold mt-[40px] hover:bg-black/80 transition-all duration-200' data-aos="fade-up">
              Contact us
            </button>
          </div>
        </div>
      </div>


      <div className='value w-full h-auto lg:h-[1000px] flex items-center justify-center'>
        <div className='subValue w-full lg:w-[1200px] h-auto lg:h-[852px] flex flex-wrap justify-between'>

          <div className='valueCont w-full lg:w-[480px] h-auto lg:h-[386px] lg:sticky top-[100px] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0 mt-[30px] lg:mt-0'>
            <div className='valueText w-[120px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center' data-aos="fade-up">
              <p className='uppercase text-[#333] text-[14px]'>our values</p>
            </div>
            <p className='text-[32px] lg:text-[48px] font-semibold leading-[40px] lg:leading-[54px] pt-[15px]' data-aos="fade-up">
              The values that drive us forward
            </p>
            {[
              "We believe in transparency and honesty",
              "Our clients' needs and satisfaction are our top priorities",
              "We strive for perfection in all we do",
              "Building lasting relationships with clients",
              "Giving back and supporting the communities where we live"
            ].map((point, index) => (
              <p
                key={index}
                className='text-[14px] text-[#333] pt-[8px] flex items-start justify-start ps-[10px] max-w-[95%] lg:max-w-full'
                data-aos="fade-up"
              >
                <i className="ri-checkbox-blank-circle-fill text-[#333] text-[7px] pr-[10px] mt-[7px]"></i>
                {point}
              </p>
            ))}
            <button className='contactBtn w-[135px] h-[48px] bg-[#000] text-[#fff] rounded-[10px] font-semibold mt-[22px] hover:bg-black/80 transition-all duration-200' data-aos="fade-up">
              Contact us
            </button>

          </div>
          <div className='valueBox w-full lg:w-[560px] h-auto lg:h-[852px] flex flex-wrap justify-center lg:justify-between gap-[20px] mt-[20px] lg:mt-0'>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px]'><i className='ri-lightbulb-line text-[45px] ps-[22px]'></i></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Innovation</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                We stay ahead of market trends <br />
                and embrace new technologies <br />
                effective solutions for our clients.
              </p>
            </div>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px]'><i className='ri-star-line text-[45px] ps-[22px]'></i></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Quality</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                We are committed to exceeding<br />
                expectations by delivering high- <br />
                quality service, expert advice.
              </p>
            </div>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px]'><i className='ri-bar-chart-2-line text-[45px] ps-[22px]'></i></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Growth</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                We foster long-term relationships <br />
                by delivering on our promises <br />
                and maintaining communication.
              </p>
            </div>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px]'><i className='ri-team-line text-[45px] ps-[22px]'></i></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Community</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                We believe in giving back and<br />
                making a positive impact in the <br />
                communities where we work.
              </p>
            </div>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px] ps-[22px]'><img src={missionIcon} alt="mission icon" /></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Integrity</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                We operate with honesty, and a<br />
                dedication to doing what’s right <br />
                in every transaction.
              </p>
            </div>
            <div className='subBox w-[100%] sm:w-[268px] h-[268px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] m-[20px] lg:m-0' data-aos="fade-up">
              <p className='pt-[25px]'><i className='ri-headphone-line text-[45px] ps-[22px]'></i></p>
              <p className='text-[24px] text-[#0c0407] font-semibold pt-[30px] ps-[22px]'>Interaction</p>
              <p className='text-[14px] text-[#333] leading-[21px] ps-[22px] pt-[8px]'>
                Our clients are at the heart of our <br />
                business. We listen, understand <br />
                their needs, satisfaction.
              </p>
            </div>

          </div>

        </div>
      </div>

      <Best />

      <Numbers />

      <Testimonial />

      <Blog />

      <Faq />

      <Footer />
    </>
  )
}

export default About
