import React from 'react';
import { MovieFilter } from '../movieFilter/movieFilter';
import {SortBy} from '../sortBy/sortBy'
import './movieFiterAndSort.scss'

export function MovieFiterAndSort({setOrderState,setGenreState}){  

    return(
        <div className="list-controls">
            <MovieFilter  setGenreState={setGenreState}/>
            <SortBy  setOrderState={setOrderState}/>
        </div>
    );

}

