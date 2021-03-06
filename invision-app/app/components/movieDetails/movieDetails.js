import React from 'react';
import './movieDetails.scss';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams, Redirect } from "react-router-dom";

export function MovieDetails({displayMainPage}) {
    const history = useHistory();
    let { id } = useParams();

    function getYear(date) {
        let year = date.split('-')[0];
        return year;
    }

    const goBack = () => {
        history.goBack();
      }
    
    const movie = useSelector(state => state.movies.movies.find(movie => movie.id == id));

    console.log(movie);
    return movie ? (
        <header className='header-container'>
            <div className='header-top-part'>
                
                <button className='search-description-button' onClick={goBack}></button>
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
    )
    : <Redirect to="/" />;
}

MovieDetails.propTypes = {
    // movie: PropTypes.shape({
    //  id: PropTypes.number.isRequired,
    //   title: PropTypes.string.isRequired,
    //   tagline: PropTypes.string,
    //   vote_average: PropTypes.number,
    //   vote_count: PropTypes.number,
    //   release_date: PropTypes.string.isRequired,
    //   poster_path: PropTypes.string,
    //   overview: PropTypes.string.isRequired,
    //   budget: PropTypes.number,
    //   revenue: PropTypes.number,
    //   genres: PropTypes.array.isRequired,
    //   runtime: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
    // }),
    displayMainPage: PropTypes.func.isRequired,
    // history: PropTypes.object.isRequired
  };
  

//   const mapStateToProps = (state) => {
//     return {
//       dmovie: state.movies.movie
//     };
//   };
  
