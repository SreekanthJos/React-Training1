import React, { useCallback } from 'react';
import './movieFilter.scss';
import { useDispatch } from "react-redux";
import {  } from "../../store/actions";
import {Filters} from '../../model/filter'
 export function MovieFilter({ setGenreState}) {

const filters=Filters;
   
    const filterMovies = useCallback((e) => {        
      
    setGenreState(e.target.textContent);
    });
    return (
        <div className="filter-container">
        {filters.map(filter => (
            <span className="filter-item" key={filter.id} name={filter.name}  onClick={filterMovies}>{filter.name}</span>
        ))}
    </div>
       
    );

}
