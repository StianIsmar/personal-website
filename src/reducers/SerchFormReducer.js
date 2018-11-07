
import {
    SUBMIT_SEARCH,
    UPDATE_GENRE,
    UPDATE_TITLE,
    EXPORT_COLOR,
    FETCH_COLOR_BEGIN,
    FETCH_COLOR_FAILURE,
    FETCH_COLOR_SUCCESS,
    ADD_TEXT
} from "../actions/SearchFormActionTypes";

const initialState = {
    color: '',
    loading: false,
    error: null,
    text: ''
};

export const SearchFormReducer = (state = initialState, action) => {
    console.log('reducer running', action);
    switch (action.type) {
        case UPDATE_TITLE:
            return Object.assign({}, state, {
                title: action.title,
            });
        case UPDATE_GENRE:
            return Object.assign({}, state, {
                genre: action.genre,
            });
        case SUBMIT_SEARCH:
            return Object.assign({}, state, {
                submittedTitle: state.title,
                submittedGenre: state.genre
            });
        case EXPORT_COLOR:
            console.log("This is the new color!")
            return Object.assign({}, state, {
                color: 'purple'
            });
        case FETCH_COLOR_BEGIN:
            // Mark state as loading so frontend knows to display loading wheel.
            // Reset any errors when starting new fetch.
            return Object.assign({}, state, {
                loading: true,
                error: null
            });
        case FETCH_COLOR_SUCCESS:
            // When finished, set loading to false.
            // We update the items with what was received.
            return Object.assign({}, state,
                console.log(action.payload, "REDUCER!!!!"),
                {
                    loading: false,
                    color: action.payload
                });
        case FETCH_COLOR_FAILURE:
            // Set loading to false and save error so we can display it.
            // Also, we reset items list upon error encounter.
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error.message,
                color: 'black'
            });
        case ADD_TEXT:
            return Object.assign({}, state, console.log(action.payload, "ACTION PAYLOAD ADD_TEXT REDUCER"), {
                text: action.payload
            });
        default:
            return state
    }
};