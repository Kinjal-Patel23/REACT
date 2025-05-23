export const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return [...state, {text: action.payload}];

        case "DELETE_TASK" :
            return state.filter((idx) => idx !== action.payload);

        case "CLEAR_TODO" :
            return [];

        case "EDIT_TODO" :
            return state.map((todo, i) =>
                i === action.payload.id ? {...todo, text: action.payload.updatedText } : todo
            )
        
        default :
            return state;
    }
      
}