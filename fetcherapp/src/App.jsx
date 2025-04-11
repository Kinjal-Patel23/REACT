import { useState, useEffect } from 'react'

function App() {


  let [data, setData] = useState();

  let [bgcolor, setcolor] = useState("white");

  let dark = () => {
    setcolor(bgcolor === "white" ? "black" : "white")
  }

  let userBtn = () => {
    fetch("https://randomuser.me/api")
      .then((r) => r.json())
      .then((d) => {
        setData(d.results[0])
        console.log(d)
      })
      .catch((error) => {
        console.log("Error.....", error);
      })
  }

  let [loading, setloading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setloading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>

      {loading && (
        <div className='loader'>
          <div className="spinner"></div>
        </div>
      )}



      <div className="container" style={{ backgroundColor: bgcolor }}>
        <input type="checkbox" name="checkbox" id="checkbox" onClick={dark} />
        <label htmlFor="checkbox" className="label"></label>
      </div>

      {data && (
        <div className="user-card" id="userCard">
          <img src={data.picture.large} id="userImage" />
          <h2 id="userName">{`${data.name.first} ${data.name.last}`}</h2>
          <p id="userEmail">{data.email}</p>
          <p id="userLocation">{`${data.location.city} ${data.location.country}`}</p>
        </div>

      )}
      <button id="fetchUserBtn" onClick={userBtn}>Get New User</button>

    </>

  )

}

export default App
