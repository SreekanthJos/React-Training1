import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import { Filters } from '../../model/filter'
import { SortItems } from '../../model/sort';
import { MovieList } from '../movieList/movieList';
import moviesData from '../../model/moviesData.json'
import { MoivesFound } from "../moviesFound/moviesFound";
import { MovieListFallback } from "../movieListFallback";
import { MovieDetails } from '../movieDetails';

export function Home(props) {
    const [movies, setMovies] = useState(moviesData);
    const [movie, setMovie] = useState({});
    const [isDetailsPage, setDetialsPage] = useState(false);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {      
        sort();
    },[sortBy]);

    function updateSortValue(value) {
        setSortBy(value);
    }
    function sort() {
        let sortMovies = [...movies];
        if (sortBy == 'title') {
            sortMovies.sort((movieA, movieB) => movieA.title > movieB.title ? 1 : -1);
        }
        else {
            sortMovies.map((movie) => {
                if (typeof movie.release_date === 'string') {
                    let year = movie.release_date.split('-')[0];
                    movie.release_date = year;
                    return movie;
                }
                return movie;
            });
            sortMovies.sort((movieA, movieB) => movieA.release_date > movieB.release_date ? 1 : -1);
        }

        setMovies(sortMovies);
    }
    function createMovie(movie) {
      let arMovies=[...movies];
        if (arMovies.some((m) => m.id != movie.id)) {

            arMovies.push(movie);
            setMovies(arMovies)
        }
    }
    function updateMovie(movie){
        let arMovies=[...movies];
        const allmovies = arMovies.map((m) => {
            if (m.id === movie.id) {
                return movie;
            }
            return m;
        });
        setMovies(allmovies);
    }
    function deleteMovie(id) {
        setMovies(movies.filter((m) => m.id !== id));
    }
    function showMovieDetails(movie) {
        setMovie(movie);
        setDetialsPage(true)
    }
    function displayMainPage() {
        setDetialsPage(false)
    }
function filterMovies(name){ 
    if(name.toLowerCase()!='all'){    
        const res=movies.filter((m) => m.genres.toLowerCase().includes(name.toLowerCase()));
        setMovies(res);   
    }
    else{
    setMovies(moviesData);
    }
}
    return (
        <>{isDetailsPage ?
            <MovieDetails movie={movie} displayMainPage={displayMainPage} />
            : <AddMovieButton createMovie={createMovie} />
        }
            <MovieFiterAndSort filter={Filters} sort={updateSortValue} filterMovies={filterMovies} sortByItems={SortItems} />
            <MoivesFound count={movies.length} />
            <ErrorBoundary FallbackComponent={MovieListFallback}>
                <MovieList movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie} showMovieDetails={showMovieDetails} />
            </ErrorBoundary>
        </>
    );

}