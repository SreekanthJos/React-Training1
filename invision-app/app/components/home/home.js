import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovie} from '../addMovie'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import {Filters} from '../../model/filter'
import { SortItems } from '../../model/sort';
import { MovieList } from '../movieList/movieList';
import moviesData from '../../model/moviesData.json'
import { MoivesFound } from "../moviesFound/moviesFound";
import { MovieListFallback } from "../movieListFallback";
export function Home(){
    
    return(
        <>
       <AddMovie/>
       <MovieFiterAndSort filter={Filters} sortItems={SortItems}/>
       <MoivesFound count={moviesData.length}/>
       <ErrorBoundary FallbackComponent={MovieListFallback}>
       <MovieList movies={moviesData}/>
       </ErrorBoundary>
       </>
    );
}