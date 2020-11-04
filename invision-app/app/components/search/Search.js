import React from 'react';
import './search.scss';
import '../common.scss';
import PropTypes from 'prop-types';

export function Search({ searchState, setSearchState, fetchMovies, history }) {
    const searchMovie = history.location.pathname.split('/')[2];
    // if (searchMovie) {
    //     setSearchState(searchMovie);
    //    // fetchMovies();
    // }
    function handleChange(e) {
        
        setSearchState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push({
            pathname: `/search/${searchState}`,
            referrer: `/search/${searchState}`
        });
        fetchMovies();
    }

    // const dispatch = useDispatch();
    // function onSearch() {
    //     debugger;
    //     dispatch(search(document.getElementById("txtSearch").value));
    // }
    return (
      
            <div className="search">
                <h2 className="search__header">FIND YOUR MOVIE</h2><form onSubmit={handleSubmit}>
                <div className="search__controls">
                
                    <input type="text" id="txtSearch" className="search__input" onChange={handleChange} value={searchState} />
                    <input type="submit" value="SEARCH" className="button button__primary" />
                   
                </div> </form>
            </div>
        
    );
}

Search.propTypes = {
    searchState: PropTypes.string.isRequired,
    setSearchState: PropTypes.func.isRequired,
    fetchMovies: PropTypes.func.isRequired
};

export default Search;