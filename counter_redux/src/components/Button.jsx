import React from 'react'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useDispatch();

  const plus = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={() => dispatch({ type: 'DECREMENT' })}>−</button>
        <button className="counter-btn" onClick={plus}>+</button>
      </div>
    </>
  );
}

export default Button
