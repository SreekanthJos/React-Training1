import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './sortBy.scss'
import { sortByDate, sortByTitle } from "../../store/actions";

export function SortBy(){
    const dispatch=useDispatch();
    const onChangeInput=useCallback((e)=>{
        if(e.target.value==='releaseDate'){
            dispatch(sortByDate());
        }
        if(e.target.value==='title'){
            dispatch(sortByTitle());
        }
    });

    return (
        <div className="sort-container">
            <span className="sort-header">SORT BY</span>

            <select className="sort-select" onChange={onChangeInput}>
            <option value='default'>choose sort method</option>
        <option value='releaseDate'>release date</option>
        <option value='title'>title</option>

            </select>
        </div>
    );

}