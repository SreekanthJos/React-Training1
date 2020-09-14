import React from "react";
import './addMovieButton.scss'
import { Search } from "../search";
import { AddEditMovie } from "../addEditMovie";

export class AddMovieButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.close = this.close.bind(this);
    }
    close() {
        this.setState({
            isOpen: false
        });
    }
   
    render() {
        return (
            <section className="addContianer">
                <div className="add__content">
                    <div className="add-movie">
                        <input type="button" value="+ADD MOVIE" onClick={() => this.setState({ isOpen: true })} className="button button__control" />
                        {this.state.isOpen && <AddEditMovie createUpdateMovie={this.props.  createUpdateMovie} close={this.close} isEdit={false}/>}
                    </div>
                    <Search />
                </div>
            </section>
        );
    }
}
