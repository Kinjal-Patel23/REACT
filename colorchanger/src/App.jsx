import { useState } from "react"

function App() {

  let [bgColor, setBgColor] = useState();

  let color = () => {

    let letter = "0123456789ABCDEF";
    let colorSign = "#";

    for (let i = 0; i < 6; i++) {
      colorSign += letter[Math.floor(Math.random() * 16)];
    }

    return colorSign;
  }

  let colorFunction = () => {

    let color1 = color();
    let color2 = color();

    setBgColor(`linear-gradient(to right, ${color1}, ${color2})`);

  }


  return (
    <>

      <div className="container" style={{ background: bgColor }}>
        <button onClick={colorFunction}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> Click me</span>
        </button>
      </div>

    </>
  )
}

export default App
