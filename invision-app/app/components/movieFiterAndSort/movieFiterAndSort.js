import React from 'react';
import { MovieFilter } from '../movieFilter/movieFilter';
import {SortBy} from '../sortBy/sortBy'
import './movieFiterAndSort.scss'
import moviesData from '../../model/moviesData.json'
export class MovieFiterAndSort extends React.Component{
    constructor(props){
        super(props);

    }
   
render(){
    return(
        <div className="list-controls">
            <MovieFilter filter={this.props.filter}/>
            <SortBy sort={this.props.sort} sortByItems={this.props.sortByItems}/>
        </div>
    );
}
}
