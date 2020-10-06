import React, { useCallback } from 'react';
import './movieFilter.scss';
import { useDispatch } from "react-redux";
import { filterBYGenere } from "../../store/actions";
import {Filters} from '../../model/filter'
 export function MovieFilter() {

const filters=Filters;
    const dispatch = useDispatch();
    const filterMovies = useCallback((e) => {
        debugger
        dispatch(filterBYGenere(e.target.textContent));
    });
    return (
        <div className="filter-container">
        {filters.map(filter => (
            <span className="filter-item" key={filter.id} onClick={filterMovies}>{filter.name}</span>
        ))}
    </div>
        // <div className="filter-container" onClick={filterMovies}>
        //     <button className="filter-item">all</button>
        //     <button className="filter-item">drama</button>
        //     <button className="filter-item">comedy</button>
        //     <button className="filter-item">horror</button>
        //     <button className="filter-item">action</button>
        // </div>
    );

}
