
import { Map, List } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import { has } from 'ramda';
import { createStructuredSelector } from 'reselect/src';
import { createReducer } from '../../common/reducers';

import {
    REQUESTED,
    SUCCESSFUL,
    FAILED,
    GRANT_ACCESS_SUCCESSFUL,
    DECLINE_ACCESS_SUCCESSFUL,
} from './userlist.actionTypes';


// MAINTAIN INTIALSTATE OF REDUX
export const initialState = Map({
    isLoading: false,
    error: {},
    users: List(),
    removeUserFromList: false,
});


// CREATE ALL HANDLERS
const handlers = {
    [REQUESTED](state) {
        return state.merge({
            isLoading: true,
            removeUserFromList: false,
        });
    },
    [SUCCESSFUL](state, action) {
        return state.merge({
            isLoading: false,
            users: action.data,
        });
    },
    [GRANT_ACCESS_SUCCESSFUL](state, action) {
        debugger;
        return state.merge({
            isLoading: false,
            users: action.data,
            removeUserFromList: true,
        });
    },
    [DECLINE_ACCESS_SUCCESSFUL](state, action) {
        return state.merge({
            isLoading: false,
            users: action.data,
            removeUserFromList: true,
        });
    },
    [FAILED](state, action) {
        return state.merge({
            isLoading: true,
            error: action.err,
        });
    },
};


// BIND ALL HANDLERS AND INITIAL STATE
export const userlist = createReducer(initialState, handlers);



// HOME SELECTOR
const getIsLoading = state => state.userlist.get('isLoading');
const getError = state => state.userlist.get('error');
const getUserList = state => state.userlist.get('users');
const getRemoveUser = state => state.userlist.get('removeUserFromList');

export const selector = createStructuredSelector({
    isLoading: getIsLoading,
    error: getError,
    users: getUserList,
    removeUserFromList: getRemoveUser,
});
