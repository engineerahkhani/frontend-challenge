export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if ({}.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
}

export function createRequestTypes(base) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}
