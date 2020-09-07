import React from 'react';
import './menuStyles.scss';
// import DeleteModal from '../DeleteModalComponent';
// import EditModal from '../EditModalComponent';

export class Menu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      closeWindow: true
    };
  }

  render () {
    return (
      <div className='menu-container'>
        <a href='#close' title='close' className='close-menu' onClick={this.props.closeMenu}>X</a>
        <div className='menu-items'>
          <p onClick={this.props.openEdit}>Edit</p>
          <p onClick={this.props.openDelete}>Delete</p>
        </div>
      </div>
    );
  }
}

