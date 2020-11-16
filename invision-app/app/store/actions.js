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
export function getMovies(order, genre, search) {
    return async (dispatch) => {
        let resp = await fetch(`${moviesAPI}?searchBy=title&sortOrder=asc${order ? `&sortBy=${order}` : ''}${genre ? `&filter=${genre}` : ''}${search ? `&search=${search}` : ''}`);
        let moviesJson = await resp.json();
        dispatch({ type: FETCH_MOVIES, payload: moviesJson.data });
    };
}
export function createMovie(movie) {
    return async (dispatch) => {
        let resp = await fetch(`${ moviesAPI }`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf8' },
            body: JSON.stringify(movie)
        });
        let json = await resp.json();
        dispatch({ type: CREATE_MOVIE, payload: json });
    };
}
export function updateMovie(movie) {
    return async (dispatch) => {
        let resp = await fetch(`${ moviesAPI }`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf8' },
            body: JSON.stringify(movie)
        });
       
        dispatch({ type: UPDATE_MOVIE, payload: movie });
    };
   
}
export function deleteMovie(id) {
    return async (dispatch) => {
        let resp = await fetch(`${ moviesAPI } / ${ id }`, {
            method: 'DELETE'            
        });      
        dispatch({ type: DELETE_MOVIE, payload: {id} });
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

