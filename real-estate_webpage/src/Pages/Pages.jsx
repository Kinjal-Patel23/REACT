import React from 'react'
import Navbar from '../Components/Navbar'
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
import agentImg11 from '../assets/agents-thumb-11.jpg'
import agentImg12 from '../assets/agents-theme-12.jpg'
import Blog from '../Components/Blog'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Pages = () => {
  return (
    <>
      <Navbar />

      <div className='heroSection w-full h-auto lg:h-[400px] flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='heroSectionText w-full lg:w-[1200px] h-[44px] flex items-end justify-center'>
          <div className='subHeroSectionText w-[140px] sm:w-[160px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center gap-[5px]' data-aos="fade-up">
            <i className="ri-home-5-line text-[16px] sm:text-[19px]"></i>
            <p className='heroText text-[13px] sm:text-[15px]'>OUR AGENTS</p>
          </div>
        </div>
        <div className="mainTtl w-full lg:w-[1200px] h-auto lg:h-[220px] z-10 relative px-4 sm:px-0" data-aos="fade-up">
          <p className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[190px] uppercase font-semibold leading-[70px] sm:leading-[100px] md:leading-[160px] lg:leading-[220px] tracking-tighter text-center">
            agents
          </p>
        </div>

      </div>

      <div className='agents w-full h-auto lg:h-[2250px] flex items-center justify-center'>
        <div className='subAgents w-full lg:w-[1192px] h-auto lg:h-[2100px] flex flex-col justify-between mt-[20px] lg:mt-0'>
          <div className='agentsDiv w-full lg:w-[1192px] flex flex-wrap justify-center lg:justify-between gap-[20px] px-4 md:px-10 lg:px-0' data-aos="fade-up">
            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg1}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Bryce Jones</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Client relations manager</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg2}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Dentista Aguilda</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Luxury property expert</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg3}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Agustín trabajo</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Lead property advisor</p>
            </div>
          </div>
          <div className='agentsDiv w-full lg:w-[1192px] flex flex-wrap justify-center lg:justify-between gap-[20px] px-4 md:px-10 lg:px-0' data-aos="fade-up">
            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg4}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Cristela Estilista</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Senior real estate consultant</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg5}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Denya Contadora</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Real estate investment specialist</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg6}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Alday Banamex</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Residential sales consultant</p>
            </div>
          </div>
          <div className='agentsDiv w-full lg:w-[1192px] flex flex-wrap justify-center lg:justify-between gap-[20px] px-4 md:px-10 lg:px-0' data-aos="fade-up">
            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg7}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Encarna Homie</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Commercial property agent</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg8}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Uziel Renta</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Property management specialist</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg9}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Valerie Ahorro</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Listing agent</p>
            </div>
          </div>
          <div className='agentsDiv w-full lg:w-[1192px] flex flex-wrap justify-center lg:justify-between gap-[20px] px-4 md:px-10 lg:px-0' data-aos="fade-up">
            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg10}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Maestra Yazmin</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Investment property consultant</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg11}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Tia Jaquelín</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Real estate valuation expert</p>
            </div>

            <div className='subAgentsDiv w-full lg:w-[371px] h-auto lg:h-[495px] rounded-[20px] flex flex-col items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0'>
              <div className='w-full h-auto lg:h-[495px] overflow-hidden rounded-[20px] group'>
                <img
                  src={agentImg12}
                  alt="Agent"
                  className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <p className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold pt-[10px]'>Vidal Plantas</p>
              <p className='text-[13px] sm:text-[14px] text-[#333]'>Real estate finance consultant</p>
            </div>
          </div>

        </div>
      </div>

      <Blog />

      <Faq />

      <Footer />
    </>
  )
}

export default Pages
