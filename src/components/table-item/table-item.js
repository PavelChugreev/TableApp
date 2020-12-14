import React, {Component} from 'react';
import "./table-item.css";

export default class TableItem extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {id, name, surname, email, tel, address, description} = this.props;
        
        return(
            // <tr className={classNames}>
            <>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{tel}</td>
                <td>{address}</td>
                <td>{description}</td>
            </>
        );
    }
}