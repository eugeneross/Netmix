import { fetchAuthenticatedJSON } from '../../common/https/serviceHandler';

export function getmovies() {
    return fetchAuthenticatedJSON('http://poc.luezoid.com:8050/api/v1/movies?rating=3&name=O&releaseDate=2018-02-01', 'GET', {});
}

export function setStarRating(payload){
    return fetchAuthenticatedJSON('http://poc.luezoid.com:8050/api/v1/movies/1/rating', 'POST', payload);
}