import React from 'react'
import './movieFilter.scss'
export function MovieFilter(props) {

    function OnFilterChange(e) {
        props.filterMovies(e.target.textContent);
    }
    return (

        <div className="filter-container">
            {props.filter.map(filter => (
                <span className="filter-item" key={filter.id} onClick={OnFilterChange}>{filter.name}</span>
            ))}
        </div>


    );

}