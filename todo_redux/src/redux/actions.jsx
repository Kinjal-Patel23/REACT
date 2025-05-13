export const addTodo = (todo) => {
    return {
        type : "ADD_TODO",
        payload : todo
    };
};

export const deleteTask = (index) => {
    return {
        type : "DELETE_TASK",
        payload : index
    }
};

export const clearTodo = () => {
    return {
        type : "CLEAR_TODO",
    }
};

export const editTodo = (id, updatedText) => {
    return {
        type : "EDIT_TODO",
        payload : {id, updatedText}
    }
};

