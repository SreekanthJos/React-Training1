import React from "react";
import  './addMovie.scss'
import { Search } from "../search";

export function AddMovie(){
return(
    <section className="addContianer">
        <div className="add__content">
            <div className="add-movie">
                <input type="button" value="+ADD MOVIE" className="button button__control"/>
            </div>
            <Search />
        </div>
    </section>
);
}