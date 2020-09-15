import React, { useState, useEffect } from 'react';
import './addMovie.scss'
import PropTypes from 'prop-types';
export function AddEditMovie(props) {
  const [newMovie, setMovie] = useState({
    id: '',
    title: '',
    release_date: '',
    poster_path: '',
    genres: '',
    overview: '',
    runtime: ''
  });
  const [value, setValue] = useState('');
  var pagetitle="Add Movie"
  if (props.movie){
  pagetitle="Edit Movie"
  }
  useEffect(() => {
    if (props.movie) {
      setMovie(props.movie);
     
    }
    else {
      reset();
    }
  },[]);
  function reset() {
    setMovie({
      id: '',
      title: '',
      releaseD_date: '',
      poster_path: '',
      genres: '',
      overview: '',
      runtime: ''
    })
  }

  function onSubmit(e) {
    debugger
    e.preventDefault();
    if (!newMovie.id) {
      newMovie.id = Math.floor(Math.random() + Date.now());
    }
    props.createUpdateMovie(newMovie);
    props.close();
  }

  function onChangeInput(e) {
    debugger
    if (e.target.value) {
      const name = event.target.name;
      setValue(e.target.value);
      newMovie[name] = e.target.value;
      setMovie(newMovie);
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
              <input name='id' readOnly className='add-input title' type="text" required value={newMovie.id}/>
              </label>
            }
            <label>
              Title
              <input name='title' className='add-input title' type="text" placeholder='Title' onChange={onChangeInput} value={newMovie.title || ''}/>
            </label>
            <label>
              Release date
              <input name='release_date' className='add-input releaseDate' type="date" onChange={onChangeInput} value={newMovie.release_date || ''} />
            </label>
            <label>
              Movie url
              <input name='poster_path' className='add-input movieUrl' type="text" placeholder='Movie URL here' onChange={onChangeInput} value={newMovie.poster_path || ''}/>
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
              <input className='submit-button' type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    ); 

}
AddEditMovie.propTypes = {
  movie: PropTypes.object,
  createUpdateMovie: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired 
};
