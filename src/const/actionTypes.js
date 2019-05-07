import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
    POSTER_LIST_REQUEST: undefined,
    POSTER_LIST_SUCCESS: undefined,
    POSTER_LIST_PAGE_INIT: undefined,
    POSTER_LIST_FILTER: undefined,
    POSTER_LIST_REMOVE_ITEM: undefined,

    HIDE_LOADING: undefined,
    SHOW_LOADING: undefined
});
