import { all, call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { ActionTypes, fakeData } from '../../const';
import { posterListSuccess, showLoading, hideLoading } from '../../action';
import { getPosterList } from '../../reducers/posterListReducer';

export function* posterListRequestSaga() {
    const data = fakeData;
    yield delay(3000);
    yield put(posterListSuccess(data, 'all'));
}
export function* posterListInitSaga() {
    yield put(showLoading());
    yield call(posterListRequestSaga);
    yield put(hideLoading());
}
export function* posterListFilterSaga(action) {
    const { filter } = action;
    let posterList = yield select(getPosterList);
    switch (filter) {
        case 'active':
            posterList = posterList.all.filter(item => item.active === true);
            break;
        case 'inactive':
            posterList = posterList.all.filter(item => item.active !== true);
            break;
        default:
            posterList = posterList.all;
            break;
    }
    yield put(posterListSuccess(posterList, filter));
}
export function* posterListRemoveItemSaga(action) {
    const { id, filter } = action;
    let posterList = yield select(getPosterList);

    posterList = posterList.all.filter(item => item.id !== id);

    yield put(posterListSuccess(posterList, filter));
}

export default function* root() {
    yield all([
        takeLatest(ActionTypes.POSTER_LIST_PAGE_INIT, posterListInitSaga),
        takeLatest(ActionTypes.POSTER_LIST_FILTER, posterListFilterSaga),
        takeLatest(
            ActionTypes.POSTER_LIST_REMOVE_ITEM,
            posterListRemoveItemSaga
        )
    ]);
}
