import { fromJS } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import loginUser from './login.service';

import {
    REQUESTED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
} from './login.actionTypes';


const authenticateUser = (payload, user) => (dispatch) => {
  dispatch({ type: REQUESTED });
  loginUser(payload, user)
      .then((res) => {
          window.localStorage.setItem('token', res.data.token);
          dispatch({
              type: LOGIN_SUCCESSFUL,
              response: res,
          });
      })
      .catch((err) => {
          if (err instanceof Error) {
              dispatch({
                  type: LOGIN_FAILED,
                  data: err.message,
              })
          }
      })
};

export default authenticateUser;
