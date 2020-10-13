import React from 'react';
import './addMovie.scss';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const validate = (values) => {
  const errors = {};
  for (let key in values) {
    if (!values[key]) {
      errors[key] = 'error';
    }
    if (key === 'poster_path') {
      // eslint-disable-next-line no-useless-escape
      const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      if (!regexp.test(values[key])) {
        errors[key] = 'error';
      }
    }
    if (key === 'runtime' && isNaN(values[key])) {
      errors[key] = 'error';
    }
  }
  return errors;
};


export function AddEditMovie(props) {
  const {handleSubmit,handleChange,resetForm,values,errors} = useFormik({
    initialValues: {
      id: props?.movie?.id || Math.floor(Math.random() + Date.now()),
      title: props?.movie?.title,
      release_date: props?.movie?.release_date,
      poster_path: props?.movie?.poster_path,
      genres: props?.movie?.genres,
      overview: props?.movie?.overview,
      runtime: props?.movie?.runtime
    },
    validate,
    onSubmit:  (values)=> {
      event.preventDefault();
      props.onSubmit(values);     
      props.close();
    }
  });
  
  return (
    <div className='add-modal-dialog'>
      <div className='add-modal-dialog-content'>
        <a href='#close' title='close' className='close' onClick={props.close}>X</a>
        <h2 className='add-modal-dialog-header'></h2>
        <form className='add-modal-dialog-form' onSubmit={handleSubmit}>
          {props.movie &&
            <label>
              Movie Id
        <input name='id' readOnly className='add-input title' type="text"  value={values.id} />
            </label>
          }
          <label>
            Title
        <input name='title' className={`add-input title ${ errors.title }`} type="text" placeholder='Title' onChange={handleChange} value={values.title || ''} />
          </label>
          <label>
            Release date
        <input name='release_date' className={`add-input title ${ errors.release_date }`} type="date" onChange={handleChange} value={values.release_date || ''} />
          </label>
          <label>
            Movie url
        <input name='poster_path' className={`add-input title ${ errors.poster_path }`} type="text" placeholder='Movie URL here' onChange={handleChange} value={values.poster_path || ''} />
          </label>
          <label>
            Genre
        <select name='genres' className={`add-select title ${ errors.genres }`} onChange={handleChange} value={values.genres || ''}>
              <option value="selectTitle">Select Genre</option>
              <option value="documentary">Documentary</option>
              <option value="comedy">Comedy</option>
              <option value="horror">Horror</option>
              <option value="crime">Crime</option>
            </select>
          </label>
          <label>
            Overview
        <input name='overview' className={`add-input title ${ errors.overview }`} type="text" placeholder='Overview here' onChange={handleChange} value={values.overview || ''} />
          </label>
          <label>
            Runtime
        <input name='runtime' className={`add-input title ${ errors.runtime }`} type="text" placeholder='Runtime here' onChange={handleChange} value={values.runtime || ''} />
          </label>
          <div className='button-container'>
            <input className='reset-button' type='reset' value='Reset' onClick={resetForm} />
            <input className='submit-button' type='submit' value='Submit' />
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

































