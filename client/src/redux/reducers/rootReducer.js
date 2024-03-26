import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postsReducer from './postsReducer';

export const rootReducer = combineReducers({
    postsReducer,
});

const configStorage = {
    key: 'root',
    storage,
};

export default persistReducer(configStorage, rootReducer);