import {
    FETCH_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE,
    UPDATE_MOVIE,
    SORT_BY,
    FILTER_BY_GENRE,
    SHOW_DESCRIPTION_MOVIE,
    SEARCH_MOVIES
} from './types';

const initialState = {
    movies: [],
    sortedMovies: [],
    filterKey: 'All',
    sortKey: 'release_date'
};
export const moviesReducer = (state = initialState, action) => {
   
    switch (action.type) {

        case FETCH_MOVIES:
            return { ...state, movies: action.payload };
        case CREATE_MOVIE:
            return { ...state, movies: state.movies.concat([action.payload.movie]) };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter((m) => m.id !== action.payload.id) };
        case UPDATE_MOVIE:
            return {
                ...state, movies: state.movies.map((m) => {
                    if (m.id == action.payload.movie.id) {
                        return action.payload.movie
                    }
                    return m;
                })
            };

        case SORT_BY:
            return { ...state, sortKey: action.payload };
        case FILTER_BY_GENRE:
            return { ...state, filterKey:action.payload };
        case SHOW_DESCRIPTION_MOVIE:
            return { ...state, movie: action.payload.movie };
        default: return state;
        
    }
};

