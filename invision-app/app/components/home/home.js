import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import { Filters } from '../../model/filter'
import { SortItems } from '../../model/sort';
import { MovieList } from '../movieList/movieList';
import moviesData from '../../model/moviesData.json'
import { MoivesFound } from "../moviesFound/moviesFound";
import { MovieListFallback } from "../movieListFallback";
import {MovieDetails} from '../movieDetails';

export function Home(props) {
    const [movies, setMovies] = useState(moviesData);
    const [movie, setMovie] = useState({});
    const[isDetailsPage,setDetialsPage]=useState(false);
    function sort(selectedValue) {

        if (selectedValue == 'title') {
            movies.sort((movieA, movieB) => movieA.title > movieB.title ? 1 : -1);
        }
        else {
            movies.map((movie) => {
                if (typeof movie.release_date === 'string') {
                    let year = movie.release_date.split('-')[0];
                    movie.release_date = year;
                    return movie;
                }
                return movie;
            });
            movies.sort((movieA, movieB) => movieA.release_date > movieB.release_date ? 1 : -1);
        }

        setMovies(movies);
    }
    function createUpdateMovie(movie) {
        if (movies.some((m) => m.id != movie.id)) {
            movies.push(movie);
            setMovies(movies)
        }
        else {
            const allmovies = movies.map((m) => {
                if (m.id === movie.id) {
                    return movie;
                }
                return m;
            });
            setMovies(allmovies);
        }
        
    }
    function deleteMovie() {
        setMovies(movies.filter((m) => m.id !== id));
    }
    function showMovieDetails(movie){
        setMovie(movie);
        setDetialsPage(true)
    }
function displayMainpage(){
    setDetialsPage(false)
}

    return (
        <>{isDetailsPage?
        <MovieDetails movie={movie} displayMainpage={displayMainpage}/>
            :<AddMovieButton createUpdateMovie={createUpdateMovie} />
        }
            <MovieFiterAndSort filter={Filters} sort={sort} sortByItems={SortItems} />
            <MoivesFound count={moviesData.length} />
            <ErrorBoundary FallbackComponent={MovieListFallback}>
                <MovieList movies={movies} createUpdateMovie={createUpdateMovie} deleteMovie={deleteMovie}  showMovieDetails={showMovieDetails}/>
            </ErrorBoundary>
        </>
    );

}