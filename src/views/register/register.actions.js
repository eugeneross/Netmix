import { fromJS } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import { register } from './register.services';

import {
    REQUESTED,
    SUCCESSFUL,
    FAILED,
} from './register.actionTypes';

const registerUser = (payload) => (dispatch) => {
    dispatch({ type: REQUESTED });
    register(payload)
        .then((res) => {
            if (res.object !== null) {
                dispatch({
                    type: SUCCESSFUL,
                    data: res,
                })
            } else {
                dispatch({
                    type: FAILED,
                    data: res.message,
                })
            }
        }).catch((err) => {
            if (err instanceof Error) {
                dispatch({
                    type: FAILED,
                    data: err.message,
                })
            }
        });
};

export default registerUser;
