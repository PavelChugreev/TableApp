import React, { Component } from 'react';
import "./search-panel.css";


export default class SearchPanel extends Component {

    render(){
        return (
            <input
                type="text"
                placeholder="Write down your minds"
                className="form-control new-post-label"
                // onChange={this.onValueChange}
                // value={this.state.text}
            />
        );
    }
};