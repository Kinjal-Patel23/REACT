import { useState } from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>

    {showLogin ? (
      <Login onSwitch={() => setShowLogin(false)}/>
    ) : (
      <Signup onSwitch={() => setShowLogin(true)}/>
    )}
    </>
  )
}

export default App
