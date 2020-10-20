import React from 'react';
import './moviesFound.scss'

export function MoivesFound(props){

    const message = props.count > 1 ? 'movies found' : 'movie found';
  
  return <div className="movie-count">
    <span className="count_bold">{props.count}</span>
    &nbsp; &nbsp; &nbsp;
    <span >{message}</span>
  </div>
}
