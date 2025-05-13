import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
  const count = useSelector((state) => state.count);

  return <h1 className="counter-value">{count}</h1>;
}

export default DisplayCounter
