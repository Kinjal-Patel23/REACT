import { useRef } from 'react'

let result = false;

function App() {

  let cal = useRef();

  let handleKey = (val) => {
    if (cal.current.innerText === "0" || result) {
      cal.current.innerText = val;
      result = false;
    }
    else {
      cal.current.innerText += val;
    }
  }

  let clear = () => {
    cal.current.innerText = "";
    result = false;
  }

  let ans = () => {
    if (cal.current.innerText !== "") {
      let answer = eval(cal.current.innerText);
      cal.current.innerText = answer;
      result = true;
    }
  }

  let toggleSign = () => {
    let exp = cal.current.innerText;

    let match = exp.match(/(-?\d+\.?\d*)$/);
    if (match) {
      let number = match[0];
      let toggled = number.startsWith('-') ? number.slice(1) : '-' + number;
      cal.current.innerText = exp.slice(0, -number.length) + toggled;
    }
  }


  return (
    <>
      <div className="calculator">
        <div className="display" id="show">
          <p ref={cal}>0</p>
        </div>
        <div className="buttons">
          <button className="btn function" onClick={clear}>AC</button>
          <button className="btn function" onClick={toggleSign}>+/-</button>
          <button className="btn function" onClick={() => handleKey('%')}>%</button>
          <button className="btn operator" onClick={() => handleKey('/')}>/</button>

          <button className="btn number" onClick={() => handleKey('7')}>7</button>
          <button className="btn number" onClick={() => handleKey('8')}>8</button>
          <button className="btn number" onClick={() => handleKey('9')}>9</button>
          <button className="btn operator" onClick={() => handleKey('*')}>*</button>

          <button className="btn number" onClick={() => handleKey('4')}>4</button>
          <button className="btn number" onClick={() => handleKey('5')}>5</button>
          <button className="btn number" onClick={() => handleKey('6')}>6</button>
          <button className="btn operator" onClick={() => handleKey('-')}>-</button>

          <button className="btn number" onClick={() => handleKey('1')}>1</button>
          <button className="btn number" onClick={() => handleKey('2')}>2</button>
          <button className="btn number" onClick={() => handleKey('3')}>3</button>
          <button className="btn operator" onClick={() => handleKey('+')}>+</button>

          <button className="btn number zero" onClick={() => handleKey('0')}>0</button>
          <button className="btn number" onClick={() => handleKey('.')}>.</button>
          <button className="btn equal" onClick={ans}>=</button>
        </div>
      </div>
    </>
  )
}

export default App