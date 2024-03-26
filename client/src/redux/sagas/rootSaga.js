import { all, call } from 'redux-saga/effects';

import postsSaga from './postsSaga';

export default function* rootSaga() {
    yield all([
        call(postsSaga),
    ])
}