import React, { useState } from 'react'



const Faq = () => {

    const accordionData = [
        {
            question: 'How long does it take to buy a home?',
            answer: 'The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.'
        },
        {
            question: 'How much should I save for a down payment?',
            answer: 'The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.'
        },
        {
            question: 'Do I need a real estate agent to sell my home?',
            answer: 'The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.'
        },
        {
            question: 'What should I look for during a home inspection?',
            answer: 'The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.'
        },
        {
            question: 'What is the first step in buying a home?',
            answer: 'The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.'
        }
    ]

    const [isOpen, setIsOpen] = useState(null);

    const handleAccordion = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const getIconClass = (index) => {
        return isOpen === index ? 'ri-subtract-line' : 'ri-add-line';
    }

    return (
        <>
            <div className='faq w-full h-auto lg:h-[640px] flex items-center justify-center'>
                <div className='subFaq w-full lg:w-[1200px] h-auto lg:h-[476px] flex flex-wrap justify-between'>
                    <div className='faqTtl w-full lg:w-[460px] h-auto lg:h-[164px] lg:sticky lg:top-[100px] text-center lg:text-left px-4 lg:px-0 mt-[30px] lg:mt-0'>
                        <div className='faqText w-[60px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center mx-auto lg:mx-0'>
                            <p className='text-[14px] uppercase text-[#333]'>faq</p>
                        </div>
                        <p className='text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[40px] sm:leading-[48px] lg:leading-[54px] pt-[20px]'>
                            Frequently Asked Questions
                        </p>
                    </div>
                    <div className='faqCont w-full lg:w-[710px] h-auto lg:h-[476px] flex flex-col justify-around mt-[20px] lg:mt-0 px-4 lg:px-0'>
                        {accordionData.map((item, index) => (
                            <div
                                key={index}
                                className='question w-full mb-4 border border-[#E8E8E8] bg-[#F7F7F7] rounded-[20px] cursor-pointer flex flex-col items-start px-[20px] py-[20px]'
                                onClick={() => handleAccordion(index)}
                            >
                                <div className='w-full flex items-center justify-between gap-4'>
                                    <p className='text-[18px] sm:text-[20px] lg:text-[24px] font-semibold'>{item.question}</p>
                                    <i className={`text-[22px] sm:text-[24px] ${getIconClass(index)}`}></i>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out text-[15px] sm:text-[16px] text-[#4c4c4c] 
                                    ${isOpen === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Faq
