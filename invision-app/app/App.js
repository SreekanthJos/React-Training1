import React, { useState, useCallback } from 'react';
import { Home } from "./components";
import "./app.scss"
import './components/common.scss'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ErrorPage } from './components/404';
import { MovieDetails } from './components/movieDetails';
import { hot } from 'react-hot-loader';
import 'isomorphic-fetch';
import 'babel-polyfill';
import PropTypes from 'prop-types';

const App=({ context, location, Router, store})=> {
  const [isDetailsPage, setDetialsPage] = useState(false);
  const displayMainPage = useCallback(() => {
    setDetialsPage(false);
  });
  const showMovieDetails = useCallback(() => {
    setDetialsPage(true);
  });

  const [orderState, setOrderState] = React.useState('');
  const [genreState, setGenreState] = React.useState('');
  const [searchState, setSearchState] = React.useState('');
 
  return (
    <div className="container">
    <div className="App">
    <Provider store={store}>
      <Router location={location} context={context}>        
          <Switch>
            <Route exact path='/' render={(props) => 
            <Home isDetailsPage={isDetailsPage} displayMainPage={displayMainPage} showMovieDetails={showMovieDetails} searchState={searchState} setSearchState={setSearchState} setOrderState={setOrderState} setGenreState={setGenreState} {...props} />} />
            <Route exact path='/movie/:id'>
                <MovieDetails  displayMainPage={displayMainPage} />
            </Route>
            <Route path='/search' render={(props) => <Home isDetailsPage={isDetailsPage} displayMainPage={displayMainPage} showMovieDetails={showMovieDetails} searchState={searchState} setSearchState={setSearchState}  setOrderState={setOrderState} setGenreState={setGenreState}  {...props} />} />

            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
      </Router>
    </Provider>
    </div>
    </div>
  );
}

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);

