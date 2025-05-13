const initialState = { count : 0, };

const counterReducer = (state = initialState, action) => {
  switch(action.type)
  {
    case "INCREMENT":
        return state.count < 50 ? {count : state.count + 1} : state;
    
    case "DECREMENT":
        return state.count > 0 ? {count : state.count - 1} : state;
    
    default :
        return state;
  }
}

export default counterReducer
