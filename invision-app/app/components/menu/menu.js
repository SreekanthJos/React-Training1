import React,{useState} from 'react';
import './menuStyles.scss';
// import DeleteModal from '../DeleteModalComponent';
// import EditModal from '../EditModalComponent';
export function Menu(props){
  const [closeWindow,setCloseWindow]=useState(true);

    return (
      <div className='menu-container'>
        <a href='#close' title='close' className='close-menu' onClick={props.closeMenu}>X</a>
        <div className='menu-items'>
          <p onClick={props.openEdit}>Edit</p>
          <p onClick={props.openDelete}>Delete</p>
        </div>
      </div>
    );
  }


