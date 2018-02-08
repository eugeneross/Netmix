import { fetchAuthenticatedJSON } from '../../common/https/serviceHandler';

export function getmovies(filter) {
    let url = '';
    if (filter === 'POPULAR') {
        url = 'http://poc.luezoid.com:8050/api/v1/movies?isPopular=0';
    } else if(filter === 'RATING'){
        url = 'http://poc.luezoid.com:8050/api/v1/movies?rating=7.7';
    } else if( filter === 'NAME'){
        url = 'http://poc.luezoid.com:8050/api/v1/movies?name=O';
    } else if(filter === 'DATE'){
        url = 'http://poc.luezoid.com:8050/api/v1/movies?releaseDate=2018-02-01';
    }
    return fetchAuthenticatedJSON(url, 'GET', {});
}

export function setStarRating(payload) {
    return fetchAuthenticatedJSON('http://poc.luezoid.com:8050/api/v1/movies/1/rating', 'POST', payload);
}