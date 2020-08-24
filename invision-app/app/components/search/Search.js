import React from 'react';
import './search.scss';
import  '../common.scss'
export function Search() {
    return (
        <div className="search">
            <h2 className="search__header">FIND YOUR MOVIE</h2>
            <div className="search__controls">
                <input type="text" className="search__input" />
                <input type="button" value="SEARCH" className="button button__primary" />
            </div>
        </div>
    );
}