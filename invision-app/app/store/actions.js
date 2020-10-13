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

export function getMovies() {
    return async (dispatch) => {
        let resp = await fetch('http://localhost:8081/movies');
        let moviesJson = await resp.json();
        dispatch({ type: FETCH_MOVIES, payload: moviesJson });
    };
}

export function createMovie(movie) {
    return {
        type: CREATE_MOVIE,
        payload: { movie }
    };
}

export function updateMovie(movie) {
    return {
        type: UPDATE_MOVIE,
        payload: { movie }
    };
}
export function deleteMovie(id) {
    return {
        type: DELETE_MOVIE,
        payload: { id }
    };
}
export function sortByDate() {
    return {
        type: SORT_BY_RELEASE_DATE
    };
}
export function sortByTitle() {
    return {
        type: SORT_BY_TITLE
    };
}
export function showDescriptionMovie(movie) {
    return {
        type: SHOW_DESCRIPTION_MOVIE,
        payload: { movie }
    }
}
export function filterBYGenere(genre) {
    return {
        type: FILTER_BY_GENRE,
        payload: { genre }
    }
}
