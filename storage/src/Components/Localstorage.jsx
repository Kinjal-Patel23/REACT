import React, { useState, useEffect } from 'react';

const Localstorage = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  let handleName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("user", name);
  }, [name]);

  let handleGet = () => {
    const getName = localStorage.getItem("user");
    setDisplay(getName);
  }

  let handleRemove = () => {
    localStorage.removeItem("user");
    alert("Name removed....");
  }

  let handleClear = () => {
    localStorage.clear();
    setDisplay()
    alert("localstorage data cleared....");
  }

  return (
    <div className="localstorage-container">
      <h1>LocalStorage</h1>
      <input type="text" value={name} onChange={handleName} />
<br /><br />
<button className="get-btn" onClick={handleGet}>Get</button>
<button className="remove-btn" onClick={handleRemove}>Remove</button>
<button className="clear-btn" onClick={handleClear}>Clear</button>


      {display && <p>{display}</p>}
    </div>
  );
};

export default Localstorage;
