import React, { useState } from 'react';

const Sessionstorage = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSet = () => {
    sessionStorage.setItem("user", name);
    setName("");
  }

  const handleGet = () => {
    const getName = sessionStorage.getItem("user");
    setDisplay(getName);
  }

  const handleRemove = () => {
    sessionStorage.removeItem("user");
    alert("Name removed....");
  }

  const handleClear = () => {
    sessionStorage.clear();
    alert("sessionStorage data cleared....");
  }

  return (
    <div className="sessionstorage-container">
      <h1>SessionStorage</h1>
      <input type="text" value={name} onChange={handleName} />
      <br /><br />
      <button onClick={handleSet}>Set</button>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleClear}>Clear</button>

      {display && <p>{display}</p>}
    </div>
  );
}

export default Sessionstorage;
