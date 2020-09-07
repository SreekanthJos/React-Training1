import React from 'react';
import './movieList.scss'
import { MovieCard } from '../movieCard';

export function MovieList(props) {
    return (
        <div className="movies-list">
            {props.movies.map(movie => <div className="movies-list__item" key={movie.id}><MovieCard movie={movie}/></div>)}
        </div>
    );
}   