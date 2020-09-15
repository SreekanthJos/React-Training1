import React from 'react';
import './movieList.scss'
import { MovieCard } from '../movieCard';
import PropTypes from 'prop-types';

export function MovieList(props) {
    return (
        <div className="movies-list">
            {props.movies.map(mov => <div className="movies-list__item" key={mov.id}>
                <MovieCard movie={mov} key={mov.id} createUpdateMovie={props.createUpdateMovie} deleteMovie={props.deleteMovie} showMovieDetails={props.showMovieDetails}/></div>)}
        </div>
    );
}   
MovieList.propTypes = {   
    deleteMovie: PropTypes.func.isRequired,
    createUpdateMovie: PropTypes.func.isRequired,
    //changeHeaderToDescription: PropTypes.func.isRequired
  };
  