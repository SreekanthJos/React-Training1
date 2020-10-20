import React, { useEffect } from 'react';
import './movieList.scss'
import { MovieCard } from '../movieCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions';
import { MoivesFound } from '../moviesFound/moviesFound';

const MovieList = ({ getMovies, sortedMovies, showMovieDetails }) => {

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MoivesFound count={sortedMovies.length} />

      <div className="movies-list">
        {
          sortedMovies === 'No movies' ?
            <div className='no-films-container'>No movies in such genre</div>
            : sortedMovies.map((mov) => {
              return <MovieCard movie={mov} key={mov.id} showMovieDetails={showMovieDetails} />;
            })
        }
      </div>
    </div>
  );
};
function filteredMovies(movies, filterKey) {
  let ar = [];
  movies.map((m) => {
    for (let index = 0; index < m.genres.length; index++) {
      if (m.genres[index] === filterKey) {
        ar.push(m);
      }
    }
  });
  return ar;
}
const mapStateToProps = (state) => {
  const { movies: { movies, sortKey, filterKey } } = state;

  const sortedMovies = [...movies].sort((mA, mB) => mA[sortKey] > mB[sortKey] ? 1 : -1);

  const movielist = filterKey === 'All' ? sortedMovies : filteredMovies(sortedMovies, filterKey);

  console.log(state);
  return {
    sortedMovies: movielist,

  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    getMovies: () => dispatch(getMovies())
  };
};

MovieList.propTypes = {
  showMovieDetails: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
