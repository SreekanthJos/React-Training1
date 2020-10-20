import React from 'react';
import './search.scss';
import '../common.scss';
import { search } from '../../store/actions';
import { useDispatch } from 'react-redux';
export function Search() {
    const dispatch = useDispatch();
    function onSearch() {
        debugger;
        dispatch(search(document.getElementById("txtSearch").value));
    }
    return (
        <div className="search">
            <h2 className="search__header">FIND YOUR MOVIE</h2>
            <div className="search__controls">
                <input type="text" id="txtSearch" className="search__input" />
                <input type="button" value="SEARCH" onClick={onSearch} className="button button__primary" />
            </div>
        </div>
    );
}