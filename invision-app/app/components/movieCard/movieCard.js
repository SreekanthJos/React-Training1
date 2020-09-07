import React from 'react';
import './movieCard.scss';
import { Menu } from "../menu/menu";
import { EditMovie } from "../editMovie/editMovie";
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
  handleEnter () {
    this.setState({
      isHovered: true
    });
  }

  handleLeave () {
    this.setState({
      isHovered: false,
      isOpenedMenu: false
    });
  }
  closeMenu () {
    this.setState({
      isOpenedMenu: false
    });
  }
  openEditWindow () {
    this.setState({
      openedEditWindow: true
    });
  }
   closeEditWindow () {
    this.setState({
      openedEditWindow: false
    });
  }
  openDeleteWindow () {
    this.setState({
      isOpenedDeleteWindow: true
    });
  }
   closeDeleteWindow () {
    this.setState({
      isOpenedDeleteWindow: false
    });
  }
  render() {
    const movie = this.props.movie;
    //console.log(props.movie);
    return (
      
      <article className="movie" onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
         {this.state.isOpenedDeleteWindow && (
          <DeleteMovie movie={this.props.movieId} close={this.closeDeleteWindow.bind(this)}/>
        )}
        {this.state.openedEditWindow && (
          <EditMovie movie={this.props.movie} close={this.closeEditWindow.bind(this)}/>
        )}
        {this.state.isHovered && !this.state.isOpenedMenu && (
          <div className='circle' onClick={() => this.setState({ isOpenedMenu: true, isHovered: false })}></div>
        )}
        {this.state.isOpenedMenu && <Menu closeMenu={this.closeMenu.bind(this)} openEdit={this.openEditWindow.bind(this)} openDelete={this.openDeleteWindow.bind(this)}/>}
        <figure className="movie__figure">
          <img className="movie__poster" src={movie.poster_path} alt={`Movie ${movie.title} poster`} />
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
}