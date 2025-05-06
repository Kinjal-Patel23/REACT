// import React from 'react';
// import "../App.css";
// import products from '../data/products'

// const Filter = ({categorySelect}) => {

//     let dropDownCategory = (e) => {
//         categorySelect(e.target.value)
//     }

//     return (
//         <>
//             <div className='filter-container'>
//                 <select name="filter" id="filter" onChange={dropDownCategory}>
//                     <option value={products}>All Categories</option>
//                     <option value="men's clothing">men's clothing</option>
//                     <option value="jewelery">jewelery</option>
//                     <option value="electronics">electronics</option>
//                     <option value="women's clothing">women's clothing</option>
//                 </select>
//             </div>
//         </>
//     );
// }

// export default Filter;


import React from 'react'
import "../App.css"

const Filter = ({searchProduct}) => {

    let searchCategory = (e) => {
        searchProduct(e.target.value);
    }

  return (
    <>
        <div className='filter-container'>
            <input type="text" placeholder='search by category...' onKeyUp={searchCategory}/>
        </div>
    </>
  )
}

export default Filter
