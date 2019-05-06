import immutable from 'immutability-helper';
import { createReducer } from '../lib';
import { ActionTypes } from '../const';

export const cmpState = {
    data: []
};

export default {
    posterList: createReducer(cmpState, {
        [ActionTypes.POSTER_LIST_SUCCESS](state, { data }) {
            return immutable(state, {
                data: { $set: data }
            });
        }
    })
};
export const getPosterList = state => state.posterList.data;
