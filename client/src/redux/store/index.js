import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
    store,
    persistor
};