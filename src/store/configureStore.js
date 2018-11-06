import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk)),
    );

}