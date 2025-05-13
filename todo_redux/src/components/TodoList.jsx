import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteTask, editTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { clearTodo } from '../redux/actions';

const TodoList = () => {

    const displayTodo = useSelector((state) => state);
    const dispatch = useDispatch()

    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditClick = (index, task) => {
        setEditIndex(index);
        setEditText(task.text);
    }

    const handleEditSave = (index) => {
        dispatch(editTodo(index, editText));
        setEditIndex(null);
        setEditText('');
    }

    // let handleDelete = (todo) => {
    //     dispatch(deleteTask(todo))
    // }

    // let handleClear = () => {
    //     dispatch(clearTodo())
    // }

    return (
        <>
            <div className='task-list'>
                {displayTodo.map((todo, i) => (
                    <div key={i} className='tasks'>
                        {editIndex === i ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="edit-input"
                                />
                                <button onClick={() => handleEditSave(i)} className="save-btn">
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <p>{todo.text}</p>
                                <div style={{ display: "flex", gap: "15px" }}>
                                    <span className="delete-icon" onClick={() => handleEditClick(i, todo)}>🖉</span>
                                    <span className="delete-icon" onClick={() => dispatch(deleteTask(todo.text))}>🗑️</span>
                                </div>
                            </>
                        )
                            
                    }
                    </div>
                ))}
                <div className="delete-all" onClick={() => dispatch(clearTodo())}>Clear all</div>
            </div >
        </>
    )
}

export default TodoList
