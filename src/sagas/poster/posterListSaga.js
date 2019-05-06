import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../const';

export function* posterListRequestSaga() {
    /*  const data = yield call(RSRQHandler, 'authGet', getCampaignsApi);
    if (data) {
        yield put(campaignListSuccess(data.campaigns));
    } */
    console.warn('posterListRequestSaga');
}
export function* posterListInitSaga() {
    // yield put(showLoading());
    yield call(posterListRequestSaga);
    // yield put(hideLoading());
}

export default function* root() {
    yield all([
        takeLatest(ActionTypes.POSTER_LIST_PAGE_INIT, posterListInitSaga)
    ]);
}
