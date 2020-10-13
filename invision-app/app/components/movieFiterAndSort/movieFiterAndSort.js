import React from 'react';
import { MovieFilter } from '../movieFilter/movieFilter';
import {SortBy} from '../sortBy/sortBy'
import './movieFiterAndSort.scss'

export function MovieFiterAndSort(){  

    return(
        <div className="list-controls">
            <MovieFilter/>
            <SortBy />
        </div>
    );

}

