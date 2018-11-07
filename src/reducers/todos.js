/*import { createStore } from 'redux'
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
const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;*/