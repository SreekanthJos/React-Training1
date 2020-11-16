import {moviesReducer } from '../store/reducer';
import {
    FETCH_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE,
    UPDATE_MOVIE,
    SORT_BY,
    FILTER_BY_GENRE,
    SHOW_DESCRIPTION_MOVIE,
    SEARCH_MOVIES
} from '../store/types';
import moviesData  from '../model/moviesData.json'

describe('Movie Reducer', () => {
    const initValue = {
        movies: [],
        sortedMovies: [],
        filterKey: 'All',
        sortKey: 'release_date'
      };

      it('should return the initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual(initValue);
      });

      it('should handle FETCH_MOVIES', () => {
        const state = moviesReducer(initValue, { type:FETCH_MOVIES, payload: moviesData });
        expect(state.movies.length).toBe(8);
      });
      it('should handle CREATE_MOVIE', () => {     
        const state = moviesReducer(initValue, { type:CREATE_MOVIE, payload:{movie: moviesData[0]} });
        expect(state.movies.length).toBe(1);
        expect(state.movies[0]).toEqual(moviesData[0]);
      });
      it('should handle UPDATE_MOVIE', () => {        
        var state1={movies:moviesData};
        moviesData[0].title="test";       
        const state = moviesReducer(state1, { type:UPDATE_MOVIE, payload: {movie:moviesData[0]} });       
        expect(state.movies[0].title).toBe("test");
        expect(state.movies[0]).toEqual(moviesData[0]);
      });
      it('should handle DELETE_MOVIE', () => {            
       var state1={movies:moviesData}; 
       const state = moviesReducer(state1, { type:DELETE_MOVIE, payload: {id:moviesData[0].id} });       
        expect(state.movies.length).toBe(7);
        expect(state.movies).not.toContain(moviesData[0]);

      });     
      it('should handle SHOW_DESCRIPTION_MOVIE', () => {
        var state1={movies:moviesData};     
        const state = moviesReducer(state1, { type:SHOW_DESCRIPTION_MOVIE, payload: {movie:moviesData[0]} }); 
        expect(state.movie.id).toBe(moviesData[0].id);
        expect(state.movie).toEqual(moviesData[0]);       
      });
      it('should handle SORT_BY', () => {        
        const state = moviesReducer(initValue, { type:SORT_BY, payload:'title'}); 
        expect(state.sortKey).toEqual('title');              
      });
      it('should handle FILTER_BY_GENRE', () => {        
        const state = moviesReducer(initValue, { type:FILTER_BY_GENRE, payload:'Comedy'}); 
        expect(state.filterKey).toEqual('Comedy');              
      });
});