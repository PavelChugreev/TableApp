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
        const sorted = "sorted";
        const noSorted = "";
        this.setState({ up: { [index]: noSorted }, down: { [index]: sorted } })
    }

    render() {
        const {data, onSortUp, onSortDown} = this.props;
        const {up, down} = this.state;

        const headerItem = (title, selector,  ) => {
            return (
                <th scope="col">
                    <div className="d-flex">
                        <div className="col">{title}</div>
                        <div className="d-flex">
                            <span
                                className={`sort ${up[selector]}`}
                                onClick={() => { onSortUp(data, selector); this.changeSortStatusUp(selector) }}>
                                <i className="fa fa-sort-up"></i>
                            </span>
                            <span
                                className={`sort ${down[selector]}`}
                                onClick={() => { onSortDown(data, selector); this.changeSortStatusUpDown(selector) }}>
                                <i className="fa fa-sort-down"></i>
                            </span>
                        </div>
                    </div>
                </th>
            )
        }

        return (
            <tr>
                {headerItem('ID', "id")}
                {headerItem('Name', "firstName")}
                {headerItem('Surname', "lastName")}
                {headerItem('Email', "email")}
                {headerItem('Phone number', "phone")}
                <th><div className="col">Address</div></th>
                {headerItem('Description', "description")}
            </tr>
        )
    }
}