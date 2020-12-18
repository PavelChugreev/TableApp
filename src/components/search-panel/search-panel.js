import React, { Component } from 'react';

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
            <div className="input-group mb-3">
                <input
                    type="text"
                    placeholder="Write here what you want to search"
                    className="form-control"
                    onChange={this.onUpdateSearch}
                />
                <button
                    type="submit"
                    placeholder="Write down your minds"
                    className="btn btn-secondary"
                    onClick={() => {
                        onUpdateSearchValue(inputSearchValue); 
                        searchRows(data, inputSearchValue)
                    }}
                >SEARCH
                </button>
            </div>
        );
    }
};