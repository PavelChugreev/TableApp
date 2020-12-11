import React, { Component } from 'react';
import "./add-form.css";

export default class AddForm extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button
                type="button"
                className="btn btn-outline-secondary"
            >ADD</button>
        );
    }
};