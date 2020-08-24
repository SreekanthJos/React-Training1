import React from 'react';
import { MovieFilter } from '../movieFilter/movieFilter';
import {SortBy} from '../sortBy/sortBy'
import './movieFiterAndSort.scss'
export function MovieFiterAndSort(props){

    return(
        <div className="list-controls">
            <MovieFilter filter={props.filter}/>
            <SortBy  sortItems={props.sortItems}/>
        </div>
    );
}
