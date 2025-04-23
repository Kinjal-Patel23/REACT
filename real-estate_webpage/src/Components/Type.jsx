import React from 'react';

const Type = ({ onChange }) => {
    return (
        <div className='type w-full sm:w-[77px] h-[35px]'>
            <select
                className='w-full h-full text-[#0c0407] text-[14px] bg-transparent rounded-md px-2 focus:outline-none'
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Type</option>
                <option value="Rent">Rent</option>
                <option value="Sell">Sell</option>
            </select>
        </div>
    );
};

export default Type;
