import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import SearchFormReducer from '../reducers/SerchFormReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

function configureStore(preloadedState) {
    return createStore(
        SearchFormReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );

}
const store = configureStore();

export default store;