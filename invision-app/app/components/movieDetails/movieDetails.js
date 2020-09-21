import React from 'react';
import './movieDetails.scss';
import PropTypes from 'prop-types';
import Header from '../header';
export function MovieDetails(props) {

    function getYear(date) {
        let year = date.split('-')[0];
        return year;
    }
    const movie = props.movie;
    
    return (
        <header className='header-container'>
            <div className='header-top-part'>
                
                <button className='search-description-button' onClick={props.displayMainPage}></button>
            </div>
            <div className='description-container'>
                <div className='image-container'>
                    <img src={movie.poster_path} className='description-image' width='250' height='350' />
                </div>
                <div className='description-content'>
                    <div className='movie-title'>
                        <h2>{movie.title}</h2>
                        <div className='rating-circle'>
                            <span className='rating'>{movie.vote_average}</span>
                        </div>
                    </div>
                    <p className='description-tagline'>{movie.tagline}</p>                   
                    <div className='movie-year-runtime'>
                        <p className='description-release-date'>{getYear(movie.release_date)}</p>
                        <p>{movie.runtime} min</p>
                    </div>
                    <p className='description-overview'>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </header>
    );
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string.isRequired,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      genres: PropTypes.string.isRequired,
      runtime: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
    }),
    displayMainpage: PropTypes.func.isRequired
  };
  

export default MovieDetails;