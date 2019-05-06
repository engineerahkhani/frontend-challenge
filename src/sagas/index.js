import { all, fork } from 'redux-saga/effects';

import posterListSaga from './poster/posterListSaga';

/**
 * rootSaga
 */
export default function* root() {
    yield all([fork(posterListSaga)]);
}
