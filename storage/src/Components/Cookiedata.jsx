import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cookiedata = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    Cookies.set("user", name, { expires: 2 });
  }, [name]);

  const handleGet = () => {
    const getName = Cookies.get("user");
    setDisplay(getName);
  }

  const handleRemove = () => {
    Cookies.remove("user");
    alert("Name removed....");
  }

  return (
    <div className="cookiedata-container">
      <h1>Cookies</h1>
      <input type="text" value={name} onChange={handleName} />
      <br /><br />
      <button onClick={handleGet}>Get</button>
      <button onClick={handleRemove}>Remove</button>

      {display && <p>{display}</p>}
    </div>
  );
}

export default Cookiedata;
