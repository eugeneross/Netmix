
import { Map } from 'immutable'; // use of immutablejs for various js operations to simplify our work
import { createStructuredSelector } from 'reselect/src';
import { createReducer } from '../../common/reducers';

import {
    SUCCESSFUL,
    FAILED,
    REQUESTED,
    SET_STAR_RATING_SUCCSSFUL,
    SET_STAR_RATING_REQUESTED,
    SET_STAR_RATING_FAILED,
} from './movies.actionTypes';


// MAINTAIN INTIALSTATE OF REDUX
export const initialState = Map({
    isLoading: false,
});


// CREATE ALL HANDLERS
const handlers = {
    [REQUESTED](state) {
        return state.merge({
            isLoading: true,
        });
    },
    [SUCCESSFUL](state, action) {
        return state.merge({
            isLoading: false,
            moviesList: action.response
        });
    },
    [FAILED](state, action) {
        return state.merge({
            isLoading: false,
            error: action.error,
        });
    },
    [SET_STAR_RATING_REQUESTED](state) {
        return state.merge({
            isLoading: true,
        });
    },
    [SET_STAR_RATING_SUCCSSFUL](state, action) {
        return state.merge({
            isLoading: false,
            starRating: action.response,
        });
    },
    [FAILED](state, action) {
        return state.merge({
            isLoading: false,
            error: action.error,
        });
    },
};


// BIND ALL HANDLERS AND INITIAL STATE
export const movies = createReducer(initialState, handlers);


// SELECTOR
const moviesList = state => state.movies.get('moviesList');
const isLoading = state => state.movies.get('isLoading');
const error = state => state.movies.get('error');
const starRating = state => state.movies.get('starRating')

export const selector = createStructuredSelector({
    moviesList,
    isLoading,
    error,
    starRating
});
