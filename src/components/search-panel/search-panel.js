import React, { Component } from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputSearchValue: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const value = e.target.value;
        this.setState({inputSearchValue: value});
    }

    render(){
        const {data, searchRows, onUpdateSearchValue} = this.props;
        const {inputSearchValue } = this.state;

        return (
            <>
                <input
                    type="text"
                    placeholder="Write here what you want to search"
                    className="form-control new-post-label"
                    onChange={this.onUpdateSearch}
                />
                <button
                    type="submit"
                    placeholder="Write down your minds"
                    className="btn btn-info"
                    onClick={() => {
                        onUpdateSearchValue(inputSearchValue); 
                        searchRows(data, inputSearchValue)
                    }}
                >SEARCH
                </button>
            </>
        );
    }
};