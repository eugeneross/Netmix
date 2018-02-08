import { fromJS } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import * as services from './home.services';

import {
    REQUESTED,
    SUCCESSFUL,
    FAILED,
    SET_STAR_RATING_FAILED,
    SET_STAR_RATING_REQUESTED,
    SET_STAR_RATING_SUCCSSFUL,
} from './home.actionTypes';


export const getMovies = (filter) => (dispatch) => {
    debugger;
  dispatch({ type: REQUESTED });
  services.getmovies(filter)
      .then((res) => {
          dispatch({
              type: SUCCESSFUL,
              response: res,
          });
      })
      .catch((err) => {
          if (err instanceof Error) {
              dispatch({
                  type: FAILED,
                  data: err.message,
              })
          }
      })
};

export const setStarRating = (payload) => (dispatch) => {
    debugger;
    dispatch({ type: SET_STAR_RATING_REQUESTED });
    services.setStarRating(payload)
      .then((res) => {
          dispatch({
              type: SET_STAR_RATING_SUCCSSFUL,
              response: res,
          });
      })
      .catch((err) => {
          if (err instanceof Error) {
              dispatch({
                  type: SET_STAR_RATING_FAILED,
                  data: err.message,
              })
          }
      })
}