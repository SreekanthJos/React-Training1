import React from 'react';
import './moviesFound.scss'
import { connect } from 'react-redux';

export function MoivesFound(props){
debugger
    const message = props.count > 1 ? 'movies found' : 'movie found';
  
  return <div className="movie-count">
    <span className="count_bold">{props.count}</span>
    &nbsp; &nbsp; &nbsp;
    <span >{message}</span>
  </div>
}
const mapStateToProps = (state) => {
  debugger
  return {
    count: state.movies.movies.length   
  };
};
//export default connect(mapStateToProps, null)(MoivesFound);