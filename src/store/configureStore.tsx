import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './reducers/users';

const rootReducer = combineReducers({
    users: usersReducer
});

const composeEnhancers = compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};

export default configureStore;
