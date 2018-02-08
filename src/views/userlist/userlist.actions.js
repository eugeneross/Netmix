import { fromJS } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import * as services from './userlist.services';

import {
    REQUESTED,
    SUCCESSFUL,
    FAILED,
    GRANT_ACCESS_FAILED,
    GRANT_ACCESS_SUCCESSFUL,
    DECLINE_ACCESS_FAILED,
    DECLINE_ACCESS_SUCCESSFUL,
} from './userlist.actionTypes';

export const getUserList = () => (dispatch) => {
    dispatch({ type: REQUESTED });
    services.getuserList()
        .then((response) => {
            if (response) {
                dispatch({
                    type: SUCCESSFUL,
                    data: response.object,
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: FAILED,
                data: err
            })
        });
};

export const grantAccess = (id, list) => (dispatch) => {
    dispatch({ type: REQUESTED });
    debugger;
    services.grantAccess(id)
        .then((response) => {
            if (response) {
                dispatch({
                    type: GRANT_ACCESS_SUCCESSFUL,
                    data: list,
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: GRANT_ACCESS_FAILED,
                data: err
            })
        });
};

export const declineAccess = (id, list) => (dispatch) => {
    dispatch({ type: REQUESTED });
    services.declineAccess(id)
        .then((response) => {
            if (response) {
                dispatch({
                    type: DECLINE_ACCESS_SUCCESSFUL,
                    data: list,
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: DECLINE_ACCESS_FAILED,
                data: err,
            })
        });
};


