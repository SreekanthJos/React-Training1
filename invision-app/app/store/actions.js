import {
    FETCH_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE,
    UPDATE_MOVIE,
    SORT_BY_RELEASE_DATE,
    SORT_BY_TITLE,
    FILTER_BY_GENRE,
    SHOW_DESCRIPTION_MOVIE,
    SORT_BY
} from './types';
const moviesAPI = 'http://localhost:4000/movies';
export function getMovies() {
    return async (dispatch) => {
        let resp = await fetch(moviesAPI);
        let moviesJson = await resp.json();
        dispatch({ type: FETCH_MOVIES, payload: moviesJson.data });
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
export function sortMovies(sortBy) {
    return {
        type: SORT_BY,
        payload: sortBy
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

export function search(input) {
    return async (dispatch) => {
        debugger
        let resp = await fetch(`${moviesAPI}?search=${input}&searchBy=title`);
        let movies = await resp.json();
        dispatch({ type: FETCH_MOVIES, payload: movies.data });
    }
}

