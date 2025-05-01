import React, { useState, useEffect } from 'react'

const Note = () => {

    const [bgColor, setBgColor] = useState("black");
    const [textNote, setTextNote] = useState("");
    const [notes, setNotes] = useState(() => {
        let getData = localStorage.getItem("note");
        if (!getData) return [];
        return JSON.parse(getData);
    });

    let dark = () => {
        setBgColor(bgColor === "black" ? "#9476FF" : "black");
    }

    let handleTextarea = (e) => {
        let value = e.target.value;
        setTextNote(value);
        console.log(value);
    }

    useEffect(() => {
        localStorage.setItem("note", JSON.stringify(notes));
    }, [notes]);

    let handleBtn = (e) => {
        e.preventDefault();

        if (textNote !== "") {
            setNotes([...notes, textNote]);
            setTextNote("");
        }
        else {
            alert("Write something.....!!");
        }

    }

    let handleDelete = (index) => {
        let updateNotes = notes.filter((note, i) => i !== index);
        setNotes(updateNotes);
    }

    document.body.style.backgroundColor = bgColor;

    return (
        <>
            <div className="container">
                <div className="toggle-wrapper">
                    <input type="checkbox" id="checkboxInput" onClick={dark} />
                    <label htmlFor="checkboxInput" className="toggleSwitch" />
                </div>
                <h1>MyNotes</h1>
                <div className="note-input">
                    <textarea value={textNote} placeholder="Write your note here..." onChange={handleTextarea} />
                    <button onClick={handleBtn}>Add Note</button>
                </div>
            </div>

            <div className="notes-list">
                {notes.map((n, i) => (
                    <div key={i} className="note-card">
                        <p>{n}</p>
                        <button className="delete-btn" onClick={() => handleDelete(i)}>
                            <i className="ri-delete-bin-line"></i>
                        </button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Note
