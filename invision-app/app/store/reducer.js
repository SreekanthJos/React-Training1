import {
    FETCH_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE,
    UPDATE_MOVIE,
    SORT_BY_RELEASE_DATE,
    SORT_BY_TITLE,
    FILTER_BY_GENRE,
    SHOW_DESCRIPTION_MOVIE
} from './types';

const initialState = {
    movies: [],
    sortedMovies: []
};
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MOVIES:
            console.log(action.payload)
            return { ...state, movies: action.payload };
        case CREATE_MOVIE:
            return { ...state, movies: state.movies.concat([action.payload]) };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter((m) => m.id !== action.payload) };
        case UPDATE_MOVIE:
            return {
                ...state, movies: state.movies.map((m) => {
                    if (m.id == action.payload.id) {
                        return action.payload
                    }
                    return m;
                })
            };
        case SORT_BY_RELEASE_DATE:
            return { ...state, movies: state.movies.slice().sort((movieA, movieB) => movieA.release_date > movieB.release_date ? 1 : -1) };
        case SORT_BY_TITLE:
            return { ...state, movies: state.movies.slice().sort((movieA, movieB) => movieA.title > movieB.title ? 1 : -1) };

        case FILTER_BY_GENRE:
            return { ...state, sortedMovies: action.payload == 'ALL' ? state.movies : filterMovies(state.movies, action.payload, state.sortedMovies) };
        case SHOW_DESCRIPTION_MOVIE:
            return { ...state, movie: action.payload };
        default: return state;
    }
};

const filterMovies = (movies, genre, arSorted) => {
    arSorted = movies.filter((movie) => {
        // let capitalizeName = movie[0].toUpperCase() + genre.slice(1);
        if (movie.genres.toUpperCase().includes(genre)) {
            return movie;
        }
    }
    );
    if (arSorted.length === 0) {
        return 'No movies';
    }
    console.log(arSorted);
    
    return arSorted;
};

