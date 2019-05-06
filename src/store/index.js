import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    ...rootReducer
});

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    middleware.push(createLogger({ collapsed: true }));
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
const configStore = (initialState = {}) => {
    const createStoreWithMiddleware = composeEnhancers(
        applyMiddleware(...middleware)
    )(createStore);

    const store = createStoreWithMiddleware(reducer, initialState);

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return {
        store
    };
};

const { store } = configStore();

export { store };
