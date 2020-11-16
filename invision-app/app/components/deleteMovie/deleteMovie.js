import React from 'react';
import './deleteMovie.scss';
import PropTypes from 'prop-types';
export function DeleteMovie(props){
  function deleteMovie () {
    props.deleteMovie(props.id);
  }
  return (
    <div className='delete-modal-dialog'>
      <div className='delete-modal-dialog-content'>
        <a href='#close' title='close' className='close' onClick={props.close}>X</a>
        <h2 className='delete-modal-dialog-header'>delete movie</h2>
        <p>Are you sure you want to delete this movie?</p>
        <button className='delete-confirmation-button'  onClick={deleteMovie}>Confirm</button>
      </div>
    </div>
  );
 }

 DeleteMovie.propTypes = {
  close: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired
};
