import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import proImg1 from '../assets/properties-thumb-1.jpg'
import proImg2 from '../assets/properties-thumb-2.jpg'
import proImg3 from '../assets/properties-thumb-3.jpg'
import proImg4 from '../assets/properties-thumb-4.jpg'
import proImg5 from '../assets/properties-thumb-5.jpg'
import proImg6 from '../assets/properties-thumb-6.jpg'
import proImg7 from '../assets/properties-thumb-7.jpg'
import proImg8 from '../assets/properties-thumb-8.jpg'
import proImg9 from '../assets/properties-thumb-9.jpg'
import proImg10 from '../assets/properties-thumb-10.jpg'
import proImg11 from '../assets/properties-thumb-11.jpg'
import proImg12 from '../assets/properties-thumb-12.jpg'
import Location from '../Components/Location'
import Type from '../Components/Type'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Exploreall = () => {

    const properties = [
        {
            id: 1,
            name: "Sunset luxury villa",
            location: "New York",
            address: "12273 Dream Avenue, New York",
            price: "$ 400 / month",
            type: "Rent",
            img: proImg1,
            sqft: "1490 sqft",
            bed: 3,
            bath: 2,
            parking: 2
        },
        {
            id: 2,
            name: "Parkview estates",
            location: "Santa Ana, Illinois",
            address: "2972 Westheimer Rd. Santa Ana, Illinois",
            price: "$ 50,000",
            type: "Sell",
            img: proImg2,
            sqft: "2370 sqft",
            bed: 4,
            bath: 3,
            parking: 2
        },
        {
            id: 3,
            name: "Cedar grove residences",
            loction: "Inglewood, Maine",
            address: "8502 Preston Rd. Inglewood, Maine",
            price: "$ 200 / month",
            type: "Rent",
            img: proImg3,
            sqft: "1300 sqft",
            bed: 3,
            bath: 3,
            parking: 1
        },
        {
            id: 4,
            name: "Lakeside manor",
            location: "Mesa, New Jersey",
            address: "2464 Royal Ln. Mesa, New Jersey",
            price: "$ 32,000",
            type: "Sell",
            img: proImg4,
            sqft: "700 sqft",
            bed: 2,
            bath: 1,
            parking: 1
        },
        {
            id: 5,
            name: "Oceanfront oasis",
            location: "Celina, Delaware",
            address: "6391 Elgin St. Celina, Delaware",
            price: "$ 520 / month",
            type: "Rent",
            img: proImg5,
            sqft: "1500 sqft",
            bed: 3,
            bath: 3,
            parking: 2
        },
        {
            id: 6,
            name: "Skyline tower",
            location: "San Jose, South Dakota",
            address: "2715 Ash Dr. San Jose, South Dakota",
            price: "$ 360 / month",
            type: "Rent",
            img: proImg6,
            sqft: "1250 sqft",
            bed: 3,
            bath: 2,
            parking: 1
        },
        {
            id: 7,
            name: "Harborview villas",
            location: "San Diego, California",
            address: "3722 Seaside Blvd, San Diego, California",
            price: "$ 360 / month",
            type: "Sale",
            img: proImg7,
            sqft: "1345 sqft",
            bed: 4,
            bath: 2,
            parking: 1
        },
        {
            id: 8,
            name: "Maplewood grove",
            location: "Nashville, Tennessee",
            address: "254 Maplewood Ave, Nashville, Tennessee",
            price: "$ 360 / month",
            type: "Rent",
            img: proImg8,
            sqft: "1680 sqft",
            bed: 3,
            bath: 2,
            parking: 1
        },
        {
            id: 9,
            name: "Evergreen heights",
            location: "Portland, Oregon",
            address: "875 Green Valley Ln, Portland, Oregon",
            price: "$ 360 / month",
            type: "Sale",
            img: proImg9,
            sqft: "1020 sqft",
            bed: 2,
            bath: 1,
            parking: 1
        },
        {
            id: 10,
            name: "Riverside enclave",
            location: "New Orleans, Louisiana",
            address: "593 Riverfront Dr, New Orleans, Louisiana",
            price: "$ 360 / month",
            type: "Rent",
            img: proImg10,
            sqft: "1860 sqft",
            bed: 4,
            bath: 2,
            parking: 1
        },
        {
            id: 11,
            name: "Bluewater estates",
            location: "Myrtle Beach, South Carolina",
            address: "1290 Ocean Blvd, Myrtle Beach, South Carolina",
            price: "$ 460 / month",
            type: "Sale",
            img: proImg11,
            sqft: "1150 sqft",
            bed: 2,
            bath: 2,
            parking: 1
        },
        {
            id: 12,
            name: "Woodland retreat",
            location: "Las Vegas, Nevad",
            address: "645 Skyline Rd, Las Vegas, Nevada",
            price: "$ 560 / month",
            type: "Rent",
            img: proImg12,
            sqft: "1580 sqft",
            bed: 4,
            bath: 2,
            parking: 1
        }
    ];

    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [searchText, setSearchText] = useState("");

    const filterProperties = properties.filter((p) =>
        (selectedLocation === "all" ? true : p.address.toLowerCase().includes(selectedLocation.toLowerCase())) &&
        (selectedType === "all" ? true : p.type.toLowerCase() === selectedType.toLowerCase()) &&
        (searchText === "" ? true : p.name.toLowerCase().includes(searchText.toLowerCase()))
      );

   
    

    return (
        <>
            <Navbar />
            
            <div className='heroSection w-full h-auto lg:h-[480px] flex flex-col items-center justify-center relative overflow-hidden px-4 py-6'>
                <div className='heroSectionText w-full max-w-[1200px] h-[44px] flex items-end justify-center'>
                    <div className='subHeroSectionText w-[185px] h-[40px] bg-[#F7F7F7] border-2 border-[#E8E8E8] rounded-[50px] flex items-center justify-center gap-[5px]' data-aos="fade-up">
                        <i className="ri-home-5-line text-[19px]"></i>
                        <p className='heroText text-[15px]'>ALL PROPERTIES</p>
                    </div>
                </div>
                <div className="mainTtl w-full max-w-[1200px] h-auto lg:h-[220px] z-10 relative" data-aos="fade-up">
                    <p className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[190px] uppercase font-semibold leading-[1.1] tracking-tighter text-center">
                        properties
                    </p>
                </div>
                <div className='search w-full max-w-[815px] h-auto lg:h-[86px] bg-[#F7F7F7] border border-[#E8E8E8] rounded-[20px] flex flex-col lg:flex-row items-center justify-between gap-4 p-4 lg:p-0 lg:gap-0' data-aos="fade-up">
                    <div className='ltc w-full lg:w-[332px] flex flex-col sm:flex-row justify-between items-center gap-4 lg:ms-[30px]'>
                        <Location selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
                        <Type onChange={(value) => setSelectedType(value)} />

                        <div className='category w-full sm:w-[110px]'>
                            <select className='w-full h-[35px] text-[#0c0407] text-[14px] bg-transparent rounded-md px-2 focus:outline-none'>
                                <option value="" hidden>Category</option>
                                <option value="Web Design">Eco-Friendly Homes</option>
                                <option value="Development">Commercial Properties</option>
                                <option value="Marketing">Luxury Properties</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Box */}
                    <div className='searchDiv w-full lg:w-[300px] h-[60px] bg-[#fff] border border-[#E8E8E8] rounded-[10px] flex items-center justify-between px-2 lg:mr-[30px]'>
                        <input
                            type="text"
                            placeholder='Search...'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className='w-full text-[14px] text-[#333] outline-0 px-2'
                        />
                        <div className='searchIcon w-[44px] h-[44px] bg-[#000] rounded-[10px] cursor-pointer flex items-center justify-center ml-2'>
                            <i className="ri-search-line text-[#fff] text-[18px]"></i>
                        </div>
                    </div>

                </div>

            </div>


            {/* <div className='exploreCont w-full h-auto flex items-center justify-center'>
                <div className='subExploreCont w-full lg:w-[1200px] h-auto flex flex-col justify-between'>
                    <div className='exploreBox w-full lg:w-[1200px] h-auto flex flex-wrap justify-center gap-[20px] mt-[20px]'>
                        {filterProperties.map((property, index) => (
                            <div key={index} className='w-[373px] h-[411px] flex flex-col justify-between mt-[10px]'>
                                <div className="sunsetImg w-[373px] h-[300px] rounded-[20px] relative overflow-hidden group">
                                    <img
                                        src={property.img}
                                        className="w-full h-full cursor-pointer object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        alt="Sunset"
                                    />
                                    <div className="relative w-[373px] h-[60px] z-10 flex items-center justify-center gap-[160px]">
                                        <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                                            <p className='text-[14px]'>{property.type}</p>
                                        </div>
                                        <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
                                            <p className='text-[14px]'>{property.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='sunsetCont w-[373px] h-[99px] flex flex-col justify-between'>
                                    <p className='text-[24px] leading-[24px] cursor-pointer'>{property.name}</p>
                                    <div className='sunsetLocation w-[373px] h-[20px] flex items-center'>
                                        <i class="ri-map-pin-2-line"></i>
                                        <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>{property.address}</p>
                                    </div>
                                    <div className='sunsetDetail w-[373px] h-[36px] flex gap-[4px]'>
                                        <div className='sqft w-[116px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                                            <i class="ri-drag-move-2-fill"></i>
                                            <p className='text-[14px]'>{property.sqft}</p>
                                        </div>
                                        <div className='bed w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                                            <i class="ri-hotel-bed-line"></i>
                                            <p className='text-[14px]'>{property.bed}</p>
                                        </div>
                                        <div className='w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                                            <i class="fa-solid fa-bath"></i>
                                            <p className='text-[14px]'>{property.bath}</p>
                                        </div>
                                        <div className='parking w-[63px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                                            <i class="ri-car-line"></i>
                                            <p className='text-[14px]'>{property.parking}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='exploreBtn w-[1200px] h-[48px] flex justify-center mt-[30px]'>
                        <button className='w-[135px] h-[48px] bg-black rounded-[10px] text-[#fff] font-semibold cursor-pointer hover:bg-black/80 transition-all duration-200'>Explore all</button>
                    </div>
                </div>
            </div> */}

<div className='exploreCont w-full h-auto flex items-center justify-center px-[15px] lg:px-0'>
  <div className='subExploreCont w-full lg:w-[1200px] h-auto flex flex-col justify-between'>
    
    <div className='exploreBox w-full h-auto flex flex-wrap justify-center gap-[20px] mt-[20px]'>
      {filterProperties.map((property, index) => (
        <div key={index} className='w-full sm:w-[300px] md:w-[340px] lg:w-[373px] h-auto lg:h-[411px] flex flex-col justify-between mt-[10px]'>
          
          <div className="sunsetImg w-full h-[250px] sm:h-[280px] lg:h-[300px] rounded-[20px] relative overflow-hidden group">
  <img
    src={property.img}
    className="w-full h-full object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
    alt="Sunset"
  />
  <div className="relative w-full h-[60px] z-10 flex items-center justify-between px-[20px]">
    <div className='rent w-[54px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
      <p className='text-[14px]'>{property.type}</p>
    </div>
    <div className='price w-[120px] h-[30px] bg-[#fff] rounded-[50px] flex items-center justify-center'>
      <p className='text-[14px]'>{property.price}</p>
    </div>
  </div>
</div>


          <div className='sunsetCont w-full h-auto lg:h-[99px] flex flex-col justify-between mt-[10px]'>
            <p className='text-[20px] lg:text-[24px] leading-[24px] cursor-pointer'>{property.name}</p>

            <div className='sunsetLocation w-full h-auto flex items-center mt-[4px]'>
              <i className="ri-map-pin-2-line"></i>
              <p className='ps-[4px] text-[14px] text-[#14161c] leading-[26px]'>{property.address}</p>
            </div>

            <div className='sunsetDetail w-full h-auto flex flex-wrap gap-[6px] mt-[10px]'>
              <div className='sqft flex-1 min-w-[70px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                <i className="ri-drag-move-2-fill"></i>
                <p className='text-[14px]'>{property.sqft}</p>
              </div>
              <div className='bed flex-1 min-w-[60px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                <i className="ri-hotel-bed-line"></i>
                <p className='text-[14px]'>{property.bed}</p>
              </div>
              <div className='flex-1 min-w-[60px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                <i className="fa-solid fa-bath"></i>
                <p className='text-[14px]'>{property.bath}</p>
              </div>
              <div className='parking flex-1 min-w-[60px] h-[36px] border border-[#EFEFEF] rounded-[5px] flex items-center justify-center gap-[4px]'>
                <i className="ri-car-line"></i>
                <p className='text-[14px]'>{property.parking}</p>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>

    <div className='exploreBtn w-full lg:w-[1200px] h-[48px] flex justify-center mt-[30px]'>
      <button className='w-[135px] h-[48px] bg-black rounded-[10px] text-[#fff] font-semibold cursor-pointer hover:bg-black/80 transition-all duration-200'>
        Explore all
      </button>
    </div>

  </div>
</div>


            <Faq />

            <Footer />
        </>
    )
}

export default Exploreall
