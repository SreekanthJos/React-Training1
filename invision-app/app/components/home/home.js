import React, { useState, useEffect, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import MovieList from '../movieList/movieList';

import { MoivesFound } from "../moviesFound/moviesFound";
import { MovieListFallback } from "../movieListFallback";
import MovieDetails from '../movieDetails';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function Home(
  {
     showMovieDetails,
    searchState,
    setSearchState,
    setOrderState,
    setGenreState,
    history
  }
) {
  return (
    <>
      <Header></Header>
      {
        <AddMovieButton searchState={searchState} setSearchState={setSearchState} history={history} />
      }
      <MovieFiterAndSort setOrderState={setOrderState} setGenreState={setGenreState} />

      <MovieList showMovieDetails={showMovieDetails} history={history} />
      <Footer></Footer>
    </>
  );
}