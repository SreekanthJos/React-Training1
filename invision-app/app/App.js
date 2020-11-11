import React, { Component, useState, useCallback, useEffect } from 'react';
import { Home } from "./components";
import "./app.scss"
import './components/common.scss'
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import { getMovies } from './store/actions';
import { ErrorPage } from './components/404';
import { NoMoviesPage } from './components/noMoviesPage';
import { MovieDetails } from './components/movieDetails';

function App() {
  const [isDetailsPage, setDetialsPage] = useState(false);
  const dispatch = useDispatch();
  const displayMainPage = useCallback(() => {
    setDetialsPage(false);
  });
  const showMovieDetails = useCallback(() => {
    setDetialsPage(true);
  });

  const [orderState, setOrderState] = React.useState('');
  const [genreState, setGenreState] = React.useState('');
  const [searchState, setSearchState] = React.useState('');

  const fetchMovies = () => {
    
    dispatch(getMovies(orderState, genreState, searchState));
  };
  useEffect(() => {
    if (orderState || genreState) {
      
      fetchMovies();
    }
  }, [genreState, orderState]);
  return (
    <div className="container">

      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <Home isDetailsPage={isDetailsPage} displayMainPage={displayMainPage} showMovieDetails={showMovieDetails} searchState={searchState} setSearchState={setSearchState} fetchMovies={fetchMovies} setOrderState={setOrderState} setGenreState={setGenreState} {...props} />} />
            < Route exact path='/movie/:id'>
                <MovieDetails  displayMainPage={displayMainPage} />
            </Route>
            <Route path='/search' render={(props) => <Home isDetailsPage={isDetailsPage} displayMainPage={displayMainPage} showMovieDetails={showMovieDetails} searchState={searchState} setSearchState={setSearchState} fetchMovies={fetchMovies} setOrderState={setOrderState} setGenreState={setGenreState}  {...props} />} />

            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;