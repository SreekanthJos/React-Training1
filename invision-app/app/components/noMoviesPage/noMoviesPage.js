import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';

import { Header } from '../Header';
import { Footer } from '../Footer';
import './noMoviesPage.scss';

export function NoMoviesPage(
    {
        searchState,
        setSearchState,
        fetchMovies,
        setOrderState,
        setGenreState
    }
) 
{
       return (
        <>
            <Header></Header>
            <main className='no-movies-container'>
                <AddMovieButton searchState={searchState} setSearchState={setSearchState} fetchMovies={fetchMovies} history={history} />

                <MovieFiterAndSort setOrderState={setOrderState} setGenreState={setGenreState} />

                <div className='no-movies-content'>
                    <p className='no-movies-title'>No Movie Found</p>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
