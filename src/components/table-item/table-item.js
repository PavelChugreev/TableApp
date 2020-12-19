import React from 'react';

const TableItem = ({id, name, surname, email, tel, address, description}) => {
    
    return(
        <>
            <th><div className="col">{id}</div></th>
            <td><div className="col">{name}</div></td>
            <td><div className="col">{surname}</div></td>
            <td><div className="col">{email}</div></td>
            <td><div className="col">{tel}</div></td>
            <td><div className="col">{address}</div></td>
            <td><div className="col">{description}</div></td>
        </>
    );
}
export default TableItem;