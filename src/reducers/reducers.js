import { createStore } from 'redux'
import { combineReducers } from 'redux'


const initialState = {
    count: 3,
    info: []
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'SHOWINFO':
            console.log(action.text, "DEtte er i reduceren, action.text!")
            return { ...state, info: [...state.info, action.text] }
        default:
            return state
    }
    return state;
}



let defaultState = {
    color: "red"
}
const colorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.color }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todos,
    colorReducer
})

export default rootReducer;