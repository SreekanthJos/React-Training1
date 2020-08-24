import React from 'react';
import './sortBy.scss'
export function SortBy(props){

    return(
        <div className="sort-container">
                <span className="sort-header">SORT BY</span>
                
                <select className="sort-select">
                    {props.sortItems.map(item => (
                        <option  key={item.id} value={item.id}>{item.name}</option>
                    ))}

                </select>

            </div>
    );
}
