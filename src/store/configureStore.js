import { applyMiddleware, compose, createStore, } from 'redux';
import thunk from 'redux-thunk';
import { environment } from '../utils';
import { makeRootReducer } from './reducers';
import { getAPI } from '../middleware/api';

export default function configureStore(preloadedState) {
    //--------------------------------------------
    // Middleware Configuration
    //--------------------------------------------
    const middleware = [];

    if (!environment.isProduction()) {
        const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
        middleware.push(reduxImmutableStateInvariant);
    }

    middleware.push(thunk);
    middleware.push(getAPI);

    //--------------------------------------------
    // Store Enhancers
    //--------------------------------------------
    const enhancers = [];
    let composeEnhancers = compose;
    if (!environment.isProduction()) {
        const { composeWithDevTools } = require('redux-devtools-extension');
        composeEnhancers = composeWithDevTools;
    }

    //--------------------------------------------
    // Store Instantiation
    //--------------------------------------------
    const store = createStore(
        makeRootReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );

    return store;
};
