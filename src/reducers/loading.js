import immutable from 'immutability-helper';
import { createReducer } from '../lib';
import { ActionTypes } from '../const';

export const INIT_STATE = {
    visible: false
};

export default {
    loading: createReducer(INIT_STATE, {
        [ActionTypes.SHOW_LOADING](state) {
            return immutable(state, {
                visible: { $set: true }
            });
        },
        [ActionTypes.HIDE_LOADING](state) {
            return immutable(state, {
                visible: { $set: false }
            });
        }
    })
};
