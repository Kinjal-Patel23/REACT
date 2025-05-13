import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/actions'

const TodoInput = () => {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    let handleBtn = () => {
        if(text !== "")
        {
            dispatch(addTodo(text));
            setText("");
        }
    }

    return (
        <>
            <div className="container">
                <div className="form">
                    <input 
                        type="text" 
                        className="input" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                    <button onClick={handleBtn}>Add Task</button>
                </div>
            </div>
        </>
    )
}

export default TodoInput
