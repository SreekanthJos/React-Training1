import React, { useState, useEffect,useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import  MovieList  from '../movieList/movieList';

 import { MoivesFound } from "../moviesFound/moviesFound";
 import { MovieListFallback } from "../movieListFallback";
import  MovieDetails  from '../movieDetails';

export function Home() {
    const [isDetailsPage, setDetialsPage] = useState(false);
    const displayMainPage = useCallback(() => {
        setDetialsPage(false);
      }); 
      const showMovieDetails = useCallback(() => {
        setDetialsPage(true);
      });

    return (
        <>{
            isDetailsPage ?
            <MovieDetails  displayMainPage={displayMainPage} />
            : 
             <AddMovieButton />
        }
           <MovieFiterAndSort/>
                    
            <MovieList  showMovieDetails={showMovieDetails} />
          
        </>
    );

}