import React from 'react';
import { MovieFilter } from '../movieFilter/movieFilter';
import {SortBy} from '../sortBy/sortBy'
import './movieFiterAndSort.scss'
import moviesData from '../../model/moviesData.json'
export function MovieFiterAndSort(props){  

    return(
        <div className="list-controls">
            <MovieFilter filter={props.filter}/>
            <SortBy sort={props.sort} sortByItems={props.sortByItems}/>
        </div>
    );

}
