import React, { useCallback } from 'react';
import './movieFilter.scss';
import { useDispatch } from "react-redux";
import { getMovies } from "../../store/actions";
import {Filters} from '../../model/filter'
 export function MovieFilter({ setGenreState}) {

const filters=Filters;
   
const dispatch = useDispatch();

    const filterMovies = useCallback((e) => {    
    dispatch(getMovies('',e.target.textContent,''));    
    });
    return (
        <div className="filter-container">
        {filters.map(filter => (
            <span className="filter-item" key={filter.id} name={filter.name}  onClick={filterMovies}>{filter.name}</span>
        ))}
    </div>
    );
}
