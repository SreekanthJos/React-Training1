import React , { useCallback, useState } from "react";
import './addMovieButton.scss'
import { Search } from "../search";
import { AddEditMovie } from "../addEditMovie";
import { createMovie } from "../../store/actions";
import {connect, useDispatch } from "react-redux";

export  function AddMovieButton(props) {
    const [openState, setOpenState] = useState(false);
    const close = useCallback(() => setOpenState(false));
    const dispatch = useDispatch();
    const addMovie = (movie) => {
        dispatch(createMovie(movie));
    };
    return (
       
        <section className="addContianer">
            <div className="add__content">
                <div className="add-movie">
                    <input type="button" value="+ADD MOVIE" onClick={() => setOpenState(true)} className="button button__control" />
                    {openState && <AddEditMovie  onSubmit={addMovie} close={close} />}
                </div>
                <Search />
            </div>
        </section>
    );
}
// const mapDispatchToProps = {
//     createMovie

// };

//export default connect(null, mapDispatchToProps)(AddMovieButton);