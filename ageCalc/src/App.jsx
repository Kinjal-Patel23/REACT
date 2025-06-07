import { useState } from "react"

function App() {

  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  let handleBtn = () => {

    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if(days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if(months < 0)
    {
      years--;
      months += 12;
    }

    setAge({years, months, days});
  };


  return (
    <>
      <div className="container">
        <h2>Age Calculator</h2>
        <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <button onClick={handleBtn}>show</button>

        {age !== null && (
          <h3>You are {age.years} years, {age.months} months & {age.days} days old.</h3>
        )}
      </div>

    </>
  )
}

export default App
