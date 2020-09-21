import React,{useState} from 'react';
import './movieCard.scss';
import { Menu } from "../menu/menu";
import { AddEditMovie } from "../addEditMovie";
import { DeleteMovie } from "../deleteMovie/deleteMovie";
import PropTypes from 'prop-types';

export function MovieCard(props) {
  const [isHovered, setHoverState] = useState(false);
  const [isOpenedMenu, setMenuVisibility] = useState(false);
  const [isOpenedDeleteWindow, setDeleteWindowVisibility] = useState(false);
  const [isopenedEditWindow, setAddEditWindowVisibility] = useState(false);

  function handleEnter() {
    setHoverState(true);
  }

  function handleLeave() {
    setHoverState(false);
    setMenuVisibility(false);
  }

  function openEditWindow() {
    setAddEditWindowVisibility(true);
    closeMenu();
  }

  function closeEditWindow() {
    setAddEditWindowVisibility(false);
  }

  function openDeleteWindow() {
    setDeleteWindowVisibility(true);
    closeMenu();
  }

  function closeDeleteWindow() {
    setDeleteWindowVisibility(false);
  }
  function closeMenu(){
    setMenuVisibility(false);
  }
  function showDetails(){
    props.showMovieDetails(props.movie);
  }
  const movie = props.movie;
  
  return (
    <article className="movie" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {isOpenedDeleteWindow && (
        <DeleteMovie movie={props.movieId} close={closeDeleteWindow} deleteMovie={props.deleteMovie} id={props.movie.id}/>
      )}
      {isopenedEditWindow && (
        <AddEditMovie movie={props.movie} onSubmit={props.updateMovie} close={closeEditWindow} closeMenu={closeMenu} />
      )}
      {isHovered && !isOpenedMenu && (
        <div className='circle' onClick={() => { setMenuVisibility(true); setHoverState(false) }}></div>
      )}
      {isOpenedMenu && <Menu closeMenu={closeMenu} openEdit={openEditWindow} openDelete={openDeleteWindow} />}
      <figure className="movie__figure">
        <img className="movie__poster" src={movie.poster_path} alt={`Movie ${movie.title} poster`} onClick={showDetails}/>
        <figcaption className="movie__figcaption">
          <div className="movie__description">
            <h3>{movie.title}</h3>
            <span className="movie__genres">{movie.genres}</span>
          </div>

        </figcaption>
      </figure>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,   
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,   
    genres: PropTypes.string.isRequired,
    runtime: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
  }),
  updateMovie: PropTypes.func.isRequired,
  //deleteMovie: PropTypes.func.isRequired, 
  //changeHeaderToDescription: PropTypes.func.isRequired
};

export default MovieCard;