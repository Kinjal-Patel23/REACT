import React from 'react'
import "../App.css"

const Card = ({imgSrc, price, category}) => {
  return (
    <>
      
        <div className='mainCard'>
            <div className='cardImg'>
                <img src={imgSrc}/>
            </div>
            <div className='cardInfo'>
                <h1>{price}</h1>
                <span>{category}</span>
            </div>
        </div>

    </>
  )
}

export default Card
