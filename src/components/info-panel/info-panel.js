import React from 'react';

const InfoPAnel = ({info, showInfo, onCloseInfo}) => {
    // const website = info.website[0].toUpperCase() + info.website.slice(1);

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
            <div><b>Website:</b> 
                <div>{info.website}</div>
            </div>
            <div><b>Address:</b> {info.address}</div>
            <div><b>City:</b> {info.city}</div>
            <div><b>State:</b> {info.suite}</div>
            <div><b>Zip:</b> {info.zipcode}</div>
        </div>
    )
};
export default InfoPAnel;