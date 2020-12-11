import React, {Component} from 'react';
import "./table-item.css";

export default class TableItem extends Component {

    render(){
        return(
            // <tr className={classNames}>
            <div>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>surname</td>
                <td>email</td>
                <td>tel</td>
            </tr>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>surname</td>
                <td>email</td>
                <td>tel</td>
            </tr>
            </div>

        );
    }
}