import { combineReducers } from 'redux';
import {moviesReducer } from './reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer
});
