import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AddMovieButton } from '../addMovieButton'
import { MovieFiterAndSort } from '../movieFiterAndSort';
import { Filters } from '../../model/filter'
import { SortItems } from '../../model/sort';
import { MovieList } from '../movieList/movieList';
import moviesData from '../../model/moviesData.json'
import { MoivesFound } from "../moviesFound/moviesFound";
import { MovieListFallback } from "../movieListFallback";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movies: moviesData }
        // this.movies=moviesData;
    }
    sort(selectedValue) {

        const movies = this.state.movies;
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

        this.setState({
            movies
        });
    }
    createUpdateMovie=(movie)=> {
        debugger;
        console.log(this.state)
        const { movies }=this.state;
       movies.push(movie);
        this.setState({
            movies
        });
    }
    render() {
        return (
            <>
                <AddMovieButton createUpdateMovie={this.createUpdateMovie}/>
                <MovieFiterAndSort filter={Filters} sort={this.sort.bind(this)} sortByItems={SortItems} />
                <MoivesFound count={moviesData.length} />
                <ErrorBoundary FallbackComponent={MovieListFallback}>
                    <MovieList movies={this.state.movies} />
                </ErrorBoundary>
            </>
        );
    }
}