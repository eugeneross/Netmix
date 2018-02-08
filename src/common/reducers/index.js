import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import * as reducers from './reducers';
import { home } from '../../views/home/home.redux';
import { login } from '../../views/login/login.redux';
import { register } from '../../views/register/register.redux';
import { movies } from "../../views/movies/movies.redux";

const rootReducer = combineReducers({
    home,
    login,
    register,
    movies,
 });


export { default as createReducer } from './createReducer';
export default rootReducer;
