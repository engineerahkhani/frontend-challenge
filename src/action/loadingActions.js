import { ActionTypes } from '../const';

export function showLoading() {
    return {
        type: ActionTypes.SHOW_LOADING
    };
}
export function hideLoading() {
    return {
        type: ActionTypes.HIDE_LOADING
    };
}
