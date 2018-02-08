
import { Map } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import { createStructuredSelector } from 'reselect/src';
import { createReducer } from '../../common/reducers';

import {
    REQUESTED,
    SUCCESSFUL,
    FAILED,
} from './register.actionTypes';


// MAINTAIN INTIALSTATE OF REDUX
export const initialState = Map({
    isLoading: false,
    userAdded: false,
});


// CREATE ALL HANDLERS
const handlers = {
    [REQUESTED](state) {
        return state.merge({
            isLoading: true,
        });
    },
    [SUCCESSFUL](state) {
        return state.merge({
            isLoading: false,
            userAdded: true,
        });
    },
    [FAILED](state, action) {
        return state.merge({
            isLoading: false,
            err: action.data,
        });
    },
};


// BIND ALL HANDLERS AND INITIAL STATE
export const register = createReducer(initialState, handlers);



// HOME SELECTOR
const getIsLoading = state => state.register.get('isLoading');
const getError = state => state.register.get('err');
const getUserAdded = state => state.register.get('userAdded');

export const selector = createStructuredSelector({
    isLoading: getIsLoading,
    err: getError,
    userAdded: getUserAdded,
});
