import { ActionTypes } from '../const';

export function posterListInit() {
    return {
        type: ActionTypes.POSTER_LIST_PAGE_INIT
    };
}
export function posterListSuccess(data, status) {
    return {
        type: ActionTypes.POSTER_LIST_SUCCESS,
        data,
        status
    };
}
export function posterListFilter(filter) {
    return {
        type: ActionTypes.POSTER_LIST_FILTER,
        filter
    };
}
export function posterListRemoveItem(id, filter) {
    return {
        type: ActionTypes.POSTER_LIST_REMOVE_ITEM,
        id,
        filter
    };
}
