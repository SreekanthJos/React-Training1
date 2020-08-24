import React from 'react';  
import './movieCard.scss';

export function MovieCard(props){
    const movie = props.movie;  
  console.log(props.movie);
return(
    <article className="movie">
    <figure className="movie__figure">
      <img className="movie__poster" src={movie.poster_path} alt={`Movie ${movie.title} poster`}/>
      <figcaption className="movie__figcaption">
        <div className="movie__description">
          <h3>{movie.title}</h3> 
          <span className="movie__genres">{movie.genres.join(', ')}</span>
        </div>
        {/* <span className="movie__year">
          {new Date(movie.release_date).getFullYear()}
        </span> */}
      </figcaption> 
    </figure>
    {/* <span className="movie__option">
      <FontAwesomeIcon icon={faEllipsisV} /> 
    </span> */}
    
  </article>
);
}