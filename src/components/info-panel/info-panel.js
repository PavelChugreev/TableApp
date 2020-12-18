import React, { Component } from 'react';

export default class InfoPAnel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {info, showInfo, onCloseInfo} = this.props;
        const description = info.description[0].toUpperCase() + info.description.slice(1);

        let className = "hide";

        if(showInfo){
            className = "d-block";
        }

        return (
            <div className={`alert alert-dark  ${className}`} role="alert">
                <button 
                    type="button" 
                    className="close" 
                    onClick={onCloseInfo}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="alert-heading">{info.user}</h4>
                <div><b>Description:</b> 
                    <div>{description}</div>
                </div>
                <div><b>Address:</b> {info.address}</div>
                <div><b>City:</b> {info.city}</div>
                <div><b>State:</b> {info.state}</div>
                <div><b>Zip:</b> {info.zip}</div>
            </div>
        )
    }
};