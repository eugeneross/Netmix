
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
} from './home.actionTypes';


// MAINTAIN INTIALSTATE OF REDUX
export const initialState = Map({
    isLoading: false,
    movieList: Map(),
    bannerMovie: Map(),
});

const getPrettyMovieList = (data) => {
    console.log('getPrettyMovieList', data);
    const movieList = [];
    for(var i =0; i<data.length; i++){
        const temp = {};
        temp.name = data[i].name;
        temp.releaseDate = data[i].releaseDate;
        temp.rating = data[i].rating;
        temp.posterImage = data[i].poster.url;
        temp.trailerLink = `https://www.youtube.com/embed/${data[i].trailerLink}?autoplay=1`;
        movieList.push(temp);
    }
    return(movieList);
}

const getFirstMovieFromList = (data) => {
    const temp = {};
    temp.name =  data.name;
    temp.rating = data.rating;
    temp.releaseDate = data.releaseDate;
    temp.posterImage = data.poster.url;
    temp.trailerLink = `https://www.youtube.com/embed/${data.trailerLink}?autoplay=1`;
    return temp;
}


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
            movieList: getPrettyMovieList(action.response.message.data),
            bannerMovie: getFirstMovieFromList(action.response.message.data[3] === undefined ? action.response.message.data[0] : action.response.message.data[3]),
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
export const home = createReducer(initialState, handlers);


// SELECTOR
const movieList = state => state.home.get('movieList');
const isLoading = state => state.home.get('isLoading');
const error = state => state.home.get('error');
const starRating = state => state.home.get('starRating');
const bannerMovie = state => state.home.get('bannerMovie');

export const selector = createStructuredSelector({
    movieList,
    isLoading,
    error,
    starRating,
    bannerMovie
});
