import { useState } from "react"
import Cookie from "./Components/Cookie"
import Localstorage from "./Components/Localstorage"
import Sessionstorage from "./Components/Sessionstorage"

function App() {

  const [state, setState] = useState(() => {
    return localStorage.getItem("storage") || "local"
  });

  let handleDropDown = (e) => {
    const value = e.target.value;
    setState(value);
    localStorage.setItem("storage", value);
  }

  return (
    <>
      <h1 className="heading">TODO APP</h1>

      <select
        className="storage-select"
        defaultValue="local"
        onChange={handleDropDown}
        value={state}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px"
        }}
      >
        <option value="local">Local Storage</option>
        <option value="session">Session Storage</option>
        <option value="cookie">Cookie</option>
      </select>

      {state == "" && <Localstorage/>}
      {state == "local" && <Localstorage/>}
      {state == "session" && <Sessionstorage/>}
      {state == "cookie" && <Cookie/>}
    </>
  )
}

export default App
