import React, {Component} from 'react';

export default class TableItem extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {id, name, surname, email, tel, address, description} = this.props;
        
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
}