import React, { Component } from 'react';
import "./table-header.css";


export default class TableHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            up: { id: "", firstName: "", lastName: "", email: "", phone: "", description: "" },
            down: { id: "", firstName: "", lastName: "", email: "", phone: "", description: "" }
        }

        this.changeSortStatusUp = this.changeSortStatusUp.bind(this);
        this.changeSortStatusUpDown = this.changeSortStatusUpDown.bind(this);

    }

    changeSortStatusUp(index) {
        const sorted = " sorted";
        const noSorted = "";
        this.setState({ up: { [index]: sorted }, down: { [index]: noSorted } })
    }

    changeSortStatusUpDown(index) {
        const sorted = " sorted";
        const noSorted = "";
        this.setState({ up: { [index]: noSorted }, down: { [index]: sorted } })

    }

    render() {
        const { data, onSortUp, onSortDown, sorted } = this.props;
        const { up, down } = this.state;

        // const arrows = (keyName) => {
        //     return (
        //         <div className="">
        //             <span
        //                 className="sort"
        //                 onClick={() => onSortUp(data, `${keyName}`)}
        //                 onClick={this.changeSortClass}
        //             >
        //                 <i className="fa fa-sort-up"></i>
        //             </span>
        //             <span
        //                 onClick={() => onSortDown(data, `${keyName}`)}
        //                 onClick={this.changeSortClass}
        //             >
        //                 <i className="fa fa-sort-down"></i>
        //             </span>
        //         </div>
        //     )
        // }

        return (
            <tr>
                <td>id
                    <span
                        className={`sort ${up.id}`}
                        onClick={() => { onSortUp(data, `id`); this.changeSortStatusUp(`id`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.id}`}
                        onClick={() => { onSortDown(data, `id`); this.changeSortStatusUpDown(`id`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
                <td>name
                    <span
                        className={`sort ${up.firstName}`}
                        onClick={() => { onSortUp(data, `firstName`); this.changeSortStatusUp(`firstName`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.firstName}`}
                        onClick={() => { onSortDown(data, `firstName`); this.changeSortStatusUpDown(`firstName`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
                <td>surname
                    <span
                        className={`sort ${up.lastName}`}
                        onClick={() => { onSortUp(data, `lastName`); this.changeSortStatusUp(`lastName`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.lastName}`}
                        onClick={() => { onSortDown(data, `lastName`); this.changeSortStatusUpDown(`lastName`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
                <td>email
                    <span
                        className={`sort ${up.email}`}
                        onClick={() => { onSortUp(data, `email`); this.changeSortStatusUp(`email`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.email}`}
                        onClick={() => { onSortDown(data, `email`); this.changeSortStatusUpDown(`email`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
                <td>tel
                    <span
                        className={`sort ${up.phone}`}
                        onClick={() => { onSortUp(data, `phone`); this.changeSortStatusUp(`phone`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.phone}`}
                        onClick={() => { onSortDown(data, `phone`); this.changeSortStatusUpDown(`phone`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
                <td>address</td>
                <td>description
                    <span
                        className={`sort ${up.description}`}
                        onClick={() => { onSortUp(data, `description`); this.changeSortStatusUp(`description`) }}>
                        <i className="fa fa-sort-up"></i>
                    </span>
                    <span
                        className={`sort ${down.description}`}
                        onClick={() => { onSortDown(data, `description`); this.changeSortStatusUpDown(`description`) }}>
                        <i className="fa fa-sort-down"></i>
                    </span>
                </td>
            </tr>
            // <tr>
            //     <td>id {arrows("id")}</td>
            //     <td>name {arrows("firstName")}</td>
            //     <td>surname {arrows("lastName")}</td>
            //     <td>email {arrows("email")}</td>
            //     <td>tel {arrows("phone")}</td>
            //     <td>address</td>
            //     <td>description {arrows("description")}</td>
            // </tr>
        )
    }
}