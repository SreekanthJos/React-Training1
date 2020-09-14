import React from 'react';
import './addMovie.scss'
export class AddEditMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id:'',
        title: '',
        release_date: '',
        movieUrl: '',
        genres: '',
        overview: '',
        runtime: ''      
      },
      errors: [],
      isOpen: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.errors = [];
    this.title = this.props.isEdit ? "edit movie" : "add movie";
  }
  onSubmit(e) {
    e.preventDefault();    
      console.log(this.state.movie);
    this.props.createUpdateMovie(this.state.movie);
    this.props.close();

  }
 


  reset() {
    const form = document.querySelector('.add-Edit-movie-form');
    form.reset();
    this.setState = ({
      movies: {
        id: '',
        title: '',
        releaseDate: '',
        movieUrl: '',
        genere: '',
        overview: '',
        runtime: ''
      }
    });
  }
  onChangeInput(e) {
    if (e.target.value) {
      const newMovie = this.state.movie;
      newMovie[e.target.name] = e.target.value;
      this.setState({ movie: newMovie })
      console.log(this.state);

    }
  }
    render() {
      return (
        <div className='add-modal-dialog'>
          <div className='add-modal-dialog-content'>
            <a href='#close' title='close' className='close' onClick={this.props.close}>X</a>
            <h2 className='add-modal-dialog-header'>{this.title}</h2>
            <form className='add-modal-dialog-form' onSubmit={this.onSubmit}>
              {this.props.isEdit &&
                <label>
                  Movie Id
              <input name='title' readOnly className='add-input title' type="text" required />
                </label>
              }
              <label>
                Title
              <input name='title' className='add-input title' type="text" placeholder='Title' onChange={this.onChangeInput} />
              </label>
              <label>
                Release date
              <input name='releaseDate' className='add-input releaseDate' type="date" onChange={this.onChangeInput} />
              </label>
              <label>
                Movie url
              <input name='movieUrl' className='add-input movieUrl' type="text" placeholder='Movie URL here' onChange={this.onChangeInput} />
              </label>
              <label>
                Genre
              <select name='genres' className='add-select genre' onChange={this.onChangeInput}>
                  <option value="selectTitle">Select Genre</option>
                  <option value="documentary">Documentary</option>
                  <option value="comedy">Comedy</option>
                  <option value="horror">Horror</option>
                  <option value="crime">Crime</option>
                </select>
              </label>
              <label>
                Overview
              <input name='overview' className='add-input overview' type="text" placeholder='Overview here' onChange={this.onChangeInput} />
              </label>
              <label>
                Runtime
              <input name='runtime' className='add-input runtime' type="text" placeholder='Runtime here' onChange={this.onChangeInput} />
              </label>
              <div className='button-container'>
                <input className='reset-button' type='reset' value='Reset' onClick={this.cleanForm} />
                <input className='submit-button' type='submit' value='Submit' />
              </div>
            </form>
          </div>
        </div>

      );
    }

  }