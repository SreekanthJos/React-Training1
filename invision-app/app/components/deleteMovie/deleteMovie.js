import React from 'react';
import './deleteMovie.scss';

export class DeleteMovie extends React.Component {
  constructor (props) {
    super(props);
  }

  delete () {
    this.props.deleteMovie(this.props.id);
  }

  render () {
    return (
      <div className='delete-modal-dialog'>
        <div className='delete-modal-dialog-content'>
          <a href='#close' title='close' className='close' onClick={this.props.close}>X</a>
          <h2 className='delete-modal-dialog-header'>delete movie</h2>
          <p>Are you sure you want to delete this movie?</p>
          <button className='delete-confirmation-button' >Confirm</button>
        </div>
      </div>
    );
  }
}

