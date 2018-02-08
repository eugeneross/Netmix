
import { Map } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import { createStructuredSelector } from 'reselect/src';
import { createReducer } from "../../common/reducers";

import {
    REQUESTED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
} from './login.actionTypes';

// MAINTAIN INTIALSTATE OF REDUX
export const initialState = Map({
    isLoading: false,
    userData: Map(),
});

// CREATE ALL HANDLERS
const handlers = {
    [REQUESTED](state) {
        return state.merge({
            isLoading: true,
        });
    },
    [LOGIN_SUCCESSFUL](state, action) {

        return state.merge({
            isLoading: false,
            userData: action.response.data.user,
            token: action.response.data.token
        });
    },
    [LOGIN_FAILED](state, action) {
        console.log(action);
        return state.merge({
            isLoading: false,
            err:action.data,
        });
    },
};


export const login = createReducer(initialState, handlers);


// HOME SELECTOR
const getIsLoading = state => state.login.get('isLoading');
const getUserData = state => state.login.get('userData');
const getError = state => state.login.get('err');

export const loginSelector = createStructuredSelector({
    isLoading: getIsLoading,
    userData: getUserData,
    err: getError,
});
