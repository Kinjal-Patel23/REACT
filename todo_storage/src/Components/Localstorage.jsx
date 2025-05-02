import React from 'react'
import "remixicon/fonts/remixicon.css";
import { useState, useEffect, useRef } from 'react';

const Localstorage = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState(() => {
        let getData = localStorage.getItem("user");
        if (!getData) return [];
        return JSON.parse(getData);
    });
    
    const [edit, setEdit] = useState("");
    const inputTask = useRef("");

    let handleInput = ((e) => {
        let value = e.target.value;
        setTask(value);
        console.log(value);
    })

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(list));
    },[list]);

    let handleAddBtn = ((e) => {
        e.preventDefault();

        if (task !== "") 
        {
            if (edit !== "") 
            {
                const updateTask = list.map((item, index) => {
                    if(index === edit)
                    {
                        return task;
                    }
                    return item;
                });
                setList(updateTask);
                setEdit("");
            }
            else
            {
                setList([...list, task]);
            }
            setTask("");
        }
        else
        {
            alert("Write Something....");
        }
    })

    let handleDeleteBtn = ((index) => {
        let updateTask = list.filter((tasks, i) => i !== index);
        setList(updateTask);
    })

    let handleEditBtn = (i) => {
        setTask(list[i]);
        setEdit(i);
        inputTask.current.focus();
    }

    let handleClear = (() => {
        localStorage.clear();
        setList([]);
    })

    return (
        <>
            <div id="root">
                <div className="App">
                    
                    <div className="todolist">
                        <div className="addTask">
                            <input type="text" value={task} ref={inputTask} placeholder="Enter your task..." onChange={handleInput}/>
                            <div> 
                                <button className="addtask-btn" onClick={handleAddBtn}>
                                    {edit === "" ? "Add Task" : "Update Task"}
                                </button>
                            </div>
                        </div>

                        <div className="lists">
                            {list.map((t, i) => (
                                <div key={i} className="list">
                                    <p>{t}</p>
                                    <div className="span-btns">
                                        <span className="edit-btn" onClick={() => handleEditBtn(i)}><i className="ri-pencil-fill"></i></span>
                                        <span className="delete-btn" onClick={() => handleDeleteBtn(i)}>🗑️</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="clear-all-btn" onClick={handleClear}>Clear All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Localstorage
