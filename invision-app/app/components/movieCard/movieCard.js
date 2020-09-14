import React from 'react';
import './movieCard.scss';
import { Menu } from "../menu/menu";
import { AddEditMovie } from "../addEditMovie";
import { DeleteMovie } from "../deleteMovie/deleteMovie";
export class MovieCard extends React.Component {

  constructor(props) {

    super(props);
    console.log(this.props.movie);
    this.state = {
      isHovered: false,
      isOpenedMenu: false,
      isOpenedDeleteWindow: false,
      openedEditWindow: false
    };

  }
  handleEnter = () => {
    this.setState({
      isHovered: true
    });
  }

  handleLeave = () => {
    this.setState({
      isHovered: false,
      isOpenedMenu: false
    });
  }
  closeMenu = () => {
    this.setState({
      isOpenedMenu: false
    });
  }
  openEditWindow = () => {
    this.setState({
      openedEditWindow: true
    });
  }
  closeEditWindow = () => {
    this.setState({
      openedEditWindow: false
    });
  }
  openDeleteWindow = () => {
    this.setState({
      isOpenedDeleteWindow: true
    });
  }
  closeDeleteWindow = () => {
    this.setState({
      isOpenedDeleteWindow: false
    });
  }
  render() {
    const movie = this.props.movie;
    //console.log(props.movie);
    return (

      <article className="movie" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        {this.state.isOpenedDeleteWindow && (
          <DeleteMovie movie={this.props.movieId} close={this.closeDeleteWindow} />
        )}
        {this.state.openedEditWindow && (
          <AddEditMovie addEditMovie={this.props.addEditMovie} close={this.closeEditWindow} isEdit={true} />
        )}
         {this.state.isHovered && !this.state.isOpenedMenu && (
          <div className='circle' onClick={() => this.setState({ isOpenedMenu: true, isHovered: false })}></div>
        )}
        {this.state.isOpenedMenu && <Menu closeMenu={this.closeMenu} openEdit={this.openEditWindow} openDelete={this.openDeleteWindow} />}
        <figure className="movie__figure">
          <img className="movie__poster" src={movie.poster_path} alt={`Movie ${movie.title} poster`} />
          <figcaption className="movie__figcaption">
            <div className="movie__description">
              <h3>{movie.title}</h3>
              <span className="movie__genres">{movie.genres}</span>
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
}