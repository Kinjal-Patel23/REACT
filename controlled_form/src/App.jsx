import {useState} from 'react'

function App() {

  let [email, setEmail] = useState();
  let [psw, setPsw] = useState();

  let handleEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
    console.log(value)
  }

  let handlePsw = (e) => {
    let value = e.target.value;
    setPsw(value);
    console.log(value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(psw);
  }

  return (
    <>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={handleEmail} required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={handlePsw} required />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="bottom-text">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>

    </>
  )
}

export default App
