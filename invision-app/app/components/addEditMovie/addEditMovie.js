import React, { useState } from 'react';
import './addMovie.scss'
import PropTypes from 'prop-types';

export function AddEditMovie(props) {

  const [newMovie, setMovie] = useState({
    id: props?.movie?.id || Math.floor(Math.random() + Date.now()),
    title: props?.movie?.title,
    release_date: props?.movie?.release_date,
    poster_path: props?.movie?.poster_path,
    genres: props?.movie?.genres,
    overview: props?.movie?.overview,
    runtime: props?.movie?.runtime
  });

  let pagetitle = props.movie ? "Edit Movie" : "Add Movie";

  function reset() {
    setMovie({
      id: props?.movie?.id || Math.floor(Math.random() + Date.now()),
      title: props?.movie?.title,
      release_date: props?.movie?.release_date,
      poster_path: props?.movie?.poster_path,
      genres: props?.movie?.genres,
      overview: props?.movie?.overview,
      runtime: props?.movie?.runtime
    })
  }

  function onSubmit(e) {  
    
    e.preventDefault();
    props.onSubmit(newMovie);
   
    props.close();
  }

  function onChangeInput(e) {   
    if (e.target.value) {
      const name = e.target.name;
      setMovie({ ...newMovie, [name]: e.target.value });
    }
  }

  return (
    <div className='add-modal-dialog'>
      <div className='add-modal-dialog-content'>
        <a href='#close' title='close' className='close' onClick={props.close}>X</a>
        <h2 className='add-modal-dialog-header'>{pagetitle}</h2>
        <form className='add-modal-dialog-form' onSubmit={onSubmit}>
          {props.movie &&
            <label>
              Movie Id
              <input name='id' readOnly className='add-input title' type="text" required value={newMovie.id} />
            </label>
          }
          <label>
            Title
              <input name='title' className='add-input title' type="text" placeholder='Title' onChange={onChangeInput} value={newMovie.title || ''} />
          </label>
          <label>
            Release date
              <input name='release_date' className='add-input releaseDate' type="date" onChange={onChangeInput} value={newMovie.release_date || ''} />
          </label>
          <label>
            Movie url
              <input name='poster_path' className='add-input movieUrl' type="text" placeholder='Movie URL here' onChange={onChangeInput} value={newMovie.poster_path || ''} />
          </label>
          <label>
            Genre
              <select name='genres' className='add-select genre' onChange={onChangeInput} value={newMovie.genres || ''}>
              <option value="selectTitle">Select Genre</option>
              <option value="documentary">Documentary</option>
              <option value="comedy">Comedy</option>
              <option value="horror">Horror</option>
              <option value="crime">Crime</option>
            </select>
          </label>
          <label>
            Overview
              <input name='overview' className='add-input overview' type="text" placeholder='Overview here' onChange={onChangeInput} value={newMovie.overview || ''} />
          </label>
          <label>
            Runtime
              <input name='runtime' className='add-input runtime' type="text" placeholder='Runtime here' onChange={onChangeInput} value={newMovie.runtime || ''} />
          </label>
          <div className='button-container'>
            <input className='reset-button' type='reset' value='Reset' onClick={reset} />
            <input className='submit-button' type='submit' value='Submit' onClick={onSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
}
AddEditMovie.propTypes = {
  movie: PropTypes.object,
  onSubmit: PropTypes.func.isRequired, 
  close: PropTypes.func.isRequired
};

