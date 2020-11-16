import React from 'react';
import './search.scss';
import '../common.scss';
import PropTypes from 'prop-types';
import { useDispatch, Provider } from 'react-redux';
import { getMovies } from '../../store/actions'
export function Search(props) {
    function handleChange(e) {
        props.setSearchState(e.target.value);
    }
    const dispatch = useDispatch();
    const fetchMovies = () => {
        dispatch(getMovies(props.orderState, props.genreState, props.searchState));
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.history.push({
            pathname: `/search/${props.searchState}`,
            referrer: `/search/${props.searchState}`
        });
        fetchMovies();
    }

    return (
        <div className="search">
            <h2 className="search__header">FIND YOUR MOVIE</h2><form onSubmit={handleSubmit}>
                <div className="search__controls">
                    <input type="text" id="txtSearch" className="search__input" onChange={handleChange} value={props.searchState} />
                    <input type="submit" value="SEARCH" className="button button__primary" />
                </div> </form>
        </div>

    );
}

export default Search;