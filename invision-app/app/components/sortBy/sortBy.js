import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './sortBy.scss'
import { sortMovies } from "../../store/actions";

export function SortBy(){
    const dispatch=useDispatch();
    const onChangeInput=useCallback((e)=>{
        dispatch(sortMovies(e.target.value));        
    });

    return (
        <div className="sort-container">
            <span className="sort-header">SORT BY</span>
            <select className="sort-select" onChange={onChangeInput}>           
                <option value='release_date'>release date</option>
                <option value='title'>title</option>
            </select>
        </div>
    );

}