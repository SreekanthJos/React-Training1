import React, { useState } from "react";
import './addMovieButton.scss'
import { Search } from "../search";
import { AddEditMovie } from "../addEditMovie";
import PropTypes from 'prop-types';

export function AddMovieButton(props) {
    const [isOpen, setOpenState] = useState(false);

    function close() {
        setOpenState(false);
    }

    return (
        <section className="addContianer">
            <div className="add__content">
                <div className="add-movie">
                    <input type="button" value="+ADD MOVIE" onClick={() => setOpenState(true)} className="button button__control" />
                    {isOpen && <AddEditMovie  onSubmit={props.createMovie}  close={close} />}
                </div>
                <Search />
            </div>
        </section>
    );
}
AddMovieButton.propTypes = {
    createMovie: PropTypes.func.isRequired,
   
  };
export default AddMovieButton