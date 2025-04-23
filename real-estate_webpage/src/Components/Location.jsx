import React from 'react';

const Location = ({ selectedLocation, setSelectedLocation }) => {
    return (
        <div className='location w-full sm:w-[105px] h-[35px]'>
            <select
                className='w-full h-full text-[#0c0407] text-[14px] bg-transparent rounded-md px-2 focus:outline-none'
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
            >
                <option value="">Location</option>
                <option value="Las Vegas, Nevada">645 Skyline Rd, Las Vegas, Nevada</option>
                <option value="Myrtle Beach, South Carolina">1290 Ocean Blvd, Myrtle Beach, South Carolina</option>
                <option value="New Orleans, Louisiana">593 Riverfront Dr, New Orleans, Louisiana</option>
                <option value="Portland, Oregon">875 Green Valley Ln, Portland, Oregon</option>
                <option value="Nashville, Tennessee">254 Maplewood Ave, Nashville, Tennessee</option>
                <option value="San Diego, California">3722 Seaside Blvd, San Diego, California</option>
                <option value="San Jose, South Dakota">2715 Ash Dr. San Jose, South Dakota</option>
                <option value="Celina, Delaware">6391 Elgin St. Celina, Delaware</option>
                <option value="Mesa, New Jersey">2464 Royal Ln. Mesa, New Jersey</option>
                <option value="Inglewood, Maine">8502 Preston Rd. Inglewood, Maine</option>
                <option value="Santa Ana, Illinois">2972 Westheimer Rd. Santa Ana, Illinois</option>
                <option value="New York">12273 Dream Avenue, New York</option>
            </select>
        </div>
    );
};

export default Location;
