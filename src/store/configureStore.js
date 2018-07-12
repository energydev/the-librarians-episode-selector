import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import modalsReducer from "../reducers/modals";
import criteriaReducer from "../reducers/criteria";


//this allows us to keep the dev tools functionality
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            modals: modalsReducer,
            criteria: criteriaReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};


