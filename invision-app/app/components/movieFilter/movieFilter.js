import React from 'react'
import './movieFilter.scss'
export function MovieFilter(props) {

    return (
        
            <div className="filter-container">
                {props.filter.map(filter => (
                    <span className="filter-item" key={filter.id}>{filter.name}</span>
                ))}
            </div>
            
        
    );

}