import Cookiedata from "./Components/Cookiedata";
import Localstorage from "./Components/Localstorage";
import Sessionstorage from "./Components/Sessionstorage";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");

  return (
    <div className="app-container">
      <h1 className="main-heading">Storage Selector</h1>

      <div className="button-group">
        <button className="btn btn-local" onClick={() => setState("local")}>LocalStorage</button>
        <button className="btn btn-session" onClick={() => setState("session")}>SessionStorage</button>
        <button className="btn btn-cookie" onClick={() => setState("cookie")}>Cookies</button>
      </div>

      <div className="component-wrapper">
        {state === "" && <Localstorage />}
        {state === "local" && <Localstorage />}
        {state === "session" && <Sessionstorage />}
        {state === "cookie" && <Cookiedata />}
      </div>
    </div>
  );
}

export default App;
