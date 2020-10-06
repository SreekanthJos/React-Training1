import React,{useEffect} from 'react';
import './movieList.scss'
import { MovieCard } from '../movieCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions';
import { MoivesFound } from '../moviesFound/moviesFound';

const MovieList=({ getMovies, customMovies, sortedMovies, showMovieDetails })=> {
debugger
  useEffect(() => {
    getMovies();
  }, []);

  return (   
   <div>
     <MoivesFound count={sortedMovies.length === 0?customMovies.length:sortedMovies.length}/>    
  
    <div className="movies-list">
         
      {
        sortedMovies.length === 0 ?
          customMovies.map((mov) => {
            return <div className="movies-list__item" key={mov.id}>
              <MovieCard movie={mov} showMovieDetails={showMovieDetails} />
            </div>
          })
          : sortedMovies === 'No movies' ?
            <div className='no-films-container'>No movies in such genre</div>
            : sortedMovies.map((mov) => {
              return <MovieCard movie={mov} showMovieDetails={showMovieDetails} />;
            })
      }
       </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  debugger
  return {
    customMovies: state.movies.movies,
    sortedMovies: state.movies.sortedMovies
  };
};
const mapDispatchToProps = (dispatch) => {
  debugger
  return {    
    getMovies: () => dispatch(getMovies())
  };
};

MovieList.propTypes = {
  showMovieDetails: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
