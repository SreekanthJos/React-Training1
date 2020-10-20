import React,{useState,useCallback} from 'react';
import './movieCard.scss';
import { Menu } from "../menu/menu";
import { AddEditMovie } from "../addEditMovie";
import { DeleteMovie } from "../deleteMovie/deleteMovie";
import PropTypes from 'prop-types';
import { showDescriptionMovie,updateMovie } from '../../store/actions';
import { connect,useDispatch } from "react-redux";
export function MovieCard(props) {
  
  const [isHovered, setHoverState] = useState(false);
  const [isOpenedMenu, setMenuVisibility] = useState(false);
  const [isOpenedDeleteWindow, setDeleteWindowVisibility] = useState(false);
  const [isopenedEditWindow, setAddEditWindowVisibility] = useState(false);
  const dispatch = useDispatch();
  function handleEnter() {
    setHoverState(true);
  }

  function handleLeave() {
    setHoverState(false);
    setMenuVisibility(false);
  }
  const closeMenu= useCallback(() => setMenuVisibility(false));

  const openDeleteWindow = useCallback(() => { setDeleteWindowVisibility(true);setMenuVisibility(false);});

  const closeDeleteWindow = useCallback(() => setDeleteWindowVisibility(false));

  const openEditWindow = useCallback(() =>{ setAddEditWindowVisibility(true);setMenuVisibility(false)});

  const closeEditWindow = useCallback(() => setAddEditWindowVisibility(false));

  function showDetails(){
    dispatch(showDescriptionMovie(props.movie));
   props.showMovieDetails();
  }
  function editMovie(movie){
  
dispatch(updateMovie(movie));
  }
  const movie = props.movie;
  
  return (
    <article className="movie" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {isOpenedDeleteWindow && (
        <DeleteMovie close={closeDeleteWindow} id={movie.id}/>
      )}
      {isopenedEditWindow && (
        <AddEditMovie movie={props.movie} close={closeEditWindow} onSubmit={editMovie} closeMenu={closeMenu} />
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,   
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,   
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
  }),
  showMovieDetails: PropTypes.func.isRequired  
};



//export default connect(null,mapDispatchToProps)(MovieCard);
