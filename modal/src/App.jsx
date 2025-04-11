import { useState, useEffect } from 'react'


function App() {

  let [show, setShow] = useState(false)

  let closeBtn = () => {
    setShow(false)
  };
  

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 4000)

  },[])

  let bgClose = () => {
    if(show)
    {
      closeBtn();
    }
  }

  document.body.addEventListener("click", bgClose);

  return (
    <>
      {show && (
        <div className="main">
        <div className="display">
          <i className="ri-close-line close-icon" onClick={closeBtn}></i>
          <h1>Welcome</h1>
          <p>
            Explore amazing things with us! This popup is designed to show an important message or feature
            in a modern and elegant style.
          </p>
          <button onClick={closeBtn}>Close</button>
        </div>
      </div>
      )}
        

    </>
  )
}

export default App
