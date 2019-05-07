import immutable from 'immutability-helper';
import { createReducer } from '../lib';
import { ActionTypes } from '../const';

export const cmpState = {
    all: [],
    active: [],
    inactive: []
};

export default {
    posterList: createReducer(cmpState, {
        [ActionTypes.POSTER_LIST_SUCCESS](state, { data, status }) {
            return immutable(state, {
                [status]: { $set: data }
            });
        }
    })
};
export const getPosterList = state => state.posterList;
