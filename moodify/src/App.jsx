import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';
import MoodSelection from "./components/MoodSelection"
import MusicCard from "./components/MusicCard"
import QuoteGenerator from "./components/QuoteGenerator"
import { useState } from 'react';

function App() {

  const [selectMood, setSelectMood] = useState("happy");
  const [songIndex, setSongIndex] = useState(0);


  return (
    <>

      <div className="app-wrapper">
        <MoodSelection moodChange={setSelectMood}/>
        {selectMood && <MusicCard selectMood={selectMood} songIndex={songIndex} setSongIndex={setSongIndex}/>}
        <QuoteGenerator selectMood={selectMood} trigger={songIndex}/>
      </div>
    </>
  )
}

export default App
