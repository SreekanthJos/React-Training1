import React from 'react';
import './sortBy.scss'
export class SortBy extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeInput(event) {
        //if (event.target.value === '1') {
            this.props.sort(event.target.value);
       // }
    }
    render() {
        return (
            <div className="sort-container">
                <span className="sort-header">SORT BY</span>

                <select className="sort-select" onChange={this.onChangeInput.bind(this)}>
                    {this.props.sortByItems.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
    
                </select>
            </div>
        );
    }
}