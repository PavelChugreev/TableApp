import React from 'react';
import "./table-item.css";

const TableItem = ({id, name, surname, email, tel, address, website}) => {
    
    return(
        <>
            <div className="item col-lg-0">{id}</div>
            <div className="item col-lg-2">{name}</div>
            <div className="item col-lg-1">{surname}</div>
            <div className="item col-lg-2">{email}</div>
            <div className="item col-lg-2">{tel}</div>
            <div className="item col-lg-2">{address}</div>
            <div className="item col-lg-2">{website}</div>
        </>
    );
}
export default TableItem;