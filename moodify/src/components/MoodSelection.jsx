import React from 'react'
import './MoodSelection.css'

const MoodSelection = ({moodChange}) => {
    return (
        <>
            <div className="mood-selector">
                <h2 className="split-title">
                    <span className="left-text">Select Your Mood</span>
                </h2>

                <div className="mood-buttons">
                    <label className="mood-btn happy">
                        <input type="radio" name="mood" value="happy" onChange={(e) => moodChange(e.target.value)}/>
                        <span className="radio-style"></span>
                        😊 Happy
                    </label>

                    <label className="mood-btn sad">
                        <input type="radio" name="mood" value="sad" onChange={(e) => moodChange(e.target.value)}/>
                        <span className="radio-style"></span>
                        😢 Sad
                    </label>

                    <label className="mood-btn stressed">
                        <input type="radio" name="mood" value="relax" onChange={(e) => moodChange(e.target.value)}/>
                        <span className="radio-style"></span>
                        😌 Relax
                    </label>

                    <label className="mood-btn excited">
                        <input type="radio" name="mood" value="excited" onChange={(e) => moodChange(e.target.value)}/>
                        <span className="radio-style"></span>
                        🤩 Excited
                    </label>

                    <label className="mood-btn angry">
                        <input type="radio" name="mood" value="angry" onChange={(e) => moodChange(e.target.value)}/>
                        <span className="radio-style"></span>
                        😠 Angry
                    </label>
                </div>
            </div>
        </>
    )
}

export default MoodSelection
